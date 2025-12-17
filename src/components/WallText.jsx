import { Text } from '@react-three/drei'

export default function WallText() {
  return (
    <group position={[0, 1, -3]} rotation={[0, 0, 0]}>
      <Text
        fontSize={0.2}
        color="#8b8b8b"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        Final page · Press Space to go back
      </Text>
    </group>
  )
}
