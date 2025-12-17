import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function CodingCharacter() {
  const characterRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()

  // Animate typing motion
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(time * 3) * 0.1 + 0.3
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(time * 3 + 1) * 0.1 + 0.3
    }
  })

  return (
    <group ref={characterRef} position={[0, -0.6, 0.3]} rotation={[0, Math.PI, 0]}>
      {/* Body */}
      <mesh position={[0, 0.05, 0.35]}>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.75, 0.35]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#ffd7ba" />
      </mesh>

      {/* Blonde Hair */}
      <mesh position={[0, 0.95, 0.35]}>
        <boxGeometry args={[0.42, 0.15, 0.42]} />
        <meshStandardMaterial color="#f4d03f" />
      </mesh>
      <mesh position={[0, 0.85, 0.5]}>
        <boxGeometry args={[0.42, 0.3, 0.15]} />
        <meshStandardMaterial color="#f4d03f" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.08, 0.77, 0.53]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.08, 0.77, 0.53]}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.4, 0.3, 0.5]} rotation={[-Math.PI / 3, 0, -Math.PI / 12]}>
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.4, 0.3, 0.5]} rotation={[-Math.PI / 3, 0, Math.PI / 12]}>
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.15, 0.5, 0.15]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Left Leg - Upper (Thigh) */}
      <mesh position={[-0.15, -0.4, 0.25]} rotation={[-Math.PI / 2.2, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial color="#50514f" />
      </mesh>

      {/* Left Leg - Lower (Calf) */}
      <mesh position={[-0.15, -0.7, -0.1]} rotation={[Math.PI / 3.5, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial color="#50514f" />
      </mesh>

      {/* Right Leg - Upper (Thigh) */}
      <mesh position={[0.15, -0.4, 0.25]} rotation={[-Math.PI / 2.2, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial color="#50514f" />
      </mesh>

      {/* Right Leg - Lower (Calf) */}
      <mesh position={[0.15, -0.7, -0.1]} rotation={[Math.PI / 3.5, 0, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial color="#50514f" />
      </mesh>

      {/* Chair */}
      <group position={[0, -0.5, 0.3]} rotation={[0, Math.PI, 0]}>
        {/* Chair Seat */}
        <mesh position={[0, 0, -0.1]}>
          <boxGeometry args={[0.7, 0.1, 0.6]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>

        {/* Chair Backrest */}
        <mesh position={[0, 0.4, -0.35]}>
          <boxGeometry args={[0.7, 0.7, 0.1]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>

        {/* Chair Legs */}
        <mesh position={[-0.25, -0.3, -0.3]}>
          <boxGeometry args={[0.08, 0.5, 0.08]} />
          <meshStandardMaterial color="#1a252f" />
        </mesh>
        <mesh position={[0.25, -0.3, -0.3]}>
          <boxGeometry args={[0.08, 0.5, 0.08]} />
          <meshStandardMaterial color="#1a252f" />
        </mesh>
        <mesh position={[-0.25, -0.3, 0.1]}>
          <boxGeometry args={[0.08, 0.5, 0.08]} />
          <meshStandardMaterial color="#1a252f" />
        </mesh>
        <mesh position={[0.25, -0.3, 0.1]}>
          <boxGeometry args={[0.08, 0.5, 0.08]} />
          <meshStandardMaterial color="#1a252f" />
        </mesh>
      </group>
    </group>
  )
}
