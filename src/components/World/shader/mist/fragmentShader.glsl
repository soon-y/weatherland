#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
uniform float uStrength;

varying vec2 vUv;

void main() {
  float n =
    snoise(
      vec3(
        vUv * 3.0,
        uTime * 0.03
      )
    );

  n = n * 0.5 + 0.5;

  float alpha =
    smoothstep(
      0.4,
      0.8,
      n
    ) * uStrength;

  gl_FragColor =
    vec4(
      vec3(0.85),
      alpha
    );
}