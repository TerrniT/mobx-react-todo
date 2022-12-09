import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cat } from './Cat';
import { Html, OrbitControls, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
};

const Scene = () => {
  return (
    <Canvas
      style={{
        width: '250px',
        alignSelf: 'center',
        backgroundColor: 'transparentt',
      }}
      camera={{ position: [5, 10, 10], zoom: 10 }}
    >
      <Suspense fallback={<Loader />}>
        <pointLight position={[5, 5, 1]} />
        <ambientLight intensity={0.55} />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.4} />
        <Cat />
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.8}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
