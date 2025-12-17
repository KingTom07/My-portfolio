export default function Guitars() {
  return (
    <group position={[2.5, -1, -2.5]}>
      {/* Guitar 1 - Leaning against wall */}
      <group rotation={[0, Math.PI / 4, -Math.PI / 12]}>
        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.08]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.3, 0]}>
          <boxGeometry args={[0.08, 1.4, 0.06]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>

        {/* Headstock */}
        <mesh position={[0, 2.1, 0]}>
          <boxGeometry args={[0.12, 0.25, 0.05]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>

      {/* Guitar 2 - Next to first guitar */}
      <group position={[0.3, 0, 0.2]} rotation={[0, Math.PI / 3, -Math.PI / 10]}>
        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.08]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.3, 0]}>
          <boxGeometry args={[0.08, 1.4, 0.06]} />
          <meshStandardMaterial color="#2d2d2d" />
        </mesh>

        {/* Headstock */}
        <mesh position={[0, 2.1, 0]}>
          <boxGeometry args={[0.12, 0.25, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* White pickguard accent */}
        <mesh position={[0.05, 0.4, 0.05]}>
          <boxGeometry args={[0.15, 0.25, 0.01]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Guitar Stand/Base */}
      <mesh position={[0.15, 0.1, 0.1]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 8]} />
        <meshStandardMaterial color="#3d3d3d" />
      </mesh>
    </group>
  )
}
