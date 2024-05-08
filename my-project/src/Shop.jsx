import { useEffect, useState, Suspense, useRef } from 'react';
import { PointLightHelper } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useThree, Canvas, useFrame } from '@react-three/fiber';

function Sofa() {
  const { gl, scene, camera } = useThree();
  const [gltf, setGltf] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load('assets/sofa.glb', setGltf, undefined, error => {
      console.error('Error loading GLTF:', error);
    });
  }, []);

  console.log('GLTF Object:', gltf);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return gltf ? (
    <primitive 
      ref={ref}
      object={gltf.scene} 
      position={[0, -0.3, 3]} // Set the position to the origin
    />
  ) : null;
}

function Table() {
  const { gl, scene, camera } = useThree();
  const [gltf, setGltf] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load('assets/table.glb', setGltf, undefined, error => {
      console.error('Error loading GLTF:', error);
    });
  }, []);

  console.log('GLTF Object:', gltf);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return gltf ? (
    <primitive 
      ref={ref}
      object={gltf.scene} 
      position={[0, -0.3, 3]} // Set the position to the origin
    />
  ) : null;
}

function Chair() {
  const { gl, scene, camera } = useThree();
  const [gltf, setGltf] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load('assets/chair.glb', setGltf, undefined, error => {
      console.error('Error loading GLTF:', error);
    });
  }, []);

  console.log('GLTF Object:', gltf);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return gltf ? (
    <primitive 
      ref={ref}
      object={gltf.scene} 
      position={[0, -0.3, 3]} // Set the position to the origin
    />
  ) : null;
}

function Lights() {
  const { scene } = useThree();
  const pointLightRef = useRef();

  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef.current);
    }

    return () => {
      if (pointLightRef.current) {
        const helper = new PointLightHelper(pointLightRef.current);
      }
    };
  }, [scene]);

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight ref={pointLightRef} position={[0.5, -0.5, 5]} />
    </>
  );
}

function Shop() {
  return (
    <>
        <Canvas style={{ height: '100vh', width: 'auto' }}>
        <Lights />
        <Suspense fallback={null}>
            <Chair />
        </Suspense>
        </Canvas>
    </>
  )
}

export default Shop

