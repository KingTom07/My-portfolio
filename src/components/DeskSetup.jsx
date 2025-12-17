export default function DeskSetup() {
  return (
    <group position={[0, -0.5, 0.5]} rotation={[0, Math.PI, 0]}>
      {/* Desk */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#3e4545" />
      </mesh>

      {/* Desk Legs */}
      <mesh position={[-0.8, -0.9, -0.4]}>
        <boxGeometry args={[0.1, 0.9, 0.1]} />
        <meshStandardMaterial color="#343a3a" />
      </mesh>
      <mesh position={[0.8, -0.9, -0.4]}>
        <boxGeometry args={[0.1, 0.9, 0.1]} />
        <meshStandardMaterial color="#343a3a" />
      </mesh>
      <mesh position={[-0.8, -0.9, 0.4]}>
        <boxGeometry args={[0.1, 0.9, 0.1]} />
        <meshStandardMaterial color="#343a3a" />
      </mesh>
      <mesh position={[0.8, -0.9, 0.4]}>
        <boxGeometry args={[0.1, 0.9, 0.1]} />
        <meshStandardMaterial color="#343a3a" />
      </mesh>

      {/* Laptop Base */}
      <mesh position={[0, -0.32, 0.1]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.6, 0.02, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Laptop Keyboard Area */}
      <mesh position={[0, -0.3, 0.1]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[0.55, 0.01, 0.38]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Laptop Screen */}
      <mesh position={[0, 0.05, -0.08]} rotation={[-2.5, 0, 0]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Laptop Screen Display */}
      <mesh position={[0, 0.05, -0.07]} rotation={[-2.5, 0, 0]}>
        <boxGeometry args={[0.55, 0.35, 0.01]} />
        <meshStandardMaterial color="#272d2d" emissive="#272d2d" emissiveIntensity={0.3} />
      </mesh>

      {/* Code lines on screen */}
      <mesh position={[-0.15, 0.1, -0.06]} rotation={[-2.5, 0, 0]}>
        <boxGeometry args={[0.2, 0.02, 0.01]} />
        <meshStandardMaterial color="#23ce6b" emissive="#23ce6b" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.15, 0.05, -0.06]} rotation={[-2.5, 0, 0]}>
        <boxGeometry args={[0.25, 0.02, 0.01]} />
        <meshStandardMaterial color="#23ce6b" emissive="#23ce6b" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.15, 0, -0.06]} rotation={[-2.5, 0, 0]}>
        <boxGeometry args={[0.18, 0.02, 0.01]} />
        <meshStandardMaterial color="#56e88e" emissive="#56e88e" emissiveIntensity={0.5} />
      </mesh>

      {/* Coffee Mug */}
      <group position={[0.5, -0.25, 0.2]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.05, 0.15, 16]} />
          <meshStandardMaterial color="#f6f8ff" />
        </mesh>
        <mesh position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.05, 0.01, 8, 16]} />
          <meshStandardMaterial color="#f6f8ff" />
        </mesh>
      </group>
    </group>
  )
}
