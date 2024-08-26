import React, { useEffect,useContext } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/BMW_M3C.glb')
  const { currentAnimation} = useContext(AnimationContext);
 
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
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_headlight_R_LED_US_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g80law_headlight_R_LED_US_m3g81law_running_us_front_0.geometry} material={materials.m3g81law_running_us_front} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_headlight_L_LED_US_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g80law_headlight_L_LED_US_m3g81law_running_us_front_0.geometry} material={materials.m3g81law_running_us_front} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g80law_door_RR_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g80law_doorpanel_FR_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g80law_doorpanel_RL_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g80law_doorpanel_FL_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g80law_diffuser_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g80law_diffuser_a_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exhaust_R_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exhaust_R_a_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exh_tips_L_x_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exh_tips_L_x_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_exh_tips_L_x_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_exh_tips_L_x_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
          <mesh geometry={nodes.m3g81law_exh_tips_L_x_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exh_tips_R_x_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exh_tips_R_x_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_exh_tips_R_x_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_exh_tips_R_x_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
          <mesh geometry={nodes.m3g81law_exh_tips_R_x_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exh_muffler_L_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exh_muffler_L_a_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exh_muffler_R_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exh_muffler_R_a_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_exhaust_L_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_exhaust_L_a_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_intercooler_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_intercooler_m3g81law_Grille1_0.geometry} material={materials.m3g81law_Grille1} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_radiator_m3g81law_mechanical_detail_0.geometry} material={materials.m3g81law_mechanical_detail} />
          <mesh geometry={nodes.m3g81law_radiator_m3g81law_Grille1_0.geometry} material={materials.m3g81law_Grille1} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_body_ground_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} />
          <mesh geometry={nodes.m3g81law_body_ground_m3g81law_Heatshield_0.geometry} material={materials.m3g81law_Heatshield} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_headlight_R_LED_US_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_US_m3g81law_running_us_front_0.geometry} material={materials.m3g81law_running_us_front} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_running_front_0.geometry} material={materials.m3g81law_running_front} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Chrome_ext_0.geometry} material={materials.m3g81law_Chrome_ext} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Glass_Saphir_0.geometry} material={materials.m3g81law_Glass_Saphir} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_headlight_low_0.geometry} material={materials.m3g81law_headlight_low} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_signal_R_0.geometry} material={materials.m3g81law_signal_R} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED_m3g81law_headlight_high_0.geometry} material={materials.m3g81law_headlight_high} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_headlight_L_LED_US_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_headlight_L_LED_US_m3g81law_running_us_front_0.geometry} material={materials.m3g81law_running_us_front} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_taillightglass_L_dark_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_taillightglass_L_dark_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_tailgatelightglass_L_dark_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} />
          <mesh geometry={nodes.m3g81law_tailgatelightglass_L_dark_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_taillight_L_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_taillight_L_m3g81law_taillight_0.geometry} material={materials.m3g81law_taillight} />
          <mesh geometry={nodes.m3g81law_taillight_L_m3g81law_running_rear_0.geometry} material={materials.m3g81law_running_rear} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_tailgatelight_L_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_tailgatelight_L_m3g81law_taillight_0.geometry} material={materials.m3g81law_taillight} />
          <mesh geometry={nodes.m3g81law_tailgatelight_L_m3g81law_running_rear_0.geometry} material={materials.m3g81law_running_rear} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_headlightframe_R_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_headlightframe_R_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_headlightframe_R_m3g81law_Engine_0.geometry} material={materials.m3g81law_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_chmsl_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_chmsl_m3g81law_chmsl_0.geometry} material={materials.m3g81law_chmsl} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_letter_bum_comp_a_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_letter_bum_comp_a_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
          <mesh geometry={nodes.m3g81law_letter_bum_comp_a_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_lettering_comp_a_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_lettering_comp_a_m3g81law_Alu_ext_0.geometry} material={materials.m3g81law_Alu_ext} />
          <mesh geometry={nodes.m3g81law_lettering_comp_a_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_b_gauges_race_digidash_m3g81law_gauges_back_0.geometry} material={materials.m3g81law_gauges_back} />
          <mesh geometry={nodes.m3g81law_dash_b_gauges_race_digidash_m3g81law_digidash_screen_0.geometry} material={materials.m3g81law_digidash_screen} />
        </group>
        <group position={[37.6, 89.878, 27.455]} rotation={[-2.693, 0, 0]} scale={104.145}>
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Alcantara1_0.geometry} material={materials.m3g81law_Interior_Alcantara1} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_digidash_screen_0.geometry} material={materials.m3g81law_digidash_screen} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Plastic1_0.geometry} material={materials.m3g81law_Interior_Plastic1} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Wheel_Alpha_0.geometry} material={materials.m3g81law_Interior_Wheel_Alpha} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Black_Gloss_0.geometry} material={materials.m3g81law_Interior_Black_Gloss} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_gauges_back_0.geometry} material={materials.m3g81law_gauges_back} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_shiftlight_multi_7_0.geometry} material={materials.m3g81law_shiftlight_multi_7} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_shiftlight_multi_6_0.geometry} material={materials.m3g81law_shiftlight_multi_6} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Carbon_int_0.geometry} material={materials.m3g81law_Carbon_int} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_dash_steer_c_m3g81law_Interior_Logo_0.geometry} material={materials.m3g81law_Interior_Logo} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Grille2_0.geometry} material={materials.m3g81law_Grille2} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Grille3B_0.geometry} material={materials.m3g81law_Grille3B} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_20_0.geometry} material={materials.m3g81law_Interior_20} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_20_alpha_0.geometry} material={materials.m3g81law_Interior_20_alpha} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Carbon_int_0.geometry} material={materials.m3g81law_Carbon_int} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_gauges_back_0.geometry} material={materials.m3g81law_gauges_back} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Alu_riffle_0.geometry} material={materials.m3g81law_Interior_Alu_riffle} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Black_Gloss_0.geometry} material={materials.m3g81law_Interior_Black_Gloss} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Signs_20_0.geometry} material={materials.m3g81law_Interior_Signs_20} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Ignition_0.geometry} material={materials.m3g81law_Interior_Ignition} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Alcantara1_0.geometry} material={materials.m3g81law_Interior_Alcantara1} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_dash_b_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Grille5_0.geometry} material={materials.m3g81law_Grille5} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Grille7_0.geometry} material={materials.m3g81law_Grille7} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Zone4_0.geometry} material={materials.m3g81law_Interior_Zone4} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Zone5_0.geometry} material={materials.m3g81law_Interior_Zone5} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Plastic1_0.geometry} material={materials.m3g81law_Interior_Plastic1} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Fabric_0.geometry} material={materials.m3g81law_Interior_Fabric} />
          <mesh geometry={nodes.m3g81law_body_int_m3g81law_Interior_Alcantara1_0.geometry} material={materials.m3g81law_Interior_Alcantara1} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_luggage_cover_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_luggage_cover_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_intmirror_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_intmirror_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.m3g81law_intmirror_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_sunvisor_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
          <mesh geometry={nodes.m3g81law_sunvisor_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_sunvisor_m3g81law_Interior_Black_Gloss_0.geometry} material={materials.m3g81law_Interior_Black_Gloss} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Grille6_0.geometry} material={materials.m3g81law_Grille6} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Seatbelt_Material_0.geometry} material={materials.m3g81law_Seatbelt_Material} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Fabric_0.geometry} material={materials.m3g81law_Interior_Fabric} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_seats_R_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_seats_mats_a_m3g81law_Interior_Zone4_0.geometry} material={materials.m3g81law_Interior_Zone4} />
          <mesh geometry={nodes.m3g81law_seats_mats_a_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_seats_mats_a_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Grille6_0.geometry} material={materials.m3g81law_Grille6} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Carbon_int_0.geometry} material={materials.m3g81law_Carbon_int} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Zone2_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone2_Alpha} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Interior_Alcantara1_0.geometry} material={materials.m3g81law_Interior_Alcantara1} />
          <mesh geometry={nodes.m3g81law_seat_FR_m3g81law_Seatbelt_Material_0.geometry} material={materials.m3g81law_Seatbelt_Material} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Grille6_0.geometry} material={materials.m3g81law_Grille6} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Carbon_int_0.geometry} material={materials.m3g81law_Carbon_int} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Zone2_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone2_Alpha} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Interior_Alcantara1_0.geometry} material={materials.m3g81law_Interior_Alcantara1} />
          <mesh geometry={nodes.m3g81law_seat_FL_m3g81law_Seatbelt_Material_0.geometry} material={materials.m3g81law_Seatbelt_Material} />
        </group>
        <group position={[28.716, 30.996, 69.965]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_pedal_gas_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_pedal_gas_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
        </group>
        <group position={[50.744, 62.544, 79.552]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_pedal_brake_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_pedal_brake_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_pedal_brake_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_doorpanel_RR_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_doorpanel_RL_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_doorpanel_FR_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Grille4_0.geometry} material={materials.m3g81law_Grille4} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Zone1_Stiching_0.geometry} material={materials.m3g81law_Interior_Zone1_Stiching} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Zone1_Alpha_0.geometry} material={materials.m3g81law_Interior_Zone1_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Ambilight_0.geometry} material={materials.m3g81law_Interior_Ambilight} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Zone1_0.geometry} material={materials.m3g81law_Interior_Zone1} />
          <mesh geometry={nodes.m3g81law_doorpanel_FL_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
        </group>
        <group position={[29.09, 89.523, 33.433]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_wiperstalk_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_dash_wiperstalk_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
        </group>
        <group position={[46.102, 89.328, 33.29]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_signalstalk_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
          <mesh geometry={nodes.m3g81law_dash_signalstalk_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_Alu_0.geometry} material={materials.m3g81law_Interior_Alu} />
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_Signs_0.geometry} material={materials.m3g81law_Interior_Signs} />
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_Zone6_0.geometry} material={materials.m3g81law_Interior_Zone6} />
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_Black_Gloss_0.geometry} material={materials.m3g81law_Interior_Black_Gloss} />
          <mesh geometry={nodes.m3g81law_dash_shifter_a_m3g81law_Interior_Plastic2_0.geometry} material={materials.m3g81law_Interior_Plastic2} />
        </group>
        <group position={[37.587, 89.749, 27.787]} rotation={[-2.756, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_dash_paddles_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_dash_paddles_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_dash_paddles_m3g81law_Carbon_int_0.geometry} material={materials.m3g81law_Carbon_int} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_grille_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_grille_a_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_grille_a_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_mirror_L_a_m3g81law_signal_L_0.geometry} material={materials.m3g81law_signal_L} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_mirror_R_a_m3g81law_signal_R_0.geometry} material={materials.m3g81law_signal_R} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Windshield_frit_0.geometry} material={materials.m3g81law_Windshield_frit} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_tailgate_m3g81law_platelight_0.geometry} material={materials.m3g81law_platelight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_hood_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_hood_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_hood_m3g81law_Engine_0.geometry} material={materials.m3g81law_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_fender_R_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_fender_R_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_fender_L_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_fender_L_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_Windshield_frit_0.geometry} material={materials.m3g81law_Windshield_frit} />
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_door_RR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_Windshield_frit_0.geometry} material={materials.m3g81law_Windshield_frit} />
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_door_RL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_door_FR_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_door_FR_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_door_FR_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_door_FR_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_door_FR_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_door_FL_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_door_FL_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_door_FL_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_door_FL_m3g81law_Interior_0.geometry} material={materials.m3g81law_Interior} />
          <mesh geometry={nodes.m3g81law_door_FL_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_bumper_R_m3g81law_Glass_Red_0.geometry} material={materials.m3g81law_Glass_Red} />
          <mesh geometry={nodes.m3g81law_bumper_R_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_bumper_R_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_bumper_R_m3g81law_0.geometry} material={materials.m3g81law} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_bumper_F_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_bumper_F_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} />
          <mesh geometry={nodes.m3g81law_bumper_F_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_bumper_F_m3g81law_Engine_0.geometry} material={materials.m3g81law_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_body_m3g81law_0.geometry} material={materials.m3g81law} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Interior_Alpha_0.geometry} material={materials.m3g81law_Interior_Alpha} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Grille3_0.geometry} material={materials.m3g81law_Grille3} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Windshield_frit_0.geometry} material={materials.m3g81law_Windshield_frit} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_body_m3g81law_Engine_0.geometry} material={materials.m3g81law_Engine} />
        </group>
        <group position={[78.994, 38.904, 140.686]} rotation={[-Math.PI / 2, 0, 0]} scale={99.244}>
          <mesh geometry={nodes.m3g81law_rim_04_R20_m3g81law_Wheel1A_Badge_0.geometry} material={materials.m3g81law_Wheel1A_Badge} />
          <mesh geometry={nodes.m3g81law_rim_04_R20_m3g81law_Wheel1A_Rim_0.geometry} material={materials.m3g81law_Wheel1A_Rim} />
          <mesh geometry={nodes.m3g81law_rim_04_R20_m3g81law_Wheel1A_Vent_0.geometry} material={materials.m3g81law_Wheel1A_Vent} />
          <mesh geometry={nodes.m3g81law_rim_04_R20_m3g81law_Wheel1A_Screws_0.geometry} material={materials.m3g81law_Wheel1A_Screws} />
        </group>
        <group position={[79.042, 38.904, 140.686]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={90.294}>
          <mesh geometry={nodes['3_Wheel_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} />
          <mesh geometry={nodes['3_Wheel_amdb11_brake002_0'].geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes['3_Wheel_amdb11_misc_chrome002_0'].geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes['3_Wheel_amdb11_misc002_0'].geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes['3_Wheel_amdb11_caliper002_0'].geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_letter_fen_L_comp_a_m3g81law_Coloured_matte002_0.geometry} material={materials['m3g81law_Coloured_matte.002']} />
          <mesh geometry={nodes.m3g81law_letter_fen_L_comp_a_m3g81law_Alu_ext002_0.geometry} material={materials['m3g81law_Alu_ext.002']} />
          <mesh geometry={nodes.m3g81law_letter_fen_L_comp_a_m3g81law_Badge_A002_0.geometry} material={materials['m3g81law_Badge_A.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.m3g81law_letter_fen_R_comp_a_m3g81law_Coloured_matte002_0.geometry} material={materials['m3g81law_Coloured_matte.002']} />
          <mesh geometry={nodes.m3g81law_letter_fen_R_comp_a_m3g81law_Alu_ext002_0.geometry} material={materials['m3g81law_Alu_ext.002']} />
          <mesh geometry={nodes.m3g81law_letter_fen_R_comp_a_m3g81law_Badge_A002_0.geometry} material={materials['m3g81law_Badge_A.002']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_running_front_0.geometry} material={materials.m3g81law_running_front} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Chrome_ext_0.geometry} material={materials.m3g81law_Chrome_ext} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Glass_Saphir_0.geometry} material={materials.m3g81law_Glass_Saphir} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_headlight_low_0.geometry} material={materials.m3g81law_headlight_low} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_signal_R_0.geometry} material={materials.m3g81law_signal_R} />
          <mesh geometry={nodes.m3g81law_headlight_R_LED001_m3g81law_headlight_high_0.geometry} material={materials.m3g81law_headlight_high} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_headlightframe_R001_m3g81law_Base_0.geometry} material={materials.m3g81law_Base} />
          <mesh geometry={nodes.m3g81law_headlightframe_R001_m3g81law_Engine_Alpha_0.geometry} material={materials.m3g81law_Engine_Alpha} />
          <mesh geometry={nodes.m3g81law_headlightframe_R001_m3g81law_Engine_0.geometry} material={materials.m3g81law_Engine} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_taillightglass_L_dark001_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
          <mesh geometry={nodes.m3g81law_taillightglass_L_dark001_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_tailgatelightglass_L_dark001_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} />
          <mesh geometry={nodes.m3g81law_tailgatelightglass_L_dark001_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_taillight_L001_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_taillight_L001_m3g81law_taillight_0.geometry} material={materials.m3g81law_taillight} />
          <mesh geometry={nodes.m3g81law_taillight_L001_m3g81law_running_rear_0.geometry} material={materials.m3g81law_running_rear} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.m3g81law_tailgatelight_L001_m3g81law_Lights_Common_0.geometry} material={materials.m3g81law_Lights_Common} />
          <mesh geometry={nodes.m3g81law_tailgatelight_L001_m3g81law_taillight_0.geometry} material={materials.m3g81law_taillight} />
          <mesh geometry={nodes.m3g81law_tailgatelight_L001_m3g81law_running_rear_0.geometry} material={materials.m3g81law_running_rear} />
        </group>
        <group position={[78.994, 38.904, -146.315]} rotation={[-Math.PI / 2, 0, 0]} scale={99.244}>
          <mesh geometry={nodes.m3g81law_rim_04_R20001_m3g81law_Wheel1A_Badge_0.geometry} material={materials.m3g81law_Wheel1A_Badge} />
          <mesh geometry={nodes.m3g81law_rim_04_R20001_m3g81law_Wheel1A_Rim_0.geometry} material={materials.m3g81law_Wheel1A_Rim} />
          <mesh geometry={nodes.m3g81law_rim_04_R20001_m3g81law_Wheel1A_Vent_0.geometry} material={materials.m3g81law_Wheel1A_Vent} />
          <mesh geometry={nodes.m3g81law_rim_04_R20001_m3g81law_Wheel1A_Screws_0.geometry} material={materials.m3g81law_Wheel1A_Screws} />
        </group>
        <group position={[79.042, 38.904, -146.315]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={90.294}>
          <mesh geometry={nodes['3_Wheel001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} />
          <mesh geometry={nodes['3_Wheel001_amdb11_brake002_0'].geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes['3_Wheel001_amdb11_misc_chrome002_0'].geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes['3_Wheel001_amdb11_misc002_0'].geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes['3_Wheel001_amdb11_caliper002_0'].geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-78.618, 38.904, 140.686]} rotation={[-Math.PI / 2, 0, 0]} scale={[-99.244, 99.244, 99.244]}>
          <mesh geometry={nodes.m3g81law_rim_04_R20002_m3g81law_Wheel1A_Badge_0.geometry} material={materials.m3g81law_Wheel1A_Badge} />
          <mesh geometry={nodes.m3g81law_rim_04_R20002_m3g81law_Wheel1A_Rim_0.geometry} material={materials.m3g81law_Wheel1A_Rim} />
          <mesh geometry={nodes.m3g81law_rim_04_R20002_m3g81law_Wheel1A_Vent_0.geometry} material={materials.m3g81law_Wheel1A_Vent} />
          <mesh geometry={nodes.m3g81law_rim_04_R20002_m3g81law_Wheel1A_Screws_0.geometry} material={materials.m3g81law_Wheel1A_Screws} />
        </group>
        <group position={[-78.666, 38.904, 140.686]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-90.294, 90.294, 90.294]}>
          <mesh geometry={nodes['3_Wheel002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} />
          <mesh geometry={nodes['3_Wheel002_amdb11_brake002_0'].geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes['3_Wheel002_amdb11_misc_chrome002_0'].geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes['3_Wheel002_amdb11_misc002_0'].geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes['3_Wheel002_amdb11_caliper002_0'].geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-78.618, 38.904, -146.315]} rotation={[-Math.PI / 2, 0, 0]} scale={[-99.244, 99.244, 99.244]}>
          <mesh geometry={nodes.m3g81law_rim_04_R20003_m3g81law_Wheel1A_Badge_0.geometry} material={materials.m3g81law_Wheel1A_Badge} />
          <mesh geometry={nodes.m3g81law_rim_04_R20003_m3g81law_Wheel1A_Rim_0.geometry} material={materials.m3g81law_Wheel1A_Rim} />
          <mesh geometry={nodes.m3g81law_rim_04_R20003_m3g81law_Wheel1A_Vent_0.geometry} material={materials.m3g81law_Wheel1A_Vent} />
          <mesh geometry={nodes.m3g81law_rim_04_R20003_m3g81law_Wheel1A_Screws_0.geometry} material={materials.m3g81law_Wheel1A_Screws} />
        </group>
        <group position={[-78.666, 38.904, -146.315]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-90.294, 90.294, 90.294]}>
          <mesh geometry={nodes['3_Wheel003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} />
          <mesh geometry={nodes['3_Wheel003_amdb11_brake002_0'].geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes['3_Wheel003_amdb11_misc_chrome002_0'].geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes['3_Wheel003_amdb11_misc002_0'].geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes['3_Wheel003_amdb11_caliper002_0'].geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <mesh geometry={nodes.m3g80law_tubs_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g80law_tubs_F_outer_bumper_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g80law_tubs_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g80law_tub_FR_outer_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g80law_tub_FL_outer_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g80law_body_ground_detail_m3g81law_detail_0.geometry} material={materials.m3g81law_detail} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_undertray_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tubs_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_driveshaft_RF_awd_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} position={[-0.009, 34.555, 2.532]} rotation={[-Math.PI / 2, 0, 0]} scale={0.966} />
        <mesh geometry={nodes.m3g81law_driveshaft_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} position={[-0.008, 34.442, -53.958]} rotation={[-Math.PI / 2, 0, 0]} scale={0.966} />
        <mesh geometry={nodes.m3g81law_fueltank_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_heatshield_m3g81law_Heatshield_0.geometry} material={materials.m3g81law_Heatshield} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_bumperbar_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tubs_F_outer_bumper_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tubs_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tub_FR_outer_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tub_FL_outer_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_reinforcement_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_upperarm_R_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_upperarm_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_transmission_support_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_transmission_m3g81law_mechanical_detail_0.geometry} material={materials.m3g81law_mechanical_detail} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_transfercase_m3g81law_mechanical_detail_0.geometry} material={materials.m3g81law_mechanical_detail} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tierod_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_swaybar_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_swaybar_links_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_swaybar_links_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_swaybar_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_subframe_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_strut_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_spring_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_shock_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_radsupport_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_lowerarm_R_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_lowerarm_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_lowerarm_F_b_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_lowerarm_F_a_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_hub_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_hub_F_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_halfshaft_R_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_driveshaft_F_m3g81law_mechanical_detail_0.geometry} material={materials.m3g81law_mechanical_detail} position={[-14.618, 31.645, 38.857]} rotation={[-Math.PI / 2, 0, 0]} scale={96.587} />
        <mesh geometry={nodes.m3g81law_diff_m3g81law_mechanical_0.geometry} material={materials.m3g81law_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_body_ground_detail_m3g81law_detail_0.geometry} material={materials.m3g81law_detail} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_headlightglass_R_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_chmsl_glass_m3g81law_Glass_Red_0.geometry} material={materials.m3g81law_Glass_Red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_logo_R_c_m3g81law_Badge_C_0.geometry} material={materials.m3g81law_Badge_C} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_logo_R_b_m3g81law_Badge_B_0.geometry} material={materials.m3g81law_Badge_B} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_logo_R_a_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_logo_F_a_m3g81law_Badge_A_0.geometry} material={materials.m3g81law_Badge_A} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_dash_b_unused_screen_m3g81law_Interior_20_0.geometry} material={materials.m3g81law_Interior_20} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_dash_b_screen_m3g81law_screen_0.geometry} material={materials.m3g81law_screen} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_seat_logo_FR_01_m3g81law_Interior_Logo_0.geometry} material={materials.m3g81law_Interior_Logo} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_seat_logo_FL_01_m3g81law_Interior_Logo_0.geometry} material={materials.m3g81law_Interior_Logo} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_windshield_m3g81law_Glass_0.geometry} material={materials.m3g81law_Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tailgateglass_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_sideglass_R_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_sideglass_L_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_doorglass_RR_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_doorglass_RL_m3g81law_Glass_Dark_0.geometry} material={materials.m3g81law_Glass_Dark} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_doorglass_FR_m3g81law_Glass_0.geometry} material={materials.m3g81law_Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_doorglass_FL_m3g81law_Glass_0.geometry} material={materials.m3g81law_Glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tailgate_top_c_m3g81law_0.geometry} material={materials.m3g81law} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tailgate_top_b_m3g81law_Carbon_ext_0.geometry} material={materials.m3g81law_Carbon_ext} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_body_quarters_eu_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_roof_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_wipers_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_bumper_F_lip_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_skirts_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_wiper_R_m3g81law_Coloured_matte_0.geometry} material={materials.m3g81law_Coloured_matte} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_tailgate_top_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_spoiler_comp_a_m3g81law_Coloured_gloss_0.geometry} material={materials.m3g81law_Coloured_gloss} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.m3g81law_headlightglass_R001_m3g81law_Glass_Clear_0.geometry} material={materials.m3g81law_Glass_Clear} rotation={[-Math.PI / 2, 0, 0]} scale={[-100, 100, 100]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/BMW_M3C.glb')
