const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { name: 'wellness-retreat.jpg', url: 'https://images.unsplash.com/photo-1600673645627-1c47394132ac?w=800&auto=format&fit=crop' },
  { name: 'yoga-session.jpg', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop' },
  { name: 'spa-treatment.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop' },
  { name: 'meditation.jpg', url: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop' },
  { name: 'healthy-food.jpg', url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop' },
  { name: 'outdoor-activity.jpg', url: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&auto=format&fit=crop' },
];

const downloadDir = path.join(__dirname, '../public/images/gallery');

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Download each image
images.forEach((image) => {
  const filePath = path.join(downloadDir, image.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(image.url, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${image.name}:`, err.message);
  });
});

console.log('Downloading images...');
