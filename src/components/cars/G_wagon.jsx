/* eslint-disable */

import React, { useEffect,useContext } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/G_wagon.glb')
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
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_rocket_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_rocket_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_rear_seats_leatherbmp2_0.geometry} material={materials.leatherbmp2} />
          <mesh geometry={nodes.AMG_rear_seats_seat_plastic_0.geometry} material={materials.seat_plastic} />
          <mesh geometry={nodes.AMG_rear_seats_red_b_0.geometry} material={materials.red_b} />
          <mesh geometry={nodes.AMG_rear_seats_AMG_seat_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_1} />
          <mesh geometry={nodes.AMG_rear_seats_urus_27__PAINT_2__0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_passanger_seat_leatherbmp2_0.geometry} material={materials.leatherbmp2} />
          <mesh geometry={nodes.AMG_passanger_seat_seat_plastic_0.geometry} material={materials.seat_plastic} />
          <mesh geometry={nodes.AMG_passanger_seat_red_b_0.geometry} material={materials.red_b} />
          <mesh geometry={nodes.AMG_passanger_seat_AMG_seat_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_1} />
          <mesh geometry={nodes.AMG_passanger_seat_urus_27__PAINT_2__0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes.AMG_passanger_seat_black2_0.geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes.AMG_passanger_seat_carbon_sesto3_0.geometry} material={materials.carbon_sesto3} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_tailgate_brabus_dash_skin_0.geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes.AMG_tailgate_setlogo01x_0.geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes.AMG_tailgate_door_handles_0.geometry} material={materials.door_handles} />
          <mesh geometry={nodes.AMG_tailgate_common_black010_0.geometry} material={materials.common_black010} />
          <mesh geometry={nodes.AMG_tailgate_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.AMG_tailgate_leatherbmp2_0.geometry} material={materials.leatherbmp2} />
          <mesh geometry={nodes['AMG_tailgate_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes.AMG_tailgate_wiper_0.geometry} material={materials.wiper} />
          <mesh geometry={nodes.AMG_tailgate_black5_0.geometry} material={materials.black5} />
          <mesh geometry={nodes.AMG_tailgate_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes.AMG_tailgate_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_R_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_R_AMG_nlightsf20_0'].geometry} material={materials.nlightsf20} />
          <mesh geometry={nodes['G-class_signal_R_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_R_AMG_G-class_signal_R_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_signal_R_AMG_AMG_signal_R_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_L_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_L_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_L_AMG_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} />
          <mesh geometry={nodes['G-class_signal_L_AMG_nlightsf20_0'].geometry} material={materials.nlightsf20} />
          <mesh geometry={nodes['G-class_signal_L_AMG_AMG_signal_L_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_signal_L_AMG_lights_lod0_a004_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlight_R_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_G-class_lightled_0'].geometry} material={materials['G-class_lightled']} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_lamp_alpha_0'].geometry} material={materials.lamp_alpha} />
          <mesh geometry={nodes['G-class_headlight_R_AMG_G-class_headlight_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlight_L_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_G-class_lightled_0'].geometry} material={materials['G-class_lightled']} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_lamp_alpha_0'].geometry} material={materials.lamp_alpha} />
          <mesh geometry={nodes['G-class_headlight_L_AMG_G-class_headlight_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_body_AMG_G-class_glass_0'].geometry} material={materials['G-class_glass']} />
          <mesh geometry={nodes['G-class_body_AMG_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_body_AMG_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_body_AMG_wiper_0'].geometry} material={materials.wiper} />
          <mesh geometry={nodes['G-class_body_AMG_black5_0'].geometry} material={materials.black5} />
          <mesh geometry={nodes['G-class_body_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_body_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_body_AMG_AMG_silver_0'].geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes['G-class_body_AMG_common_black033_0'].geometry} material={materials.common_black033} />
          <mesh geometry={nodes['G-class_body_AMG_AMG_side_logo_0'].geometry} material={materials.AMG_side_logo} />
          <mesh geometry={nodes['G-class_body_AMG_AMG_signal_L_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_body_AMG_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.brabus_front_bamper_radiator_plastic5_0.geometry} material={materials.plastic5} />
          <mesh geometry={nodes.brabus_front_bamper_radiator_radiator_silver_0.geometry} material={materials.radiator_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_R_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_R_nlightsf20_0'].geometry} material={materials.nlightsf20} />
          <mesh geometry={nodes['G-class_signal_R_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_R_lights_lod0_a_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signal_L_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_signal_L_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_signal_L_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} />
          <mesh geometry={nodes['G-class_signal_L_lights_lod0_a_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_signal_L_nlightsf20_0'].geometry} material={materials.nlightsf20} />
        </group>
        <group position={[48.386, 120.564, 50.643]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_signalstalk_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_signalstalk_door_plastic_0'].geometry} material={materials.door_plastic} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.chassis_SUB3001_black3_0.geometry} material={materials.black3} />
          <mesh geometry={nodes.chassis_SUB3001_door_plastic_0.geometry} material={materials.door_plastic} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_fender_R_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_fender_R_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_fender_R_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_fender_R_black4_0'].geometry} material={materials.black4} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_fender_L_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_fender_L_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_fender_L_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_fender_L_black4_0'].geometry} material={materials.black4} />
        </group>
        <group position={[0, 0, 1.526]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['_wheel_rr__SUB4_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes._wheel_rr__SUB4_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes._wheel_rr__SUB4_gt_34_0.geometry} material={materials.gt_34} />
          <mesh geometry={nodes._wheel_rr__SUB4_gt_35_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group position={[0, 0, 1.526]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['_wheel_lr__SUB2_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes._wheel_lr__SUB2_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes._wheel_lr__SUB2_gt_34_0.geometry} material={materials.gt_34} />
          <mesh geometry={nodes._wheel_lr__SUB2_gt_35_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['_wheel_lf__SUB3_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes._wheel_lf__SUB3_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes._wheel_lf__SUB3_gt_34_0.geometry} material={materials.gt_34} />
          <mesh geometry={nodes._wheel_lf__SUB3_gt_35_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['_wheel_rf_SUB2_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes._wheel_rf_SUB2_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes._wheel_rf_SUB2_gt_34_0.geometry} material={materials.gt_34} />
          <mesh geometry={nodes._wheel_rf_SUB2_gt_35_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_engbay_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_engbay_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_engbay_red_b_0'].geometry} material={materials.red_b} />
          <mesh geometry={nodes['G-class_engbay_common_black020_0'].geometry} material={materials.common_black020} />
          <mesh geometry={nodes['G-class_engbay_rgba8411ffff_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
          <mesh geometry={nodes['G-class_engbay_d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_taillight_R_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_taillight_R_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_taillight_R_lights_lod0_a_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_taillight_R_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} />
          <mesh geometry={nodes['G-class_taillight_R_G-class_taillight_1_0'].geometry} material={materials['G-class_taillight_1']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_taillight_L_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_taillight_L_black4_0'].geometry} material={materials.black4} />
          <mesh geometry={nodes['G-class_taillight_L_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} />
          <mesh geometry={nodes['G-class_taillight_L_lights_lod0_a_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes['G-class_taillight_L_G-class_taillight_1_0'].geometry} material={materials['G-class_taillight_1']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RL_doorpanel_urus_27__PAINT_2__0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_black2_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes['G-class_RL_doorpanel_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_RL_doorpanel_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RL_doorpanel_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_RL_doorpanel_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RL_doorpanel_AMG_dash_black_0'].geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes['G-class_RL_doorpanel_speakers_d_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} />
          <mesh geometry={nodes['G-class_RL_doorpanel_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RL_doorpanel_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RL_doorpanel_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RL_doorpanel_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RL_door_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_RL_door_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_RL_door_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RL_door_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_RL_door_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RL_door_black5_0'].geometry} material={materials.black5} />
          <mesh geometry={nodes['G-class_RL_door_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
          <mesh geometry={nodes['G-class_RL_door_door_handles_0'].geometry} material={materials.door_handles} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RR_doorpanel_urus_27__PAINT_2__0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_black2_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes['G-class_RR_doorpanel_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_RR_doorpanel_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RR_doorpanel_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_RR_doorpanel_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_RR_doorpanel_AMG_dash_black_0'].geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes['G-class_RR_doorpanel_speakers_d_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} />
          <mesh geometry={nodes['G-class_RR_doorpanel_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RR_doorpanel_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_RR_doorpanel_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_RR_doorpanel_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_RR_door_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_RR_door_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_RR_door_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_RR_door_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_RR_door_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_RR_door_black5_0'].geometry} material={materials.black5} />
          <mesh geometry={nodes['G-class_RR_door_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
          <mesh geometry={nodes['G-class_RR_door_door_handles_0'].geometry} material={materials.door_handles} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FR_doorpanel_urus_27__PAINT_2__0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes['G-class_FR_doorpanel_black2_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes['G-class_FR_doorpanel_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_FR_doorpanel_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_FR_doorpanel_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_FR_doorpanel_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_FR_doorpanel_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_FR_doorpanel_black3_0'].geometry} material={materials.black3} />
          <mesh geometry={nodes['G-class_FR_doorpanel_AMG_dash_black_0'].geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes['G-class_FR_doorpanel_speakers_d_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} />
          <mesh geometry={nodes['G-class_FR_doorpanel_speakers2_d_0'].geometry} material={materials.speakers2_d} />
          <mesh geometry={nodes['G-class_FR_doorpanel_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_FR_doorpanel_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_FR_doorpanel_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_FR_doorpanel_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FL_doorpanel_urus_27__PAINT_2__0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes['G-class_FL_doorpanel_black2_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes['G-class_FL_doorpanel_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_FL_doorpanel_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_FL_doorpanel_int_badges_0'].geometry} material={materials.int_badges} />
          <mesh geometry={nodes['G-class_FL_doorpanel_leather_jesko2_0'].geometry} material={materials.leather_jesko2} />
          <mesh geometry={nodes['G-class_FL_doorpanel_RGB_int_0'].geometry} material={materials.RGB_int} />
          <mesh geometry={nodes['G-class_FL_doorpanel_black3_0'].geometry} material={materials.black3} />
          <mesh geometry={nodes['G-class_FL_doorpanel_AMG_dash_black_0'].geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes['G-class_FL_doorpanel_speakers_d_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} />
          <mesh geometry={nodes['G-class_FL_doorpanel_speakers2_d_0'].geometry} material={materials.speakers2_d} />
          <mesh geometry={nodes['G-class_FL_doorpanel_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_FL_doorpanel_light1_0'].geometry} material={materials.light1} />
          <mesh geometry={nodes['G-class_FL_doorpanel_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} />
          <mesh geometry={nodes['G-class_FL_doorpanel_door_red_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_mirror_R_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_mirror_R_G-class_glass_0'].geometry} material={materials['G-class_glass']} />
          <mesh geometry={nodes['G-class_mirror_R_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_mirror_R_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_mirror_R_G-class_mirror_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_mirror_L_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_mirror_L_G-class_glass_0'].geometry} material={materials['G-class_glass']} />
          <mesh geometry={nodes['G-class_mirror_L_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} />
          <mesh geometry={nodes['G-class_mirror_L_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_mirror_L_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_mirror_L_G-class_mirror_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group position={[49.773, 134.055, 62.803]} rotation={[-2.842, 0.037, 2.141]}>
          <mesh geometry={nodes['G-class_needle_speedo_G-class_speedo_red_0'].geometry} material={materials['G-class_speedo_red']} />
          <mesh geometry={nodes['G-class_needle_speedo_G-class_speedo_black_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group position={[33.156, 134.072, 62.794]} rotation={[-2.841, 0.012, 2.154]}>
          <mesh geometry={nodes['G-class_needle_tacho_G-class_speedo_red_0'].geometry} material={materials['G-class_speedo_red']} />
          <mesh geometry={nodes['G-class_needle_tacho_G-class_speedo_black_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_engine_v8_55_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_engine_v8_55_gavril_v8001_0'].geometry} material={materials['gavril_v8.001']} />
          <mesh geometry={nodes['G-class_engine_v8_55_common_black010001_0'].geometry} material={materials['common_black010.001']} />
          <mesh geometry={nodes['G-class_engine_v8_55_red_b002_0'].geometry} material={materials['red_b.002']} />
          <mesh geometry={nodes['G-class_engine_v8_55_carbon_sesto_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_4} />
          <mesh geometry={nodes['G-class_engine_v8_55_doortags_diffx_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_fender_L_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_fender_L_AMG_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_fender_L_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_fender_L_AMG_black4_0'].geometry} material={materials.black4} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_fender_R_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_fender_R_AMG_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_fender_R_AMG_window_plastic_0'].geometry} material={materials.window_plastic} />
          <mesh geometry={nodes['G-class_fender_R_AMG_black4_0'].geometry} material={materials.black4} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_hood_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes.AMG_hood_plastic5_0.geometry} material={materials.plastic5} />
          <mesh geometry={nodes['AMG_hood_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes.AMG_hood_AMG_sparetire_black_0.geometry} material={materials.AMG_sparetire_black} />
          <mesh geometry={nodes.AMG_hood_AMG_hood_logo_0.geometry} material={materials.AMG_hood_logo} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_front_bamper_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['AMG_front_bamper_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes.AMG_front_bamper_wangge_b_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_5} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_running_board_L_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_running_board_L_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes.AMG_running_board_L_window_plastic_0.geometry} material={materials.window_plastic} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_running_board_R_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_running_board_R_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes.AMG_running_board_R_window_plastic_0.geometry} material={materials.window_plastic} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_rear_bamper_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_rear_bamper_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['AMG_rear_bamper_G-class_glass_0'].geometry} material={materials['G-class_glass']} />
          <mesh geometry={nodes['AMG_rear_bamper_G-class_license_light_0'].geometry} material={materials['G-class_license_light']} />
          <mesh geometry={nodes['AMG_rear_bamper_G-class_foglights_0'].geometry} material={materials['G-class_foglights']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_sparetire_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_sparetire_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes.AMG_sparetire_AMG_sparetire_black_0.geometry} material={materials.AMG_sparetire_black} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FL_door_AMG_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_FL_door_AMG_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_FL_door_AMG_door_handles_0'].geometry} material={materials.door_handles} />
          <mesh geometry={nodes['G-class_FL_door_AMG_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_FL_door_AMG_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_FL_door_AMG_black5_0'].geometry} material={materials.black5} />
          <mesh geometry={nodes['G-class_FL_door_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_FL_door_AMG_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_FR_door_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_FR_door_AMG_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes['G-class_FR_door_AMG_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes['G-class_FR_door_AMG_setlogo01x_0'].geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes['G-class_FR_door_AMG_common_black010_0'].geometry} material={materials.common_black010} />
          <mesh geometry={nodes['G-class_FR_door_AMG_black5_0'].geometry} material={materials.black5} />
          <mesh geometry={nodes['G-class_FR_door_AMG_screw_017_opac_40a21753_9298_486f_b2d5_8ea3aa86f9d5_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
          <mesh geometry={nodes['G-class_FR_door_AMG_door_handles_0'].geometry} material={materials.door_handles} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_interior_brabus_dash_skin_0.geometry} material={materials.brabus_dash_skin} />
          <mesh geometry={nodes.AMG_interior_setlogo01x_0.geometry} material={materials.setlogo01x} />
          <mesh geometry={nodes.AMG_interior_int_badges_0.geometry} material={materials.int_badges} />
          <mesh geometry={nodes.AMG_interior_RGB_int_0.geometry} material={materials.RGB_int} />
          <mesh geometry={nodes.AMG_interior_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} />
          <mesh geometry={nodes.AMG_interior_leatherbmp2_0.geometry} material={materials.leatherbmp2} />
          <mesh geometry={nodes.AMG_interior_seat_plastic_0.geometry} material={materials.seat_plastic} />
          <mesh geometry={nodes.AMG_interior_urus_27__PAINT_2__0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes.AMG_interior_carbon_sesto3_0.geometry} material={materials.carbon_sesto3} />
          <mesh geometry={nodes.AMG_interior_vehicle_generic_smallspecmap__PAINT_2__0.geometry} material={materials.vehicle_generic_smallspecmap__PAINT_2} />
          <mesh geometry={nodes.AMG_interior_common_black033_0.geometry} material={materials.common_black033} />
          <mesh geometry={nodes.AMG_interior_black3_0.geometry} material={materials.black3} />
          <mesh geometry={nodes['AMG_interior_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} />
          <mesh geometry={nodes.AMG_interior_door_plastic_0.geometry} material={materials.door_plastic} />
          <mesh geometry={nodes.AMG_interior_AMG_dash_black_0.geometry} material={materials.AMG_dash_black} />
          <mesh geometry={nodes.AMG_interior_speakers_d_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} />
          <mesh geometry={nodes.AMG_interior_speakers2_d_0.geometry} material={materials.speakers2_d} />
          <mesh geometry={nodes.AMG_interior_interiordfs_0.geometry} material={materials.interiordfs} />
          <mesh geometry={nodes.AMG_interior_G900_roof_buttons_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_6} />
          <mesh geometry={nodes.AMG_interior_int_badges_clock_0.geometry} material={materials.int_badges_clock} />
          <mesh geometry={nodes['AMG_interior_G-class_mirror_0'].geometry} material={materials['G-class_speedo_black']} />
          <mesh geometry={nodes.AMG_interior_grill3_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group position={[40.696, 123.389, 46.319]} rotation={[-2.831, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_steeringwheel_AMG_black2_0'].geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_AMG_seat_logo_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_symbols_0'].geometry} material={materials.symbols} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_symbols_embossed_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_8} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_leather_wheel_0'].geometry} material={materials.leather_wheel} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_steeringwheel_plastic_0'].geometry} material={materials.steeringwheel_plastic} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_AMG_steering_race_symbols_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_9} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_AMG_steering_black_0'].geometry} material={materials.AMG_steering_black} />
          <mesh geometry={nodes['G-class_steeringwheel_AMG_AMG_steering_black1_0'].geometry} material={materials['G-class_speedo_black']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_driver_seat_leatherbmp2_0.geometry} material={materials.leatherbmp2} />
          <mesh geometry={nodes.AMG_driver_seat_seat_plastic_0.geometry} material={materials.seat_plastic} />
          <mesh geometry={nodes.AMG_driver_seat_red_b_0.geometry} material={materials.red_b} />
          <mesh geometry={nodes.AMG_driver_seat_AMG_seat_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_1} />
          <mesh geometry={nodes.AMG_driver_seat_urus_27__PAINT_2__0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} />
          <mesh geometry={nodes.AMG_driver_seat_black2_0.geometry} material={materials['G-class_foglights']} />
          <mesh geometry={nodes.AMG_driver_seat_carbon_sesto3_0.geometry} material={materials.carbon_sesto3} />
        </group>
        <group position={[77.052, 44.09, 146.952]} rotation={[-Math.PI / 2, 0, 0]} scale={104.824}>
          <mesh geometry={nodes.AMG_wheels_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_wheels_AMG_wheels_color_0.geometry} material={materials.AMG_wheels_color} />
          <mesh geometry={nodes.AMG_wheels_AMG_wheels_secondcolor_0.geometry} material={materials.AMG_wheels_secondcolor} />
          <mesh geometry={nodes.AMG_wheels_AMG_wheels_black_logo_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.AMG_grill_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_grill_bodypaint_0.geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['AMG_grill_G-class_black_0'].geometry} material={materials['G-class_black']} />
          <mesh geometry={nodes.AMG_grill_window_plastic_0.geometry} material={materials.window_plastic} />
          <mesh geometry={nodes.AMG_grill_common_black033_0.geometry} material={materials.common_black033} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlightframe_L_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_headlightframe_L_AMG_plastic5_0'].geometry} material={materials.plastic5} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['G-class_headlightframe_R_AMG_bodypaint_0'].geometry} material={materials.bodypaint} />
          <mesh geometry={nodes['G-class_headlightframe_R_AMG_plastic5_0'].geometry} material={materials.plastic5} />
        </group>
        <group position={[77.052, 44.09, -131.522]} rotation={[-Math.PI / 2, 0, 0]} scale={104.824}>
          <mesh geometry={nodes.AMG_wheels001_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_wheels001_AMG_wheels_color_0.geometry} material={materials.AMG_wheels_color} />
          <mesh geometry={nodes.AMG_wheels001_AMG_wheels_secondcolor_0.geometry} material={materials.AMG_wheels_secondcolor} />
          <mesh geometry={nodes.AMG_wheels001_AMG_wheels_black_logo_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group position={[-77.426, 44.09, -131.522]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={104.824}>
          <mesh geometry={nodes.AMG_wheels002_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_wheels002_AMG_wheels_color_0.geometry} material={materials.AMG_wheels_color} />
          <mesh geometry={nodes.AMG_wheels002_AMG_wheels_secondcolor_0.geometry} material={materials.AMG_wheels_secondcolor} />
          <mesh geometry={nodes.AMG_wheels002_AMG_wheels_black_logo_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <group position={[-77.426, 44.09, 146.952]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={104.824}>
          <mesh geometry={nodes.AMG_wheels003_AMG_silver_0.geometry} material={materials.AMG_silver} />
          <mesh geometry={nodes.AMG_wheels003_AMG_wheels_color_0.geometry} material={materials.AMG_wheels_color} />
          <mesh geometry={nodes.AMG_wheels003_AMG_wheels_secondcolor_0.geometry} material={materials.AMG_wheels_secondcolor} />
          <mesh geometry={nodes.AMG_wheels003_AMG_wheels_black_logo_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} />
        </group>
        <mesh geometry={nodes['G-class_fendersignalglass_R_AMG_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_fendersignalglass_L_AMG_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_headlightglass_R_AMG_G-class_glass004_0'].geometry} material={materials['G-class_glass.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_headlightglass_L_AMG_G-class_glass004_0'].geometry} material={materials['G-class_glass.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_v8_G-class_headers_race_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sidepipe_R_exhausts_silver_0'].geometry} material={materials.exhausts_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sidepipe_L_exhausts_silver_0'].geometry} material={materials.exhausts_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_exhaust_v8_race_L_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_uppermounts_R_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_uppermounts_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_uppermounts_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_upperlink_F_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_upperarm_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_upperarm_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_ujoint_SFA_FR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-57.852, 38.144, 146.731]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_ujoint_SFA_FL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[56.97, 38.144, 146.731]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_ujoint_hub_SFA_FR_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-69.557, 38.424, 146.729]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_ujoint_hub_SFA_FL_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[68.676, 38.424, 146.729]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_trackbarmount_R_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_trackbarmount_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_trackbar_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_tierod_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_tierod_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_tierod_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_mounts_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_mounts_F_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_links_R_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_links_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_links_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_links_F_IFS_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_F_SFA_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_F_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_F_IFS_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_swaybar_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_subframe_F_brace_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_steeringlink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_steeringbox_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_R_4link_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_R_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_dual_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_race_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shocktop_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_shockmounts_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_shockmounts_F_beamaxle_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_shockmount_F_dual_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_propshaft_F_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[16.706, 44.46, 100.629]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_pitman_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_offroad_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowermounts_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowermounts_F_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowerlink_R_4link_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowerlink_R_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowerlink_F_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowerarm_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_lowerarm_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_linkguards_R_upfit_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_linkguards_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leafmounts_R_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leafbracket_R_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leafbracket_R_heavy_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leafbracket_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leaf_R_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leaf_R_heavy_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_leaf_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_kingpin_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_hub_SFA_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_hub_F_beamaxle_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_hub_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_halfshaft_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_draglink_F_4link_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_coilover_R_4link_offroad_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_coilover_F_offroad_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_beamaxle_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_axlemounts_F_4link_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_axlebrace_F_trucks_mechanical_0'].geometry} material={materials.trucks_mechanical} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[89.295, 100, 100]} />
        <mesh geometry={nodes['G-class_axle_F_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} position={[-0.441, 5.362, 0.483]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.893, 1, 1]} />
        <mesh geometry={nodes['G-class_frame_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_6_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_5_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_4_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_3_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_2_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.temp_1_glowtext_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Music_Music_0.geometry} material={materials.Music} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_windshield_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.brabus_screen_brabus_screen_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_underbody_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.bodyshell_SUB14_doortags_diffx_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_taillightglass_R_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_taillightglass_L_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.plate_amg_texture5_0.geometry} material={materials.amg_texture5} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.plate1_amg_texture5_0.geometry} material={materials.amg_texture5} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['brabus_tailgate_stopglass_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_innerfender_L_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_innerfender_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_shifter_A_door_plastic_0'].geometry} material={materials.door_plastic} position={[32.714, 120.558, 50.642]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sunroof_int_glass_IntWindows_0'].geometry} material={materials.IntWindows} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_sunroof_glass_G-class_glass_0'].geometry} material={materials['G-class_glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_RL_tint_ExtWindows_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_FL_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_FR_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_doorglass_RR_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_quarterglass_L_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_quarterglass_R_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['G-class_tailgateglass_tint_G-class_glass_tint_0'].geometry} material={materials['G-class_glass_tint']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_frontwide_fender_L_bodypaint_0.geometry} material={materials.bodypaint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_frontwide_fender_R_bodypaint_0.geometry} material={materials.bodypaint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_rearwide_fender_L_bodypaint_0.geometry} material={materials.bodypaint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_rearwide_fender_R_bodypaint_0.geometry} material={materials.bodypaint} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_logo_AMG_silver_0.geometry} material={materials.AMG_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_gauges_AMG_gauges_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_7} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.AMG_screen_AMG_screen_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_0} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-71.841, 44.09, 146.952]} rotation={[-Math.PI / 2, 0, 0]} scale={[154.12, 124.567, 124.567]} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-71.801, 44.09, -131.522]} rotation={[-Math.PI / 2, 0, 0]} scale={[154.12, 124.567, 124.567]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[82.836, 44.09, 146.952]} rotation={[-Math.PI / 2, 0, 0]} scale={[154.12, 124.567, 124.567]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[82.876, 44.09, -131.522]} rotation={[-Math.PI / 2, 0, 0]} scale={[154.12, 124.567, 124.567]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/G_wagon.glb')
