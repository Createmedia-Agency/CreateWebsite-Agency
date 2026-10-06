import os
import urllib.request
from PIL import Image, ImageEnhance, ImageOps

images = {
    "brand-visual-design": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop", 
    "branded-content": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop", 
    "campaign-production": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1600&auto=format&fit=crop", 
    "commercial-production": "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1600&auto=format&fit=crop", 
    "content-marketing": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop", 
    "creative-direction": "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1600&auto=format&fit=crop", 
    "performance-marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop", 
    "post-production": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop", 
    "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop", 
    "visual-storytelling": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop", 
    "website-development": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop" 
}

out_dir = "public/images/services"
os.makedirs(out_dir, exist_ok=True)

for slug, url in images.items():
    print(f"Downloading {slug}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    temp_path = f"{out_dir}/{slug}.jpg"
    with urllib.request.urlopen(req) as response, open(temp_path, 'wb') as out_file:
        out_file.write(response.read())
        
    print(f"Converting {slug} to WebP and applying B&W cinematic filter...")
    img = Image.open(temp_path).convert('RGB')
    
    # Apply cinematic B&W filter (grayscale + high contrast)
    img = ImageOps.grayscale(img)
    img = ImageOps.autocontrast(img, cutoff=2)
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.2)
    
    # Save as WebP
    webp_path = f"{out_dir}/{slug}.webp"
    img.save(webp_path, 'webp', quality=85)
    
    # Clean up temp JPG
    os.remove(temp_path)
    
print("All images processed successfully!")
