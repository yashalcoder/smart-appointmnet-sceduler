"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Line, Sphere } from "@react-three/drei"
import * as THREE from "three"

export function BackgroundScene() {
  const groupRef = useRef(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Animated floating spheres */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.5, 16, 16]} position={[-10, -5, -15]}>
          <meshStandardMaterial color="#0066ff" roughness={0.1} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
        <Sphere args={[1, 16, 16]} position={[10, 5, -15]}>
          <meshStandardMaterial color="#ff0066" roughness={0.1} metalness={0.8} />
        </Sphere>
      </Float>

      {/* Grid lines */}
      <GridLines />

      {/* Curved line on left */}
      <CurvedLine />

      {/* Blue lines on right */}
      <BlueLines />

      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.2} />

      {/* Directional lights for highlights */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#0066ff" />

      {/* Spotlight for dramatic effect */}
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />
    </group>
  )
}

function GridLines() {
  return (
    <group>
      {Array.from({ length: 20 }).map((_, i) => (
        <Line
          key={`grid-${i}`}
          points={[new THREE.Vector3(-10, -10 + i, -10), new THREE.Vector3(10, -10 + i, -10)]}
          color="#ffffff"
          opacity={0.05}
          transparent
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <Line
          key={`grid-vertical-${i}`}
          points={[new THREE.Vector3(-10 + i, -10, -10), new THREE.Vector3(-10 + i, 10, -10)]}
          color="#ffffff"
          opacity={0.05}
          transparent
        />
      ))}
    </group>
  )
}

function CurvedLine() {
  const points = []
  for (let i = 0; i <= 100; i++) {
    const t = i / 100
    const x = -8 + Math.sin(t * Math.PI * 2) * 3
    const y = t * 20 - 10
    const z = -5 - Math.cos(t * Math.PI) * 2
    points.push(new THREE.Vector3(x, y, z))
  }

  return <Line points={points} color="white" lineWidth={2} opacity={0.7} transparent />
}

function BlueLines() {
  return (
    <group position={[8, 0, -5]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Line
          key={`blue-line-${i}`}
          points={[new THREE.Vector3(0, -5 + i * 2, 0), new THREE.Vector3(5, -2 + i * 2, 0)]}
          color="#0066ff"
          lineWidth={2}
          opacity={0.7}
          transparent
        />
      ))}
    </group>
  )
}

