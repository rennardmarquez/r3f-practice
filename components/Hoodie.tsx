import { useGLTF, useTexture } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"

interface IHoodieProps extends MeshProps {
  texture: string
}

export default function Hoodie(props: IHoodieProps) {
  const { texture } = props
  const { nodes } = useGLTF("/models/hoodie.glb")
  const map = useTexture(texture)

  return (
    //@ts-ignore
    <mesh castShadow receiveShadow geometry={nodes.HoodieA.geometry} {...props}>
      <meshStandardMaterial map={map} />
    </mesh>
  )
}
