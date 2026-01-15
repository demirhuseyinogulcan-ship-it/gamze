const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImages = async () => {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = fs.statSync(inputPath);
    
    // Skip directories and non-image files
    if (stat.isDirectory()) continue;
    
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const outputPath = path.join(outputDir, file.toLowerCase().replace('.jpeg', '.jpg'));
      
      console.log(`Optimizing: ${file}`);
      
      try {
        await sharp(inputPath)
          .resize(1920, 1080, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .jpeg({ 
            quality: 80,
            progressive: true 
          })
          .toFile(outputPath);
        
        const originalSize = stat.size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        
        console.log(`  ✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% saved)`);
      } catch (err) {
        console.error(`  ✗ Error processing ${file}:`, err.message);
      }
    } else if (ext === '.mp4') {
      console.log(`  ⊘ Skipping video: ${file} (use FFmpeg for video compression)`);
    }
  }
  
  console.log('\n✓ Optimization complete!');
  console.log(`Optimized images are in: ${outputDir}`);
  console.log('\nTo use optimized images, replace the originals or update image paths.');
};

optimizeImages();
