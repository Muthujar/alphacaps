# 3D Models Directory

This directory contains 3D models for the hero section animations.

## 📁 Folder Structure

```
public/models/
  └── vehicles/
      ├── tipper/
      │   ├── tipper.glb (or tipper.gltf)
      │   └── textures/
      │       ├── tipper_body.jpg
      │       ├── tipper_wheels.jpg
      │       └── ...
      └── excavator/
          ├── excavator.glb (or excavator.gltf)
          └── textures/
              ├── excavator_body.jpg
              └── ...
```

## 📦 How to Add Your 3D Models

### Step 1: Extract Your RAR Files

1. Extract `formats.rar` → Look for `.glb` or `.gltf` files
2. Extract `textures.rar` → You'll get texture images (`.jpg`, `.png`, etc.)

### Step 2: Place Your Files

#### For Tipper Truck:
- Copy the model file (`.glb` or `.gltf`) to: `public/models/vehicles/tipper/`
- Copy texture files to: `public/models/vehicles/tipper/textures/`

#### For Excavator:
- Copy the model file (`.glb` or `.gltf`) to: `public/models/vehicles/excavator/`
- Copy texture files to: `public/models/vehicles/excavator/textures/`

### Step 3: Update File Names

After placing your files, update the file paths in `src/components/Hero3DVehicle.tsx`:

```typescript
const tipperPath = '/models/vehicles/tipper/YOUR_FILENAME.glb';
const excavatorPath = '/models/vehicles/excavator/YOUR_FILENAME.glb';
```

## 📝 Supported Formats

- **GLB** (recommended) - Binary format, textures embedded
- **GLTF** - JSON format, textures separate (keep in `textures/` folder)

## ⚠️ Important Notes

1. **GLB files**: Textures are usually embedded, no separate texture handling needed
2. **GLTF files**: Make sure texture paths in the `.gltf` file match your folder structure
3. **File naming**: Use lowercase names with hyphens (e.g., `tipper-truck.glb`)
4. **File size**: Keep models under 5MB for best performance

## 🔧 Troubleshooting

### Model not loading?
- Check the file path matches exactly (case-sensitive)
- Ensure file is in the correct folder
- Check browser console for errors

### Textures not showing?
- For GLTF: Check texture file paths in the `.gltf` file
- Ensure texture files are in the `textures/` subfolder
- Verify texture file formats are supported (.jpg, .png)

### Model too large/small?
- Adjust the `scale` value in `Hero3DVehicle.tsx` (line with `const scale = 3 / maxDim`)

## 📚 Resources

- [Three.js GLTF Loader Docs](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)

