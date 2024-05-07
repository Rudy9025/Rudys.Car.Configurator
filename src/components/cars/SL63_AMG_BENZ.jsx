import React, { useContext,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/SL63_AMG_BENZ.glb')
  const { currentAnimation, playAnimation } = useContext(AnimationContext);
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
          <mesh geometry={nodes.SL63_taillight_R_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_brakelight_0.geometry} material={materials.SL63_brakelight} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_plastic_0.geometry} material={materials.SL63_plastic} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_reverselight_0.geometry} material={materials.SL63_reverselight} />
          <mesh geometry={nodes['SL63_taillight_R_SL63_runninglight-R_0'].geometry} material={materials['SL63_runninglight-R']} />
          <mesh geometry={nodes['SL63_taillight_R_SL63_beams-R_0'].geometry} material={materials['SL63_beams-R']} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_1_0.geometry} material={materials.SL63_signal_R_1} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_2_0.geometry} material={materials.SL63_signal_R_2} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_3_0.geometry} material={materials.SL63_signal_R_3} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_4_0.geometry} material={materials.SL63_signal_R_4} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_5_0.geometry} material={materials.SL63_signal_R_5} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_6_0.geometry} material={materials.SL63_signal_R_6} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_7_0.geometry} material={materials.SL63_signal_R_7} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_8_0.geometry} material={materials.SL63_signal_R_8} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_9_0.geometry} material={materials.SL63_signal_R_9} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_10_0.geometry} material={materials.SL63_signal_R_10} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_11_0.geometry} material={materials.SL63_signal_R_11} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_12_0.geometry} material={materials.SL63_signal_R_12} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_13_0.geometry} material={materials.SL63_signal_R_13} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_14_0.geometry} material={materials.SL63_signal_R_14} />
          <mesh geometry={nodes.SL63_taillight_R_SL63_signal_R_15_0.geometry} material={materials.SL63_signal_R_15} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_taillight_L_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_taillight_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_taillight_L_SL63_brakelight_0.geometry} material={materials.SL63_brakelight} />
          <mesh geometry={nodes.SL63_taillight_L_SL63_plastic_0.geometry} material={materials.SL63_plastic} />
          <mesh geometry={nodes.SL63_taillight_L_SL63_reverselight_0.geometry} material={materials.SL63_reverselight} />
          <mesh geometry={nodes['SL63_taillight_L_SL63_runninglight-R_0'].geometry} material={materials['SL63_runninglight-R']} />
          <mesh geometry={nodes['SL63_taillight_L_SL63_beams-R_0'].geometry} material={materials['SL63_beams-R']} />
          <mesh geometry={nodes.SL63_taillight_L_SL63_signal_L_6_0.geometry} material={materials.SL63_signal_L_6} />
        </group>
        <group position={[34.686, 73.21, 9.586]} rotation={[-2.845, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_black_0'].geometry} material={materials.SL63_black} />
          <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_steerSymbs_0'].geometry} material={materials.SL63_steerSymbs} />
          <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_dash-crb_SL63_black_0'].geometry} material={materials.SL63_black} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_silver_0'].geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_interiorSymbs_0'].geometry} material={materials.SL63_interiorSymbs} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_stitching_0'].geometry} material={materials.SL63_stitching} />
          <mesh geometry={nodes['SL63_dash-crb_SL63_ambiente-on_0'].geometry} material={materials['SL63_ambiente-on']} />
          <mesh geometry={nodes['SL63_dash-crb_seat5_0'].geometry} material={materials['seat.5']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_enginebay_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_enginebay_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_door_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_door_R_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_door_R_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_door_R_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_turbos_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_turbos_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_mirror_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_mirror_R_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_mirror_R_SL63_mirror_0.geometry} material={materials.SL63_mirror} />
          <mesh geometry={nodes.SL63_mirror_R_SL63_signal_L_0.geometry} material={materials.SL63_signal_L} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['Sl63_grille-F-AMG_SL63_black_0'].geometry} material={materials.SL63_black} />
          <mesh geometry={nodes['Sl63_grille-F-AMG_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes['Sl63_grille-F-AMG_SL63_silver_0'].geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_gauges_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_gauges_SL63_gauges_screen_0.geometry} material={materials.SL63_gauges_screen} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_exhausttips_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_exhausttips_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_rearseats_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_rearseats_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_rearseats_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_rearseats_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes['SL63_rearseats_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_mirror_L_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_mirror_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_mirror_L_SL63_mirror_0.geometry} material={materials.SL63_mirror} />
          <mesh geometry={nodes.SL63_mirror_L_SL63_signal_L_0.geometry} material={materials.SL63_signal_L} />
          <mesh geometry={nodes.SL63_mirror_L_door_lf_ok9_0.geometry} material={materials['door_lf_ok.9']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_diffuser_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_diffuser_R_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_diffuser_R_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_seat_FR_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_seat_FR_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_seat_FR_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes['SL63_seat_FR_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
          <mesh geometry={nodes.SL63_seat_FR_SL63_stitching_0.geometry} material={materials.SL63_stitching} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_seat_FL_SL63_darkred_0.geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes.SL63_seat_FL_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_seat_FL_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes['SL63_seat_FL_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
          <mesh geometry={nodes.SL63_seat_FL_SL63_stitching_0.geometry} material={materials.SL63_stitching} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_plastic_0.geometry} material={materials.SL63_plastic} />
          <mesh geometry={nodes['SL63_doorpanel_L_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_interiorSymbs_0.geometry} material={materials.SL63_interiorSymbs} />
          <mesh geometry={nodes['SL63_doorpanel_L_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
          <mesh geometry={nodes.SL63_doorpanel_L_SL63_speakers_0.geometry} material={materials.SL63_speakers} />
          <mesh geometry={nodes['SL63_doorpanel_L_SL63_ambiente-on_0'].geometry} material={materials['SL63_ambiente-on']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_plastic_0.geometry} material={materials.SL63_plastic} />
          <mesh geometry={nodes['SL63_doorpanel_R_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_interiorSymbs_0.geometry} material={materials.SL63_interiorSymbs} />
          <mesh geometry={nodes['SL63_doorpanel_R_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} />
          <mesh geometry={nodes.SL63_doorpanel_R_SL63_speakers_0.geometry} material={materials.SL63_speakers} />
          <mesh geometry={nodes['SL63_doorpanel_R_SL63_ambiente-on_0'].geometry} material={materials['SL63_ambiente-on']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_bumper_F_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_bumper_F_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_bumper_F_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_bumper_F_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_bumper_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_bumper_R_SL63_paint_0.geometry} material={materials.SL63_paint} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_trunk_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_trunk_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_trunk_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_trunk_SL63_brakelight_0.geometry} material={materials.SL63_brakelight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_door_L_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_door_L_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_door_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_door_L_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_body_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_body_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_body_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_body_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_body_SL63_plastic_0.geometry} material={materials.SL63_plastic} />
          <mesh geometry={nodes['SL63_body_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes.SL63_body_SL63_carpet_0.geometry} material={materials.SL63_carpet} />
          <mesh geometry={nodes.SL63_body_SL63_stitching_0.geometry} material={materials.SL63_stitching} />
          <mesh geometry={nodes.SL63_body_SL63_speakers_0.geometry} material={materials.SL63_speakers} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_intmirror_wheel3_0.geometry} material={materials['wheel.3']} />
          <mesh geometry={nodes.SL63_intmirror_SL63_mirror_0.geometry} material={materials.SL63_mirror} />
        </group>
        <group position={[77.659, 33.372, 118.575]} rotation={[-Math.PI / 2, 0, 0]} scale={106.168}>
          <mesh geometry={nodes.SL63_wheel_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_wheel_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_fender_R_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_fender_R_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_fender_R_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_fender_R_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_fender_R_SL63_dark_0.geometry} material={materials.SL63_dark} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_fender_L_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_fender_L_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_fender_L_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_fender_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes.SL63_fender_L_SL63_dark_0.geometry} material={materials.SL63_dark} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_0'].geometry} material={materials.shiftlight_multi} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l0_0'].geometry} material={materials.shiftlight_multi_l0} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l1_0'].geometry} material={materials.shiftlight_multi_l1} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l2_0'].geometry} material={materials.shiftlight_multi_l2} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l3_0'].geometry} material={materials.shiftlight_multi_l3} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l4_0'].geometry} material={materials.shiftlight_multi_l4} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l5_0'].geometry} material={materials.shiftlight_multi_l5} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l6_0'].geometry} material={materials.shiftlight_multi_l6} />
          <mesh geometry={nodes['SL63_shiftlight-dash_shiftlight_multi_l7_0'].geometry} material={materials.shiftlight_multi_l7} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_navi_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_navi_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes.SL63_navi_SL63_interiorSymbs_0.geometry} material={materials.SL63_interiorSymbs} />
          <mesh geometry={nodes['SL63_navi_SL63_GPS-Screen_0'].geometry} material={materials['SL63_GPS-Screen']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_floormat-R_SL63_silver_0'].geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_floormat-R_SL63_carpet_0'].geometry} material={materials.SL63_carpet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_floormat-L_SL63_silver_0'].geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_floormat-L_SL63_carpet_0'].geometry} material={materials.SL63_carpet} />
        </group>
        <group position={[34.524, 76.384, 4.373]} rotation={[-2.88, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_paddles_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} />
          <mesh geometry={nodes.SL63_paddles_wheel3_0.geometry} material={materials['wheel.3']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_shifter_A_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_shifter_A_SL63_interiorSymbs_0.geometry} material={materials.SL63_interiorSymbs} />
        </group>
        <group position={[39.735, 75.215, 13.619]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_signalstalk_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_signalstalk_SL63_interiorSymbs_0.geometry} material={materials.SL63_interiorSymbs} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_engine-63V8_SL63_b_0'].geometry} material={materials.SL63_b} />
          <mesh geometry={nodes['SL63_engine-63V8_chassis2_0'].geometry} material={materials['chassis.2']} />
          <mesh geometry={nodes['SL63_engine-63V8_chassis7_0'].geometry} material={materials['chassis.7']} />
          <mesh geometry={nodes['SL63_engine-63V8_chassis3_0'].geometry} material={materials['chassis.3']} />
          <mesh geometry={nodes['SL63_engine-63V8_chassis8_0'].geometry} material={materials['chassis.8']} />
          <mesh geometry={nodes['SL63_engine-63V8_chassis14_0'].geometry} material={materials['chassis.14']} />
          <mesh geometry={nodes['SL63_engine-63V8_engine16_0'].geometry} material={materials['engine.16']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_hood_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_hood_SL63_carbon_0.geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes.SL63_hood_SL63_paint_0.geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes.SL63_hood_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_engine-63V8-turbos_SL63_b_0'].geometry} material={materials.SL63_b} />
          <mesh geometry={nodes['SL63_engine-63V8-turbos_chassis2_0'].geometry} material={materials['chassis.2']} />
          <mesh geometry={nodes['SL63_engine-63V8-turbos_chassis7_0'].geometry} material={materials['chassis.7']} />
          <mesh geometry={nodes['SL63_engine-63V8-turbos_engine12_0'].geometry} material={materials['engine.12']} />
          <mesh geometry={nodes['SL63_engine-63V8-turbos_engine15_0'].geometry} material={materials['engine.15']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.SL63_headlight_L_SL63_black001_0.geometry} material={materials['SL63_black.001']} />
          <mesh geometry={nodes.SL63_headlight_L_SL63_silver_0.geometry} material={materials.SL63_silver} />
          <mesh geometry={nodes['SL63_headlight_L_SL63_runninglight-Fr_0'].geometry} material={materials['SL63_runninglight-Fr']} />
          <mesh geometry={nodes['SL63_headlight_L_SL63_lowbeams-F001_0'].geometry} material={materials['SL63_lowbeams-F.001']} />
          <mesh geometry={nodes.SL63_headlight_L_SL65_cornerlight_left_0.geometry} material={materials.SL65_cornerlight_left} />
          <mesh geometry={nodes['SL63_headlight_L_SL63_runninglight-Fl_0'].geometry} material={materials['SL63_runninglight-Fl']} />
          <mesh geometry={nodes.SL63_headlight_L_SL65_cornerlight_right_0.geometry} material={materials.SL65_cornerlight_right} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_spoiler-R_SL63_paint_0'].geometry} material={materials.SL63_paint} />
          <mesh geometry={nodes['SL63_spoiler-R_SL63_silver_0'].geometry} material={materials.SL63_silver} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_sideskirt-R-crb_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes['SL63_sideskirt-R-crb_SL63_paint_0'].geometry} material={materials.SL63_paint} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_sideskirt-L-crb_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
          <mesh geometry={nodes['SL63_sideskirt-L-crb_SL63_paint_0'].geometry} material={materials.SL63_paint} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['SL63_diffuser_R-crb_SL63_black_0'].geometry} material={materials.SL63_black} />
          <mesh geometry={nodes['SL63_diffuser_R-crb_SL63_darkred_0'].geometry} material={materials.SL63_darkred} />
          <mesh geometry={nodes['SL63_diffuser_R-crb_SL63_carbon_0'].geometry} material={materials.SL63_carbon} />
        </group>
        <group position={[76.157, 33.372, 118.575]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={[112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[77.659, 33.372, -132.584]} rotation={[-Math.PI / 2, 0, 0]} scale={106.168}>
          <mesh geometry={nodes.SL63_wheel001_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_wheel001_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group position={[76.157, 33.372, -132.584]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={[112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-77.202, 33.372, 118.575]} rotation={[-Math.PI / 2, 0, 0]} scale={[-106.168, 106.168, 106.168]}>
          <mesh geometry={nodes.SL63_wheel002_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_wheel002_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group position={[-75.7, 33.372, 118.575]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <group position={[-77.202, 33.372, -132.584]} rotation={[-Math.PI / 2, 0, 0]} scale={[-106.168, 106.168, 106.168]}>
          <mesh geometry={nodes.SL63_wheel003_SL63_black_0.geometry} material={materials.SL63_black} />
          <mesh geometry={nodes.SL63_wheel003_SL63_silver_0.geometry} material={materials.SL63_silver} />
        </group>
        <group position={[-75.7, 33.372, -132.584]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-112.663, 96.688, 96.688]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging002_0.geometry} material={materials['amdb11_badging.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <mesh geometry={nodes['SL63_sunvisor_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_badge-F-AMG_body6_0'].geometry} material={materials['body.6']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_radsupport_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_fueltank_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_heatshield_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_exhaust_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_driveshaft_SL63_underbody_0.geometry} material={materials.SL63_underbody} position={[-0.275, 30.789, -10.982]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 105.129, 100]} />
        <mesh geometry={nodes.SL63_transfercase_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_driveshaft_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} position={[12.826, 26.658, 73.686]} rotation={[Math.PI / 2, 1.453, Math.PI]} scale={100} />
        <mesh geometry={nodes.SL63_exhaust_L_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_tubs_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_shock_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_hub_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_lowerarm_F_b_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_lowerarm_F_a_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_steeringbox_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_tierod_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_swaybar_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_halfshaft_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_diff_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_lowerarm_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_upperarm_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_halfshaft_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_strut_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 96.778]} />
        <mesh geometry={nodes.SL63_tierod_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_subframe_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_hub_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_swaybar_F_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_spring_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_diff_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_subframe_R_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_underbody_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_transmission_SL63_underbody_0.geometry} material={materials.SL63_underbody} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_lettering_trunk_amg_SL63_silver_0.geometry} material={materials.SL63_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_lettering_trunk_SL63_SL63_silver_0.geometry} material={materials.SL63_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_logo_R_SL63_silver_0.geometry} material={materials.SL63_silver} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_gaspedal_SL63_silver_0.geometry} material={materials.SL63_silver} position={[25.178, 20.885, 41.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_brakepedal_SL63_silver_0.geometry} material={materials.SL63_silver} position={[38.678, 51.536, 50.232]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_muffler_L_bastion_mechanical_0.geometry} material={materials.bastion_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_muffler_R_bastion_mechanical_0.geometry} material={materials.bastion_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_tub-RL_bastion_mechanical_0'].geometry} material={materials.bastion_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_tub-RR_bastion_mechanical_0'].geometry} material={materials.bastion_mechanical} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_bumperbar_F_SL63_radiatorsupp_0.geometry} material={materials.SL63_radiatorsupp} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_wipers_SL63_black_0.geometry} material={materials.SL63_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_windshield-tint_SL63_tinted-glass_0'].geometry} material={materials['SL63_tinted-glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_doorglass_R-tint_SL63_tinted-glass_0'].geometry} material={materials['SL63_tinted-glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_doorglass_L-tint_SL63_tinted-glass_0'].geometry} material={materials['SL63_tinted-glass']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_headlightglass_R-tint_SL63_tinted-glass001_0'].geometry} material={materials['SL63_tinted-glass.001']} position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_taillightglass_R-tint_SL63_tinted-glass_0'].geometry} material={materials['SL63_tinted-glass']} position={[0.111, -0.284, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['SL63_taillightglass_L-tint_SL63_tinted-glass_0'].geometry} material={materials['SL63_tinted-glass']} position={[0.111, -0.284, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.SL63_radiator_SL63_radiatorsupp_0.geometry} material={materials.SL63_radiatorsupp} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[77.162, 33.372, 118.575]} rotation={[-Math.PI / 2, 0, 0]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[77.162, 33.372, -132.584]} rotation={[-Math.PI / 2, 0, 0]} scale={[127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-76.704, 33.372, 118.575]} rotation={[-Math.PI / 2, 0, 0]} scale={[-127.027, 104.296, 104.296]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-76.704, 33.372, -132.584]} rotation={[-Math.PI / 2, 0, 0]} scale={[-127.027, 104.296, 104.296]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/SL63_AMG_BENZ.glb')
