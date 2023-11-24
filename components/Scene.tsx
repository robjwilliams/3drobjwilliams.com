import { Lightformer, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Scene(props) {
  const { nodes } = useGLTF("/studio_baked.gltf");
  const texture = useTexture("/baked_studio.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.5} position={[0, 0, 0]} color="#ff6b02" />
      <pointLight
        intensity={10}
        position-x={0}
        position-z={5}
        position-y={5}
        rotation-y={-0.3}
        distance={10}
        color="#e8e089b8"
        decay={0.5}
      />
      <group name="Plane" position={[0.165, 0.408, 3.113]}>
        <mesh
          name="Plane_1"
          geometry={nodes.Plane_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane_2"
          geometry={nodes.Plane_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane_3"
          geometry={nodes.Plane_3.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Amp"
        geometry={nodes.Amp.geometry}
        material={textureMaterial}
        position={[4.105, 0.408, -2.163]}
        rotation={[0, -1.528, 0]}
      />
      <group
        name="Bass"
        position={[3.85, 5.785, -2.786]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Bass1"
          geometry={nodes.Bass1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bass1_1"
          geometry={nodes.Bass1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bass1_2"
          geometry={nodes.Bass1_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bass1_3"
          geometry={nodes.Bass1_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bass1_4"
          geometry={nodes.Bass1_4.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="board"
        geometry={nodes.board.geometry}
        material={textureMaterial}
        position={[-3.845, 3.969, -2.799]}
      />
      <group
        name="Bombilla"
        position={[1.111, 3.114, -1.402]}
        rotation={[-Math.PI / 2, 0.298, 0]}
      >
        <mesh
          name="Bombilla_1"
          geometry={nodes.Bombilla_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bombilla_2"
          geometry={nodes.Bombilla_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bombilla_3"
          geometry={nodes.Bombilla_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Bombilla_4"
          geometry={nodes.Bombilla_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="camera"
        position={[-2.05, 6.716, -2.299]}
        rotation={[-Math.PI, 1.082, -Math.PI]}
      >
        <mesh
          name="mesh37965892"
          geometry={nodes.mesh37965892.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_1"
          geometry={nodes.mesh37965892_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_2"
          geometry={nodes.mesh37965892_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_3"
          geometry={nodes.mesh37965892_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_4"
          geometry={nodes.mesh37965892_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_5"
          geometry={nodes.mesh37965892_5.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_6"
          geometry={nodes.mesh37965892_6.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh37965892_7"
          geometry={nodes.mesh37965892_7.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="chorus_pedal"
        position={[-0.515, 6.735, -2.642]}
        rotation={[1.365, 0, 0]}
      >
        <mesh
          name="mesh32996253"
          geometry={nodes.mesh32996253.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh32996253_1"
          geometry={nodes.mesh32996253_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh32996253_2"
          geometry={nodes.mesh32996253_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="distortion_pedal"
        position={[-1.094, 6.71, -2.558]}
        rotation={[0.76, 0.533, -0.356]}
      >
        <mesh
          name="mesh1411390515002"
          geometry={nodes.mesh1411390515002.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1411390515002_1"
          geometry={nodes.mesh1411390515002_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1411390515002_2"
          geometry={nodes.mesh1411390515002_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh1411390515002_3"
          geometry={nodes.mesh1411390515002_3.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="elevator"
        geometry={nodes.elevator.geometry}
        material={textureMaterial}
        position={[-0.285, 3.174, -2.285]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="ExecutiveChair1"
        geometry={nodes.ExecutiveChair1.geometry}
        material={textureMaterial}
        position={[-0.431, 1.385, 1.041]}
        rotation={[-Math.PI / 2, 0, 3.082]}
      />
      <group name="Laptop" position={[-0.267, 2.923, -1.216]}>
        <mesh
          name="ChamferBox017_1001"
          geometry={nodes.ChamferBox017_1001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="ChamferBox017_1001_1"
          geometry={nodes.ChamferBox017_1001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="ChamferBox017_1001_2"
          geometry={nodes.ChamferBox017_1001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="ChamferBox017_1001_3"
          geometry={nodes.ChamferBox017_1001_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Monitor1"
        position={[-0.249, 3.86, -2.301]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Monitor1_1"
          geometry={nodes.Monitor1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Monitor1_2"
          geometry={nodes.Monitor1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Shelf"
        position={[-1.452, 6.056, -2.137]}
        rotation={[0, -1.503, 0]}
      >
        <mesh
          name="Cube-Mesh"
          geometry={nodes["Cube-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cube-Mesh_1"
          geometry={nodes["Cube-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="StandingDesk1"
        geometry={nodes.StandingDesk1.geometry}
        material={textureMaterial}
        position={[-0.21, 1.433, -1.629]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
