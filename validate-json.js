const fs = require('fs');
const files = ['index.html', 'product.html', 'pricing.html', 'contact.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (match) {
    try {
      JSON.parse(match[1]);
      console.log(`${f}: Valid JSON-LD structure.`);
    } catch (e) {
      console.error(`${f} JSON Error:`, e);
    }
  } else {
    console.log(`${f}: No JSON-LD found`);
  }
});
