'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader, MTLLoader } from 'three-stdlib';
import * as THREE from 'three';
import * as React from 'react';

// Load and animate Mini Excavator for Header
function MiniExcavatorModel({ objUrl, mtlUrl }: { objUrl: string, mtlUrl: string }) {
  const materials = useLoader(MTLLoader, mtlUrl);
  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const groupRef = React.useRef<THREE.Group>(null);

  React.useEffect(() => {
    // Traverse and fix materials
    obj.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        
        if (material) {
          material.transparent = false;
          material.opacity = 1;
          
          const meshName = (mesh.name || '').toLowerCase();
          if (meshName.includes('track') || meshName.includes('tire') || meshName.includes('wheel')) {
            material.color?.set('#111111');
          } else {
            material.color?.set('#ff6b35');
          }
        }
      }
    });

    // Scale model properly
    const box = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const targetHeight = 4;
    const scale = targetHeight / size.y;
    
    obj.scale.multiplyScalar(scale);
    obj.position.sub(center.multiplyScalar(scale));
    obj.position.set(0, 0, 0);
  }, [obj]);

  return <primitive object={obj} ref={groupRef} />;
}

// Load and animate Excavator Model for Header
function ExcavatorModel({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url);
  const groupRef = React.useRef<THREE.Group>(null);
  const mixerRef = React.useRef<THREE.AnimationMixer | null>(null);

  React.useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current?.clipAction(clip);
        action?.play();
      });
    }

    // Traverse and fix materials for Excavator
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        
        if (material) {
          const materialName = (material.name || '').toLowerCase();
          const meshName = (mesh.name || '').toLowerCase();
          
          // CATEGORY 1: TRACKS & ROLLERS (Black)
          const isTracks = 
            meshName.includes('track') || meshName.includes('chain') || 
            meshName.includes('roller') || meshName.includes('sprocket') ||
            materialName.includes('track') || materialName.includes('black');

          // CATEGORY 2: MECHANICAL (Dark Metallic)
          const isMechanical = 
            meshName.includes('piston') || meshName.includes('cylind') || 
            meshName.includes('engine') || meshName.includes('exhaust') ||
            meshName.includes('hydraul') || meshName.includes('gear');

          // CATEGORY 3: GLASS (Keep transparent)
          const isGlass = 
            meshName.includes('glass') || meshName.includes('window') || 
            materialName.includes('glass');

          // CATEGORY 4: BODY PANELS (Orange)
          const isBody = 
            meshName.includes('body') || meshName.includes('cabin') || 
            meshName.includes('arm') || meshName.includes('boom') || 
            meshName.includes('bucket') || materialName.includes('paint') ||
            materialName.includes('yellow');

          if (isGlass) {
            material.transparent = true;
            material.opacity = 0.3;
            material.color?.set('#aaddff');
          } else if (isTracks || isMechanical) {
            material.color?.set('#0f0f0f'); 
            material.roughness = 0.85;
            material.metalness = 0.2;
          } else if (isBody || (material.color && material.color.r > 0.6)) {
            material.color?.set('#ff6b35'); 
            material.roughness = 0.35;
            material.metalness = 0.4;
          }
          
          material.needsUpdate = true;
        }
      }
    });

    // Scale model properly
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const targetHeight = 4;
    const scale = targetHeight / size.y;
    
    scene.scale.multiplyScalar(scale);
    scene.position.sub(center.multiplyScalar(scale));
    scene.position.set(0, 0, 0);
  }, [scene, animations, url]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    // Static in header
  });

  return <primitive object={scene} ref={groupRef} />;
}

function ModelLoader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff6b35" />
    </mesh>
  );
}

export default function Header3DVehicle() {
  const miniExcavatorObj = '/models/vehicles/mini-excavtor/Excavator.obj';
  const miniExcavatorMtl = '/models/vehicles/mini-excavtor/Excavator.mtl';

  return (
    <div className="w-full h-full relative" style={{ minWidth: '80px' }}>
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        onCreated={(state) => {
          state.gl.setClearColor('#000000', 0);
          const camera = state.camera as THREE.PerspectiveCamera;
          if (camera instanceof THREE.PerspectiveCamera) {
            camera.aspect = state.size.width / state.size.height;
            camera.updateProjectionMatrix();
          }
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={4} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-5, 2, 5]} intensity={2} />
          
          <MiniExcavatorModel objUrl={miniExcavatorObj} mtlUrl={miniExcavatorMtl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
