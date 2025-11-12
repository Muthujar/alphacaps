const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");
const http = require("node:http");

const WORKSPACE_ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(WORKSPACE_ROOT, "src", "data", "scrapedProducts.ts");
const TARGET_ROOT = path.join(WORKSPACE_ROOT, "public", "images", "scraped");
const MANIFEST_PATH = path.join(WORKSPACE_ROOT, "src", "data", "localImageManifest.json");

const ensureDirectory = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const sanitizeUrl = (url) => url.replace(/^https?:\/\//i, "");

const toLocalFilePath = (url) => {
  const sanitized = sanitizeUrl(url);
  return path.join(TARGET_ROOT, sanitized);
};

const toLocalRelativePath = (url) => {
  const sanitized = sanitizeUrl(url).replace(/\\/g, "/");
  return `/images/scraped/${sanitized}`;
};

const downloadFile = (sourceUrl, requestedUrl = sourceUrl, attempt = 0) =>
  new Promise((resolve, reject) => {
    const localPath = toLocalFilePath(sourceUrl);
    const localRelative = toLocalRelativePath(sourceUrl);

    if (fs.existsSync(localPath)) {
      resolve({ url: sourceUrl, status: "skipped", localPath: localRelative });
      return;
    }

    ensureDirectory(localPath);

    const client = requestedUrl.startsWith("https://") ? https : http;

    const request = client.get(
      requestedUrl,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://www.alphacaps.in/",
        },
      },
      (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          downloadFile(sourceUrl, response.headers.location, attempt + 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (
          response.statusCode === 404 &&
          attempt === 0 &&
          requestedUrl.includes("img.youtube.com") &&
          requestedUrl.endsWith("/sddefault.jpg")
        ) {
          const fallbackUrl = requestedUrl.replace("/sddefault.jpg", "/hqdefault.jpg");
          console.warn(`Retrying ${requestedUrl} as ${fallbackUrl}`);
          downloadFile(sourceUrl, fallbackUrl, attempt + 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download ${requestedUrl} - status ${response.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(localPath);
        response.pipe(fileStream);
        fileStream.on("finish", () =>
          fileStream.close(() => resolve({ url: sourceUrl, status: "downloaded", localPath: localRelative }))
        );
        fileStream.on("error", reject);
      }
    );

    request.on("error", reject);
  });

const isImageUrl = (url) => {
  try {
    const parsed = new URL(url);
    return /\.(jpg|jpeg|png|webp|gif)$/i.test(parsed.pathname);
  } catch (error) {
    return false;
  }
};

const main = async () => {
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`Data file not found at ${DATA_FILE}`);
    process.exit(1);
  }

  const fileContents = fs.readFileSync(DATA_FILE, "utf8");
  const urlMatches = fileContents.match(/https?:\/\/[^\s"'`]+/g) ?? [];

  const imageUrls = Array.from(new Set(urlMatches.filter(isImageUrl)));

  if (!fs.existsSync(TARGET_ROOT)) {
    fs.mkdirSync(TARGET_ROOT, { recursive: true });
  }

  const summary = {
    downloaded: 0,
    skipped: 0,
    failed: 0,
    failures: [],
  };
  const manifestEntries = new Map();

  for (const url of imageUrls) {
    try {
      const result = await downloadFile(url);
      if (result.localPath) {
        manifestEntries.set(url, result.localPath);
      }
      if (result.status === "downloaded") {
        summary.downloaded += 1;
        console.log(`Downloaded: ${url}`);
      } else {
        summary.skipped += 1;
        console.log(`Skipped (already exists): ${url}`);
      }
    } catch (error) {
      summary.failed += 1;
      summary.failures.push({ url, error: error.message });
      console.error(`Failed: ${url} -> ${error.message}`);
    }
  }

  console.log("Download summary:", summary);

  const manifest = {
    generatedAt: new Date().toISOString(),
    images: Object.fromEntries(manifestEntries.entries()),
  };

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`Wrote manifest with ${manifestEntries.size} entries to ${MANIFEST_PATH}`);

  if (summary.failed > 0) {
    process.exitCode = 1;
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

