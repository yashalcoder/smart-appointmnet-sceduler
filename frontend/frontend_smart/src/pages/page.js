"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import HeroSection from "../components/hero-section"
import Navbar from "../components/Navbar"
import { SearchBar } from "../components/search-bar"
import { Stats } from "../components/stats"
import { BackgroundScene } from "../components/background-scene"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#121212]">
      
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <BackgroundScene />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 mx-auto flex h-[calc(100vh-64px)] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Stats />
            <HeroSection />
            <SearchBar />
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative h-[500px] w-full">
              <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <DoctorModel />
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                  <Environment preset="city" />
                </Suspense>
              </Canvas>
              
              <div className="absolute right-0 top-0 rounded-lg bg-black p-4 text-center text-white">
                <div className="text-2xl font-bold">1K</div>
                <div className="text-sm">Appointments</div>
                <div className="text-sm">Completed</div>
              </div>
              
              <div className="absolute bottom-10 right-10 rounded-lg bg-black p-4 text-center text-white">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm">Satisfied Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function DoctorModel() {
  return (
    <mesh position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]}>
      <planeGeometry args={[4, 5]} />
      <meshStandardMaterial map={useTexture("/doctor.png")} transparent />
    </mesh>
  )
}

function useTexture(url) {
  const texture = useLoader(TextureLoader, url)
  return texture
}