#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
uniform vec2 uWindDir;
uniform float uWindSpeed;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vUv = uv;

  vec3 pos = position;

  vec2 dir = normalize(uWindDir);

  float coord = dot(position.xy, dir);

  float speedFactor = 0.5 + uWindSpeed * 0.05;

  float windStrength = clamp(uWindSpeed / 20.0, 0.1, 3.0);

  float speed = 0.5 +
    windStrength;

  float wave1 = sin(coord * 4.0 +
    uTime * speed);

  float wave2 = sin(coord * 8.0 +
    uTime * speed * 1.7);

  float noise = snoise(vec3(position.xy * 1.5, uTime * 0.2));

  float wave = wave1 * 0.5 +
    wave2 * 0.25 +
    noise * 0.6;

  pos.z += wave *
    (0.05 + windStrength * 0.05);

  vec4 worldPos = modelMatrix *
    vec4(pos, 1.0);

  vWorldPos = worldPos.xyz;

  vNormal = normalize(normalMatrix *
    normal);

  gl_Position = projectionMatrix *
    viewMatrix *
    worldPos;
}