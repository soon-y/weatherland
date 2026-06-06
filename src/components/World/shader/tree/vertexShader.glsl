uniform float uTime;
uniform float uWindSpeed;
uniform float uWindDir;

varying vec3 vNormal;
varying vec3 vPosition;

void main() {

    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    vec3 transformed = position;

    vec2 windDirection = vec2(cos(uWindDir), -sin(uWindDir));

    float windStrength = smoothstep(0.0, 50.0, uWindSpeed);

    float branchWind = sin(uTime * (1.0 +
        windStrength) +
        position.y * 0.25) * 0.08 * windStrength;

    transformed.x += windDirection.x * branchWind;

    transformed.z += windDirection.y * branchWind;

    gl_Position = projectionMatrix *
        modelViewMatrix *
        vec4(transformed, 1.0);
}