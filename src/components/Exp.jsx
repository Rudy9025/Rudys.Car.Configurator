import React, { useState } from 'react';
import {  Caustics, CubeCamera, Environment, OrbitControls, RandomizedLight, AccumulativeShadows, } from '@react-three/drei';
import { useRef,Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
 import { RGBELoader } from 'three-stdlib';
 import { useProgress, Html } from '@react-three/drei';
 
import "./css/Cars.css";
import UI from "./UI";

import BMW from "./cars/BMW_M3C";
import GClass from "./cars/G_wagon"; 
import SL63 from "./cars/SL63_AMG_BENZ";
import RollsRoyce from "./cars/Rolls-royce_ghost";
import Supra from "./cars/Supra";
import McLaren from "./cars/McLaren";
import Porsche from "./cars/Porsche_918";
import MercedesSclass from "./cars/Mercedes_Sclass";
import S63_Coupe from "./cars/S63_coupe";
import Brabus from "./cars/Brabus_G900";

import BMW_M3C_P from './color palette/BMW_M3C_P'
import G_wagon_P from './color palette/G_wagon_P' 
import SL63_AMG_BENZ_P from './color palette/SL63_AMG_BENZ_P' 
import Supra_P from './color palette/Supra_P' 
import McLaren_P from './color palette/McLaren_P' 
import Rollsroyce_ghost_P from './color palette/Rollsroyce_ghost_P' 
import Mercedes_Sclass_P from './color palette/Mercedes_Sclass_P' 
import Porsche_918_P from './color palette/Porsche_918_P' 
import S63_coupe_P from './color palette/S63_coupe_P' 
import Brabus_G900_P from './color palette/Brabus_G900_P' 

function Loader() {
  const { progress } = useProgress(); 

  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5em' }}>
        <p style={{whiteSpace:"nowrap"}}>Loading {progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}


export default function App() {
  const [selectedCar, setSelectedCar] = useState("Supra");
  const ref = useRef();
  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };
  function downloadScreenshot() {
    const image = ref.current.toDataURL('image/png')
    const a = document.createElement('a')
    a.setAttribute('download', 'car.png')
    a.setAttribute('href', image)
    a.click()
}
  function Diamond(props) {
    
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr');
 
    
    return (
      <CubeCamera resolution={1086} frames={2} envMap={texture}>
        {(texture) => (
          <Caustics
            backfaces
            position={[0, -0.5, 0]}
            lightSource={[-5, -2, -1]}
            worldRadius={0.6}
            ior={1.8}
            backfaceIor={1.1}
            intensity={2}
            >
               <Suspense fallback={<Loader />}>
             {selectedCar === "BMW" && ( <> <BMW /> </> )}
            {selectedCar === "GClass" && <GClass />}
            {selectedCar === "SL63" && <SL63 />}
            {selectedCar === "RollsRoyce" && <RollsRoyce />}
            {selectedCar === "Supra" && <Supra />}
            {selectedCar === "McLaren" && <McLaren />}
            {selectedCar === "porsche" && <Porsche />}
            {selectedCar === "mercedes_Sclass" && <MercedesSclass />}
            {selectedCar === "S63_Coupe" && <S63_Coupe />}
            {selectedCar === "Brabus" && <Brabus />}
            </Suspense>

          </Caustics>
        )}
      </CubeCamera>
    );
  }

  return (
    <>
      <Canvas shadows camera={{ position: [-3, 0.5, 3], fov: 45 }} ref={ref} gl={{ preserveDrawingBuffer: true }} >
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5 * Math.PI} />
        <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight decay={0} position={[-10, -10, -10]} />
        <Diamond rotation={[0, 0, 0.715]} position={[0, -0.175 + 0.5, 0]} />
        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.7}
          opacity={1}
          scale={12}
          position={[0, -0.5, 0]}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} minPolarAngle={0} maxPolarAngle={Math.PI / 2} enablePan={false} enableDamping rotateSpeed={0.3} minDistance={4} maxDistance={15}/>
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas> 
      <UI onSelectCar={handleCarSelect} />
       
      {selectedCar === "BMW" && <BMW_M3C_P />}
      {selectedCar === "GClass" && <G_wagon_P />}
      {selectedCar === "SL63" && <SL63_AMG_BENZ_P />}
      {selectedCar === "Supra" && <Supra_P />}
      {selectedCar === "McLaren" && <McLaren_P />}
      {selectedCar === "RollsRoyce" && <Rollsroyce_ghost_P />}
      {selectedCar === "mercedes_Sclass" && <Mercedes_Sclass_P />}
      {selectedCar === "porsche" && <Porsche_918_P />}
      {selectedCar === "S63_Coupe" && <S63_coupe_P />}
      {selectedCar === "Brabus" && <Brabus_G900_P />}
      <button id="button" onClick={() => downloadScreenshot()} className='download'>
                          <span>Download Image</span> <img src="download.png" alt="" height={25} width={25}  /> 
                        </button>
    </>
  );
}  
