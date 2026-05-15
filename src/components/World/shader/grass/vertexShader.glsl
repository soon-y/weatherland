#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
uniform vec2 uWindDir;

attribute float aRandom;

varying float vRandom;
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vDepth;
varying vec3 vNormal;

void main() {
  vRandom = aRandom;
  vUv = uv;

  vec3 pos = position;

  float taper = pow(1.0 - pos.y, 2.0);
  pos.x *= taper;

  float bend = pow(pos.y, 1.5);
  pos.z += bend * 0.2;

  vec4 worldPos = modelMatrix * (instanceMatrix * vec4(pos, 1.0));
  vWorldPos = worldPos.xyz;
  vec4 viewPos = viewMatrix * worldPos;
  vDepth = -viewPos.z;
  vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);

  float wind = dot(worldPos.xz, uWindDir);

  float wave = sin(wind * 2.0 - uTime * 3.0);
  float noise = snoise(vec3(worldPos.xz * 0.3, uTime * 0.5));

  float combined = wave + noise * 0.5;

  float heightFactor = pow(pos.y, 1.5);

  //pos.x += combined * 0.4 * heightFactor;

  gl_Position = projectionMatrix * viewPos;
}