/* eslint-disable */

import React, { useContext,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationContext } from "../AnimationContext";


export default function Model(props) {
  const { nodes, materials } = useGLTF('models/McLaren.glb')
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
          <mesh geometry={nodes.euansenna_flank_R_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_flank_R_a_grille_0.geometry} material={materials.a_grille} />
          <mesh geometry={nodes.euansenna_flank_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_fender_R_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_fender_R_euansenna_signal_R_2_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_fender_R_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_fender_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_flank_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_flank_L_a_grille_0.geometry} material={materials.a_grille} />
          <mesh geometry={nodes.euansenna_flank_L_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_fender_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_fender_L_euansenna_signal_L_2_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_fender_L_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_fender_L_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_fender_L_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_door_R_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_door_R_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_door_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_door_R_mainint_0.geometry} material={materials.mainint} />
          <mesh geometry={nodes.euansenna_door_R_a_carbon_0.geometry} material={materials.a_carbon} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_bumper_F_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_bumper_F_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_bumper_F_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_bumper_F_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_bumper_F_sennapaint_0.geometry} material={materials.sennapaint} />
          <mesh geometry={nodes.euansenna_bumper_F_euansenna_signal_L_5_0.geometry} material={materials.euansenna_headlight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_rear_spoiler_GTR_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_rear_spoiler_GTR_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_seat_FL_stig_dot3_0.geometry} material={materials.dot3} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_blacksenna_0.geometry} material={materials.blacksenna} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_Intbuttons_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_stitching_0.geometry} material={materials.stitching} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_alcantara_0.geometry} material={materials.alcantara} />
          <mesh geometry={nodes.euansenna_seat_FL_stig_cinture_0.geometry} material={materials.cinture} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_roof_hardtop_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_roof_hardtop_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_roof_hardtop_mainint_0.geometry} material={materials.mainint} />
          <mesh geometry={nodes.euansenna_roof_hardtop_blacksenna_0.geometry} material={materials.blacksenna} />
          <mesh geometry={nodes.euansenna_roof_hardtop_b20_0.geometry} material={materials.material} />
          <mesh geometry={nodes.euansenna_roof_hardtop_senna_glass001_0.geometry} material={materials['senna_glass.001']} />
          <mesh geometry={nodes.euansenna_roof_hardtop_heiquan_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_roof_hardtop_dinghyblack_0.geometry} material={materials.intbadges} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_frunk_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_frunk_a_grille_0.geometry} material={materials.a_grille} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_transaxle_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_transaxle_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_engine_v8_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_engine_v8_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_engine_v8_senna_chrome_0.geometry} material={materials.senna_chrome} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_sideskirt_R_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_sideskirt_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_sideskirt_L_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_sideskirt_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_doorglass_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_doorglass_L_senna_glass_0.geometry} material={materials.senna_glass} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_door_L_mainint_0.geometry} material={materials.mainint} />
          <mesh geometry={nodes.euansenna_door_L_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_door_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_door_L_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group position={[82.819, 34.978, 127.567]} rotation={[-Math.PI / 2, 0, 0]} scale={102.918}>
          <mesh geometry={nodes.euansenna_wheel1paint_a_badges_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_wheel1paint_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_wheel1paint_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_wheel1paint_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_dash_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_dash_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_dash_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_dash_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_dash_mainint_0.geometry} material={materials.mainint} />
          <mesh geometry={nodes.euansenna_dash_blacksenna_0.geometry} material={materials.blacksenna} />
          <mesh geometry={nodes.euansenna_dash_a_int_screen_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_dash_b20_0.geometry} material={materials.material} />
          <mesh geometry={nodes.euansenna_dash_dot1_0.geometry} material={materials.dot1} />
          <mesh geometry={nodes.euansenna_dash_a_intscreen2_0.geometry} material={materials.a_intscreen2} />
          <mesh geometry={nodes.euansenna_dash_dashplastic_0.geometry} material={materials.dashplastic} />
          <mesh geometry={nodes.euansenna_dash_intbadges_0.geometry} material={materials.intbadges} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_seat_FL_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_seat_FL_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_seat_FL_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_seat_FL_blacksenna_0.geometry} material={materials.blacksenna} />
          <mesh geometry={nodes.euansenna_seat_FL_Intbuttons_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_seat_FL_stitching_0.geometry} material={materials.stitching} />
          <mesh geometry={nodes.euansenna_seat_FL_alcantara_0.geometry} material={materials.alcantara} />
          <mesh geometry={nodes.euansenna_seat_FL_wheel_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_seat_FL_cinture_0.geometry} material={materials.cinture} />
          <mesh geometry={nodes.euansenna_seat_FL_dot3_0.geometry} material={materials.dot3} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_seat_FR_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_seat_FR_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_seat_FR_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_seat_FR_Intbuttons_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_seat_FR_stitching_0.geometry} material={materials.stitching} />
          <mesh geometry={nodes.euansenna_seat_FR_alcantara_0.geometry} material={materials.alcantara} />
          <mesh geometry={nodes.euansenna_seat_FR_cinture_0.geometry} material={materials.cinture} />
          <mesh geometry={nodes.euansenna_seat_FR_dot3_0.geometry} material={materials.dot3} />
        </group>
        <group position={[31.6, 67.697, 54.827]} rotation={[-2.94, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_steer_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_steer_Intbuttons_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_steer_stitching_0.geometry} material={materials.stitching} />
          <mesh geometry={nodes.euansenna_steer_steeringbadge_0.geometry} material={materials.steeringbadge} />
          <mesh geometry={nodes.euansenna_steer_alcantara_0.geometry} material={materials.alcantara} />
          <mesh geometry={nodes.euansenna_steer_plasticsteering_0.geometry} material={materials.plasticsteering} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_doorglass_R_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_doorglass_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_doorpanel_L_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_doorpanel_L_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_doorpanel_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_doorpanel_L_a_grille_0.geometry} material={materials.a_grille} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_mirror_R_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_mirror_R_mirror004_0.geometry} material={materials['mirror.004']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_mirror_L_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_mirror_L_mirror004_0.geometry} material={materials['mirror.004']} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_bumper_R_a_red_0.geometry} material={materials.a_red} />
          <mesh geometry={nodes.euansenna_bumper_R_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_bumper_R_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_bumper_R_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_bumper_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_hood_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_hood_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_hood_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_hood_a_badges_0.geometry} material={materials.intbadges} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_doorpanel_R_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_doorpanel_R_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_doorpanel_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_doorpanel_R_a_grille_0.geometry} material={materials.a_grille} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_headlight_R_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_headlight_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_headlight_R_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_headlight_R_euansenna_headlight_0.geometry} material={materials.euansenna_headlight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_headlight_L_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_headlight_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_headlight_L_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_headlight_L_euansenna_headlight_0.geometry} material={materials.euansenna_headlight} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_body_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_body_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_body_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_body_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_body_mainint_0.geometry} material={materials.mainint} />
          <mesh geometry={nodes.euansenna_body_scintilla_main_0.geometry} material={materials.scintilla_main} />
          <mesh geometry={nodes.euansenna_body_b20_0.geometry} material={materials.material} />
          <mesh geometry={nodes.euansenna_body_dot1_0.geometry} material={materials.dot1} />
          <mesh geometry={nodes.euansenna_body_a_carpetnew_0.geometry} material={materials.a_carpetnew} />
          <mesh geometry={nodes.euansenna_body_cuciture_0.geometry} material={materials.cuciture} />
          <mesh geometry={nodes.euansenna_body_kou_0.geometry} material={materials.material_31} />
          <mesh geometry={nodes.euansenna_body_euansenna_taillight_0.geometry} material={materials.euansenna_headlight} />
          <mesh geometry={nodes.euansenna_body_intbadges_0.geometry} material={materials.intbadges} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_exhaust_tip_a_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_exhaust_tip_a_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.euansenna_flank_hardtop_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
          <mesh geometry={nodes.euansenna_flank_hardtop_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_flank_hardtop_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_flank_hardtop_senna_glass_0.geometry} material={materials.senna_glass} />
          <mesh geometry={nodes.euansenna_flank_hardtop_a_carbon_0.geometry} material={materials.a_carbon} />
          <mesh geometry={nodes.euansenna_flank_hardtop_blacksenna_0.geometry} material={materials.blacksenna} />
          <mesh geometry={nodes.euansenna_flank_hardtop_euansenna_taillight_0.geometry} material={materials.euansenna_headlight} />
        </group>
        <group position={[84.296, 34.978, 127.567]} rotation={[-Math.PI / 2, -0.035, Math.PI]} scale={[103.736, 89.027, 89.027]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials.a_grille} />
        </group>
        <group position={[82.819, 34.978, -125.985]} rotation={[-Math.PI / 2, 0, 0]} scale={102.918}>
          <mesh geometry={nodes.euansenna_wheel1paint001_a_badges_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_wheel1paint001_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_wheel1paint001_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_wheel1paint001_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group position={[84.296, 34.978, -125.985]} rotation={[-Math.PI / 2, -0.035, Math.PI]} scale={[103.736, 89.027, 89.027]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry} material={materials.a_grille} />
        </group>
        <group position={[-83.187, 34.978, 127.567]} rotation={[-Math.PI / 2, 0, 0]} scale={[-102.918, 102.918, 102.918]}>
          <mesh geometry={nodes.euansenna_wheel1paint002_a_badges_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_wheel1paint002_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_wheel1paint002_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_wheel1paint002_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group position={[-84.663, 34.978, 127.567]} rotation={[-Math.PI / 2, 0.035, -Math.PI]} scale={[-103.736, 89.027, 89.027]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials.a_grille} />
        </group>
        <group position={[-83.187, 34.978, -125.985]} rotation={[-Math.PI / 2, 0, 0]} scale={[-102.918, 102.918, 102.918]}>
          <mesh geometry={nodes.euansenna_wheel1paint003_a_badges_0.geometry} material={materials.intbadges} />
          <mesh geometry={nodes.euansenna_wheel1paint003_senna_chrome_0.geometry} material={materials.senna_chrome} />
          <mesh geometry={nodes.euansenna_wheel1paint003_senna_raceparts_0.geometry} material={materials.senna_raceparts} />
          <mesh geometry={nodes.euansenna_wheel1paint003_sennapaintmain_0.geometry} material={materials.sennapaintmain} />
        </group>
        <group position={[-84.663, 34.978, -125.985]} rotation={[-Math.PI / 2, 0.035, -Math.PI]} scale={[-103.736, 89.027, 89.027]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials.a_grille} />
        </group>
        <mesh geometry={nodes.euansenna_sideskirt_R_GTR_sennapaintmain_0.geometry} material={materials.sennapaintmain} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_sideskirt_L_GTR_sennapaintmain_0.geometry} material={materials.sennapaintmain} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_wheelhouse_stock_L_senna_raceparts_0.geometry} material={materials.senna_raceparts} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_wheelhouse_stock_R_senna_raceparts_0.geometry} material={materials.senna_raceparts} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_heat_shield_senna_raceparts_0.geometry} material={materials.senna_raceparts} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_trunklid_stock_senna_raceparts_0.geometry} material={materials.senna_raceparts} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radhose_F_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radhose_FL_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radhose_FR_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radhose_M_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radiator_L_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radhose_R_scintilla_engine001_0.geometry} material={materials.euansenna_headlight} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_exhaust_turbo_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_battery_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_radiator_R_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_intercooler_R_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_chargepipe_R_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_intake_pipe_turbo_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_downpipe_turbo_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_intercooler_L_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_header_turbo_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_chargepipe_L_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_turbo_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_skidplate_skidplate_0.geometry} material={materials.skidplate} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_fuel_tank_L_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_fuel_tank_R_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_chassis_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_subframe_A_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_coolantlines_brackets_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_fuel_pipe_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_rear_subframe_B_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_front_subframe_R_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_front_subframe_L_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_front_subframe_A_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_front_shield_R_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_front_shield_L_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_central_shield_scintilla_main_0.geometry} material={materials.scintilla_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_trunklid_glass_senna_glass_0.geometry} material={materials.senna_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_display7_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_decals_gauges_tcs_0.geometry} material={materials.signal_L} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_display5_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_displayR_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_displayL_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_displayD_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_displayP_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_display3_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_display4_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_display6_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_displayN_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_display1_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_display2_euansenna_display_0.geometry} material={materials.euansenna_display} position={[28.007, 73.881, 77.871]} rotation={[0.815, 0, 0]} scale={142.301} />
        <mesh geometry={nodes.euansenna_windshield_senna_glass_0.geometry} material={materials.senna_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_headlightglass_R_senna_glass_0.geometry} material={materials.senna_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_headlightglass_L_senna_glass_0.geometry} material={materials.senna_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_coilover_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_coilover_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_lowerarm_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_lowerarm_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_steeringrack_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_tierod_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_tierod_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_upperarm_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_upperarm_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_spindle_FL_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_spindle_FR_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_spindle_RL_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_spindle_RR_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_mount_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_link_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_mount_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_swaybar_link_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_upperarm_mount_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_lowerarm_mount_F_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_lowerarm_mount_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_hub_link_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_upperarm_mount_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_tierod_mount_R_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_steeringrack_boot_euansenna_main_0.geometry} material={materials.euansenna_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_halfshaft_FR_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_halfshaft_RR_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_transfercase_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_diff_F_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_halfshaft_RL_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_halfshaft_FL_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.euansenna_driveshaft_scintilla_engine_0.geometry} material={materials.scintilla_engine} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[84.138, 34.978, 127.567]} rotation={[-Math.PI / 2, 0, 0]} scale={[126.078, 103.517, 103.517]} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[84.138, 34.978, -125.985]} rotation={[-Math.PI / 2, 0, 0]} scale={[126.078, 103.517, 103.517]} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-84.505, 34.978, 127.567]} rotation={[-Math.PI / 2, 0, 0]} scale={[-126.078, 103.517, 103.517]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-84.505, 34.978, -125.985]} rotation={[-Math.PI / 2, 0, 0]} scale={[-126.078, 103.517, 103.517]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/McLaren.glb')
