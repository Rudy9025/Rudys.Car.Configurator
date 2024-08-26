/* eslint-disable */
import React, { useContext,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/porsche_918.glb')
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
          <mesh geometry={nodes.p918_spoiler_custom_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_spoiler_custom_P918_besi0_0.geometry} material={materials['P918_besi.0']} />
          <mesh geometry={nodes.p918_spoiler_custom_P918_black0_0.geometry} material={materials['P918_black.0']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_bumper_F_custom_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_bumper_F_custom_P918_black0_0.geometry} material={materials['P918_black.0']} />
          <mesh geometry={nodes.p918_bumper_F_custom_P918_movsteer_100_0.geometry} material={materials['P918_movsteer_1.0.0']} />
          <mesh geometry={nodes.p918_bumper_F_custom_P918_dvorright0_0.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_bumper_F_custom_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
          <mesh geometry={nodes.p918_bumper_F_custom_p918_signal_L_0.geometry} material={materials.p918_signal_L} />
          <mesh geometry={nodes.p918_bumper_F_custom_p918_signal_R_0.geometry} material={materials.p918_signal_R} />
          <mesh geometry={nodes.p918_bumper_F_custom_P918_glass0_0.geometry} material={materials['P918_glass.0']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_hood_custom_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_hood_custom_1_0.geometry} material={materials.material} />
          <mesh geometry={nodes.p918_hood_custom_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_bodykitwide_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_bodykitwide_P918_black0_0.geometry} material={materials['P918_black.0']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_bumper_R_custom_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_bumper_R_custom_P918_movsteer_100_0.geometry} material={materials['P918_movsteer_1.0.0']} />
          <mesh geometry={nodes.p918_bumper_R_custom_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
          <mesh geometry={nodes.p918_bumper_R_custom_p918_signal_L_0.geometry} material={materials.p918_signal_L} />
          <mesh geometry={nodes.p918_bumper_R_custom_p918_signal_R_0.geometry} material={materials.p918_signal_R} />
          <mesh geometry={nodes.p918_bumper_R_custom_P918_dvorright0_0.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_bumper_R_custom_p918_taillight_0.geometry} material={materials.p918_taillight} />
          <mesh geometry={nodes.p918_bumper_R_custom_p918_headlight_0.geometry} material={materials.p918_headlight} />
          <mesh geometry={nodes.p918_bumper_R_custom_P918_bump_rear_ok001_0.geometry} material={materials['P918_bump_rear_ok.001']} />
          <mesh geometry={nodes.p918_bumper_R_custom_P918_gril0_0.geometry} material={materials['P918_gril.0']} />
          <mesh geometry={nodes.p918_bumper_R_custom_P918_black0_0.geometry} material={materials['P918_black.0']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_door_L_P918_movsteer_105_0.geometry} material={materials['P918_movsteer_1.0.5']} />
          <mesh geometry={nodes.p918_door_L_P918_dash_leather0_0.geometry} material={materials['P918_dash_leather.0']} />
          <mesh geometry={nodes.p918_door_L_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_door_L_P918_glasses_r0_0.geometry} material={materials['P918_glasses_r.0']} />
          <mesh geometry={nodes.p918_door_L_P918_black0_0.geometry} material={materials['P918_black.0']} />
          <mesh geometry={nodes.p918_door_L_P918_chassis0_0.geometry} material={materials['P918_chassis.0']} />
          <mesh geometry={nodes.p918_door_L_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
          <mesh geometry={nodes.p918_door_L_P918_sepion_tengah0_0.geometry} material={materials['P918_sepion_tengah.0']} />
          <mesh geometry={nodes.p918_door_L_P918_int_s0_0.geometry} material={materials['P918_int_s.0']} />
          <mesh geometry={nodes.p918_door_L_P918_interior0_0.geometry} material={materials['P918_interior.0']} />
          <mesh geometry={nodes.p918_door_L_P918_movsteer_104_0.geometry} material={materials['P918_movsteer_1.0.4']} />
          <mesh geometry={nodes.p918_door_L_P918_dvorright0_0.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_door_L_P918_tahook0_0.geometry} material={materials['P918_tahook.0']} />
          <mesh geometry={nodes.p918_door_L_P918_besi0_0.geometry} material={materials['P918_besi.0']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_body_diff_wheel0_0.geometry} material={materials['diff_wheel.0']} />
          <mesh geometry={nodes.p918_body_P918_storege0_0.geometry} material={materials['P918_storege.0']} />
          <mesh geometry={nodes.p918_body_P918_leather_dark0_0.geometry} material={materials['P918_leather_dark.0']} />
          <mesh geometry={nodes.p918_body_P918_light_ref_front0_0.geometry} material={materials['P918_light_ref_front.0']} />
          <mesh geometry={nodes.p918_body_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
          <mesh geometry={nodes.p918_body_P918_glass0_0.geometry} material={materials['P918_glass.0']} />
          <mesh geometry={nodes.p918_body_p918_taillight_0.geometry} material={materials.p918_taillight} />
          <mesh geometry={nodes.p918_body_P918_basic_light_front0_0.geometry} material={materials['P918_basic_light_front.0']} />
          <mesh geometry={nodes.p918_body_P918_hub_lf2_0.geometry} material={materials['P918_hub_lf.2']} />
          <mesh geometry={nodes.p918_body_P918_dvorright0_0.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_body_P918_dvorright0_0_1.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_body_P918_engines0_0.geometry} material={materials['P918_engines.0']} />
          <mesh geometry={nodes.p918_body_P918_misc0_0.geometry} material={materials['P918_misc.0']} />
          <mesh geometry={nodes.p918_body_P918_gril0_0.geometry} material={materials['P918_gril.0']} />
          <mesh geometry={nodes.p918_body_P918_besi0_0.geometry} material={materials['P918_besi.0']} />
          <mesh geometry={nodes.p918_body_P918_black0_0.geometry} material={materials['P918_black.0']} />
          <mesh geometry={nodes.p918_body_P918_movsteer_104_0.geometry} material={materials['P918_movsteer_1.0.4']} />
          <mesh geometry={nodes.p918_body_P918_movsteer_104_0_1.geometry} material={materials['P918_movsteer_1.0.4']} />
          <mesh geometry={nodes.p918_body_P918_carbon0_0.geometry} material={materials['P918_carbon.0']} />
          <mesh geometry={nodes.p918_body_P918_sepion_tengah0_0.geometry} material={materials['P918_sepion_tengah.0']} />
          <mesh geometry={nodes.p918_body_p918_headlight_0.geometry} material={materials.p918_headlight} />
          <mesh geometry={nodes.p918_body_P918_glasses_r0_0.geometry} material={materials['P918_glasses_r.0']} />
          <mesh geometry={nodes.p918_body_P918_bump_rear_ok001_0.geometry} material={materials['P918_bump_rear_ok.001']} />
          <mesh geometry={nodes.p918_body_P918_windscreen_ok2_0.geometry} material={materials['P918_windscreen_ok.2']} />
          <mesh geometry={nodes.p918_body_p918_signal_L_0.geometry} material={materials.p918_signal_L} />
          <mesh geometry={nodes.p918_body_p918_signal_R_0.geometry} material={materials.p918_signal_R} />
          <mesh geometry={nodes.p918_body_P918_tahook0_0.geometry} material={materials['P918_tahook.0']} />
          <mesh geometry={nodes.p918_body_P918_interior0_0.geometry} material={materials['P918_interior.0']} />
          <mesh geometry={nodes.p918_body_P918_panel0_0.geometry} material={materials['P918_panel.0']} />
          <mesh geometry={nodes.p918_body_P918_tombol0_0.geometry} material={materials['P918_tombol.0']} />
          <mesh geometry={nodes.p918_body_P918_dash_leather0_0.geometry} material={materials['P918_dash_leather.0']} />
          <mesh geometry={nodes.p918_body_P918_seat0_0.geometry} material={materials['P918_seat.0']} />
          <mesh geometry={nodes.p918_body_P918_int_s0_0.geometry} material={materials['P918_int_s.0']} />
          <mesh geometry={nodes.p918_body_P918_movsteer_105_0.geometry} material={materials['P918_movsteer_1.0.5']} />
          <mesh geometry={nodes.p918_body_P918_movsteer_102_0.geometry} material={materials['P918_movsteer_1.0.2']} />
          <mesh geometry={nodes.p918_body_P918_lcd0_0.geometry} material={materials['P918_lcd.0']} />
          <mesh geometry={nodes.p918_body_P918_revlight_L_0.geometry} material={materials.P918_revlight_L} />
          <mesh geometry={nodes.p918_body_P918_movsteer_100_0.geometry} material={materials['P918_movsteer_1.0.0']} />
          <mesh geometry={nodes.p918_body_P918_seat_logo0_0.geometry} material={materials['P918_seat_logo.0']} />
          <mesh geometry={nodes.p918_body_P918_bonnet_ok0_0.geometry} material={materials['P918_bonnet_ok.0']} />
          <mesh geometry={nodes.p918_body_P918_paint_0.geometry} material={materials.P918_paint} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_door_R_P918_paint_0.geometry} material={materials.P918_paint} />
          <mesh geometry={nodes.p918_door_R_P918_black0_0.geometry} material={materials['P918_black.0']} />
          <mesh geometry={nodes.p918_door_R_p918_ext_details_rim_0.geometry} material={materials.p918_ext_details_rim} />
          <mesh geometry={nodes.p918_door_R_P918_chassis0_0.geometry} material={materials['P918_chassis.0']} />
          <mesh geometry={nodes.p918_door_R_P918_sepion_tengah0_0.geometry} material={materials['P918_sepion_tengah.0']} />
          <mesh geometry={nodes.p918_door_R_P918_movsteer_104_0.geometry} material={materials['P918_movsteer_1.0.4']} />
          <mesh geometry={nodes.p918_door_R_P918_movsteer_105_0.geometry} material={materials['P918_movsteer_1.0.5']} />
          <mesh geometry={nodes.p918_door_R_P918_dvorright0_0.geometry} material={materials['P918_dvorright.0']} />
          <mesh geometry={nodes.p918_door_R_P918_glasses_r0_0.geometry} material={materials['P918_glasses_r.0']} />
          <mesh geometry={nodes.p918_door_R_P918_dash_leather0_0.geometry} material={materials['P918_dash_leather.0']} />
          <mesh geometry={nodes.p918_door_R_P918_besi0_0.geometry} material={materials['P918_besi.0']} />
          <mesh geometry={nodes.p918_door_R_P918_int_s0_0.geometry} material={materials['P918_int_s.0']} />
          <mesh geometry={nodes.p918_door_R_P918_interior0_0.geometry} material={materials['P918_interior.0']} />
          <mesh geometry={nodes.p918_door_R_P918_tahook0_0.geometry} material={materials['P918_tahook.0']} />
        </group>
        <group position={[30.095, 62.399, 43.154]} rotation={[-2.878, 0, 0]} scale={100}>
          <mesh geometry={nodes.p918_steer_P918_movsteer_100_0.geometry} material={materials['P918_movsteer_1.0.0']} />
          <mesh geometry={nodes.p918_steer_P918_movsteer_102_0.geometry} material={materials['P918_movsteer_1.0.2']} />
          <mesh geometry={nodes.p918_steer_movsteer_103_0.geometry} material={materials['movsteer_1.0.3']} />
          <mesh geometry={nodes.p918_steer_P918_movsteer_104_0.geometry} material={materials['P918_movsteer_1.0.4']} />
          <mesh geometry={nodes.p918_steer_P918_movsteer_105_0.geometry} material={materials['P918_movsteer_1.0.5']} />
          <mesh geometry={nodes.p918_steer_P918_tahook0_0.geometry} material={materials['P918_tahook.0']} />
          <mesh geometry={nodes.p918_steer_1_0.geometry} material={materials.material} />
          <mesh geometry={nodes.p918_steer_movsteer_107_0.geometry} material={materials['movsteer_1.0.7']} />
          <mesh geometry={nodes.p918_steer_left_front_light_0.geometry} material={materials.left_front_light} />
        </group>
        <group position={[-83.518, 31.204, 124.845]} rotation={[Math.PI / 2, 0, 0]} scale={90.392}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake_0.geometry} material={materials.amdb11_brake} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome_0.geometry} material={materials.amdb11_misc_chrome} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_0.geometry} material={materials.amdb11_misc} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_badging_0.geometry} material={materials.amdb11_badging} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper_0.geometry} material={materials.amdb11_caliper} />
        </group>
        <group position={[-83.518, 31.204, -126.793]} rotation={[Math.PI / 2, 0, 0]} scale={90.392}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake_0.geometry} material={materials.amdb11_brake} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome_0.geometry} material={materials.amdb11_misc_chrome} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_0.geometry} material={materials.amdb11_misc} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging_0.geometry} material={materials.amdb11_badging} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper_0.geometry} material={materials.amdb11_caliper} />
        </group>
        <group position={[84.601, 31.204, 124.845]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={90.392}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake_0.geometry} material={materials.amdb11_brake} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome_0.geometry} material={materials.amdb11_misc_chrome} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_0.geometry} material={materials.amdb11_misc} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging_0.geometry} material={materials.amdb11_badging} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper_0.geometry} material={materials.amdb11_caliper} />
        </group>
        <group position={[84.601, 31.204, -126.793]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={90.392}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake_0.geometry} material={materials.amdb11_brake} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome_0.geometry} material={materials.amdb11_misc_chrome} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_0.geometry} material={materials.amdb11_misc} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging_0.geometry} material={materials.amdb11_badging} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper_0.geometry} material={materials.amdb11_caliper} />
        </group>
        <mesh geometry={nodes.p918_rim_wei_918weissach_wheel_0.geometry} material={materials['918weissach_wheel']} position={[88.199, 31.252, 124.777]} rotation={[-Math.PI / 2, 0, 0]} scale={95.658} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[85.635, 31.252, 124.777]} rotation={[-Math.PI / 2, 0, 0]} scale={[106.969, 102.338, 102.338]} />
        <mesh geometry={nodes.p918_rim_wei001_918weissach_wheel_0.geometry} material={materials['918weissach_wheel']} position={[-88.253, 31.252, 124.777]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={95.658} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[-85.689, 31.252, 124.777]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[106.969, 102.338, 102.338]} />
        <mesh geometry={nodes.p918_rim_wei002_918weissach_wheel_0.geometry} material={materials['918weissach_wheel']} position={[88.199, 31.252, -126.739]} rotation={[-Math.PI / 2, 0, 0]} scale={95.658} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[85.635, 31.252, -126.739]} rotation={[-Math.PI / 2, 0, 0]} scale={[106.969, 102.338, 102.338]} />
        <mesh geometry={nodes.p918_rim_wei003_918weissach_wheel_0.geometry} material={materials['918weissach_wheel']} position={[-88.253, 31.252, -126.739]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={95.658} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root_0'].geometry} material={materials['Scene_-_Root']} position={[-85.689, 31.252, -126.739]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[106.969, 102.338, 102.338]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/porsche_918.glb')
