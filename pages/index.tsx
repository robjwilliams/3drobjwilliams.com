import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Avatar from "../components/Avatar";
import Scene from "../components/Scene";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "../components/Interface";
import ScrollManager from "../components/ScrollManager";
import Menu from "../components/Menu";
import { useControls } from "leva";

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const { animation } = useControls({
    animation: {
      value: "Typing",
      // options: ["Typing", "Falling", "Standing"],
    },
  });

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      <Canvas camera={{ position: [11, 5, 2], fov: 50 }}>
        <color attach="background" args={["#e9ba68"]} />
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Avatar
            animation={animation}
            scale={1.35}
            rotation-y={15.8}
            position-x={2.95}
            position-y={0.175}
            position-z={-2.1}
          />
          <Scene
            scale={0.4}
            position-x={3}
            position-z={-2.5}
            rotation-y={0.3}
          />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}
