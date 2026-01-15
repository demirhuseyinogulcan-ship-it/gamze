const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const fixOrientation = async () => {
  const files = ['0.jpg', 'hakkimda.jpg'];
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const tempPath = path.join(imagesDir, `temp_${file}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${file}`);
      continue;
    }
    
    console.log(`Fixing orientation: ${file}`);
    
    try {
      // Read image and auto-rotate based on EXIF, then save
      await sharp(filePath)
        .rotate() // Auto-rotate based on EXIF orientation
        .jpeg({ quality: 85, progressive: true })
        .toFile(tempPath);
      
      // Replace original with fixed version
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      console.log(`  ✓ ${file} orientation fixed`);
    } catch (err) {
      console.error(`  ✗ Error processing ${file}:`, err.message);
      // Clean up temp file if exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
  
  console.log('\n✓ Orientation fix complete!');
};

fixOrientation();
