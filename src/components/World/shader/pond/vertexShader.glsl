#pragma glslify: sampleWave = require('./common/wave/sampleWave.glsl')
#pragma glslify: sampleRippleHeight = require('./common/wave/sampleRippleHeight.glsl')
#pragma glslify: sampleNormal = require('./common/wave/sampleNormal.glsl')

uniform float uFreeze;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec2 vLocalPos;

void main() {
    vUv = uv;
    vLocalPos = position.xy;

    vec3 pos = position;
    vec3 normal = vec3(0.0, 0.0, 1.0);

    if (uFreeze < 0.99) {
        float height = sampleWave(position.xy, uv);
        height += sampleRippleHeight(uv) * 0.15;
        pos.z += height;
        normal = sampleNormal(position.xy, uv);
    }

    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
}