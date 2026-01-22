'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader, MTLLoader } from 'three-stdlib';
import * as THREE from 'three';
import * as React from 'react';

// Load and animate Mini Excavator (OBJ format)
function MiniExcavatorModel({ objUrl, mtlUrl, isHeader }: { objUrl: string, mtlUrl: string, isHeader?: boolean }) {
  const materials = useLoader(MTLLoader, mtlUrl);
  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const groupRef = React.useRef<THREE.Group>(null);

  React.useEffect(() => {
    // Traverse and fix materials for Mini Excavator
    obj.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        
        if (material) {
          const meshName = (mesh.name || '').toLowerCase();
          
          // CATEGORY 1: TRACKS / TIRES (Black)
          const isTracks = 
            meshName.includes('track') || meshName.includes('tire') || 
            meshName.includes('wheel') || meshName.includes('rubber');

          // CATEGORY 2: MECHANICAL (Dark Metallic)
          const isMechanical = 
            meshName.includes('engine') || meshName.includes('piston') || 
            meshName.includes('hydraul') || meshName.includes('exhaust');

          // CATEGORY 3: BODY PANELS (AlphaCap Orange)
          const isBody = 
            meshName.includes('body') || meshName.includes('cabin') || 
            meshName.includes('arm') || meshName.includes('boom') || 
            meshName.includes('bucket');

          if (isTracks || isMechanical) {
            material.color?.set('#111111');
            material.roughness = 0.8;
          } else if (isBody || (material.color && material.color.r > 0.5)) {
            material.color?.set('#ff6b35'); // AlphaCap Orange
            material.roughness = 0.4;
            material.metalness = 0.3;
          }
        }
      }
    });

    // Auto-scale model
    const box = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale differently for header - use target height for reliability
    let scale;
    if (isHeader) {
      const targetHeight = 3.5;
      scale = targetHeight / size.y;
    } else {
      scale = 4.5 / maxDim;
    }
    
    obj.scale.setScalar(scale);
    obj.position.sub(center.multiplyScalar(scale));
    
    // Adjust Y position for header vs hero
    obj.position.y = isHeader ? -0 : -30;

  }, [obj, isHeader]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime * 0.4;
      const xRange = isHeader ? 0.5 : 4.5;
      const xPos = Math.sin(time) * xRange;
      
      groupRef.current.position.x = isHeader ? xPos : xPos - 2;
      
      const direction = Math.cos(time);
      const targetRotation = direction > 0 ? Math.PI / 1.8 : -Math.PI / 1.8;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, 
        targetRotation, 
        0.02
      );
      
      const baseY = isHeader ? 0 : 0.2;
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return <primitive object={obj} ref={groupRef} />;
}

// Load and animate Excavator Model
function ExcavatorModel({ url, isHeader }: { url: string, isHeader?: boolean }) {
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
            meshName.includes('hydraul') || meshName.includes('gear') ||
            meshName.includes('axle') || meshName.includes('interior');

          // CATEGORY 3: GLASS (Keep transparent)
          const isGlass = 
            meshName.includes('glass') || meshName.includes('window') || 
            materialName.includes('glass') || materialName.includes('transp');

          // CATEGORY 4: BODY PANELS (Orange)
          const isBody = 
            meshName.includes('body') || meshName.includes('cabin') || 
            meshName.includes('arm') || meshName.includes('boom') || 
            meshName.includes('bucket') || meshName.includes('counter') ||
            meshName.includes('hood') || materialName.includes('paint') ||
            materialName.includes('yellow');

          if (isGlass) {
            material.transparent = true;
            material.opacity = 0.3;
            material.color.set('#aaddff');
          } else if (isTracks || isMechanical) {
            material.color.set('#0f0f0f'); 
            material.roughness = 0.85;
            material.metalness = 0.2;
            material.emissive.set('#000000');
          } else if (isBody || material.color.r > 0.6) {
            // Apply Construction Orange to panels
            material.color.set('#ff6b35'); 
            material.roughness = 0.35;
            material.metalness = 0.4;
            material.emissive.set('#1a0800');
          }
          
          material.needsUpdate = true;
        }
      }
    });

    // Auto-scale model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Scale differently for header
    const scale = (isHeader ? 2.8 : 3.5) / maxDim; 
    
    scene.scale.multiplyScalar(scale);
    scene.position.sub(center.multiplyScalar(scale));
    
    // Initial position - raised up to be "above" text
    scene.position.y = isHeader ? 0 : -6;
    
    // Set an attractive initial angle
    scene.rotation.y = Math.PI / 4; 

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [scene, animations, url, isHeader]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    
    // To and Fro animation
    if (groupRef.current) {
      const time = state.clock.elapsedTime * 0.4; // Speed of travel
      const xRange = isHeader ? 1.5 : 4.5; // Horizontal range
      const xPos = Math.sin(time) * xRange;
      
      // Move horizontally
      groupRef.current.position.x = isHeader ? xPos : xPos - 2; 
      
      // Face direction of travel
      const direction = Math.cos(time);
      const targetRotation = direction > 0 ? Math.PI / 1.8 : -Math.PI / 1.8;
      
      // Smoothly rotate to face direction
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, 
        targetRotation, 
        0.02
      );
      
      // Maintain vertical "above text" height and slight floating
      const baseY = isHeader ? 0 : 0;
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return <primitive object={scene} ref={groupRef} />;
}

// Fallback component while loading
function ModelLoader() {
  return (
    <>
      <mesh>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#ff6b35" wireframe />
      </mesh>
      <ambientLight intensity={0.5} />
    </>
  );
}

export default function Hero3DVehicle({ isHeader = false }: { isHeader?: boolean }) {
  // Model paths
  const excavatorPath = '/models/vehicles/excavator/Excavator caterpillar 323d -.gltf'; 
  const miniExcavatorObj = '/models/vehicles/mini-excavtor/Excavator.obj';
  const miniExcavatorMtl = '/models/vehicles/mini-excavtor/Excavator.mtl';

  return (
    <div className={`${isHeader ? "relative" : "absolute inset-0"} w-full h-full pointer-events-none z-50`}>
      <Canvas 
        camera={{ 
          position: isHeader ? [0, 0, 6] : [10, 30, 70], 
          fov: isHeader ? 45 : 40 
        }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={(state) => {
          if (isHeader) {
            state.gl.setClearColor('#000000', 0);
            const camera = state.camera as THREE.PerspectiveCamera;
            if (camera instanceof THREE.PerspectiveCamera) {
              camera.aspect = state.size.width / state.size.height;
              camera.updateProjectionMatrix();
            }
          }
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={isHeader ? 4 : 0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[0, 8, 5]} intensity={isHeader ? 2 : 1.5} />
          
          <MiniExcavatorModel 
            objUrl={miniExcavatorObj} 
            mtlUrl={miniExcavatorMtl} 
            isHeader={isHeader}
          />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
