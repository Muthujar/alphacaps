# Image Setup Guide
## How to Add Real Construction Material Images

---

## 🎯 Current Setup

I've added **animated background images** in the Hero section and **real product images** in the About/Products section. Currently using free Unsplash images as placeholders.

---

## 📸 Option 1: Use Your Own Images (Recommended)

### Step 1: Create Images Folder
```bash
mkdir -p public/images/products
mkdir -p public/images/hero
```

### Step 2: Add Your Images
Place your images in these folders:
- `public/images/hero/` - Hero background images
- `public/images/products/` - Product images

### Step 3: Update Hero.tsx
Replace the Unsplash URLs with your local images:

```tsx
// In Hero.tsx, replace:
src="https://images.unsplash.com/..."
// With:
src="/images/hero/your-image-1.jpg"
```

### Step 4: Update About.tsx (Products)
Replace product image URLs:

```tsx
// In About.tsx, replace:
image: "https://images.unsplash.com/..."
// With:
image: "/images/products/tmt-bars.jpg"
```

**Image Requirements:**
- **Hero Backgrounds:** 1920x1080px or larger, landscape orientation
- **Product Images:** 600x400px minimum, square or landscape
- **Format:** JPG or WebP (WebP is better for performance)

---

## 📸 Option 2: Use Unsplash (Free Stock Photos)

The current setup uses Unsplash. You can change the URLs to different construction material images:

### Good Unsplash Search Terms:
- "construction materials"
- "building materials"
- "steel bars"
- "cement bags"
- "concrete blocks"
- "bricks"
- "construction site"

### Example URLs:
```
https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80
https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80
https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80
```

---

## 🎬 Hero Background Animation

The Hero section has a **smooth panning animation** that moves construction material images from right to left. This creates a professional, dynamic effect.

**Animation Settings:**
- Duration: 30 seconds (smooth, not too fast)
- Direction: Right to left (pan right)
- Loop: Infinite seamless loop
- Images: 3 overlapping construction material images

**To Customize Animation Speed:**
Edit `src/app/globals.css`:
```css
.animate-pan-right {
  animation: panRight 30s linear infinite; /* Change 30s to adjust speed */
}
```

---

## 🖼️ Product Images

Each product card now has:
- **Real image** (480px height)
- **Hover zoom effect** (scale 1.1x on hover)
- **Gradient overlay** for better text readability
- **Responsive sizing** (adapts to screen size)

**Product Image Mapping:**
1. TMT Bars → Steel/construction materials
2. AAC Blocks → Building blocks
3. Construction Cement → Cement bags
4. Concrete Blocks → Concrete materials
5. Paver Blocks → Paving materials
6. Clay & Ash Bricks → Bricks
7. Ready Mix Concrete → Concrete truck/site
8. Construction Materials → Various materials

---

## 📝 Recommended Image Sources

### Free Stock Photos:
1. **Unsplash** (currently used) - https://unsplash.com
2. **Pexels** - https://pexels.com
3. **Pixabay** - https://pixabay.com

### Paid Stock Photos:
1. **Shutterstock** - https://shutterstock.com
2. **Getty Images** - https://gettyimages.com
3. **Adobe Stock** - https://stock.adobe.com

### Your Own Photos:
- Take photos of your actual materials
- Use professional photography
- Ensure good lighting
- Remove backgrounds if needed

---

## 🎨 Image Optimization Tips

### For Best Performance:
1. **Use WebP format** (50% smaller than JPG)
2. **Compress images** before uploading
3. **Use appropriate sizes:**
   - Hero: 1920x1080px
   - Products: 600x400px
4. **Next.js automatically optimizes** images via `<Image>` component

### Tools for Optimization:
- **TinyPNG** - https://tinypng.com (compress images)
- **Squoosh** - https://squoosh.app (convert to WebP)
- **ImageOptim** - Mac app for optimization

---

## 🔄 Quick Update Steps

### To Replace Hero Background:
1. Add image to `public/images/hero/`
2. Update `Hero.tsx` line 19, 27, 35, etc.
3. Replace URL with `/images/hero/your-image.jpg`

### To Replace Product Images:
1. Add images to `public/images/products/`
2. Update `About.tsx` product array
3. Change `image` property to local path

---

## ✅ Current Status

✅ **Hero:** Animated background with construction material images  
✅ **Products:** Real images with hover effects  
✅ **Animation:** Smooth panning effect  
✅ **Responsive:** Works on all devices  
✅ **Optimized:** Next.js Image component for performance  

---

## 🚀 Next Steps

1. **Replace placeholder images** with your actual product photos
2. **Adjust animation speed** if needed (in globals.css)
3. **Test on mobile** to ensure images load properly
4. **Optimize images** before uploading (use TinyPNG or similar)

---

**Need help?** The images are currently working with Unsplash. Just replace the URLs with your own images when ready!

