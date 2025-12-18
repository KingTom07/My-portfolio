import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import CodingCharacter from './CodingCharacter'
import DeskSetup from './DeskSetup'
import ContactForm from './ContactForm'
import WallText from './WallText'
import VanHalenPoster from './VanHalenPoster'
import Guitars from './Guitars'
import './ContactForm.css'

// Camera animation component
function CameraAnimator({ isZooming, onZoomComplete }) {
  const { camera } = useThree()
  const controlsRef = useRef()
  const startPos = useRef(new THREE.Vector3(3, 2, 5))
  const startTarget = useRef(new THREE.Vector3(0, 0, 0))
  const progress = useRef(0)
  const isAnimating = useRef(false)

  useEffect(() => {
    if (isZooming && !isAnimating.current) {
      isAnimating.current = true
      progress.current = 0
      startPos.current.copy(camera.position)
      if (controlsRef.current) {
        startTarget.current.copy(controlsRef.current.target)
      }
    } else if (!isZooming && isAnimating.current) {
      isAnimating.current = true
      progress.current = 0
    }
  }, [isZooming, camera])

  useFrame(() => {
    if (isAnimating.current) {
      progress.current += 0.03

      if (progress.current >= 1) {
        progress.current = 1
        isAnimating.current = false
        if (isZooming && onZoomComplete) {
          onZoomComplete()
        }
      }

      const t = progress.current
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t // ease in-out

      if (isZooming) {
        // Zoom into laptop screen
        const targetPos = new THREE.Vector3(0, 0.05, 0.5)
        const targetLookAt = new THREE.Vector3(0, 0.05, -0.1)

        camera.position.lerpVectors(startPos.current, targetPos, eased)
        if (controlsRef.current) {
          controlsRef.current.target.lerpVectors(startTarget.current, targetLookAt, eased)
        }
      } else {
        // Zoom back out
        const targetPos = new THREE.Vector3(3, 2, 5)
        const targetLookAt = new THREE.Vector3(0, 0, 0)

        camera.position.lerpVectors(startPos.current, targetPos, eased)
        if (controlsRef.current) {
          controlsRef.current.target.lerpVectors(startTarget.current, targetLookAt, eased)
        }
      }
    }
  })

  return <OrbitControls
    ref={controlsRef}
    enablePan={!isZooming}
    enableZoom={!isZooming}
    enableRotate={!isZooming}
    maxPolarAngle={Math.PI / 2}
    minDistance={2}
    maxDistance={6.5}
  />
}

const Contact = ({ onNavigate }) => {
  const [computerMode, setComputerMode] = useState(false)
  const [isZooming, setIsZooming] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)

  // Light grey background for the 3D scene
  const bgColor = '#d1d5db'

  const handleComputerClick = () => {
    setIsZooming(true)
  }

  const handleZoomComplete = () => {
    setShowTerminal(true)
    setComputerMode(true)
  }

  const handleExitComputer = () => {
    setShowTerminal(false)
    setComputerMode(false)
    setIsZooming(false)
  }

  return (
    <div className="container section-content contact-section" style={{ position: 'relative', height: '100vh', width: '100vw', margin: 0, padding: 0, display: 'block' }}>
      {/* Three.js Scene Container */}
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <Canvas
          camera={{ position: [3, 2, 5], fov: 50 }}
          style={{ background: bgColor, width: '100%', height: '100%', cursor: 'default' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.4} color="#a846a0" />
          <pointLight position={[5, 2, -5]} intensity={0.3} color="#23ce6b" />

          {/* Scene Objects */}
          <CodingCharacter />
          <DeskSetup onComputerClick={handleComputerClick} computerMode={computerMode} />
          <WallText onNavigate={onNavigate} />
          <VanHalenPoster />
          <Guitars />

          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>

          {/* Camera Controls with Animation */}
          <CameraAnimator isZooming={isZooming} onZoomComplete={handleZoomComplete} />
        </Canvas>

        {/* Contact Form Overlay */}

      </div>

      {/* Computer Screen Overlay */}
      {showTerminal && (
        <div className="computer-screen-overlay">
          <div className="computer-screen-content">
            <div className="computer-header">
              <div className="computer-title">TomSammon@portfolio:~$</div>
              <button className="computer-exit" onClick={handleExitComputer}>✕</button>
            </div>

            {/* Split Screen Layout */}
            <div className="computer-split-screen">
              {/* Left Panel - About Me */}
              <div className="computer-panel about-panel">
                <div className="panel-content">
                  <div className="terminal-output">
                    <h3 className="code-green">who i am</h3>
                    <p>Hello I am Tom Sammon, i am a young 21 year old Business Relationship Manager and programming Hobbiest. After I graduated at the University of Brighton with a degree in Computer Science my mission has been to bridge the gap in tech sales and tech marketing</p>
                  </div>
                  <div className="terminal-line">
                    <span className="prompt">$</span> <span className="cursor">_</span>
                  </div>
                </div>
              </div>

              {/* Right Panel - Contact Form */}
              <div className="computer-panel contact-panel">
                <div className="panel-content">
                  <div className="terminal-line">
                    <span className="prompt">$</span> ./contact.sh
                  </div>
                  <ContactForm inComputerMode={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
