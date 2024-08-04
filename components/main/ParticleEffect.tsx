"use client";

import React, { useState, useRef, Suspense, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ParticleEffect = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
}, []);

return (
    <Particles
        className="h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#EE0F0F",
                },
                links: {
                    color: "#EE0F0F",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    enable: true,
                    direction: "top-left",
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    straight: false,
                    speed: 1,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 105,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 }, // Added initializer for 'max' property
                },
            },
            detectRetina: true,
        }}
    />
);
};

const CombinedCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
    <ParticleEffect />
  </div>
);

export default CombinedCanvas;
