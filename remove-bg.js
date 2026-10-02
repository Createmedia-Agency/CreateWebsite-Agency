const { Jimp } = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('C:\\Users\\user\\.gemini\\antigravity\\brain\\cc5bc8fd-bff5-4433-88c9-b88078bcc3b4\\.user_uploaded\\media_1790931384518.png');
    
    // Set black pixels to transparent
    const threshold = 15; // To catch almost-black pixels resulting from compression
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red <= threshold && green <= threshold && blue <= threshold) {
        this.bitmap.data[idx + 3] = 0; // Set Alpha to 0
      }
    });

    image.write('public/brand-logo.png');
    console.log('Background removed successfully!');
  } catch (err) {
    console.error('Error removing background:', err);
  }
}

removeBackground();
