/* eslint-disable */

import React, { useContext,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/Brabus_G900.glb')
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
        <group position={[0.518, 103.058, 192.755]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_radiator1_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_radiator1_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_radiator1_doortags_diffx_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[0.518, 103.058, 192.755]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_radiator_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_radiator_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_radiator_doortags_diffx_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[0.518, 103.058, 192.755]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['fullsize_radiator_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes.fullsize_radiator_common_black010_0.geometry} material={materials.common_black010} />
          <mesh geometry={nodes.fullsize_radiator_doortags_diffx_0.geometry} material={materials.signal_R} />
        </group>
        <group position={[4.503, 108.234, 149.413]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_engine_v8_55_logo_brabus_01_0'].geometry} material={materials.signal_R_0} />
          <mesh geometry={nodes['G-class_engine_v8_55_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_engine_v8_55_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_engine_v8_55_gavril_v8_0'].geometry} material={materials.gavril_v8} />
          <mesh geometry={nodes['G-class_engine_v8_55_red_b_0'].geometry} material={materials.red_b} />
          <mesh geometry={nodes['G-class_engine_v8_55_carbon_sesto_0'].geometry} material={materials.carbon_sesto} />
          <mesh geometry={nodes['G-class_engine_v8_55_common_black033_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[-87.591, 36.411, -57.536]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_sidepipe_R_G900_rocket_ductape004_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_sidepipe_R_G900_rocket_exhausts_silver_0'].geometry} material={materials.exhausts_silver} />
          <mesh geometry={nodes['G-class_sidepipe_R_G900_rocket_G900_rocket_exhaust_carbon_0'].geometry} material={materials.G900_rocket_exhaust_carbon} />
          <mesh geometry={nodes['G-class_sidepipe_R_G900_rocket_Akrapovic_0'].geometry} material={materials.Akrapovic} />
        </group>
        <group position={[87.897, 36.402, -57.646]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_sidepipe_L_G900_rocket_ductape004_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_sidepipe_L_G900_rocket_exhausts_silver_0'].geometry} material={materials.exhausts_silver} />
          <mesh geometry={nodes['G-class_sidepipe_L_G900_rocket_G900_rocket_exhaust_carbon_0'].geometry} material={materials.G900_rocket_exhaust_carbon} />
          <mesh geometry={nodes['G-class_sidepipe_L_G900_rocket_Akrapovic_0'].geometry} material={materials.Akrapovic} />
        </group>
        <group position={[40.714, 124.788, 36.093]} rotation={[-2.82, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_leatherbmp2_0'].geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_symbols_0'].geometry} material={materials.signal_R_2} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_symbols_embossed_0'].geometry} material={materials.symbols_embossed} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_leather_wheel_0'].geometry} material={materials.signal_R_3} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_steeringwheel_plastic_0'].geometry} material={materials.steeringwheel_plastic} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_fx_0'].geometry} material={materials.material} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_eng_brabus1_0'].geometry} material={materials.signal_R_4} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_G900_rocket_red_int_0'].geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes['G-class_steeringwheel_G900_rocket_G900_rocket_carbon_sesto3_0'].geometry} material={materials.G900_rocket_carbon_sesto3} />
        </group>
        <group position={[-75.693, 110.026, -58.615]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_symbols_0'].geometry} material={materials.signal_R_2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_int_badges_0'].geometry} material={materials.signal_R_6} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.signal_R_7} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.signal_R_8} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_door_red_0'].geometry} material={materials.door_red} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_G900_rocket_red_int_0'].geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_G900_rocket_carbon_sesto3_0'].geometry} material={materials.G900_rocket_carbon_sesto3} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_G900_rocket_urus_27__PAINT_2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_G900_rocket_speakers_d_0'].geometry} material={materials.signal_R_9} />
        </group>
        <group position={[75.399, 110.034, -58.67]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_symbols_0'].geometry} material={materials.signal_R_2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_int_badges_0'].geometry} material={materials.signal_R_6} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.signal_R_7} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.signal_R_8} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_door_red_0'].geometry} material={materials.door_red} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_G900_rocket_red_int_0'].geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_G900_rocket_carbon_sesto3_0'].geometry} material={materials.G900_rocket_carbon_sesto3} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_G900_rocket_urus_27__PAINT_2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_G900_rocket_speakers_d_0'].geometry} material={materials.signal_R_9} />
        </group>
        <group position={[-75.437, 109.66, 34.844]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_symbols_0'].geometry} material={materials.signal_R_2} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_int_badges_0'].geometry} material={materials.signal_R_6} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.signal_R_7} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_black3_0'].geometry} material={materials.black3} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.signal_R_8} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_door_red_0'].geometry} material={materials.door_red} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_G900_rocket_red_int_0'].geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_G900_rocket_carbon_sesto3_0'].geometry} material={materials.G900_rocket_carbon_sesto3} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_G900_rocket_urus_27__PAINT_2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_G900_rocket_speakers_d_0'].geometry} material={materials.signal_R_9} />
          <mesh geometry={nodes['G-class_FR_doorpanel_rocket_G900_rocket_speakers2_d_0'].geometry} material={materials.signal_R_10} />
        </group>
        <group position={[75.258, 110.836, 35.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_symbols_0'].geometry} material={materials.signal_R_2} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_int_badges_0'].geometry} material={materials.signal_R_6} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.signal_R_7} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_G900_rocket_carbon_sesto3_0'].geometry} material={materials.G900_rocket_carbon_sesto3} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_black3_0'].geometry} material={materials.black3} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.signal_R_8} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_door_red_0'].geometry} material={materials.door_red} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_G900_rocket_red_int_0'].geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_G900_rocket_urus_27__PAINT_2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_G900_rocket_speakers_d_0'].geometry} material={materials.signal_R_9} />
          <mesh geometry={nodes['G-class_FL_doorpanel_rocket_G900_rocket_speakers2_d_0'].geometry} material={materials.signal_R_10} />
        </group>
        <group position={[7.984, 120.597, 23.709]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_interior_leather_jesko2_0.geometry} material={materials.signal_R_7} />
          <mesh geometry={nodes.G900_rocket_interior_setlogo01x_0.geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes.G900_rocket_interior_G900_rocket_carbon_sesto3_0.geometry} material={materials.G900_rocket_carbon_sesto3} />
          <mesh geometry={nodes['G900_rocket_interior_G-class_mirror_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes.G900_rocket_interior_G900_rocket_speakers_d_0.geometry} material={materials.signal_R_9} />
          <mesh geometry={nodes.G900_rocket_interior_G900_rocket_urus_27__PAINT_2_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes.G900_rocket_interior_G900_rocket_red_int_0.geometry} material={materials.G900_rocket_red_int} />
          <mesh geometry={nodes.G900_rocket_interior_brabus_dash_skin_0.geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes.G900_rocket_interior_G900_rocket_speakers2_d_0.geometry} material={materials.signal_R_10} />
          <mesh geometry={nodes.G900_rocket_interior_cas_0.geometry} material={materials.material_31} />
          <mesh geometry={nodes.G900_rocket_interior_leatherbmp2_0.geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes.G900_rocket_interior_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.G900_rocket_interior_door_plastic_0.geometry} material={materials.door_plastic} />
          <mesh geometry={nodes.G900_rocket_interior_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes.G900_rocket_interior_interiordfs_0.geometry} material={materials.interiordfs} />
          <mesh geometry={nodes.G900_rocket_interior_int_badges_clock_0.geometry} material={materials.RGB_int_0} />
          <mesh geometry={nodes.G900_rocket_interior_AMG_dash_black_0.geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes.G900_rocket_interior_AMG_int_belt_color_0.geometry} material={materials.signal_R_11} />
          <mesh geometry={nodes.G900_rocket_interior_setlogo01_0.geometry} material={materials.signal_R_12} />
          <mesh geometry={nodes.G900_rocket_interior_grill3_0.geometry} material={materials.signal_R_13} />
          <mesh geometry={nodes.G900_rocket_interior_seat_plastic_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.G900_rocket_interior_black3_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.G900_rocket_interior_G900_roof_buttons_0.geometry} material={materials.signal_R} />
        </group>
        <group position={[-0.147, 198.007, -176.123]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_spoiler_G900_rocket_spoiler_carbon_0.geometry} material={materials.G900_rocket_spoiler_carbon} />
          <mesh geometry={nodes.G900_rocket_spoiler_G900_rocket_FB_red_0.geometry} material={materials.G900_rocket_FB_red} />
        </group>
        <group position={[-71.381, 111.448, 191.546]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_R_AMG_G-class_signal_L_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_signal_R_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_R_AMG_nlightsf20_0'].geometry} material={materials.nlightsf20} />
          <mesh geometry={nodes['G-class_signal_R_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_R_AMG_AMG_signal_R_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[71.082, 111.448, 191.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_L_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_L_AMG_nlightsf20_0'].geometry} material={materials.nlightsf20} />
          <mesh geometry={nodes['G-class_signal_L_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_L_AMG_lights_lod0_a004_0'].geometry} material={materials.signal_R} />
          <mesh geometry={nodes['G-class_signal_L_AMG_G-class_signal_L_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-62.43, 92.64, 207.355]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlight_R_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_G-class_lightled_0'].geometry} material={materials['G-class_lightled']} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_lamp_alpha_0'].geometry} material={materials.lamp_alpha} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_G-class_headlight_0'].geometry} material={materials['G-class_headlight']} />
        </group>
        <group position={[62.174, 92.639, 207.374]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlight_L_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_G-class_lightled_0'].geometry} material={materials['G-class_lightled']} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_lamp_alpha_0'].geometry} material={materials.lamp_alpha} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_G-class_headlight_0'].geometry} material={materials['G-class_headlight']} />
        </group>
        <group position={[-0.441, 61.507, -137.52]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_R_sport_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_R_sport_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 60.042, -137.772]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_R_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_R_race_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 63.083, -132.947]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_R_offroad_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 56.832, -138.301]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_R_alt_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_R_alt_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 57.38, 152.105]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_F_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_F_race_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 62.902, 146.943]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_F_dual_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_F_dual_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-0.441, 58.056, 152.107]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_shock_F_alt_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_shock_F_alt_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[-2.331, 45.78, 15.449]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_exhaust_v8_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_exhaust_v8_gavril_v8004_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[-28.253, 46.541, 31.456]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_exhaust_i6_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_exhaust_i6_gavril_v8004_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[-0.441, 60.029, 150.259]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_coilover_F_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} />
          <mesh geometry={nodes['G-class_coilover_F_race_generic_shock_absorber_0'].geometry} material={materials.RGB_int} />
        </group>
        <group position={[0.288, 55.184, 204.578]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_front_bamper_radiator_plastic5_0.geometry} material={materials.plastic5} />
          <mesh geometry={nodes.brabus_front_bamper_radiator_radiator_silver_0.geometry} material={materials.radiator_silver} />
        </group>
        <group position={[-39.215, 102.38, -202.994]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_logo_red_b004_0.geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes.brabus_logo_black4_0.geometry} material={materials.black4} />
        </group>
        <group position={[-41.561, 120.938, -12.919]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_passanger_seat_leatherbmp2_0.geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes.brabus_passanger_seat_seat_plastic_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.brabus_passanger_seat_red_b004_0.geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes.brabus_passanger_seat_urus_27__PAINT_2__0.geometry} material={materials.urus_27__PAINT_2} />
          <mesh geometry={nodes.brabus_passanger_seat_black2_0.geometry} material={materials.black2} />
          <mesh geometry={nodes.brabus_passanger_seat_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.brabus_passanger_seat_logo1_brabus_01__PAINT_2__0.geometry} material={materials.signal_R_0} />
          <mesh geometry={nodes.brabus_passanger_seat_log_brabus_0.geometry} material={materials.signal_R_14} />
        </group>
        <group position={[41.363, 121.88, -13.398]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_driver_seat_leatherbmp2_0.geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes.brabus_driver_seat_seat_plastic_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.brabus_driver_seat_red_b004_0.geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes.brabus_driver_seat_urus_27__PAINT_2__0.geometry} material={materials.urus_27__PAINT_2} />
          <mesh geometry={nodes.brabus_driver_seat_black2_0.geometry} material={materials.black2} />
          <mesh geometry={nodes.brabus_driver_seat_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.brabus_driver_seat_logo1_brabus_01__PAINT_2__0.geometry} material={materials.signal_R_0} />
          <mesh geometry={nodes.brabus_driver_seat_log_brabus_0.geometry} material={materials.signal_R_14} />
        </group>
        <group position={[57.934, 124.161, 49.564]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signalstalk_G900_rocket_red_int001_0'].geometry} material={materials.G900_rocket_red_int_0} />
          <mesh geometry={nodes['G-class_signalstalk_door_plastic_0'].geometry} material={materials.door_plastic} />
        </group>
        <group position={[34.786, 70.734, 89.285]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.chassis_SUB3001_black3_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.chassis_SUB3001_door_plastic_0.geometry} material={materials.door_plastic} />
        </group>
        <group position={[43.083, 133.074, 62.522]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_gauges_brabus_gauges_0.geometry} material={materials.signal_R_15} />
          <mesh geometry={nodes.brabus_gauges_temp_0.geometry} material={materials.signal_R_16} />
        </group>
        <group position={[-0.489, 103.067, -87.104]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_rear_seats_leatherbmp2_0.geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes.brabus_rear_seats_seat_plastic_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.brabus_rear_seats_red_b004_0.geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes.brabus_rear_seats_urus_27__PAINT_2__0.geometry} material={materials.urus_27__PAINT_2} />
          <mesh geometry={nodes.brabus_rear_seats_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.brabus_rear_seats_logo1_brabus_01__PAINT_2__0.geometry} material={materials.signal_R_0} />
        </group>
        <group position={[1.71, 109.923, 123.896]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_engbay_ductape004_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_engbay_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_engbay_G-class_black001_0'].geometry} material={materials['G-class_black.001']} />
          <mesh geometry={nodes['G-class_engbay_red_b004_0'].geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes['G-class_engbay_rgba8411ffff_0'].geometry} material={materials.signal_R} />
          <mesh geometry={nodes['G-class_engbay_common_black020_0'].geometry} material={materials.signal_R} />
        </group>
        <group position={[-72.689, 77.89, -202.588]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_taillight_R_G-class_signal_L_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_taillight_R_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_taillight_R_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_taillight_R_G-class_taillight_1_0'].geometry} material={materials['G-class_taillight_1']} />
          <mesh geometry={nodes['G-class_taillight_R_lights_lod0_a_0'].geometry} material={materials.signal_R} />
          <mesh geometry={nodes['G-class_taillight_R_G-class_reverselight_0'].geometry} material={materials.signal_R_18} />
        </group>
        <group position={[72.399, 77.89, -202.588]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_taillight_L_G-class_signal_L_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_taillight_L_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_taillight_L_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_taillight_L_G-class_taillight_1_0'].geometry} material={materials['G-class_taillight_1']} />
          <mesh geometry={nodes['G-class_taillight_L_lights_lod0_a_0'].geometry} material={materials.signal_R} />
          <mesh geometry={nodes['G-class_taillight_L_G-class_reverselight_0'].geometry} material={materials.signal_R_18} />
        </group>
        <group position={[90.293, 49.897, 7.482]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_running_board_L_wangge_b_0.geometry} material={materials.signal_R_19} />
          <mesh geometry={nodes.brabus_running_board_L_front_bumper_plastics_0.geometry} material={materials.front_bumper_plastics} />
          <mesh geometry={nodes.brabus_running_board_L_setlogo01x_0.geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes.brabus_running_board_L_window_plastic_0.geometry} material={materials.window_plastic} />
          <mesh geometry={nodes.brabus_running_board_L_G900_rocket_FB_red_0.geometry} material={materials.G900_rocket_FB_red} />
          <mesh geometry={nodes.brabus_running_board_L_brabus_dash_skin_0.geometry} material={materials.signal_R_5} />
          <mesh geometry={nodes.brabus_running_board_L_common_black010001_0.geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes.brabus_running_board_L_black4_0.geometry} material={materials.black4} />
          <mesh geometry={nodes.brabus_running_board_L_plastic5_0.geometry} material={materials.plastic5} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_lightled_0'].geometry} material={materials['G-class_lightled']} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_black001_0'].geometry} material={materials['G-class_black.001']} />
          <mesh geometry={nodes.brabus_running_board_L_leatherbmp2_0.geometry} material={materials.signal_R_1} />
          <mesh geometry={nodes.brabus_running_board_L_Car_paint_0.geometry} material={materials.Car_paint} />
          <mesh geometry={nodes.brabus_running_board_L_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_glass_0'].geometry} material={materials['G-class_glass']} />
          <mesh geometry={nodes.brabus_running_board_L_running_board_lights_0.geometry} material={materials.running_board_lights} />
          <mesh geometry={nodes.brabus_running_board_L_red_b004_0.geometry} material={materials['red_b.004']} />
          <mesh geometry={nodes.brabus_running_board_L_common_black033004_0.geometry} material={materials['common_black033.004']} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_foglights_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes.brabus_running_board_L_carbon_sesto4_0.geometry} material={materials.carbon_sesto4} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_chmsl_0'].geometry} material={materials['G-class_chmsl']} />
          <mesh geometry={nodes.brabus_running_board_L_G900_rocket_FB_carbon_0.geometry} material={materials.G900_rocket_FB_carbon} />
          <mesh geometry={nodes.brabus_running_board_L_black5_0.geometry} material={materials.black5} />
          <mesh geometry={nodes.brabus_running_board_L_door_handles_0.geometry} material={materials.door_handles} />
          <mesh geometry={nodes.brabus_running_board_L_wiper_0.geometry} material={materials.wiper} />
          <mesh geometry={nodes.brabus_running_board_L_eng_brabus_0.geometry} material={materials.signal_R_20} />
          <mesh geometry={nodes.brabus_running_board_L_text_Brabus_G_V12_900_a_0.geometry} material={materials.RGB_int_1} />
          <mesh geometry={nodes.brabus_running_board_L_brabus_front_bumber_red_0.geometry} material={materials.brabus_front_bumber_red} />
          <mesh geometry={nodes.brabus_running_board_L_plastic3_0.geometry} material={materials.plastic3} />
          <mesh geometry={nodes.brabus_running_board_L_text_Brabus_G_V12_900_a__PAINT_2__0.geometry} material={materials.text_Brabus_G_V12_900_a__PAINT_2} />
          <mesh geometry={nodes['brabus_running_board_L_G-class_license_light_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes.brabus_running_board_L_grill3_0.geometry} material={materials.signal_R_13} />
          <mesh geometry={nodes.brabus_running_board_L_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5004_0.geometry} material={materials.signal_R} />
        </group>
        <group position={[49.78, 134.837, 62.967]} rotation={[-2.856, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_needle_speedo_G-class_speedo_red_0'].geometry} material={materials['G-class_speedo_red']} />
          <mesh geometry={nodes['G-class_needle_speedo_G-class_speedo_black_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group position={[33.166, 134.093, 62.72]} rotation={[-2.878, 0.013, -0.004]} scale={100}>
          <mesh geometry={nodes['G-class_needle_tacho_G-class_speedo_red_0'].geometry} material={materials['G-class_speedo_red']} />
          <mesh geometry={nodes['G-class_needle_tacho_G-class_speedo_black_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group position={[43.083, 133.074, 62.522]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_gauges_temp_0.geometry} material={materials.signal_R_16} />
          <mesh geometry={nodes.AMG_gauges_parkingbrake_0.geometry} material={materials.signal_R} />
        </group>
        <group position={[89.891, 49.947, 148.037]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_wheels_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.G900_rocket_wheels_G900_rocket_carbon_wheel_0.geometry} material={materials.G900_rocket_carbon_wheel} />
          <mesh geometry={nodes.G900_rocket_wheels_G900_rocket_wheel_color_0.geometry} material={materials.G900_rocket_wheel_color} />
          <mesh geometry={nodes.G900_rocket_wheels_G900_rocket_wheel_red_0.geometry} material={materials.G900_rocket_wheel_red} />
        </group>
        <group position={[81.069, 47.955, 132.472]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={100}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials.black3} />
        </group>
        <group position={[89.891, 49.947, -130.65]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_wheels001_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.G900_rocket_wheels001_G900_rocket_carbon_wheel_0.geometry} material={materials.G900_rocket_carbon_wheel} />
          <mesh geometry={nodes.G900_rocket_wheels001_G900_rocket_wheel_color_0.geometry} material={materials.G900_rocket_wheel_color} />
          <mesh geometry={nodes.G900_rocket_wheels001_G900_rocket_wheel_red_0.geometry} material={materials.G900_rocket_wheel_red} />
        </group>
        <group position={[81.069, 47.955, -146.216]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={100}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry} material={materials.black3} />
        </group>
        <group position={[-90.581, 49.947, 148.037]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_wheels002_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.G900_rocket_wheels002_G900_rocket_carbon_wheel_0.geometry} material={materials.G900_rocket_carbon_wheel} />
          <mesh geometry={nodes.G900_rocket_wheels002_G900_rocket_wheel_color_0.geometry} material={materials.G900_rocket_wheel_color} />
          <mesh geometry={nodes.G900_rocket_wheels002_G900_rocket_wheel_red_0.geometry} material={materials.G900_rocket_wheel_red} />
        </group>
        <group position={[-81.759, 47.955, 132.472]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={100}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials.black3} />
        </group>
        <group position={[-90.581, 49.947, -130.65]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.G900_rocket_wheels003_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.G900_rocket_wheels003_G900_rocket_carbon_wheel_0.geometry} material={materials.G900_rocket_carbon_wheel} />
          <mesh geometry={nodes.G900_rocket_wheels003_G900_rocket_wheel_color_0.geometry} material={materials.G900_rocket_wheel_color} />
          <mesh geometry={nodes.G900_rocket_wheels003_G900_rocket_wheel_red_0.geometry} material={materials.G900_rocket_wheel_red} />
        </group>
        <group position={[-81.759, 47.955, -146.216]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={100}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials.black3} />
        </group>
        <mesh geometry={nodes['G-class_transfer_case001_gavril_v8_0'].geometry} material={materials.gavril_v8} position={[6.472, 45.222, 57.977]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_v8_G-class_transmission001_gavril_v8_0'].geometry} material={materials.gavril_v8} position={[-1.893, 50.446, 90.594]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_v8_fullsize_transmission_gavril_v8_0'].geometry} material={materials.gavril_v8} position={[-0.185, 42.041, 86.265]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_fendersignalglass_R_AMG_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[-79.567, 104.898, 183.455]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_fendersignalglass_L_AMG_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[79.261, 104.898, 183.455]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_headlightglass_R_AMG_G-class_glass005_0'].geometry} material={materials['G-class_glass.005']} position={[-62.48, 92.974, 210.373]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_headlightglass_L_AMG_G-class_glass005_0'].geometry} material={materials['G-class_glass.005']} position={[62.186, 92.974, 210.373]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_v8_G-class_headers_race_exhausts_silver_0'].geometry} material={materials.exhausts_silver} position={[-0.147, 73.745, 131.399]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_R_exhausts_silver_0'].geometry} material={materials.exhausts_silver} position={[-55.058, 47.643, 48.763]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_L_exhausts_silver_0'].geometry} material={materials.exhausts_silver} position={[54.763, 47.643, 48.763]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_driveshaft_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.054, 44.937, -31.651]} rotation={[-1.584, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_uppermounts_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-20.96, 61.675, -96.909]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_uppermounts_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[37.196, 45.878, 90.976]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_uppermounts_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 68.522, 150.82]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_upperlink_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-20.911, 63.146, -120.923]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_upperlink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[27.042, 49.673, 119.876]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_upperarm_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 71.85, 149.72]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_upperarm_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 69.732, 150.404]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_ujoint_SFA_FR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-61.626, 38.144, 146.728]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_ujoint_SFA_FL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[60.745, 38.144, 146.728]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_ujoint_hub_SFA_FR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-65.785, 38.265, 146.729]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_ujoint_hub_SFA_FL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[64.904, 38.265, 146.729]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_trackbarmount_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[44.886, 52.725, -147.419]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_trackbarmount_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[32.608, 44.428, 158.865]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_trackbar_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-13.914, 55.052, -145.126]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_trackbar_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-7.041, 40.35, 156.431]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_tierod_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 37.78, 159.699]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_tierod_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 41.503, 130.424]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_tierod_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.432, 43.287, 130.425]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 61.998, -148.603]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 61.503, -146.416]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_mounts_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 57.296, -153.822]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_mounts_F_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 50.527, 174.786]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_links_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 59.64, -133.381]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_links_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 57.195, -129.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_links_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 48.005, 147.78]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_links_F_IFS_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 43.72, 155.736]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_F_SFA_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.538, 164.372]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_F_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.186, 162.63]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_F_IFS_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.6, 166.675]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_swaybar_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 51.777, 164.963]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_subframe_F_brace_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 44.611, 112.241]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_steeringlink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-10.944, 36.685, 162.315]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_steeringbox_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[27.461, 57.958, 178.17]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 75.573, -133.417]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_R_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 76.731, -127.928]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 74.02, -119.149]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 70.15, -135.469]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 74.822, 149.95]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 77.091, 148.552]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_dual_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 67.899, 146.765]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 75.297, 150.458]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 70.619, 148.906]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 72.922, 150.892]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shocktop_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 73.644, 150.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shockmounts_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 34.904, 151.381]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shockmounts_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.435, 47.972, -132.483]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shockmounts_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 45.641, -138.597]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shockmounts_F_beamaxle_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 34.947, 151.372]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shockmount_F_dual_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 49.082, 146.822]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shock_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 58.637, -138.274]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shock_F_sport_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 62.579, 151.779]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_propshaft_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[16.712, 44.432, 100.571]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_pitman_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[29.018, 48.051, 176.229]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_muffler_heavy_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-35.81, 42.493, -67.928]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 47.931, -49.889]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_offroad_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 43.971, -23.008]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 43.733, -23.271]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 47.451, -50.359]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowermounts_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 35.91, 74.413]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowerlink_R_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 45.167, -75.568]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowerlink_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 46.984, -89.125]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowerlink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 33.083, 106.272]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowerarm_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 40.589, 150.79]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_lowerarm_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 42.532, 151.097]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_linkguards_R_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 46.028, -13.251]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_linkguards_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 45.336, -13.246]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leafmounts_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 58.51, -112.511]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leafbracket_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.668, -132.499]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leafbracket_R_heavy_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 51.204, -132.488]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leafbracket_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 51.24, -132.499]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leaf_R_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 56.419, -158.267]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leaf_R_heavy_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 53.009, -153.795]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_leaf_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 53.907, -158.259]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_kingpin_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 38.138, 146.799]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 37.726, 149.398]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.246, -130.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_FR_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-68.201, 57.188, 142.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_FR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-67.869, 49.776, 142.196]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_FL_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[67.319, 57.188, 142.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_FL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[66.988, 49.776, 142.196]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_F_beamaxle_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 41.265, 149.434]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_hub_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 36.885, 149.506]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_halfshaft_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.164, 49.688, 148.038]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_R001_gavril_v8004_0'].geometry} material={materials.signal_R} position={[-28.442, 48.055, 53.083]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_L001_gavril_v8004_0'].geometry} material={materials.signal_R} position={[27.56, 48.055, 53.083]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_draglink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[0.469, 40.8, 169.695]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_R_4link_race_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 60.134, -123.191]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_R_4link_offroad_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 65.419, -126.255]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 61.344, -122.965]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_offroad_alt_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 61.696, 149.639]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 60.213, 150.739]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_4link_race_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 55.001, 152.054]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_4link_offroad_generic_shock_absorber_0'].geometry} material={materials.RGB_int} position={[-0.441, 58.53, 151.677]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 60.194, 151.681]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_coilover_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 63.701, 150.746]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_brakedrum_shield_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 52.25, -132.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_brakedrum_RR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-75.753, 52.25, -132.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_brakedrum_RL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[74.872, 52.25, -132.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_beamaxle_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 41.094, 145.752]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axlemounts_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-12.419, 51.874, -131.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axlemounts_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-1.37, 37.95, 146.686]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axlebrace_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.661, 52.571, -131.962]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axlebrace_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[16.763, 38.136, 146.957]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axle_R_heavy_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[0.454, 50.434, -130.659]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axle_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[0.408, 52.274, -130.664]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_axle_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[16.779, 38.308, 145.136]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_frame_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.267, 50.92, 0.511]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_6_glowtext_0.geometry} material={materials.signal_R} position={[48.51, 130.155, 62.341]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_5_glowtext_0.geometry} material={materials.signal_R} position={[49.115, 130.158, 62.337]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_4_glowtext_0.geometry} material={materials.signal_R} position={[49.715, 130.16, 62.334]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_3_glowtext_0.geometry} material={materials.signal_R} position={[50.316, 130.162, 62.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_2_glowtext_0.geometry} material={materials.signal_R} position={[50.947, 130.165, 62.326]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_1_glowtext_0.geometry} material={materials.signal_R} position={[51.561, 130.167, 62.322]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Music_Music_0.geometry} material={materials.signal_R_17} position={[2.705, 134.222, 62.848]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_underbody_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.085, 67.478, -80.025]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bodyshell_SUB14_doortags_diffx001_0.geometry} material={materials.signal_R} position={[-0.164, 80.037, -10.799]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_taillightglass_R_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[-72.941, 77.955, -203.117]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_taillightglass_L_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[72.651, 77.955, -203.118]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.plate_amg_texture5_0.geometry} material={materials.amg_texture5} position={[-0.147, 62.513, -204.801]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.plate1_amg_texture5_0.geometry} material={materials.amg_texture5} position={[-0.147, 64.362, 230.701]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.brabus_tailgate_glass_IntWindows_tint_0.geometry} material={materials.IntWindows_tint} position={[-0.147, 149.567, -196.223]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['brabus_tailgate_stopglass_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[-0.148, 178.576, -191.536]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chassis_SUB0_light1_0.geometry} material={materials.light1} position={[-0.147, 62.457, 90.331]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_innerfender_L_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[58.774, 89.736, 154.087]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_innerfender_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-58.439, 90.37, 155.623]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shifter_A_door_plastic_0'].geometry} material={materials.door_plastic} position={[23.099, 123.953, 49.484]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sunroof_int_glass_IntWindows_0'].geometry} material={materials.IntWindows} position={[-0.147, 192.289, -4.863]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sunroof_glass_G-class_glass_0'].geometry} material={materials['G-class_glass']} position={[-0.147, 193.981, -4.863]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_windshield_tint_ExtWindows_0'].geometry} material={materials.ExtWindows} position={[-0.545, 156.16, 69.506]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_FL_int_tint_IntWindows_front_tint_0'].geometry} material={materials.IntWindows_front_tint} position={[77.665, 149.99, 29.987]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_FR_int_tint_IntWindows_front_tint_0'].geometry} material={materials.IntWindows_front_tint} position={[-79.212, 149.99, 29.987]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_RL_int_tint_IntWindows_tint_0'].geometry} material={materials.IntWindows_tint} position={[77.493, 151.218, -61.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_RR_int_tint_IntWindows_tint_0'].geometry} material={materials.IntWindows_tint} position={[-79.042, 151.218, -61.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sideglass_L_int_tint_IntWindows_tint_0'].geometry} material={materials.IntWindows_tint} position={[78.814, 149.062, -146.505]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sideglass_R_int_tint_IntWindows_tint_0'].geometry} material={materials.IntWindows_tint} position={[-80.082, 149.061, -146.505]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Object017013_AMG_silver_0.geometry} material={materials.AMG_silver} position={[-0.377, 45.729, 9.023]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[79.265, 48.01, 146.515]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[79.265, 48.01, -132.173]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-79.955, 48.01, 146.515]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-79.955, 48.01, -132.173]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.G900_rocket_interior001_G900_rocket_red_int001_0.geometry} material={materials.G900_rocket_red_int_0} position={[7.984, 120.597, 23.709]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.brabus_grill001_text_Brabus_G_V12_900_a003_0.geometry} material={materials['text_Brabus_G_V12_900_a.003']} position={[9.234, 93.402, 214.014]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Brabus_G900.glb')
