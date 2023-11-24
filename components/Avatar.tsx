import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function Avatar(props) {
  const { scene } = useGLTF("/avatar.glb");
  const { animation } = props;
  // const { headFollow, cursorFollow, wireframe } = useControls({
  //   headFollow: false,
  //   cursorFollow: false,
  //   wireframe: false,
  // })
  const group = useRef();
  // const { materials } = useGLTF('avatar.glb')

  const { animations: typingAnimation } = useFBX("/typing.fbx");
  const { animations: standingAnimation } = useFBX("/standing.fbx");
  const { animations: fallingAnimation } = useFBX("/falling.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";

  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  );

  // useFrame((state) => {
  // group.current.getObjectByName("Head").lookAt(state.camera.position);
  // if (cursorFollow) {
  //   const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
  //   group.current.getObjectByName("Spine2").lookAt(target);
  // }
  // });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  // useEffect(() => {
  //   Object.values(materials).forEach((material) => {
  //     material.wireframe = wireframe
  //   })
  // }, [wireframe])

  return <primitive ref={group} object={scene} {...props} />;
}
