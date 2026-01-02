import { useRef, useState, useEffect, useMemo, useContext } from "react";
import { extend, Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { SphereGeometry, Matrix3, Vector3 } from "three";
import { ObjMeshLoader } from "../helpers/ObjMeshLoader";
import { OrbitControls } from "@react-three/drei";
import { CustomGridHelper } from "./CustomGridHelper";
import * as THREE from "three";

import BackgroundFragmentShader from "./BackgroundFragmentShader.glsl";
import DefaultVertexShader from "./BackgroundVertexShader.glsl";

import "../styling.css";


function BackgroundShader() {
    const materialReference = useRef();
    const [mouse, setMouse] = useState({ x:0, y:0 });
    const dpr = window.devicePixelRatio;

    function handleMouseMove() {
        setMouse({
            x: event.clientX * dpr,
            y: (window.innerHeight - event.clientY) * dpr
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    /*
    Setting up a bunch of uniforms which run each frame that Shadertoy
    uses, to make it easy to import a shader I make from Shadertoy to
    "default" GLSL; useMemo utilized to cache values in between, so it doesn't
    waste time recomputing things if they haven't changed (shader will look the same) 
    */

    const uniforms = useMemo(() => ({
        iResolution: { value : new THREE.Vector2(1, 1) },
        iMouse: { value: new THREE.Vector3(0, 0, 1) },
        iTime: { value: 0.0 },
        iTimeDelta: { value: 0.0 }
    }), []);
    
    useFrame((state) => {
        // Here the uniforms are updated each frame to progress the shader
        if (materialReference.current) {
            /*
            const { uniforms } = materialReference.current;
            const { timeElapsed } = state.clock;
            */
           const timeElapsed = state.clock.getElapsedTime();

            materialReference.current.uniforms.iTime.value = timeElapsed;
            materialReference.current.uniforms.iTimeDelta.value = timeElapsed - uniforms.iTime.value;
            materialReference.current.uniforms.iResolution.value.set(
                window.innerWidth * dpr,
                window.innerHeight * dpr,
                1
            );
            materialReference.current.uniforms.iMouse.value.set(mouse.x, mouse.y, 1);
        }
    });

    return (
        <shaderMaterial
        ref={materialReference}
        vertexShader={DefaultVertexShader}
        fragmentShader={BackgroundFragmentShader}
        uniforms={uniforms}
        transparent={true}
        opacity={1}
        />
    );
}

export function BackgroundShaderViewport() {
    return(
        <div className = "background-viewport">
            <Canvas
                orthographic camera={{near: 0.1, far: 1000, position: [0, 0, 1]}}
                fallback=
                {<div>This website has some WebGL 3D graphics,
                but it seems that your device doesn't support WebGL</div>}
            >
                <mesh wireframe={true} transparent={true} >
                    <planeGeometry args={[window.innerWidth, window.innerHeight, 1]} />
                    <BackgroundShader/>
                </mesh>
                <ambientLight intensity={5}/>
            </Canvas>
        </div>
    );
}