'use client'

import { useRef, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useMouse } from '@/hooks/useMouse'

export default function FloatingObject() {
  const meshRef = useRef<Mesh>(null)
  const mouse = useMouse()

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      const baseRotationX = state.clock.elapsedTime * 0.2
      const baseRotationY = state.clock.elapsedTime * 0.3
      
      // Mouse influence
      const mouseInfluenceX = (mouse.y - 0.5) * 0.5
      const mouseInfluenceY = (mouse.x - 0.5) * 0.5
      
      // Combine base rotation with mouse influence
      meshRef.current.rotation.x = baseRotationX + mouseInfluenceX
      meshRef.current.rotation.y = baseRotationY + mouseInfluenceY
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1}
        />
      </mesh>
    </mesh>
  )
}

