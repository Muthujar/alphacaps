'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import * as React from 'react';

// Load and animate Tipper Truck Model
function TipperModel({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url);
  const groupRef = React.useRef<THREE.Group>(null);
  const mixerRef = React.useRef<THREE.AnimationMixer | null>(null);

  React.useEffect(() => {
    console.log('TipperModel loaded:', { url, animationsCount: animations?.length || 0 });
    
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current?.clipAction(clip);
        action?.play();
      });
    }

    // Auto-scale model to fit viewport
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 4.5 / maxDim; // Adjusted for wheel loader size (higher = smaller)
    
    console.log('Model scaling:', { maxDim, scale, size: { x: size.x, y: size.y, z: size.z } });
    
    scene.scale.multiplyScalar(scale);
    scene.position.sub(center.multiplyScalar(scale));

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [scene, animations, url]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    
    // Subtle floating and rotation animation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return <primitive object={scene} ref={groupRef} />;
}

// Load and animate Excavator Model
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

    // Auto-scale model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;
    
    scene.scale.multiplyScalar(scale);
    scene.position.sub(center.multiplyScalar(scale));

    return () => {
      mixerRef.current?.stopAllAction();
    };
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    
    // Subtle floating animation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
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


type Hero3DVehicleProps = {
  modelType?: 'tipper' | 'excavator' | 'both';
};

export default function Hero3DVehicle({ modelType = 'tipper' }: Hero3DVehicleProps) {
  // Model paths - Wheel loader is configured
  const tipperPath = '/models/vehicles/tipper/wheel-loader.glb';
  const excavatorPath = '/models/vehicles/excavator/excavator.glb'; // Update when excavator model is added

  // Preload models (optional but recommended for performance)
  React.useEffect(() => {
    console.log('Hero3DVehicle initialized:', { modelType, tipperPath, excavatorPath });
    
    // Try to preload tipper if it exists
    if (modelType === 'tipper' || modelType === 'both') {
      try {
        useGLTF.preload(tipperPath);
        console.log('Model preloaded:', tipperPath);
      } catch (e) {
        console.warn('Failed to preload model:', tipperPath, e);
      }
    }
    
    // Try to preload excavator if it exists
    if (modelType === 'excavator' || modelType === 'both') {
      try {
        useGLTF.preload(excavatorPath);
        console.log('Model preloaded:', excavatorPath);
      } catch (e) {
        console.warn('Failed to preload model:', excavatorPath, e);
      }
    }
  }, [modelType, tipperPath, excavatorPath]);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[60%] opacity-20 md:opacity-30 pointer-events-none z-10 border border-yellow-500/50">
      {/* Debug indicator - visible canvas area */}
      <div className="absolute -top-6 left-0 bg-yellow-500 text-black text-xs px-2 py-1 z-50 rounded">
        3D Canvas Active - Check Console
      </div>
      
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={(state) => {
          console.log('✅ Canvas created successfully:', state);
          console.log('📍 Model path:', modelType === 'tipper' ? tipperPath : excavatorPath);
        }}
      >
        <Suspense fallback={<ModelLoader />}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, 3, -5]} intensity={0.6} />
          
          {/* Test box to verify canvas is working */}
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>
          
          {/* Load models based on modelType prop */}
          {modelType === 'tipper' && <TipperModel url={tipperPath} />}
          {modelType === 'excavator' && <ExcavatorModel url={excavatorPath} />}
          {modelType === 'both' && (
            <>
              <TipperModel url={tipperPath} />
              <ExcavatorModel url={excavatorPath} />
            </>
          )}
          
          {/* Optional: Add environment lighting for better appearance */}
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

