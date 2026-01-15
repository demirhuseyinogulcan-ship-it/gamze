const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure icons directory exists
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Simple gold color without gradient for better compatibility
const svgFavicon = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0c0c0c" rx="64"/>
  <text x="256" y="380" font-family="Georgia, Times, serif" font-size="380" font-weight="normal" font-style="italic" fill="#d4af37" text-anchor="middle">G</text>
</svg>`;

async function generateFavicons() {
  try {
    const svgBuffer = Buffer.from(svgFavicon);
    
    await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(iconsDir, 'favicon-16x16.png'));
    console.log('Created: favicon-16x16.png');
    
    await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(iconsDir, 'favicon-32x32.png'));
    console.log('Created: favicon-32x32.png');
    
    await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(iconsDir, 'icon-32.png'));
    console.log('Created: icon-32.png');
    
    await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(iconsDir, 'apple-touch-icon.png'));
    console.log('Created: apple-touch-icon.png');
    
    await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(iconsDir, 'icon-192.png'));
    console.log('Created: icon-192.png');
    
    await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(iconsDir, 'icon-512.png'));
    console.log('Created: icon-512.png');
    
    // favicon.ico in public root
    await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(__dirname, 'public', 'favicon.ico'));
    console.log('Created: favicon.ico');
    
    console.log('\nAll favicons created successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
  }
}

generateFavicons();
