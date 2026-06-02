uniform float uTime;
uniform float uWindStrength;
uniform float uWindDir;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    vec3 transformed = position;

    vec2 windDirection = vec2(cos(uWindDir), sin(uWindDir));

    float branchWind = sin(uTime * 1.5 +
        position.y * 0.25) * 0.05 * uWindStrength;

    transformed.x += windDirection.x * branchWind;

    transformed.z += windDirection.y * branchWind;

    gl_Position = projectionMatrix *
        modelViewMatrix *
        vec4(transformed, 1.0);
}