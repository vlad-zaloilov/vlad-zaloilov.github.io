import React, { useMemo, useEffect } from "react";
import * as THREE from "three";
import { MeshBasicMaterial } from "three";
import { Canvas, useFrame } from "@react-three/fiber";

/*
    TODO:

    1. Clean up code for the function below (ESPECIALLY the tri/quad/ngon handling, and
    varying .obj face format handling)
    2. Rename things so that the code is cleaner to read
    3. See where I can simplify logic (I probably don't need this many arrays for the
    data splicing)
    4. See where I can optimize logic
    5. Implement the vertex normals (and other important data) from obj file as well
    Maybe javascript has a C/C++ struct-like datatype?
*/

export function ObjMeshLoader( {object, colour} ) {
    const myMesh = React.useRef();
    
    const [vertices, setVertices] = React.useState(null);
    
    useEffect(() => {
        async function objReader(object) {
            // Get corresponding file path for object
            const filePath = "assets/" + object + ".obj";
            // console.log(filePath);
            let vertices = new Array();
            let faces = new Array();
            let orderOfVertices = new Array();
            let orderedVertices = new Array();

            try {
                // Initialize the file reading system
                const response = await window.fetch(filePath);

                if (!response.ok) {
                    throw new Error("Response status: {response.status}");
                }

                const result = await response.text();
                const lines = result.split("\n");

                for (const line of lines) {
                    // console.log("Line: ", {line});
                    const parsed = line.split(" ")
                    if (parsed[0] == "v") {
                        // console.log(line);
                        vertices.push(parsed.slice(1));
                    } else if (parsed[0] == "f") {
                        // This means it's a triangle, as more than 3 (length == 4 including
                        // the "f") means it's a quad, or potentially an n-gon? Need to
                        // figure out how to split this into "permutations" of triangles if
                        // so, as I do not think 3JS can handle non-triangles
                        
                        // console.log(parsed);

                        if (parsed.length == 4) {
                            const formattedParsed = parsed.slice(1)
                            // console.log(formattedParsed);
                            faces.push(formattedParsed);
                            
                        } else {
                            // This means it's a quad or n-gon

                            const vertexData = parsed.slice(1);

                            for (const set of vertexData) {
                            }

                            if (vertexData.length == 4) {

                                faces.push(
                                    vertexData[0].split("/")[0],
                                    vertexData[1].split("/")[0],
                                    vertexData[2].split("/")[0],
                                )

                                faces.push(
                                    vertexData[0].split("/")[0],
                                    vertexData[2].split("/")[0],
                                    vertexData[3].split("/")[0],
                                )
                            }
                        }
                    }
                }

                // Now build the correct vertex order for the buffer

                for (const line of faces) {
                    // Take the first vertex of each entry, and splice it together
                    for (const vertexData of line) {
                        orderOfVertices.push(vertexData);
                    }
                }

                // Now build a new array, by reiterating through the raw data and
                // adding them in that order (every contiguous set of 3 will autoconnect)
                
                orderOfVertices = orderOfVertices.flat();
                for (const nextVertex of orderOfVertices) {
                    // VERY IMPORTANT NOTE: this -1 has to do with apparently openGL (which 3JS
                    // is built on) being "shifted" by one index in comparision to the .obj format
                    orderedVertices.push(vertices[nextVertex - 1]);
                }

            } catch (error) {
                console.error(error.message);
            }
            
            // console.log(orderedVertices);
            return new Float32Array(orderedVertices.flat());
        }

        objReader(object).then((loadedVertices) => {
            setVertices(loadedVertices);
        });
    }, []);

    if (!vertices) {
        /*
        If the mesh hasn't been loaded in yet (or some kind of error
        that I otherwise may have forgotten to handle happens),
        render in a default sphereGeometry from react-3-fiber until the
        promise has been resolved via the hook
        */
        return <mesh><sphereGeometry/></mesh>;
    }

    return (
        <mesh ref={myMesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[vertices, 3]}
                />
            </bufferGeometry>
            <meshStandardMaterial
                color={colour} wireframe={true}
            />
        </mesh>        
    );
}