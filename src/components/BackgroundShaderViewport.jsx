export const dynamic = "force-static";


import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

import FragmentShader from "./BackgroundFragmentShader.glsl";
import VertexShader from "./BackgroundVertexShader.glsl";

function ShaderMesh({uniforms, dimensions}) {

    const ShaderMaterial = useMemo(() => (
        <shaderMaterial
        vertexShader={VertexShader}   
        fragmentShader={FragmentShader}
        uniforms={uniforms}
        />
    ), []);

    const ShaderGeometry = useMemo(() => (
        <planeGeometry args={[dimensions.width, dimensions.height]} />
    ), [dimensions.width, dimensions.height]);

    useFrame((state) => {
        uniforms.iTime.value = state.clock.elapsedTime;
    });

    return (
        <mesh scale={viewport.width}>
            {ShaderGeometry}
            {ShaderMaterial}
        </mesh>
    );
}

export function BackgroundShaderViewport() {
    const [dimensions, setDimensions] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });

    /*
    Setting up a bunch of uniforms which run each frame that Shadertoy
    uses, to make it easy to import a shader I make from Shadertoy to
    "default" GLSL; useMemo utilized to cache values in between, so it doesn't
    waste time recomputing things if they haven't changed (shader will look the same)
    */

    const containerReference = useRef();

    const uniforms = useMemo(() => ({
        iResolution: { value: new THREE.Vector2(dimensions.width, dimensions.height)},
        iMouse: { value: new THREE.Vector2(0, 0)},
        iTime: { value: 0.0 }
    }), []);

    const handleMouseMove = ((e) => {
    
        if (containerReference.current) {
            const rect = containerReference.current.getBoundingClientRect();
            
            uniforms.iMouse.value.set(
                e.clientX*devicePixelRatio,
                (rect.bottom-e.clientY)*devicePixelRatio
            );
        }
    });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            });
            
            uniforms.iResolution.value.set(dimensions.width, dimensions.height);
        };

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return(
        <div
        ref={containerReference}
        className="background-viewport-container"
        style={{height: `${dimensions.height}px`
        }}
        >
            <Canvas
                fallback=
                {<div>This website has some WebGL 3D graphics,
                but it seems that your device doesn't support WebGL</div>}
                flat={true}
                dpr={devicePixelRatio}
                frameloop="always"
            >
                <OrthographicCamera
                makeDefault
                position={[0, 0, 0.1]}
                near={0.01}
                far={100}
                left={dimensions.width / -2}
                right={dimensions.width / 2}
                top={dimensions.height / 2}
                bottom={dimensions.height / -2}
                />
                <ShaderMesh uniforms={uniforms} dimensions={dimensions} />
            </Canvas>
        </div>
    );
}