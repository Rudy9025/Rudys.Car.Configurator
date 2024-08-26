/* eslint-disable */

import React, { useContext,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/supra.glb')
  const { currentAnimation } = useContext(AnimationContext);

useEffect(() => {
  const setMaterialColor = (materialName, color) => {
    if (materials[materialName]) {
      materials[materialName].color.set(color);
    }
  };

  if (currentAnimation) {
    if (currentAnimation.material && currentAnimation.color) {
      setMaterialColor(currentAnimation.material, currentAnimation.color);
    }
  }
}, [materials, currentAnimation]);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[86.102, 38.764, 164.359]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0.079, 0, 0]}>
            <mesh geometry={nodes['Plane074_Toyota_Supra_2020_with_Interior_@noTTo3Ds_tire001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_tire.001']} />
            <mesh geometry={nodes.Plane074_Color_002001_0.geometry} material={materials['Color_002.001']} />
            <mesh geometry={nodes['Plane074_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} />
            <mesh geometry={nodes['Plane074_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimDark001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001']} />
            <mesh geometry={nodes['Plane074_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimB001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimB.001']} />
            <mesh geometry={nodes['Plane074_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
          </group>
        </group>
        <group position={[86.102, 38.764, 164.359]} rotation={[-Math.PI / 2, 0, 0]} scale={44.632}>
          <group position={[0.177, 0, 0]} scale={2.241}>
            <mesh geometry={nodes.Plane069_Color_A11001_0.geometry} material={materials['Color_A11.001']} />
            <mesh geometry={nodes['Plane069_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
            <mesh geometry={nodes.Plane069_gold001_0.geometry} material={materials['gold.001']} />
          </group>
        </group>
        <group position={[-86.102, 38.764, 164.359]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <group position={[0.079, 0, 0]}>
            <mesh geometry={nodes['Plane016_Toyota_Supra_2020_with_Interior_@noTTo3Ds_tire001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_tire.001']} />
            <mesh geometry={nodes.Plane016_Color_002001_0.geometry} material={materials['Color_002.001']} />
            <mesh geometry={nodes['Plane016_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} />
            <mesh geometry={nodes['Plane016_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimDark001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001']} />
            <mesh geometry={nodes['Plane016_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimB001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimB.001']} />
            <mesh geometry={nodes['Plane016_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
          </group>
        </group>
        <group position={[-86.102, 38.764, 164.359]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={44.632}>
          <group position={[0.177, 0, 0]} rotation={[2.856, 0, 0]} scale={2.241}>
            <mesh geometry={nodes.Plane015_Color_A11001_0.geometry} material={materials['Color_A11.001']} />
            <mesh geometry={nodes['Plane015_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
            <mesh geometry={nodes.Plane015_gold001_0.geometry} material={materials['gold.001']} />
          </group>
        </group>
        <group position={[87.472, 38.764, -130.382]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.591, 100, 100]}>
          <group position={[0.079, 0, 0]}>
            <mesh geometry={nodes['Plane018_Toyota_Supra_2020_with_Interior_@noTTo3Ds_tire001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_tire.001']} />
            <mesh geometry={nodes.Plane018_Color_002001_0.geometry} material={materials['Color_002.001']} />
            <mesh geometry={nodes['Plane018_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} />
            <mesh geometry={nodes['Plane018_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimDark001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001']} />
            <mesh geometry={nodes['Plane018_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimB001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimB.001']} />
            <mesh geometry={nodes['Plane018_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
          </group>
        </group>
        <group position={[87.472, 38.764, -130.382]} rotation={[-Math.PI / 2, 0, 0]} scale={[45.342, 44.632, 44.632]}>
          <group position={[0.177, 0, 0]} rotation={[2.824, 0, 0]} scale={2.241}>
            <mesh geometry={nodes.Plane017_Color_A11001_0.geometry} material={materials['Color_A11.001']} />
            <mesh geometry={nodes['Plane017_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
            <mesh geometry={nodes.Plane017_gold001_0.geometry} material={materials['gold.001']} />
          </group>
        </group>
        <group position={[-87.472, 38.764, -130.382]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[101.591, 100, 100]}>
          <group position={[0.079, 0, 0]}>
            <mesh geometry={nodes['Plane020_Toyota_Supra_2020_with_Interior_@noTTo3Ds_tire001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_tire.001']} />
            <mesh geometry={nodes.Plane020_Color_002001_0.geometry} material={materials['Color_002.001']} />
            <mesh geometry={nodes['Plane020_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} />
            <mesh geometry={nodes['Plane020_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimDark001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimDark.001']} />
            <mesh geometry={nodes['Plane020_Toyota_Supra_2020_with_Interior_@noTTo3Ds_rimB001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_rimB.001']} />
            <mesh geometry={nodes['Plane020_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
          </group>
        </group>
        <group position={[-87.472, 38.764, -130.382]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[45.342, 44.632, 44.632]}>
          <group position={[0.177, 0, 0]} scale={2.241}>
            <mesh geometry={nodes.Plane019_Color_A11001_0.geometry} material={materials['Color_A11.001']} />
            <mesh geometry={nodes['Plane019_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
            <mesh geometry={nodes.Plane019_gold001_0.geometry} material={materials['gold.001']} />
          </group>
        </group>
        <group scale={[1050.907, 231.064, 408.66]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]}>
            <mesh geometry={nodes['Plane001_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
            <mesh geometry={nodes['Plane001_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0_1'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]}>
            <mesh geometry={nodes['Plane004_Toyota_Supra_2020_with_Interior_@noTTo3Ds_carpaint001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001']} />
            <mesh geometry={nodes['Plane004_Toyota_Supra_2020_with_Interior_@noTTo3Ds_carpaint001_0_1'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001']} />
            <mesh geometry={nodes.Plane004_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Plane004_Material004_0.geometry} material={materials['Material.004']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]}>
            <mesh geometry={nodes['Plane005_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_int_tex001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_int_tex.001']} />
            <mesh geometry={nodes['Plane005_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_int_tex001_0_1'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_int_tex.001']} />
            <mesh geometry={nodes['Plane005_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_int_tex001_0_2'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_int_tex.001']} />
          </group>
          <mesh geometry={nodes['Plane_Toyota_Supra_2020_with_Interior_@noTTo3Ds_reflect_bumpL001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_reflect_bumpL.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane002_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane003_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticGlossy001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticGlossy.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane006_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticBlack_perf_0'].geometry} material={materials.Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticBlack_perf} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane007_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_int001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_int.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane008_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticBB001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticBB.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane009_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack_in001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack_in.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane010_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_clear001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_clear.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane011_Toyota_Supra_2020_with_Interior_@noTTo3Ds_fabric001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_fabric.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane012_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_orange_bump_0'].geometry} material={materials.Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_orange_bump} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane013_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_bumpL001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_bumpL.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane014_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_intB_bump001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_intB_bump.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane022_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane023_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plastic_intB_tex001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plastic_intB_tex.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane024_Toyota_Supra_2020_with_Interior_@noTTo3Ds_seamSW001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_seamSW.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane029_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_clear001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_clear.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane030_Toyota_Supra_2020_with_Interior_@noTTo3Ds_display_int_tex001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_display_int_tex.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane031_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack_matt001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack_matt.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane032_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane033_Toyota_Supra_2020_with_Interior_@noTTo3Ds_seam001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_seam.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane034_Toyota_Supra_2020_with_Interior_@noTTo3Ds_seatbelt001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_seatbelt.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane035_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_red001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_red.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane036_Toyota_Supra_2020_with_Interior_@noTTo3Ds_shade001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_shade.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane037_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_dark001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_dark.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes.Plane038_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane039_Toyota_Supra_2020_with_Interior_@noTTo3Ds_reflectLed002_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_reflectLed.002']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane040_Toyota_Supra_2020_with_Interior_@noTTo3Ds_white001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_white.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane041_Toyota_Supra_2020_with_Interior_@noTTo3Ds_lightingRed001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_lightingRed.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane042_Toyota_Supra_2020_with_Interior_@noTTo3Ds_leather001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_leather.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane043_Toyota_Supra_2020_with_Interior_@noTTo3Ds_metal_def001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_metal_def.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane044_Toyota_Supra_2020_with_Interior_@noTTo3Ds_leatherRed001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane045_Toyota_Supra_2020_with_Interior_@noTTo3Ds_reflect001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_reflect.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane046_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes.Plane047_Color_A02001_0.geometry} material={materials['Color_A02.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane048_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblack001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblack.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane049_Toyota_Supra_2020_with_Interior_@noTTo3Ds_interiorA001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_interiorA.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane050_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblackD002_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblackD.002']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes.Plane051_Untitled2001_0.geometry} material={materials['Untitled2.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.135, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane052_Toyota_Supra_2020_with_Interior_@noTTo3Ds_reflect_bumpG001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_reflect_bumpG.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane054_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_clearInt001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_clearInt.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes.Plane055_Color_A022001_0.geometry} material={materials['Color_A022.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane056_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glassRedIllumTexT_0'].geometry} material={materials.Toyota_Supra_2020_with_Interior_noTTo3Ds_glassRedIllumTexT} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane058_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticBB1001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticBB1.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane060_Toyota_Supra_2020_with_Interior_@noTTo3Ds_carpaint001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001']} position={[0, 0.426, -0.42]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.355, 0.018, 0.04]} />
          <mesh geometry={nodes['Plane021_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
          <mesh geometry={nodes['Plane027_Toyota_Supra_2020_with_Interior_@noTTo3Ds_glass_clear002_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_glass_clear.002']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.095, 0.245, 0.433]} />
        </group>
        <mesh geometry={nodes['Plane025_Toyota_Supra_2020_with_Interior_@noTTo3Ds_plasticblackD002_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_plasticblackD.002']} position={[-78.399, 72.357, 226.03]} rotation={[0, 0, -0.121]} scale={[3.471, 3.471, 2.134]} />
        <mesh geometry={nodes['Plane026_Toyota_Supra_2020_with_Interior_@noTTo3Ds_chrome001_0'].geometry} material={materials['Toyota_Supra_2020_with_Interior_noTTo3Ds_chrome.001']} position={[-78.399, 72.357, 229.409]} rotation={[0, 0, -0.121]} scale={[3.471, 3.471, 2.134]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/supra.glb')
