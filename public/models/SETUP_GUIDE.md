# 3D Models Setup Guide

## ✅ Folder Structure Created

The following folders have been created for your 3D models:

```
public/models/
  └── vehicles/
      ├── tipper/
      │   └── textures/
      └── excavator/
          └── textures/
```

## 📦 Next Steps

### 1. Extract Your RAR Files

You have two RAR files:
- `formats.rar` - Contains 3D model files (.glb or .gltf)
- `textures.rar` - Contains texture images (.jpg, .png, etc.)

### 2. Extract and Place Files

#### For Tipper Truck:
1. Extract `formats.rar` and find the tipper truck model (`.glb` or `.gltf`)
2. Extract `textures.rar` and find tipper truck textures
3. Copy model file to: `public/models/vehicles/tipper/`
4. Copy texture files to: `public/models/vehicles/tipper/textures/`

#### For Excavator:
1. Extract `formats.rar` and find the excavator model (`.glb` or `.gltf`)
2. Extract `textures.rar` and find excavator textures
3. Copy model file to: `public/models/vehicles/excavator/`
4. Copy texture files to: `public/models/vehicles/excavator/textures/`

### 3. Update File Paths

After placing your files, open `src/components/Hero3DVehicle.tsx` and update these lines:

```typescript
// Around line 134-135
const tipperPath = '/models/vehicles/tipper/YOUR_FILENAME.glb';  // Change YOUR_FILENAME
const excavatorPath = '/models/vehicles/excavator/YOUR_FILENAME.glb';  // Change YOUR_FILENAME
```

Replace `YOUR_FILENAME` with your actual file name (e.g., `tipper-truck.glb`, `excavator-model.glb`)

### 4. Test Your Models

1. Start your development server: `npm run dev`
2. Open your browser and navigate to the hero section
3. Check the browser console for any errors
4. The 3D model should appear on the right side of the hero section

## 🔧 Configuration

### Current Settings

- **Model Type**: Set to `tipper` (you can change to `excavator` or `both`)
- **Opacity**: 20% on mobile, 30% on desktop
- **Position**: Right side of hero section
- **Animation**: Auto-rotating and floating

### Change Model Display

In `src/components/Hero.tsx`, line ~74, you can change:

```typescript
<Hero3DVehicle modelType="tipper" />  // Options: "tipper", "excavator", or "both"
```

## 📝 File Format Notes

### GLB Files (Recommended)
- Binary format, textures embedded
- Single file, easier to manage
- Just copy the `.glb` file to the folder

### GLTF Files
- JSON format, textures separate
- Make sure `.gltf` file and textures are in correct folders
- Check texture paths in the `.gltf` file match your folder structure

## ⚠️ Troubleshooting

### Model Not Showing?
1. **Check file path**: Make sure the path in `Hero3DVehicle.tsx` matches your file name exactly
2. **Check file location**: Ensure file is in `public/models/vehicles/tipper/` (or excavator)
3. **Check browser console**: Look for 404 errors or loading errors
4. **Check file format**: Ensure it's `.glb` or `.gltf` format

### Textures Not Showing?
1. **For GLB**: Textures should be embedded, no separate handling needed
2. **For GLTF**: 
   - Ensure texture files are in the `textures/` subfolder
   - Check texture paths in the `.gltf` file are relative (e.g., `textures/diffuse.jpg`)

### Model Too Large/Small?
Open `src/components/Hero3DVehicle.tsx` and adjust line with:
```typescript
const scale = 3 / maxDim;  // Increase 3 to make smaller, decrease to make larger
```

### Performance Issues?
- Optimize your 3D model file size (keep under 5MB)
- Reduce texture resolution if needed
- Consider using `.glb` format instead of `.gltf` (more efficient)

## 🎨 Customization

### Change Animation Speed

In `Hero3DVehicle.tsx`, modify:
```typescript
groupRef.current.rotation.y += delta * 0.2;  // Change 0.2 to adjust rotation speed
```

### Change Position

In `Hero3DVehicle.tsx`, modify the div className:
```typescript
className="absolute right-0 top-1/2..."  // Adjust right-0, top-1/2 as needed
```

### Change Opacity

In `Hero3DVehicle.tsx`, modify:
```typescript
opacity-20 md:opacity-30  // Change these values (0-100)
```

## 📚 Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Three.js GLTF Loader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)

## ✅ Checklist

- [ ] Folders created ✓
- [ ] Packages installed ✓
- [ ] Component created ✓
- [ ] Hero section updated ✓
- [ ] Extract RAR files
- [ ] Place model files in correct folders
- [ ] Update file paths in Hero3DVehicle.tsx
- [ ] Test models load correctly
- [ ] Adjust size/position if needed

