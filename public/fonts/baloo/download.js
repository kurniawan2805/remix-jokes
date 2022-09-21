const https = require('https');
const fs = require('fs');

const FontUrl = 'https://remix.run/jokes-tutorial/baloo/baloo.woff';
const FontLic = 'https://remix.run/jokes-tutorial/baloo/License.txt';

https.get(FontUrl, (res) => {
  const path = 'baloo.woff';
  const writeStream = fs.createWriteStream(path);

  res.pipe(writeStream);

  writeStream.on('finish', () => {
    writeStream.close();
    console.log('Download Completed');
  });
});
