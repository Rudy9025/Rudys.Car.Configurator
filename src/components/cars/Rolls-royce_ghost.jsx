/* eslint-disable */

import React, { useContext ,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";


export default function Model(props) {
  const { nodes, materials } = useGLTF('models/rolls-royce_ghost.glb')
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
        <group position={[86.199, 34.613, 139.774]} rotation={[-Math.PI / 2, 0, 0]} scale={115.661}>
          <mesh geometry={nodes.rrghost_wheel_c_etk_wheel_05a_0.geometry} material={materials.etk_wheel_05a} />
          <mesh geometry={nodes.rrghost_wheel_c_rrghost_main_b_0.geometry} material={materials.rrghost_main_b} />
        </group>
        <group position={[-39.098, 98.43, 47.351]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_decals_gauges_signal_R_0.geometry} material={materials.signal_R} />
          <mesh geometry={nodes.rrghost_decals_gauges_signal_L_0.geometry} material={materials.signal_L} />
          <mesh geometry={nodes.rrghost_decals_gauges_abs_0.geometry} material={materials.material} />
          <mesh geometry={nodes.rrghost_decals_gauges_highbeam_0.geometry} material={materials.highbeam} />
          <mesh geometry={nodes.rrghost_decals_gauges_esc_0.geometry} material={materials.material_6} />
          <mesh geometry={nodes.rrghost_decals_gauges_tcs_0.geometry} material={materials.material_7} />
          <mesh geometry={nodes.rrghost_decals_gauges_parkingbrake_0.geometry} material={materials.parkingbrake} />
          <mesh geometry={nodes.rrghost_decals_gauges_lowbeam_0.geometry} material={materials.lowbeam} />
        </group>
        <group position={[-0.921, 71.595, 137.951]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_engine_gavril_v8_0.geometry} material={materials.gavril_v8} />
          <mesh geometry={nodes.rrghost_engine_rrghost_rrlogo001_0.geometry} material={materials['rrghost_rrlogo.001']} />
          <mesh geometry={nodes.rrghost_engine_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_engine_etk_wheel_05a002_0.geometry} material={materials['etk_wheel_05a.002']} />
          <mesh geometry={nodes.rrghost_engine_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} />
        </group>
        <group position={[-49.744, 28.069, -288.346]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_exhausttip_R_b_rrghost_main_c_0.geometry} material={materials.rrghost_main_c} />
          <mesh geometry={nodes.rrghost_exhausttip_R_b_rrghost_main_0.geometry} material={materials.rrghost_main} />
        </group>
        <group position={[49.746, 28.069, -288.346]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_exhausttip_L_b_rrghost_main_c_0.geometry} material={materials.rrghost_main_c} />
          <mesh geometry={nodes.rrghost_exhausttip_L_b_rrghost_main_0.geometry} material={materials.rrghost_main} />
        </group>
        <group position={[82.148, 69.842, 123.2]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_fender_L_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_rolls_royce_logo_0.geometry} material={materials.rrghost_rolls_royce_logo} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_off_0.geometry} material={materials.rrghost_off} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_signal_L_b_0.geometry} material={materials.rrghost_signal_L_b} />
          <mesh geometry={nodes.rrghost_fender_L_rrghost_main_0.geometry} material={materials.rrghost_main} />
        </group>
        <group position={[-0.758, 37.869, 209.495]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_signal_L_0.geometry} material={materials.rrghost_signal_L} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_runninglight_b_0.geometry} material={materials.rrghost_runninglight_b} />
          <mesh geometry={nodes.rrghost_bumper_F_rrghost_signal_R_0.geometry} material={materials.rrghost_signal_R} />
        </group>
        <group position={[-8.722, 77.197, 12.717]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_dash_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_dash_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_dash_rrghost_main_0_1.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_dash_rrghost_interior_0.geometry} material={materials.rrghost_interior} />
          <mesh geometry={nodes.rrghost_dash_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_dash_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_dash_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_dash_rrghost_screen_0.geometry} material={materials.rrghost_screen} />
          <mesh geometry={nodes.rrghost_dash_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
          <mesh geometry={nodes.rrghost_dash_rrghost_speaker_black_0.geometry} material={materials.rrghost_speaker_black} />
          <mesh geometry={nodes.rrghost_dash_rrghost_carpet_0.geometry} material={materials.rrghost_carpet} />
          <mesh geometry={nodes.rrghost_dash_rrghost_rrlogo_alpha1_0.geometry} material={materials.rrghost_rrlogo_alpha1} />
          <mesh geometry={nodes.rrghost_dash_rrghost_interior_alpha_2_0.geometry} material={materials.rrghost_interior_alpha_2} />
        </group>
        <group position={[-0.884, 86.856, -283.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_main_c_0.geometry} material={materials.rrghost_main_c} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_rolls_royce_logo_0.geometry} material={materials.rrghost_rolls_royce_logo} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_off_0.geometry} material={materials.rrghost_off} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_trunk_b_rrghost_alcantara_0.geometry} material={materials.rrghost_alcantara} />
        </group>
        <group position={[66.617, 72.745, 195.746]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_headlight_L_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_headlight_L_rrghost_lights_0.geometry} material={materials.rrghost_lights} />
          <mesh geometry={nodes.rrghost_headlight_L_rrghost_runninglight_0.geometry} material={materials.rrghost_runninglight} />
        </group>
        <group position={[-66.896, 77.249, -281.323]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_taillight_R_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_taillight_R_rrghost_lights_0.geometry} material={materials.rrghost_lights} />
          <mesh geometry={nodes.rrghost_taillight_R_rrghost_reverselight_0.geometry} material={materials.rrghost_reverselight} />
          <mesh geometry={nodes.rrghost_taillight_R_rrghost_signal_L_0.geometry} material={materials.rrghost_signal_L} />
        </group>
        <group position={[65.279, 72.858, 197.134]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_headlightglass_L_rrghost_off_0.geometry} material={materials.rrghost_off} />
          <mesh geometry={nodes.rrghost_headlightglass_L_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_headlightglass_L_rrghost_headlight_0.geometry} material={materials.rrghost_headlight} />
        </group>
        <group position={[-65.273, 72.858, 197.134]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_headlightglass_R_rrghost_off_0.geometry} material={materials.rrghost_off} />
          <mesh geometry={nodes.rrghost_headlightglass_R_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_headlightglass_R_rrghost_headlight_0.geometry} material={materials.rrghost_headlight} />
        </group>
        <group position={[67.368, 76.978, -282.113]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_taillightglass_L_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_taillightglass_L_rrghost_glass_b_0.geometry} material={materials.rrghost_glass_b} />
          <mesh geometry={nodes.rrghost_taillightglass_L_rrghost_taillight_0.geometry} material={materials.rrghost_taillight} />
        </group>
        <group position={[-67.363, 77.032, -282.113]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_taillightglass_R_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_taillightglass_R_rrghost_taillight_0.geometry} material={materials.rrghost_taillight} />
          <mesh geometry={nodes.rrghost_taillightglass_R_rrghost_glass_b_0.geometry} material={materials.rrghost_glass_b} />
        </group>
        <group position={[0.824, 72.851, -133.381]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_seats_R_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_interior_0.geometry} material={materials.rrghost_interior} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_perforated_0.geometry} material={materials.rrghost_perforated} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_rrlogo_alpha_0.geometry} material={materials.rrghost_rrlogo_alpha} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
          <mesh geometry={nodes.rrghost_seats_R_rrghost_belt_0.geometry} material={materials.rrghost_belt} />
        </group>
        <group position={[-0.098, 92.67, 132.898]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_hood_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_hood_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_hood_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_hood_rrghost_alcantara_0.geometry} material={materials.rrghost_alcantara} />
          <mesh geometry={nodes.rrghost_hood_rrghost_common_black033_0.geometry} material={materials.rrghost_common_black033} />
        </group>
        <group position={[77.824, 80.289, -3.956]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_door_FL_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_speaker_0.geometry} material={materials.rrghost_speaker} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_rrgreen_0.geometry} material={materials.rrghost_rrgreen} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
          <mesh geometry={nodes.rrghost_door_FL_rrghost_rrlogo_alpha2_0.geometry} material={materials.rrghost_rrlogo_alpha2} />
        </group>
        <group position={[76.14, 81.733, -88.593]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_door_RL_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_speaker_0.geometry} material={materials.rrghost_speaker} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_rrgreen_0.geometry} material={materials.rrghost_rrgreen} />
          <mesh geometry={nodes.rrghost_door_RL_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
        </group>
        <group position={[-76.455, 78.432, -1.765]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_door_FR_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_speaker_0.geometry} material={materials.rrghost_speaker} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_rrgreen_0.geometry} material={materials.rrghost_rrgreen} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
          <mesh geometry={nodes.rrghost_door_FR_rrghost_rrlogo_alpha2_0.geometry} material={materials.rrghost_rrlogo_alpha2} />
        </group>
        <group position={[-76.18, 81.874, -88.564]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_door_RR_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_speaker_0.geometry} material={materials.rrghost_speaker} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_rrgreen_0.geometry} material={materials.rrghost_rrgreen} />
          <mesh geometry={nodes.rrghost_door_RR_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
        </group>
        <group position={[0.044, 145.276, -63.035]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_sunroof_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_sunroof_rrghost_main_0.geometry} material={materials.rrghost_main} />
        </group>
        <group position={[-39.52, 87.21, 17.055]} rotation={[-2.891, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_steer_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_steer_rrghost_rrlogo002_0.geometry} material={materials['rrghost_rrlogo.002']} />
          <mesh geometry={nodes['rrghost_steer_����������������_0'].geometry} material={materials.material_54} />
          <mesh geometry={nodes.rrghost_steer_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
        </group>
        <group position={[-66.611, 72.745, 195.746]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_headlight_R_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_headlight_R_rrghost_lights_0.geometry} material={materials.rrghost_lights} />
          <mesh geometry={nodes.rrghost_headlight_R_rrghost_runninglight_0.geometry} material={materials.rrghost_runninglight} />
        </group>
        <group position={[-93.646, 106.234, 20.114]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_mirror_R_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_mirror_R_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_mirror_R_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group position={[93.646, 106.234, 20.114]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_mirror_L_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_mirror_L_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group position={[66.901, 77.249, -281.323]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_taillight_L_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_taillight_L_rrghost_lights_0.geometry} material={materials.rrghost_lights} />
          <mesh geometry={nodes.rrghost_taillight_L_rrghost_reverselight_0.geometry} material={materials.rrghost_reverselight} />
          <mesh geometry={nodes.rrghost_taillight_L_rrghost_signal_L_0.geometry} material={materials.rrghost_signal_L} />
        </group>
        <group position={[-40.108, 68.923, -43.267]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_interior_0.geometry} material={materials.rrghost_interior} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_perforated_0.geometry} material={materials.rrghost_perforated} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_rrlogo_alpha_0.geometry} material={materials.rrghost_rrlogo_alpha} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_screen_0.geometry} material={materials.rrghost_screen} />
          <mesh geometry={nodes.rrghost_seat_FR_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
        </group>
        <group position={[40.099, 68.925, -43.267]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_interior_0.geometry} material={materials.rrghost_interior} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_wood_0.geometry} material={materials.rrghost_wood} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_perforated_0.geometry} material={materials.rrghost_perforated} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_rrlogo_alpha_0.geometry} material={materials.rrghost_rrlogo_alpha} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_screen_0.geometry} material={materials.rrghost_screen} />
          <mesh geometry={nodes.rrghost_seat_FL_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
        </group>
        <group position={[0.001, 73.391, 215.999]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_grille_b_rrghost_main_c_0.geometry} material={materials.rrghost_main_c} />
          <mesh geometry={nodes.rrghost_grille_b_rrghost_rolls_royce_logo_0.geometry} material={materials.rrghost_rolls_royce_logo} />
          <mesh geometry={nodes.rrghost_grille_b_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_grille_b_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_grille_b_rrghost_common_black033_0.geometry} material={materials.rrghost_common_black033} />
          <mesh geometry={nodes.rrghost_grille_b_rrghost_radiator_0.geometry} material={materials.rrghost_radiator} />
        </group>
        <group position={[-82.155, 69.849, 123.186]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_main_c_0.geometry} material={materials.rrghost_main_c} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_rolls_royce_logo_0.geometry} material={materials.rrghost_rolls_royce_logo} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_off_0.geometry} material={materials.rrghost_off} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_fender_R_b_rrghost_signal_R_b_0.geometry} material={materials.rrghost_signal_R_b} />
        </group>
        <group position={[-1.616, 89.775, -101.825]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.rrghost_body_rrghost_paint_0.geometry} material={materials.rrghost_paint} />
          <mesh geometry={nodes.rrghost_body_rrghost_paint_b_0.geometry} material={materials.rrghost_paint_b} />
          <mesh geometry={nodes.rrghost_body_rrghost_glass_0.geometry} material={materials.rrghost_glass} />
          <mesh geometry={nodes.rrghost_body_rrghost_main_0.geometry} material={materials.rrghost_main} />
          <mesh geometry={nodes.rrghost_body_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.rrghost_body_rrghost_interior_0.geometry} material={materials.rrghost_interior} />
          <mesh geometry={nodes.rrghost_body_rrghost_leatherblue_0.geometry} material={materials.rrghost_leatherblue} />
          <mesh geometry={nodes.rrghost_body_rrghost_leatherlight_0.geometry} material={materials.rrghost_leatherlight} />
          <mesh geometry={nodes.rrghost_body_rrghost_perforated_0.geometry} material={materials.rrghost_perforated} />
          <mesh geometry={nodes.rrghost_body_rrghost_stitching_0.geometry} material={materials.rrghost_stitching} />
          <mesh geometry={nodes.rrghost_body_rrghost_interior_alpha_0.geometry} material={materials.rrghost_interior_alpha} />
          <mesh geometry={nodes.rrghost_body_rrghost_detail_0.geometry} material={materials.rrghost_detail} />
          <mesh geometry={nodes.rrghost_body_rrghost_speaker_0.geometry} material={materials.rrghost_speaker} />
          <mesh geometry={nodes.rrghost_body_rrghost_rrgreen_0.geometry} material={materials.rrghost_rrgreen} />
          <mesh geometry={nodes.rrghost_body_rrghost_main_b001_0.geometry} material={materials['rrghost_main_b.001']} />
          <mesh geometry={nodes.rrghost_body_rrghost_goodwood_0.geometry} material={materials.rrghost_goodwood} />
          <mesh geometry={nodes.rrghost_body_rrghost_badges_0.geometry} material={materials.rrghost_badges} />
          <mesh geometry={nodes.rrghost_body_rrghost_speaker_black_0.geometry} material={materials.rrghost_speaker_black} />
          <mesh geometry={nodes.rrghost_body_rrghost_leatherdark_0.geometry} material={materials.rrghost_leatherdark} />
          <mesh geometry={nodes.rrghost_body_rrghost_carpet_0.geometry} material={materials.rrghost_carpet} />
          <mesh geometry={nodes.rrghost_body_rrghost_belt_0.geometry} material={materials.rrghost_belt} />
          <mesh geometry={nodes.rrghost_body_rrghost_carpet1_0.geometry} material={materials.rrghost_carpet1} />
          <mesh geometry={nodes.rrghost_body_rrghost_taillight_b_0.geometry} material={materials.rrghost_taillight_b} />
          <mesh geometry={nodes.rrghost_body_rrghost_0.geometry} material={materials.rrghost} />
        </group>
        <group position={[76.056, 34.557, 139.852]} rotation={[Math.PI / 2, 0, Math.PI]} scale={101.911}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[86.199, 34.613, -180.716]} rotation={[-Math.PI / 2, 0, 0]} scale={115.661}>
          <mesh geometry={nodes.rrghost_wheel_c001_etk_wheel_05a_0.geometry} material={materials.etk_wheel_05a} />
          <mesh geometry={nodes.rrghost_wheel_c001_rrghost_main_b_0.geometry} material={materials.rrghost_main_b} />
        </group>
        <group position={[76.056, 34.557, -180.638]} rotation={[Math.PI / 2, 0, Math.PI]} scale={101.911}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-85.255, 34.576, 139.774]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={115.661}>
          <mesh geometry={nodes.rrghost_wheel_c002_etk_wheel_05a_0.geometry} material={materials.etk_wheel_05a} />
          <mesh geometry={nodes.rrghost_wheel_c002_rrghost_main_b_0.geometry} material={materials.rrghost_main_b} />
        </group>
        <group position={[-75.112, 34.631, 139.852]} rotation={[-Math.PI / 2, 0, 0]} scale={101.911}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-85.255, 34.576, -180.716]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={115.661}>
          <mesh geometry={nodes.rrghost_wheel_c003_etk_wheel_05a_0.geometry} material={materials.etk_wheel_05a} />
          <mesh geometry={nodes.rrghost_wheel_c003_rrghost_main_b_0.geometry} material={materials.rrghost_main_b} />
        </group>
        <group position={[-75.112, 34.631, -180.638]} rotation={[-Math.PI / 2, 0, 0]} scale={101.911}>
          <mesh geometry={nodes.amdb11_brakedisc_FR005_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR005_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR005_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR005_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR005_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-39.527, 89.184, 13.345]} rotation={[-1.322, 0, Math.PI / 2]} scale={65.373}>
          <mesh geometry={nodes.rrghost_wheel_c004_etk_wheel_05a_0.geometry} material={materials.etk_wheel_05a} />
          <mesh geometry={nodes.rrghost_wheel_c004_rrghost_main_b_0.geometry} material={materials.rrghost_main_b} />
        </group>
        <mesh geometry={nodes.rrghost_needle_speedo_rrghost_main_0.geometry} material={materials.rrghost_main} position={[-39.483, 96.354, 45.642]} rotation={[-2.621, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_needle_tacho_rrghost_main_0.geometry} material={materials.rrghost_main} position={[-30.11, 95.466, 45.346]} rotation={[-2.621, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_tubs_rrghost_0.geometry} material={materials.rrghost} position={[0, 56.989, 141.989]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_exhaust_R_rrghost_0.geometry} material={materials.rrghost} position={[16.888, 23.876, -102.895]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_exhaust_L_rrghost_0.geometry} material={materials.rrghost} position={[-16.881, 23.876, -102.895]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_ransmission_rrghost_0.geometry} material={materials.rrghost} position={[0, 35.594, 78.213]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_intercooler_rrghost_0.geometry} material={materials.rrghost} position={[0, 37.826, 186.257]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_upperarm_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 44.487, -131.531]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_transfercase_rrghost_0.geometry} material={materials.rrghost} position={[6.322, 30.282, 35.267]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_tierod_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 31.14, -196.541]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_tierod_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 22.507, 151.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_swaybar_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 41.993, -177.295]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_swaybar_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 40.825, 154.008]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_subframe_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 39.65, -177.16]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_subframe_F_rrghost_0.geometry} material={materials.rrghost} position={[0.1, 26.621, 135.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_strutbrace_F_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 89.639, 125.074]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_strut_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 72.798, 134.828]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_steeringbox_rrghost_0.geometry} material={materials.rrghost} position={[0, 23.553, 149.62]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_spring_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 40.766, -187.931]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_shock_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 51.733, -185.514]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_radsupport_rrghost_0.geometry} material={materials.rrghost} position={[0, 67.411, 186.733]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_radiator_rrghost_0.geometry} material={materials.rrghost} position={[-1.319, 61.283, 182.275]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_lowerarm_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 25.213, -180.402]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_lowerarm_F_b_rrghost_0.geometry} material={materials.rrghost} position={[0, 28.097, 158.061]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_lowerarm_F_a_rrghost_0.geometry} material={materials.rrghost} position={[0, 21.156, 138.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_hub_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 32.419, -179.888]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_hub_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 33.696, 140.048]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_heatshield_rrghost_0.geometry} material={materials.rrghost} position={[0, 20.415, -16.943]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_halfshaft_R_rrghost_0.geometry} material={materials.rrghost} position={[0, 33.006, -180.414]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_halfshaft_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 32.506, 140]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_fueltank_rrghost_0.geometry} material={materials.rrghost} position={[0, 29.257, -134.381]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_engbaycrap_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0.885, 81.015, 141.951]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_diff_rrghost_0.geometry} material={materials.rrghost} position={[0, 32.527, -175.795]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_bumperbar_F_rrghost_0.geometry} material={materials.rrghost} position={[0, 53.03, 200.801]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_exhausttip_L_rrghost_main_0.geometry} material={materials.rrghost_main} position={[49.746, 28.069, -288.346]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_exhausttip_R_rrghost_main_0.geometry} material={materials.rrghost_main} position={[-49.744, 28.069, -288.346]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_bumper_R_rrghost_paint_0.geometry} material={materials.rrghost_paint} position={[-2.928, 47.831, -292.993]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_doorglass_FL_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[75.226, 113.136, -9.532]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_doorglass_RL_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[71.449, 118.554, -94.402]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_doorglass_FR_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[-75.221, 113.136, -9.532]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_doorglass_RR_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[-71.444, 118.554, -94.391]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_windshield_vehicle_generic_glasswindows2_0.geometry} material={materials.vehicle_generic_glasswindows2} position={[0.003, 116.285, 35.013]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_backlight_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[0.002, 119.137, -204.187]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_sideglass_L_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[71.949, 113.646, -142.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_sideglass_R_rrghost_glass_0.geometry} material={materials.rrghost_glass} position={[-71.945, 113.646, -142.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.rrghost_wipers_rrghost_main_0.geometry} material={materials.rrghost_main} position={[-9.315, 99.316, 71.276]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[77.232, 34.613, 139.774]} rotation={[-Math.PI / 2, 0, 0]} scale={[121.685, 116.417, 116.417]} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[77.232, 34.613, -180.716]} rotation={[-Math.PI / 2, 0, 0]} scale={[121.685, 116.417, 116.417]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[-76.288, 34.576, 139.774]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[121.685, 116.417, 116.417]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[-76.288, 34.576, -180.716]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[121.685, 116.417, 116.417]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/rolls-royce_ghost.glb')
