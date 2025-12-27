import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SphereGeometry, Matrix3, Vector3 } from "three";
import { ObjMeshLoader } from "../helpers/ObjMeshLoader";
import { OrbitControls } from "@react-three/drei";
import { CustomGridHelper } from "./CustomGridHelper";

import { Html } from "@react-three/drei";

import "../styling.css";

// Simple matrix setup to get this finnicky model (stanford bunny) camera's starting position right
// (there's probably an easier way to do this, but it's good practice at least)
// Also not sure if I overcomplicated the math lol
const rot = (9/6)*Math.PI;
const dist = 0.2;
const height = 0.2;

let rotVector = new Vector3(1, 1*height, 1).multiplyScalar(dist);
const rotMatrix = new Matrix3(
    Math.cos(rot), 0, -Math.sin(rot),
    Math.sin(rot), 0, -Math.cos(rot),
    0, 1, 0
).transpose();

rotVector = rotVector.applyMatrix3(rotMatrix);
console.log(rotVector);

export function Viewport() {
    return(
        <div className="viewport">
            <Canvas
                camera={{near: 0.1, far: 1000, position: rotVector}}
                fallback=
                {<div>This website has some WebGL 3D graphics,
                but it seems that your device doesn't support WebGL</div>}
            >
                <ObjMeshLoader
                object="bunny"
                colour="white"
                />
                <ambientLight intensity={1} color="#7afff2" />
                <pointLight position={[0, 0, 0]} intensity={1} distance={0} decay={0} />
                <OrbitControls enablePan={false} target={[-0.04, 0.1, 0]} />
            </Canvas>
        </div>
    );
}