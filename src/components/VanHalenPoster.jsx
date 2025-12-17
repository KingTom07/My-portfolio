export default function VanHalenPoster() {
  return (
    <group position={[-3, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      {/* Poster Background */}
      <mesh>
        <planeGeometry args={[1.2, 1.6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Red/Black Stripe Design (Van Halen style) */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.1, 1.5]} />
        <meshStandardMaterial color="#d41e1e" />
      </mesh>

      {/* Black diagonal stripes */}
      <mesh position={[-0.3, 0.3, 0.02]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[0.15, 1.8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.1, 0.3, 0.02]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[0.15, 1.8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.1, 0.3, 0.02]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[0.15, 1.8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.3, 0.3, 0.02]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[0.15, 1.8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* White border effect */}
      <mesh position={[0, 0.6, 0.03]}>
        <planeGeometry args={[0.8, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}
