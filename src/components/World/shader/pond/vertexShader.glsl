uniform float uTime;
uniform float uWindDir;
uniform float uWindSpeed;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vUv = uv;

  vec3 pos = position;

  float rad = radians(uWindDir);
  vec2 dir = vec2(cos(rad), sin(rad));

  float wave =
    sin(dot(pos.xz, dir) * 2.0 + uTime * uWindSpeed) +
    sin(dot(pos.xz, dir) * 4.0 + uTime * uWindSpeed * 1.5) * 0.5;

  wave *= 0.03 * clamp(uWindSpeed, 0.5, 2.0);

  pos.y += wave;

  vec4 worldPos = modelMatrix * vec4(pos, 1.0);
  vWorldPos = worldPos.xyz;

  vNormal = normalize(normalMatrix * normal);

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}