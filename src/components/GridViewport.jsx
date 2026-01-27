"use client"

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

function CustomGridHelper() {
    return(
        <gridHelper rotation={[0.2, 0, 0]} args={[3, 10, "rgba(100, 100, 100)", "rgba(50, 50, 50)"]}/>
    );
}

export function GridViewport() {
    return(
        <Canvas
            fallback=
            {<div>This website has some WebGL 3D graphics,
            but it seems that your device doesn't support WebGL</div>}
            frameloop="demand"
        >
            <PerspectiveCamera
            makeDefault
            zoom={5}
            // position={[-0.2, 0.2, 0.2]}
            position={[0, 0.2, 0]}
            // rotation={[0, -Math.PI/4, 0]}
            rotation={[0, 0, 0]}
            />
            <CustomGridHelper/>
            <ambientLight intensity={1} color="#7afff2" />
        </Canvas>
    );
}