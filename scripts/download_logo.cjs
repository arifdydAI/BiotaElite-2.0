const fs = require('fs');
const path = require('path');

async function download() {
  const fileId = '1XCr5jZFyqhJcDwL0sQCe36j4ictMp44t';
  const urls = [
    `https://drive.usercontent.google.com/download?id=${fileId}&export=download`,
    `https://drive.google.com/uc?export=download&id=${fileId}`,
    `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
  ];

  console.log('Attempting to download logo from Google Drive...');
  
  for (const url of urls) {
    try {
      console.log('Fetching:', url);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      
      const contentType = res.headers.get('content-type') || '';
      console.log('Status:', res.status, 'Content-Type:', contentType);

      if (contentType.startsWith('image/')) {
        const buffer = Buffer.from(await res.arrayBuffer());
        const outPath = path.resolve(__dirname, 'raw_logo.png');
        fs.writeFileSync(outPath, buffer);
        console.log(`✓ Downloaded image successfully! Saved to ${outPath} (${buffer.length} bytes)`);
        return;
      } else {
        const text = await res.text();
        console.log('Received HTML or non-image response, length:', text.length);
        // Check if there is a direct download link in the HTML
        const match = text.match(/href="(\/download\?[^"]+)"/) || text.match(/"(https:\/\/[^"]*googleusercontent\.com\/[^"]+)"/);
        if (match) {
          const directUrl = match[1].startsWith('/') ? 'https://drive.usercontent.google.com' + match[1] : match[1];
          console.log('Found direct URL in HTML:', directUrl);
          const res2 = await fetch(directUrl);
          const buf2 = Buffer.from(await res2.arrayBuffer());
          const outPath = path.resolve(__dirname, 'raw_logo.png');
          fs.writeFileSync(outPath, buf2);
          console.log(`✓ Downloaded image via direct link! (${buf2.length} bytes)`);
          return;
        }
      }
    } catch (err) {
      console.error('Error fetching', url, err.message);
    }
  }
}

download();
