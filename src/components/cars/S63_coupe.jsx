/* eslint-disable */

import React, { useContext ,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/S63_coupe.glb')
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
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_engine_S63_Grille4_0.geometry} material={materials.S63_Grille4} />
          <mesh geometry={nodes.s63amg21_engine_S63_Engine_0.geometry} material={materials.S63_Engine} />
          <mesh geometry={nodes.s63amg21_engine_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
          <mesh geometry={nodes.s63amg21_engine_S63_Carbon1001_0.geometry} material={materials['S63_Carbon1.001']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_door_R_cf_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_door_R_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_door_R_cf_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_door_R_cf_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_door_L_cf_S63_Grille6_0.geometry} material={materials.S63_Grille6} />
          <mesh geometry={nodes.s63amg21_door_L_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_door_L_cf_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_door_L_cf_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_door_L_cf_S63_Interior_0.geometry} material={materials.S63_Interior} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_hood_cf_S63_Engine_0.geometry} material={materials.S63_Engine} />
          <mesh geometry={nodes.s63amg21_hood_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_hood_cf_S63_Grille4_0.geometry} material={materials.S63_Grille4} />
          <mesh geometry={nodes.s63amg21_hood_cf_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_bumper_F_lip_a2_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_bumper_F_lip_a2_S63_Brabus_0.geometry} material={materials.S63_Brabus} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_logo_F_a2_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_logo_F_a2_S63_Brabus_0.geometry} material={materials.S63_Brabus} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_bumper_R_b_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_bumper_R_b_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_bumper_R_b_S63_Grille1_0.geometry} material={materials.S63_Grille1} />
          <mesh geometry={nodes.s63amg21_bumper_R_b_s63amg21_runninglight_0.geometry} material={materials.s63amg21_runninglight} />
          <mesh geometry={nodes.s63amg21_bumper_R_b_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_fenderlogo_R_b_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_fenderlogo_R_b_S63_Badge_0.geometry} material={materials.S63_Badge} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_bumper_F_b_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_bumper_F_b_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_bumper_F_b_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_bumper_F_b_S63_Brabus_0.geometry} material={materials.S63_Brabus} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_grille_b2_S63_Coloured001_0.geometry} material={materials['S63_Coloured.001']} />
          <mesh geometry={nodes.s63amg21_grille_b2_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_grille_b2_S63_Brabus2_0.geometry} material={materials.S63_Brabus2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_logo_R_d_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_logo_R_d_S63_Brabus_0.geometry} material={materials.S63_Brabus} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_tubs_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_tubs_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_engbaycrap_S63_Engine_0.geometry} material={materials.S63_Engine} />
          <mesh geometry={nodes.s63amg21_engbaycrap_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_radsupport_S63_Engine_0.geometry} material={materials.S63_Engine} />
          <mesh geometry={nodes.s63amg21_radsupport_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
          <mesh geometry={nodes.s63amg21_radsupport_S63_Base_0.geometry} material={materials.S63_Base} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.s63amg21_headlight_L_S63_Light001_0.geometry} material={materials['S63_Light.001']} />
          <mesh geometry={nodes.s63amg21_headlight_L_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_headlight_L_s63amg21_foglight_0.geometry} material={materials.s63amg21_foglight} />
          <mesh geometry={nodes.s63amg21_headlight_L_s63amg21_runninglight001_0.geometry} material={materials['s63amg21_runninglight.001']} />
          <mesh geometry={nodes.s63amg21_headlight_L_s63amg21_headlight_0.geometry} material={materials.s63amg21_headlight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_trunklight_L_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_trunklight_L_s63amg21_taillight_0.geometry} material={materials.s63amg21_taillight} />
          <mesh geometry={nodes.s63amg21_trunklight_L_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_trunklight_L_s63amg21_runninglight_0.geometry} material={materials.s63amg21_runninglight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_taillight_L_s63amg21_runninglight_0.geometry} material={materials.s63amg21_runninglight} />
          <mesh geometry={nodes.s63amg21_taillight_L_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_taillight_L_s63amg21_taillight_0.geometry} material={materials.s63amg21_taillight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_taillightframe_L_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_taillightframe_L_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_taillight_R_s63amg21_runninglight_0.geometry} material={materials.s63amg21_runninglight} />
          <mesh geometry={nodes.s63amg21_taillight_R_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_taillight_R_s63amg21_taillight_0.geometry} material={materials.s63amg21_taillight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_taillightframe_R_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_taillightframe_R_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
        </group>
        <group position={[-36.097, 83.112, -30.857]} rotation={[-Math.PI / 9, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_steer_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_steer_S63_InteriorA_0.geometry} material={materials.S63_InteriorA} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_InteriorA_Zone2_0.geometry} material={materials.S63_InteriorA_Zone2} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_Interior_Zone2_0.geometry} material={materials.S63_Interior_Zone2} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_InteriorA_0.geometry} material={materials.S63_InteriorA} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_S63_Grille5_0.geometry} material={materials.S63_Grille5} />
          <mesh geometry={nodes.s63amg21_doorpanel_L_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_radiator_side_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_radiator_side_S63_Grille2_0.geometry} material={materials.S63_Grille2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_mirror_R_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.s63amg21_mirror_R_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
          <mesh geometry={nodes.s63amg21_mirror_R_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_mirror_R_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_mirror_R_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_mirror_R_s63amg21_signal_R_0.geometry} material={materials.s63amg21_signal_R} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_mirror_L_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.s63amg21_mirror_L_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
          <mesh geometry={nodes.s63amg21_mirror_L_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_mirror_L_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_mirror_L_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_mirror_L_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_intmirror_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.s63amg21_intmirror_S63_Interior_0.geometry} material={materials.S63_Interior} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_gaspedal_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_gaspedal_S63_Interior_0.geometry} material={materials.S63_Interior} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_brakepedal_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_brakepedal_S63_Interior_0.geometry} material={materials.S63_Interior} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_seats_R_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_InteriorColourZone_0.geometry} material={materials.S63_InteriorColourZone} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_InteriorTillingColourZone_0.geometry} material={materials.S63_InteriorTillingColourZone} />
          <mesh geometry={nodes.s63amg21_seats_R_S63_Engine_0.geometry} material={materials.S63_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_dash_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_dash_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_dash_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_dash_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_dash_S63_Interior_Zone2_0.geometry} material={materials.S63_Interior_Zone2} />
          <mesh geometry={nodes.s63amg21_dash_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_dash_S63_InteriorA_0.geometry} material={materials.S63_InteriorA} />
          <mesh geometry={nodes.s63amg21_dash_S63_Grille6_0.geometry} material={materials.S63_Grille6} />
          <mesh geometry={nodes.s63amg21_dash_S63_Grille5_0.geometry} material={materials.S63_Grille5} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_seat_FR_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_InteriorColourZone_0.geometry} material={materials.S63_InteriorColourZone} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_InteriorTillingColourZone_0.geometry} material={materials.S63_InteriorTillingColourZone} />
          <mesh geometry={nodes.s63amg21_seat_FR_S63_Engine_0.geometry} material={materials.S63_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_seat_FL_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_InteriorColourZone_0.geometry} material={materials.S63_InteriorColourZone} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_InteriorTillingColourZone_0.geometry} material={materials.S63_InteriorTillingColourZone} />
          <mesh geometry={nodes.s63amg21_seat_FL_S63_Engine_0.geometry} material={materials.S63_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_radiator_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_radiator_S63_Grille2_0.geometry} material={materials.S63_Grille2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_diffusor_b_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_diffusor_b_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_diffusor_b_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_diffusor_b_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_trunklight_R_S63_Light_0.geometry} material={materials.S63_Light} />
          <mesh geometry={nodes.s63amg21_trunklight_R_s63amg21_taillight_0.geometry} material={materials.s63amg21_taillight} />
          <mesh geometry={nodes.s63amg21_trunklight_R_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_trunklight_R_s63amg21_runninglight_0.geometry} material={materials.s63amg21_runninglight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_trunk_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_trunk_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_trunk_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_trunk_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_trunk_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_body_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
          <mesh geometry={nodes.s63amg21_body_S63_Base_0.geometry} material={materials.S63_Base} />
          <mesh geometry={nodes.s63amg21_body_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_body_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_body_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_body_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_body_S63_Interior_Zone2_0.geometry} material={materials.S63_Interior_Zone2} />
          <mesh geometry={nodes.s63amg21_body_S63_Grille6_0.geometry} material={materials.S63_Grille6} />
          <mesh geometry={nodes.s63amg21_body_S63_Grille5_0.geometry} material={materials.S63_Grille5} />
          <mesh geometry={nodes.s63amg21_body_S63_Grille4_0.geometry} material={materials.S63_Grille4} />
          <mesh geometry={nodes.s63amg21_body_S63_EngineA_0.geometry} material={materials.S63_EngineA} />
          <mesh geometry={nodes.s63amg21_body_S63_Grille3_0.geometry} material={materials.S63_Grille3} />
          <mesh geometry={nodes.s63amg21_body_S63_Engine_0.geometry} material={materials.S63_Engine} />
          <mesh geometry={nodes.s63amg21_body_s63amg21_0.geometry} material={materials.s63amg21} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Interior_0.geometry} material={materials.S63_Interior} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_InteriorA_Zone2_0.geometry} material={materials.S63_InteriorA_Zone2} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Interior_Zone1_0.geometry} material={materials.S63_Interior_Zone1} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Interior_Zone2_0.geometry} material={materials.S63_Interior_Zone2} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_InteriorA_Zone1_0.geometry} material={materials.S63_InteriorA_Zone1} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_InteriorA_0.geometry} material={materials.S63_InteriorA} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Grille6_0.geometry} material={materials.S63_Grille6} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_S63_Grille5_0.geometry} material={materials.S63_Grille5} />
          <mesh geometry={nodes.s63amg21_doorpanel_R_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} />
        </group>
        <group position={[-73.525, 35.437, -138.287]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={106.831}>
          <mesh geometry={nodes.brabus21_wheel_01_F_brabus_black_0.geometry} material={materials.brabus_black} />
          <mesh geometry={nodes.brabus21_wheel_01_F_Brabus_rim_specmap_0.geometry} material={materials.Brabus_rim_specmap} />
          <mesh geometry={nodes.brabus21_wheel_01_F_brabus_rim_logo_0.geometry} material={materials.brabus_rim_logo} />
        </group>
        <group position={[-75.036, 35.437, -138.287]} rotation={[Math.PI / 2, 0.035, 0]} scale={[112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-73.525, 35.437, 140.029]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={106.831}>
          <mesh geometry={nodes.brabus21_wheel_01_F001_brabus_black_0.geometry} material={materials.brabus_black} />
          <mesh geometry={nodes.brabus21_wheel_01_F001_Brabus_rim_specmap_0.geometry} material={materials.Brabus_rim_specmap} />
          <mesh geometry={nodes.brabus21_wheel_01_F001_brabus_rim_logo_0.geometry} material={materials.brabus_rim_logo} />
        </group>
        <group position={[-75.036, 35.437, 140.029]} rotation={[Math.PI / 2, 0.035, 0]} scale={[112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.s63amg21_fenderlogo_R_b001_S63_Coloured_0.geometry} material={materials.S63_Coloured} />
          <mesh geometry={nodes.s63amg21_fenderlogo_R_b001_S63_Badge_0.geometry} material={materials.S63_Badge} />
        </group>
        <group position={[73.748, 35.437, -138.287]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-106.831, 106.831, 106.831]}>
          <mesh geometry={nodes.brabus21_wheel_01_F002_brabus_black_0.geometry} material={materials.brabus_black} />
          <mesh geometry={nodes.brabus21_wheel_01_F002_Brabus_rim_specmap_0.geometry} material={materials.Brabus_rim_specmap} />
          <mesh geometry={nodes.brabus21_wheel_01_F002_brabus_rim_logo_0.geometry} material={materials.brabus_rim_logo} />
        </group>
        <group position={[75.259, 35.437, -138.287]} rotation={[Math.PI / 2, -0.035, 0]} scale={[-112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[73.748, 35.437, 140.029]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-106.831, 106.831, 106.831]}>
          <mesh geometry={nodes.brabus21_wheel_01_F003_brabus_black_0.geometry} material={materials.brabus_black} />
          <mesh geometry={nodes.brabus21_wheel_01_F003_Brabus_rim_specmap_0.geometry} material={materials.Brabus_rim_specmap} />
          <mesh geometry={nodes.brabus21_wheel_01_F003_brabus_rim_logo_0.geometry} material={materials.brabus_rim_logo} />
        </group>
        <group position={[75.259, 35.437, 140.029]} rotation={[Math.PI / 2, -0.035, 0]} scale={[-112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.s63amg21_headlight_L001_S63_Light001_0.geometry} material={materials['S63_Light.001']} />
          <mesh geometry={nodes.s63amg21_headlight_L001_s63amg21_signal_L_0.geometry} material={materials.s63amg21_signal_L} />
          <mesh geometry={nodes.s63amg21_headlight_L001_s63amg21_foglight_0.geometry} material={materials.s63amg21_foglight} />
          <mesh geometry={nodes.s63amg21_headlight_L001_s63amg21_runninglight001_0.geometry} material={materials['s63amg21_runninglight.001']} />
          <mesh geometry={nodes.s63amg21_headlight_L001_s63amg21_headlight_0.geometry} material={materials.s63amg21_headlight} />
        </group>
        <mesh geometry={nodes.s63amg21_gauges_vivace_gauges_screen_0.geometry} material={materials.vivace_gauges_screen} position={[-2.031, 0.677, 0.258]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_display_screen_vivace_gps_screen001_0.geometry} material={materials['vivace_gps_screen.001']} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_headers_race_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_v8_S63_v8_0.geometry} material={materials.S63_v8} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_v8_gasparts_S63_v8_0.geometry} material={materials.S63_v8} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_fender_R_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.s63amg21_roof_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_body_stock_cf_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_spoiler_d_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_lettering_800_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_lettering_brabus_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_bodyunder_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_dash_display_S63_Gauge_back_0.geometry} material={materials.S63_Gauge_back} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_trunklightglass_L_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_trunklightglass_R_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_headlightglass_R_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_headlightglass_L_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_taillightglass_R_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_taillightglass_L_s63amg21_glass_0.geometry} material={materials.s63amg21_glass} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_doorglass_R_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_windshield_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_sideglass_L_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_backlight_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_roofglass_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_sideglass_R_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_skirt_L_carbon_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_skirt_R_carbon_S63_Carbon1_0.geometry} material={materials.S63_Carbon1} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_paddles_S63_Interior_0.geometry} material={materials.S63_Interior} position={[-36.097, 83.112, -30.857]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_wiperstalk_S63_Interior_0.geometry} material={materials.S63_Interior} position={[-29.36, 84.494, -34.835]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_signalstalk_S63_Interior_0.geometry} material={materials.S63_Interior} position={[-42.041, 84.143, -35.19]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_sunvisor_S63_Interior_0.geometry} material={materials.S63_Interior} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_skirt_L_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_skirt_R_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_wipers_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_exhausttip_L_a_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_exhausttip_R_a_S63_Coloured_0.geometry} material={materials.S63_Coloured} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_headlightframe_R_S63_Base_0.geometry} material={materials.S63_Base} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_headlightframe_L_S63_Base_0.geometry} material={materials.S63_Base} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_chmsl_s63amg21_chmsl_0.geometry} material={materials.s63amg21_chmsl} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_mirrorsignal_R_S63_Light001_0.geometry} material={materials['S63_Light.001']} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes['#InteriorEmissive_S63_Interior_0'].geometry} material={materials.S63_Interior} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_doorglass_L_int_s63amg21_glass_int_0.geometry} material={materials.s63amg21_glass_int} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_driveshaft_F_s63amg21_0.geometry} material={materials.s63amg21} position={[-14.365, 33.44, -86.353]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.s63amg21_swaybar_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_transmission_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_transfercase_s63amg21_0.geometry} material={materials.s63amg21} position={[0, -5.195, 0]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_diff_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_exhaust_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_intercooler_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_bumperbar_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_lowerarm_F_a_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_heatshield_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_swaybar_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_diff_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_driveshaft_s63amg21_0.geometry} material={materials.s63amg21} position={[0, 31.687, 42.076]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes.s63amg21_fueltank_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_tierod_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_steeringbox_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_spring_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_tierod_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_upperarm_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_lowerarm_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_hub_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_subframe_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_strut_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_hub_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_halfshaft_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_halfshaft_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_subframe_F_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_lowerarm_F_b_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.s63amg21_shock_R_s63amg21_0.geometry} material={materials.s63amg21} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-76.041, 35.437, -138.287]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-76.041, 35.437, 140.029]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[76.264, 35.437, -138.287]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[76.264, 35.437, 140.029]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-127.027, 104.296, 104.296]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/S63_coupe.glb')
