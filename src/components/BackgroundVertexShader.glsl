/*
Vertex shader that doesn't do much. It passes through the "standard"
geometric transforms that would be required for basic triangles to display the
fragment shader effects on a 2D plane in the background.

TODO:
Currently, standard projection matrix is perspective. Although it doesn't
make much of a difference visually, it should be changed to orthographic
*/

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}