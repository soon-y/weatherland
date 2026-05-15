uniform float uTime;
uniform float uWindDir;
uniform float uWindSpeed;
uniform float uProgress;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vec3 shallow = vec3(0.35, 0.55, 0.45);
  vec3 deep = vec3(0.05, 0.2, 0.15);

  float depthFactor = clamp(vUv.y, 0.0, 1.0);
  vec3 waterColor = mix(shallow, deep, depthFactor);

  float edgeDist = length(vUv - vec2(0.5));
  float edgeDark = smoothstep(0.3, 0.5, edgeDist);
  waterColor *= mix(1.0, 0.65, edgeDark);

  float dist = abs(uProgress - 0.5);

  float inside = 1.0 - smoothstep(0.25, 0.26, dist);

  float innerCurve = 1.0 - pow(dist / 0.25, 1.2);
  innerCurve = clamp(innerCurve, 0.0, 1.0);

  float innerBrightness = mix(0.85, 1.0, innerCurve);

  float outerBrightness = 0.15;

  float brightness = mix(outerBrightness, innerBrightness, inside);

  vec3 viewDir = normalize(cameraPosition - vWorldPos);

  vec3 skyTop = vec3(0.6, 0.75, 0.7);
  vec3 skyBottom = vec3(0.7, 0.8, 0.75);

  float rad = radians(uWindDir);
  vec2 dir = vec2(cos(rad), sin(rad));

  vec2 centered = vUv - 0.5;

  float c = cos(rad);
  float s = sin(rad);

  vec2 rotated = vec2(centered.x * c - centered.y * s, centered.x * s + centered.y * c);

  float flow = rotated.x * 15.0;

  vec3 n = normalize(vNormal);

  float strength = clamp(uWindSpeed * 0.05, 0.02, 0.15);

  n.x += dir.x * sin(flow + uTime * 2.0) * strength;
  n.z += dir.y * sin(flow + uTime * 2.0) * strength;

  n = normalize(n);

  vec2 distortUv = vUv + n.xz * 0.1;

  float skyMix = clamp((viewDir.y + n.y) * 0.5, 0.0, 1.0);

  vec3 fakeReflection = mix(skyBottom, skyTop, skyMix + distortUv.x * 0.3);

  float fresnel = pow(1.0 - dot(n, viewDir), 3.5);

  vec3 dayColor = waterColor;
  vec3 nightColor = vec3(0.04, 0.08, 0.1);

  waterColor = mix(nightColor, dayColor, brightness);

  fakeReflection *= mix(0.1, 1.0, brightness);

  vec3 color = mix(waterColor, fakeReflection, fresnel);

  color *= mix(0.6, 1.0, brightness);

  float alpha = 0.5 + depthFactor * 0.25;

  gl_FragColor = vec4(color, alpha);
}