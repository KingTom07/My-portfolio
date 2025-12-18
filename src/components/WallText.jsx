import { Text } from '@react-three/drei'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function WallText({ onNavigate }) {
  const [hoveredItem, setHoveredItem] = useState(null)
  const redLightRef = useRef()
  const greenLightRef = useRef()

  const navItems = [
    { label: 'Top page', section: 0, y: 0.5, indent: 0 },
    { label: 'Experience', section: 1, y: 0.3, indent: 0 },
    { label: 'Step8Up - BDM', section: 2, y: 0.15, indent: 1 },
    { label: 'Step8Up - TA', section: 3, y: 0, indent: 1 },
    { label: 'Ai CRM - Co-founder', section: 4, y: -0.15, indent: 1 },
    { label: 'Projects', section: 5, y: -0.35, indent: 0 },
    { label: 'My Portfolio', section: 6, y: -0.5, indent: 1 },
    { label: 'TypeTurtle', section: 7, y: -0.65, indent: 1 },
  ]

  // Flashing lights animation
  useFrame(({ clock }) => {
    if (redLightRef.current) {
      const redFlash = Math.sin(clock.getElapsedTime() * 2) * 0.5 + 0.5
      redLightRef.current.material.emissiveIntensity = redFlash * 0.8
    }
    if (greenLightRef.current) {
      const greenFlash = Math.sin(clock.getElapsedTime() * 2 + Math.PI) * 0.5 + 0.5
      greenLightRef.current.material.emissiveIntensity = greenFlash * 0.8
    }
  })

  return (
    <group position={[0, 1, -3]} rotation={[0, 0, 0]}>
      {/* 90s Cafe Menu Board - Black background */}
      <mesh position={[0, 0.1, -0.05]}>
        <boxGeometry args={[2.8, 2.8, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Wooden frame - top */}
      <mesh position={[0, 1.55, -0.01]}>
        <boxGeometry args={[3, 0.12, 0.04]} />
        <meshStandardMaterial color="#5d4a37" />
      </mesh>

      {/* Wooden frame - bottom */}
      <mesh position={[0, -1.35, -0.01]}>
        <boxGeometry args={[3, 0.12, 0.04]} />
        <meshStandardMaterial color="#5d4a37" />
      </mesh>

      {/* Wooden frame - left */}
      <mesh position={[-1.44, 0.1, -0.01]}>
        <boxGeometry args={[0.12, 2.8, 0.04]} />
        <meshStandardMaterial color="#5d4a37" />
      </mesh>

      {/* Wooden frame - right */}
      <mesh position={[1.44, 0.1, -0.01]}>
        <boxGeometry args={[0.12, 2.8, 0.04]} />
        <meshStandardMaterial color="#5d4a37" />
      </mesh>

      {/* Red indicator light */}
      <mesh ref={redLightRef} position={[-1.1, 1.3, 0.02]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>

      {/* Green indicator light */}
      <mesh ref={greenLightRef} position={[-0.9, 1.3, 0.02]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>

      {/* "Click on the laptop!" text at top */}
      <Text
        fontSize={0.18}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        position={[0, 1.1, 0.02]}
        letterSpacing={0.02}
        fontWeight={700}
      >
        CLICK ON THE LAPTOP!
      </Text>

      {/* Title - Site navigation */}
      <Text
        fontSize={0.12}
        color="#cccccc"
        anchorX="left"
        anchorY="middle"
        position={[-1.2, 0.75, 0.02]}
        letterSpacing={0.01}
      >
        Site navigation
      </Text>

      {/* Navigation Items - Menu board style with bullets */}
      {navItems.map((item, index) => (
        <group key={index}>
          {/* Bullet point */}
          <Text
            fontSize={0.11}
            color={hoveredItem === index ? "#06b6d4" : "#999999"}
            anchorX="center"
            anchorY="middle"
            position={[-1.22 + (item.indent * 0.15), item.y, 0.02]}
          >
            •
          </Text>

          {/* Nav item text */}
          <Text
            fontSize={0.12}
            color={hoveredItem === index ? "#06b6d4" : "#cccccc"}
            anchorX="left"
            anchorY="middle"
            position={[-1.15 + (item.indent * 0.15), item.y, 0.02]}
            onClick={() => onNavigate && onNavigate(item.section)}
            onPointerOver={() => setHoveredItem(index)}
            onPointerOut={() => setHoveredItem(null)}
            letterSpacing={0.005}
          >
            {item.label}
          </Text>
        </group>
      ))}
    </group>
  )
}
