'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import * as React from 'react';

// Load and animate Wheel Loader Model for Header
function WheelLoaderModel({ url }: { url: string }) {
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

    // Make all materials fully opaque and visible
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial || 
              mat instanceof THREE.MeshBasicMaterial ||
              mat instanceof THREE.MeshPhongMaterial ||
              mat instanceof THREE.MeshLambertMaterial) {
            mat.transparent = false;
            mat.opacity = 1;
            mat.depthWrite = true;
            mat.depthTest = true;
          }
        });
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
    // Model stays static - no movement
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
  const modelPath = '/models/vehicles/tipper/wheel-loader.glb';

  React.useEffect(() => {
    try {
      useGLTF.preload(modelPath);
    } catch (e) {
      console.warn('Failed to preload:', e);
    }
  }, [modelPath]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ width: '100%', height: '100%' }}
        onCreated={(state) => {
          state.gl.setClearColor('#000000', 0); // Transparent background
          state.gl.domElement.style.background = 'transparent';
          const camera = state.camera as THREE.PerspectiveCamera;
          if (camera instanceof THREE.PerspectiveCamera) {
            camera.aspect = state.size.width / state.size.height;
            camera.updateProjectionMatrix();
          }
        }}
      >
        <Suspense fallback={<ModelLoader />}>
          <ambientLight intensity={2.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} />
          <directionalLight position={[-10, 5, -5]} intensity={1.5} />
          <pointLight position={[0, 5, 5]} intensity={2} />
          
          <WheelLoaderModel url={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
