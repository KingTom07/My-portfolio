import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CodingCharacter from './CodingCharacter'
import DeskSetup from './DeskSetup'
import ContactForm from './ContactForm'
import WallText from './WallText'
import VanHalenPoster from './VanHalenPoster'
import Guitars from './Guitars'
import './ContactForm.css'

const Contact = () => {
  // Dark cyan background for the 3D scene
  const bgColor = '#1a6666'

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
          style={{ background: bgColor, width: '100%', height: '100%' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.4} color="#a846a0" />
          <pointLight position={[5, 2, -5]} intensity={0.3} color="#23ce6b" />

          {/* Scene Objects */}
          <CodingCharacter />
          <DeskSetup />
          <WallText />
          <VanHalenPoster />
          <Guitars />

          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>

          {/* Camera Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={2}
            maxDistance={6.5}
          />
        </Canvas>

        {/* Contact Form Overlay */}

      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
