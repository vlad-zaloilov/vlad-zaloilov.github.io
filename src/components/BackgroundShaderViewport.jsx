import { useRef, useState, useEffect, useMemo, useContext, useCallback } from "react";
import { extend, Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import { ObjMeshLoader } from "../helpers/ObjMeshLoader";
import { SphereGeometry, Matrix3, Vector3 } from "three";
import * as THREE from "three";

import BackgroundFragmentShader from "./BackgroundFragmentShader.glsl";
import DefaultVertexShader from "./BackgroundVertexShader.glsl";

import "../styling.css";

/*
Scaling factor for the height, to more easily change canvas sizing
if I want to make the shader smaller
Probably temporary until I find a way to get CSS to update with it
(By default 3JS's canvas collapses if its parent doesn't have a definite size)
*/
const heightFactor = 0.5;

function ShaderFrameUpdater({ uniforms }) {
    useFrame((state) => {
        uniforms.iTime.value = state.clock.elapsedTime;
    });
}

export function BackgroundShaderViewport() {

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    /*
    Setting up a bunch of uniforms which run each frame that Shadertoy
    uses, to make it easy to import a shader I make from Shadertoy to
    "default" GLSL; useMemo utilized to cache values in between, so it doesn't
    waste time recomputing things if they haven't changed (shader will look the same)

    */ 

    const uniforms = useMemo(() => ({
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
        iMouse: { value: new THREE.Vector2(0, 0)},
        iTime: { value: 0.0}
    }), []);

    /*
    This "getBoundingClientRect()" function fixes a problem I have sunk many
    hours into, trying to fix CSS size/padding styling shifting the shader's
    mouse tracking. What did I learn? If I have a common problem, there's probably
    a common solution I should check out first, rather than overcomplicating it
    */
    const containerReference = useRef();

    const handleMouseMove = useCallback((e) => {
        
        const containerCurrent = containerReference.current;
        if (containerCurrent) {
            const rect = containerCurrent.getBoundingClientRect();
            uniforms.iMouse.value.set(e.clientX - rect.left, rect.bottom - e.clientY);
        }
    }, [dimensions.width, dimensions.height]);
    
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        uniforms.iResolution.value.set(dimensions.width, dimensions.height);
    }, [dimensions.width, dimensions.height]);

    const ShaderMaterial = useMemo(() => (
        <shaderMaterial
        vertexShader={DefaultVertexShader}
        fragmentShader={BackgroundFragmentShader}
        uniforms={uniforms}
        />
    ), []);

    const BackgroundGeometry = useMemo(() => (
        <planeGeometry args={[dimensions.width, dimensions.height*heightFactor]} />
    ), [dimensions.width, dimensions.height]);

    return(
        <div
        ref={containerReference}
        className="background-viewport-container"
        style={{height: `${dimensions.height*heightFactor}px`}}
        >
            <Canvas
                fallback=
                {<div>This website has some WebGL 3D graphics,
                but it seems that your device doesn't support WebGL</div>}
            >
                <OrthographicCamera
                makeDefault
                position={[0, 0, 0.5]}
                near={0.01}
                far={10000}
                />
                <ShaderFrameUpdater uniforms={uniforms} />
                <mesh>
                    {BackgroundGeometry}
                    {ShaderMaterial}
                </mesh>
            </Canvas>
        </div>
    );
}