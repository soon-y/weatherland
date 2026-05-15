uniform float uProgress;
uniform vec3 uLightPos;
uniform vec3 uLightDir;
uniform float uLightAngle;
uniform float uLightPenumbra;

varying vec3 vWorldPos;
varying vec2 vUv;
varying float vRandom;

void main() {
  vec3 base = vec3(0.2, 0.5, 0.25);
  vec3 tip = vec3(0.6, 0.9, 0.4);
  vec3 grassColor = mix(base, tip, vUv.y);
  grassColor *= 0.8 + vRandom * 0.4;

  vec3 nightColor = vec3(0.06, 0.11, 0.08);

  float t = (uProgress - 0.25) / 0.5;
  float day = sin(t * 3.141592);

  day = pow(day, 2.5);

  float mask = step(0.25, uProgress) * step(uProgress, 0.75);
  float lightFactor = day * mask;

  float edge = smoothstep(0.25, 0.28, uProgress) + (1.0 - smoothstep(0.72, 0.75, uProgress));
  edge = clamp(edge, 0.0, 1.0);

  float centerMask = smoothstep(0.4, 0.5, uProgress) * (1.0 - smoothstep(0.5, 0.6, uProgress));
  edge *= (1.0 - centerMask);
  edge = pow(edge, 1.5);

  float nightMask = step(uProgress, 0.25) + step(0.75, uProgress);
  nightMask = clamp(nightMask, 0.0, 1.0);

  float finalLight = lightFactor + edge * 0.6;
  finalLight = clamp(finalLight, 0.0, 1.0);

  vec3 litColor = grassColor;
  litColor = mix(litColor, litColor, edge * 0.5);

  vec3 color = mix(nightColor, litColor, finalLight);

  vec3 lightToFrag = normalize(vWorldPos - uLightPos);
  vec3 lightForward = normalize(uLightDir);

  float theta = dot(lightToFrag, lightForward);

  float cutoff = cos(uLightAngle);
  float outerCutoff = cos(uLightAngle * (1.0 + uLightPenumbra));

  float intensity = step(cutoff, theta);

  float dist = distance(vWorldPos, uLightPos);
  float attenuation = 1.0 / (1.0 + 0.1 * dist + 0.05 * dist * dist);

  float light = intensity * attenuation * nightMask;

  vec3 warmLight = vec3(1.2, 1.0, 0.7);
  vec3 litGrass = base * warmLight * (0.5 + light * 1.5);

  color = mix(color, litGrass, light);

  gl_FragColor = vec4(color, 1.0);
}