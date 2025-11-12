const https = require('https');
const { load } = require('cheerio');

const url = 'https://www.alphacaps.in/ash-bricks.html';

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to fetch page:', res.statusCode);
    res.resume();
    return;
  }
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const $ = load(data);
    const result = [];

    $('div.p7.j.c1.m13').each((_, section) => {
      const $section = $(section);
      const name = $section.find('h2, h3').first().text().trim();
      if (!name) return;

      const priceText = $section.find('.p_glp .fnt12_p').first().text().trim();
      const price = priceText ? `Approx. Rs ${priceText}` : null;

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

      const description = $section
        .find('.plr')
        .clone()
        .children('div, table')
        .remove()
        .end()
        .text()
        .replace(/\s+/g, ' ')
        .trim();

      const gallerySet = new Set();
      $section.find('img').each((__, img) => {
        const $img = $(img);
        const attrs = ['data-multiimg', 'data-bimg', 'dataimg', 'src'];
        attrs.forEach((attr) => {
          const val = $img.attr(attr);
          if (val) {
            val.split(',').forEach((part) => {
              const maybe = part.trim();
              if (maybe && !/zero\.gif$/i.test(maybe)) {
                gallerySet.add(maybe);
              }
            });
          }
        });
      });

      const gallery = Array.from(gallerySet);
      const image = gallery.find((url) => /250x250|125x125|500x500|1000x1000/.test(url)) || gallery[0] || null;
      const hiRes = gallery.find((url) => /1000x1000|500x500/.test(url)) || image;

      result.push({ name, price, details, description, gallery, image, hiRes });
    });

    console.log(JSON.stringify(result, null, 2));
  });
}).on('error', (err) => {
  console.error('Request error', err);
});
