const https = require('https');
const { load } = require('cheerio');

const url = 'https://www.alphacaps.in/shuttering-plywood.html';

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to fetch page:', res.statusCode);
    res.resume();
    return;
  }
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const $ = load(data);
    const result = [];
    $('div.p7.j.c1.m13').each((_, section) => {
      const $section = $(section);
      const name = $section.find('h2, h3').first().text().trim();
      if (!name) return;
      const priceText = $section.find('.p_glp .fnt12_p').first().text().trim();
      const price = priceText ? `Approx. Rs ${priceText}` : null;
      const description = $section
        .find('.plr')
        .contents()
        .filter((__, node) => node.type === 'text')
        .map((__, node) => $(node).text().replace(/\s+/g, ' ').trim())
        .get()
        .filter(Boolean)
        .join(' ');
      const details = [];
      $section.find('div.fram table tr').each((__, row) => {
        const $cells = $(row).find('td');
        if ($cells.length === 2) {
          const label = $cells.eq(0).text().trim();
          const value = $cells.eq(1).text().trim();
          if (label && value) {
            details.push({ label, value });
          }
        }
      });
      const gallerySet = new Set();
      $section.find('img').each((__, img) => {
        const $img = $(img);
        const dataMulti = $img.attr('data-multiimg');
        if (dataMulti) {
          dataMulti.split(',').forEach((entry) => {
            const trimmed = entry.trim();
            if (trimmed) {
              gallerySet.add(trimmed);
            }
          });
        }
        const dataBimg = $img.attr('data-bimg');
        if (dataBimg) {
          gallerySet.add(dataBimg.trim());
        }
        const dataimg = $img.attr('dataimg');
        if (dataimg) {
          gallerySet.add(dataimg.trim());
        }
        const src = $img.attr('src');
        if (src && !/zero\.gif$/i.test(src)) {
          gallerySet.add(src.trim());
        }
      });
      const gallery = Array.from(gallerySet);
      const image = gallery.find((url) => /250x250|125x125|500x500|1000x1000/.test(url)) || gallery[0] || null;
      const hiRes = gallery.find((url) => /1000x1000|500x500/.test(url)) || image;
      result.push({ name, price, description, details, gallery, image, hiRes });
    });
    console.log(JSON.stringify(result, null, 2));
  });
}).on('error', (err) => {
  console.error('Request error', err);
});
