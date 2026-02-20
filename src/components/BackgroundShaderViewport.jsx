export const dynamic = "force-static";


import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

import FragmentShader from "./BackgroundFragmentShader.glsl";
import VertexShader from "./BackgroundVertexShader.glsl";

function ShaderMesh({uniforms}) {

    const ShaderMaterial = useMemo(() => (
        <shaderMaterial
        vertexShader={VertexShader}   
        fragmentShader={FragmentShader}
        uniforms={uniforms}
        />
    ), []);

    const ShaderGeometry = useMemo(() => (
        <planeGeometry args={[2, 2]} />
    ), []);

    useFrame((state) => {
        uniforms.s.value = Math.sin(state.clock.elapsedTime);
        uniforms.c.value = Math.cos(state.clock.elapsedTime);
    });

    return (
        <mesh>
            {ShaderGeometry}
            {ShaderMaterial}
        </mesh>
    );
}

export function BackgroundShaderViewport() {
    const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    /*
    Trying to use this dpr factor to stop canvas from rendering too much extra when zoomed out
    */
    const dpr = Math.min(1.0, 1920 / Math.min(dimensions.width, dimensions.height));

    const uniforms = useMemo(() => ({
        iResolution: { value: new THREE.Vector2(dimensions.width, dimensions.height)},
        mouse: { value: new THREE.Vector2(0, 0)},
        smallestRatio: { value: 1./Math.min(dimensions.width, dimensions.height) },
        s: { value: 0. },
        c: { value: 1. },
    }), []);

    const containerReference = useRef();

    const handleMouseMove = ((e) => {
    
        if (containerReference.current) {
            const rect = containerReference.current.getBoundingClientRect();
            
            uniforms.mouse.value.set(
                (2.0 * (e.clientX) - dimensions.width) * uniforms.smallestRatio.value,
                (2.0 * (rect.bottom-e.clientY) - dimensions.height) * uniforms.smallestRatio.value
            );
        }
    });

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return(
        <div
        ref={containerReference}
        className="background-viewport-container"
        style={{height: `${dimensions.height}px`}}
        >
            <Canvas
                fallback=
                {<div>This website has some WebGL 3D graphics,
                but it seems that your device doesn't support WebGL</div>}
                flat={true}
                dpr={dpr}
                frameloop="always"
            >
                <OrthographicCamera
                makeDefault
                position={[0, 0, 0.1]}
                near={0.01}
                far={1}
                />
                <ShaderMesh uniforms={uniforms} />
            </Canvas>
        </div>
    );
}