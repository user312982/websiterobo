import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// The rotating gear (background)
function Gear({ isHovered }) {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.z += isHovered ? 0.015 : 0.003;
        }
    });

    const gearColor = '#FFCC00'; // Yellow

    return (
        <group ref={meshRef} position={[0.3, -0.2, -0.5]}>
            {/* Main gear ring */}
            <mesh>
                <torusGeometry args={[2, 0.35, 16, 32]} />
                <meshStandardMaterial color={gearColor} metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Gear teeth */}
            {Array.from({ length: 10 }).map((_, i) => {
                const angle = (i / 10) * Math.PI * 2;
                const x = Math.cos(angle) * 2.3;
                const y = Math.sin(angle) * 2.3;
                return (
                    <mesh key={i} position={[x, y, 0]} rotation={[0, 0, angle]}>
                        <boxGeometry args={[0.6, 0.4, 0.35]} />
                        <meshStandardMaterial color={gearColor} metalness={0.7} roughness={0.2} />
                    </mesh>
                );
            })}
        </group>
    );
}

// The bear logo (foreground) - uses the actual PNG
function BearLogo() {
    const texture = useLoader(THREE.TextureLoader, '/src/logo/logo.webp');

    return (
        <mesh position={[0, 0, 0.1]}>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
        </mesh>
    );
}

function RobotGear3D() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full h-full cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                {/* Lighting */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#FFCC00" />

                {/* Floating effect wrapper */}
                <Float
                    speed={2}
                    rotationIntensity={0.1}
                    floatIntensity={0.3}
                >
                    {/* Rotating gear in background */}
                    <Gear isHovered={isHovered} />

                    {/* Static bear logo in foreground */}
                    <BearLogo />
                </Float>

                {/* Controls for slight interaction */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minAzimuthAngle={-Math.PI / 6}
                    maxAzimuthAngle={Math.PI / 6}
                />
            </Canvas>
        </div>
    );
}

export default RobotGear3D;
