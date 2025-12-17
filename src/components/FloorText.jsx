import { Text } from '@react-three/drei'

export default function FloorText() {
  return (
    <group position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Text
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Bold.ttf"
      >
        SPACE FOR UP · ENTER FOR DOWN
      </Text>
    </group>
  )
}
