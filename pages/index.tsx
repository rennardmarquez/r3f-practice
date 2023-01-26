import { memo } from "react"
import { Canvas, MeshProps } from "@react-three/fiber"
import {
  Grid,
  Center,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
  useTexture,
} from "@react-three/drei"
import { useControls } from "leva"
import Hoodie from "@/components/Hoodie"

export default function HomePage() {
  const { texture, ...gridConfig } = useControls({
    texture: {
      options: {
        texture1: "/textures/hoodie/hoodie_p1.jpg",
        texture2: "/textures/hoodie/hoodie_p2.jpg",
        texture3: "/textures/hoodie/hoodie_p3.jpg",
        texture4: "/textures/hoodie/hoodie_p4.jpg",
      },
    },
  })

  const Shadows = memo(() => (
    <AccumulativeShadows
      temporal
      frames={100}
      color="#9d4b4b"
      colorBlend={0.5}
      alphaTest={0.9}
      scale={20}
    >
      <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
    </AccumulativeShadows>
  ))

  return (
    <Canvas shadows camera={{ position: [2, 2, 5], fov: 25 }}>
      <group position={[0, -0.75, 0]}>
        <Center top>
          <Hoodie rotation={[Math.PI / 2, 0, 0]} scale={2} texture={texture} />
        </Center>
        <Shadows />
        <Grid
          position={[0, -0.01, 0]}
          args={[10, 10]}
          infiniteGrid={true}
          {...gridConfig}
        />
      </group>

      <OrbitControls makeDefault />
      <Environment preset="city" />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
          labelColor="white"
        />
      </GizmoHelper>
    </Canvas>
  )
}
