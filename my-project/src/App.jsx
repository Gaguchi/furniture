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

function App() {
  return (
    <>
    <div id="site-main" className="site-main">
        <div id="main-content" className="main-content"> 
					<div id="primary" className="content-area">
						<div id="content" className="site-content" role="main">
							<section className="section m-b-0">
								<div className="block block-sliders layout-6 nav-vertical">
                  <div className="slick-sliders" data-autoplay="false" data-dots="true" data-nav="false" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns1440="1" data-columns="1">
                    <div className="item slick-slide">
                      <div className="item-content">
                        <div className="content-image">
                          <Canvas style={{ height: '100vh', width: '100%' }}>
                            <Lights />
                            <Suspense fallback={null}>
                              <Sofa />
                            </Suspense>
                          </Canvas>
                        </div>
                        <div className="item-info horizontal-center vertical-bottom text-center">
                          <div className="content">
                            <div className="subtitle-slider">20%OFF.END MONDAY</div>
                            <h2 className="title-slider">Outline Studio Sofa</h2>
                            <a className="button-slider button-white" href="shop-grid-left.html">SHOP NOW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item slick-slide">
                      <div className="item-content">
                        <div className="content-image">
                          <Canvas style={{ height: '100vh', width: '100%' }}>
                            <Lights />
                            <Suspense fallback={null}>
                              <Table />
                            </Suspense>
                          </Canvas>
                        </div>
                        <div className="item-info horizontal-center vertical-bottom text-center">
                          <div className="content">
                            <div className="subtitle-slider">20%OFF.END MONDAY</div>
                            <h2 className="title-slider">Outline Studio Table</h2>
                            <a className="button-slider button-white" href="shop-grid-left.html">SHOP NOW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item slick-slide">
                      <div className="item-content">
                        <div className="content-image">
                          <Canvas style={{ height: '100vh', width: '100%' }}>
                            <Lights />
                            <Suspense fallback={null}>
                              <Chair />
                            </Suspense>
                          </Canvas>
                        </div>
                        <div className="item-info horizontal-center vertical-bottom text-center">
                          <div className="content">
                            <div className="subtitle-slider">20%OFF.END MONDAY</div>
                            <h2 className="title-slider">Outline Studio Chair</h2>
                            <a className="button-slider button-white" href="shop-grid-left.html">SHOP NOW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
