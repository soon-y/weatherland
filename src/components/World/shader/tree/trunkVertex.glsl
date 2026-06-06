float windStrength = smoothstep(0.0, 50.0, uWindSpeed);

float branchWind = sin(uTime * (1.0 +
  windStrength) +
  position.y * 0.25) * 0.06 * windStrength * weight;

vec2 windDir = vec2(cos(uWindDir), -sin(uWindDir));

transformed.x += windDir.x * branchWind;

transformed.z += windDir.y * branchWind;