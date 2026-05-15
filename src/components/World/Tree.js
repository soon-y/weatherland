import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { param, useIsDebug } from "@/lib/param"
import vertexShader from './shader/tree/vertexShader.glsl'
import fragmentShader from './shader/tree/fragmentShader.glsl'
import { useGLTF } from '@react-three/drei'

export default function Tree({ progressDebug, sunProgress, windDirDebug, windSpdDebug, gustsSpdDebug, windDir, windSpd, gustsSpd }) {
  const { nodes, materials } = useGLTF('models/tree.glb')
  const isDebug = useIsDebug()
  const progress = isDebug ? progressDebug : sunProgress
  const windDirection = isDebug ? windDirDebug * -(Math.PI / 180) - Math.PI * 0.5 : windDir * -(Math.PI / 180) - Math.PI * 0.5
  const windSpeed = isDebug ? windSpdDebug : windSpd
  const gustsSpeed = isDebug ? gustsSpdDebug : gustsSpd

  return (
    <group position={param.groundPos}>
      <group position={[-4, 0, -5]} scale={1}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunk.geometry}
        material={materials.trunk}
        position={[0, -0.199, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf005.geometry}
        material={materials.leaf}
        position={[-4.682, 4.673, -0.154]}
        rotation={[0.598, 0.206, -2.605]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf006.geometry}
        material={materials.leaf}
        position={[-4.474, 4.835, -0.286]}
        rotation={[0.305, -0.972, 3.082]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf055.geometry}
        material={materials.leaf}
        position={[-5.102, 5.307, 1.76]}
        rotation={[-2.003, 0.767, 0.192]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf060.geometry}
        material={materials.leaf}
        position={[-5.056, 5.214, 1.786]}
        rotation={[-2.154, 0.822, -1.143]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf061.geometry}
        material={materials.leaf}
        position={[-5.044, 5.206, 1.815]}
        rotation={[-2.189, 0.834, 0.17]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf063.geometry}
        material={materials.leaf}
        position={[-4.981, 5.252, 1.778]}
        rotation={[-2.911, 1.209, -0.25]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf067.geometry}
        material={materials.leaf}
        position={[-4.335, 5.201, 1.953]}
        rotation={[-1.008, -1.262, 3.14]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf068.geometry}
        material={materials.leaf}
        position={[-4.344, 5.158, 1.928]}
        rotation={[-2.138, -1.245, 3.057]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf070.geometry}
        material={materials.leaf}
        position={[-4.34, 4.971, 1.976]}
        rotation={[2.815, -1.024, 2.941]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf071.geometry}
        material={materials.leaf}
        position={[-4.622, 4.995, 2.071]}
        rotation={[-2.358, -0.217, -1.617]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf072.geometry}
        material={materials.leaf}
        position={[-4.561, 4.991, 2.084]}
        rotation={[2.433, -0.268, 2.471]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf073.geometry}
        material={materials.leaf}
        position={[-4.446, 5.183, 1.964]}
        rotation={[-0.566, 0.843, 2.421]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf074.geometry}
        material={materials.leaf}
        position={[-4.474, 5.273, 2.004]}
        rotation={[0.095, 0.694, -3.007]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf075.geometry}
        material={materials.leaf}
        position={[-4.475, 5.253, 1.978]}
        rotation={[-1.155, 1.234, -2.974]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf076.geometry}
        material={materials.leaf}
        position={[-5.052, 5.363, 1.259]}
        rotation={[0.812, 0.71, 2.744]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf077.geometry}
        material={materials.leaf}
        position={[-4.635, 5.115, 2.253]}
        rotation={[1.922, 0.749, -1.946]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf078.geometry}
        material={materials.leaf}
        position={[-4.6, 5.247, 2.257]}
        rotation={[0.831, -0.677, -2.692]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf079.geometry}
        material={materials.leaf}
        position={[-4.549, 5.213, 2.271]}
        rotation={[0.999, -0.495, 2.305]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf080.geometry}
        material={materials.leaf}
        position={[-4.5, 5.167, 2.166]}
        rotation={[1.095, -0.544, 2.493]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf081.geometry}
        material={materials.leaf}
        position={[-4.488, 5.209, 2.12]}
        rotation={[1.288, -0.282, 1.606]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf082.geometry}
        material={materials.leaf}
        position={[-4.502, 5.253, 2.12]}
        rotation={[-0.513, 0.083, 3.123]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf083.geometry}
        material={materials.leaf}
        position={[-4.136, 4.569, 2.895]}
        rotation={[-2.32, -0.599, 1.212]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf084.geometry}
        material={materials.leaf}
        position={[-4.166, 4.57, 2.936]}
        rotation={[-2.716, -0.715, -0.515]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf085.geometry}
        material={materials.leaf}
        position={[-4.272, 4.521, 2.819]}
        rotation={[1.513, -0.562, -0.523]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf086.geometry}
        material={materials.leaf}
        position={[-4.275, 4.5, 2.879]}
        rotation={[1.263, 0.056, -2.153]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf089.geometry}
        material={materials.leaf}
        position={[-4.381, 4.586, 3.202]}
        rotation={[1.253, 0.055, 2.492]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf090.geometry}
        material={materials.leaf}
        position={[-4.447, 4.56, 3.186]}
        rotation={[1.507, 0.125, -1.955]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf091.geometry}
        material={materials.leaf}
        position={[-4.542, 4.631, 3.048]}
        rotation={[1.049, -1.221, -1.804]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf092.geometry}
        material={materials.leaf}
        position={[-4.497, 4.608, 3.083]}
        rotation={[-0.457, -0.988, 1.504]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf093.geometry}
        material={materials.leaf}
        position={[-4.415, 4.805, 2.732]}
        rotation={[-2.211, -0.263, 1.355]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf094.geometry}
        material={materials.leaf}
        position={[-4.516, 4.838, 2.787]}
        rotation={[-2.197, -0.258, -0.694]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf095.geometry}
        material={materials.leaf}
        position={[-4.622, 4.888, 2.682]}
        rotation={[-2.056, -0.232, 1.075]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf096.geometry}
        material={materials.leaf}
        position={[-4.666, 4.881, 2.627]}
        rotation={[0.155, -1.401, -1.844]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf097.geometry}
        material={materials.leaf}
        position={[-4.71, 4.84, 2.762]}
        rotation={[-1.666, 0.814, -0.92]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf098.geometry}
        material={materials.leaf}
        position={[-4.692, 4.796, 2.731]}
        rotation={[0.496, 0.706, -0.107]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf099.geometry}
        material={materials.leaf}
        position={[-4.859, 4.851, 2.657]}
        rotation={[-0.553, 0.049, -2.993]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf100.geometry}
        material={materials.leaf}
        position={[-4.906, 4.77, 2.73]}
        rotation={[1.066, -0.39, -1.566]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf101.geometry}
        material={materials.leaf}
        position={[-4.887, 4.854, 2.717]}
        rotation={[0.504, -0.292, -2.431]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf102.geometry}
        material={materials.leaf}
        position={[-4.883, 4.781, 2.791]}
        rotation={[0.77, 0.496, -2.749]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf103.geometry}
        material={materials.leaf}
        position={[-4.907, 4.626, 2.867]}
        rotation={[0.095, 0.001, -1.961]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf104.geometry}
        material={materials.leaf}
        position={[-4.827, 4.659, 2.868]}
        rotation={[0.203, -0.012, 2.502]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf105.geometry}
        material={materials.leaf}
        position={[-4.889, 4.528, 2.878]}
        rotation={[0.096, -0.016, -1.148]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf106.geometry}
        material={materials.leaf}
        position={[-4.846, 4.552, 2.933]}
        rotation={[-0.701, 1.124, -0.823]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf107.geometry}
        material={materials.leaf}
        position={[-4.697, 4.58, 3.037]}
        rotation={[-2.761, 0.819, 0.899]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf108.geometry}
        material={materials.leaf}
        position={[-4.754, 4.638, 3.03]}
        rotation={[0.062, 0.55, -2.561]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf109.geometry}
        material={materials.leaf}
        position={[-4.216, 4.213, 3.853]}
        rotation={[1.376, 0.102, 2.712]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf110.geometry}
        material={materials.leaf}
        position={[-4.172, 4.26, 3.768]}
        rotation={[0.298, 0.991, 2.528]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf111.geometry}
        material={materials.leaf}
        position={[-4.407, 4.528, 3.682]}
        rotation={[0.601, 0.845, 2.418]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf112.geometry}
        material={materials.leaf}
        position={[-4.479, 4.483, 3.779]}
        rotation={[0.842, 0.794, -3.015]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf113.geometry}
        material={materials.leaf}
        position={[-4.536, 4.378, 3.918]}
        rotation={[0.85, 0.796, 3.042]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf114.geometry}
        material={materials.leaf}
        position={[-4.599, 4.248, 3.876]}
        rotation={[1.888, 0.888, -1.691]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf115.geometry}
        material={materials.leaf}
        position={[-4.593, 4.316, 3.526]}
        rotation={[1.773, 0.089, -2.779]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf116.geometry}
        material={materials.leaf}
        position={[-4.582, 4.365, 3.446]}
        rotation={[0.525, -1.185, -2.183]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf117.geometry}
        material={materials.leaf}
        position={[-4.436, 4.28, 3.431]}
        rotation={[-2.923, -0.156, 0.772]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf118.geometry}
        material={materials.leaf}
        position={[-4.453, 4.251, 3.363]}
        rotation={[3.086, -1.256, 1.165]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf119.geometry}
        material={materials.leaf}
        position={[-3.882, 4.326, 3.631]}
        rotation={[1.63, 0.469, 2.722]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf120.geometry}
        material={materials.leaf}
        position={[-3.797, 4.311, 3.565]}
        rotation={[1.89, 0.009, 2.068]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf121.geometry}
        material={materials.leaf}
        position={[-3.852, 4.456, 3.463]}
        rotation={[1.85, 1.08, 1.141]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf122.geometry}
        material={materials.leaf}
        position={[-3.99, 4.416, 3.438]}
        rotation={[1.835, 0.667, -1.315]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf123.geometry}
        material={materials.leaf}
        position={[-3.924, 4.581, 3.301]}
        rotation={[1.354, 0.366, 1.006]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf124.geometry}
        material={materials.leaf}
        position={[-4.107, 4.562, 3.304]}
        rotation={[1.987, 0.776, -0.736]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf125.geometry}
        material={materials.leaf}
        position={[-4.148, 4.647, 3.52]}
        rotation={[-2.741, 0.175, -0.595]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf126.geometry}
        material={materials.leaf}
        position={[-4.084, 4.612, 3.571]}
        rotation={[-1.601, -0.376, 0.448]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf127.geometry}
        material={materials.leaf}
        position={[-2.616, 5.051, 3.744]}
        rotation={[1.735, 0.48, -2.099]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf128.geometry}
        material={materials.leaf}
        position={[-2.589, 5.218, 3.706]}
        rotation={[0.989, -0.706, -2.258]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf129.geometry}
        material={materials.leaf}
        position={[-2.325, 5.148, 3.832]}
        rotation={[0.633, -0.815, 3.049]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf130.geometry}
        material={materials.leaf}
        position={[-2.141, 5.201, 3.381]}
        rotation={[-0.214, -0.884, -2.816]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf131.geometry}
        material={materials.leaf}
        position={[-1.875, 5.094, 3.544]}
        rotation={[-0.891, -0.554, 1.705]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf132.geometry}
        material={materials.leaf}
        position={[-0.975, 5.112, 3.725]}
        rotation={[-1.113, -0.009, 2.195]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf133.geometry}
        material={materials.leaf}
        position={[-1.367, 5.165, 4.004]}
        rotation={[0.748, -0.466, -2.539]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf134.geometry}
        material={materials.leaf}
        position={[-1.699, 5.343, 4.464]}
        rotation={[0.796, -0.421, -2.149]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf135.geometry}
        material={materials.leaf}
        position={[-1.415, 5.36, 4.626]}
        rotation={[0.673, -0.456, 2.752]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf136.geometry}
        material={materials.leaf}
        position={[-0.834, 5.121, 4.707]}
        rotation={[0.648, -0.441, 2.343]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf137.geometry}
        material={materials.leaf}
        position={[-1.095, 4.954, 4.743]}
        rotation={[1.38, -0.786, 2.939]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf138.geometry}
        material={materials.leaf}
        position={[-0.773, 6.432, 4.179]}
        rotation={[0.583, -0.442, -2.303]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf139.geometry}
        material={materials.leaf}
        position={[-0.553, 6.426, 4.024]}
        rotation={[-1.335, -0.608, 2.437]}
        scale={[-0.035, -0.035, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf140.geometry}
        material={materials.leaf}
        position={[-0.237, 6.811, 4.821]}
        rotation={[0.444, -1.107, -3.03]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf141.geometry}
        material={materials.leaf}
        position={[-0.044, 6.658, 4.865]}
        rotation={[1.215, -1.104, 3.046]}
        scale={[-0.032, -0.032, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf142.geometry}
        material={materials.leaf}
        position={[0.084, 6.717, 4.744]}
        rotation={[-0.069, -0.068, 1.894]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf143.geometry}
        material={materials.leaf}
        position={[0.042, 6.884, 4.374]}
        rotation={[-0.13, -1.37, 2.291]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf144.geometry}
        material={materials.leaf}
        position={[0.149, 6.763, 4.307]}
        rotation={[-0.896, -0.263, 1.816]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf145.geometry}
        material={materials.leaf}
        position={[0.179, 6.596, 3.977]}
        rotation={[-1.388, 0.753, 2.763]}
        scale={[-0.039, -0.039, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf146.geometry}
        material={materials.leaf}
        position={[0.264, 6.562, 4.151]}
        rotation={[-0.359, -0.385, 1.236]}
        scale={[-0.03, -0.03, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf147.geometry}
        material={materials.leaf}
        position={[1.388, 5.89, 3.522]}
        rotation={[-1.617, 0.506, -0.912]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf148.geometry}
        material={materials.leaf}
        position={[1.842, 5.887, 3.437]}
        rotation={[2.291, 0.622, 1.672]}
        scale={[-0.034, -0.034, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf149.geometry}
        material={materials.leaf}
        position={[0.602, 6.109, 3.385]}
        rotation={[-1.402, 0.201, -1.052]}
        scale={[-0.039, -0.039, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf150.geometry}
        material={materials.leaf}
        position={[0.672, 6.127, 3.193]}
        rotation={[-1.285, 0.488, -2.825]}
        scale={[-0.039, -0.039, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf151.geometry}
        material={materials.leaf}
        position={[0.953, 6.345, 3.074]}
        rotation={[-1.119, 0.561, -2.523]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf152.geometry}
        material={materials.leaf}
        position={[1.135, 6.359, 3.12]}
        rotation={[0.194, 0.618, 2.613]}
        scale={[-0.032, -0.032, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf153.geometry}
        material={materials.leaf}
        position={[2.93, 6.316, 4.382]}
        rotation={[-0.999, 0.664, -1.668]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf154.geometry}
        material={materials.leaf}
        position={[2.981, 6.212, 4.53]}
        rotation={[-1.214, 0.922, -0.409]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf155.geometry}
        material={materials.leaf}
        position={[3.568, 6.431, 4.02]}
        rotation={[-2.156, 0.947, 0.109]}
        scale={[-0.031, -0.031, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf156.geometry}
        material={materials.leaf}
        position={[3.717, 6.08, 3.922]}
        rotation={[2.629, 0.201, 0.834]}
        scale={[-0.042, -0.042, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf157.geometry}
        material={materials.leaf}
        position={[3.763, 5.87, 4.053]}
        rotation={[2.738, 0.479, 1.601]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf158.geometry}
        material={materials.leaf}
        position={[3.518, 5.77, 3.206]}
        rotation={[2.093, -0.303, 1.438]}
        scale={[-0.034, -0.034, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf159.geometry}
        material={materials.leaf}
        position={[3.316, 5.917, 2.945]}
        rotation={[2.094, -0.876, 0.441]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf160.geometry}
        material={materials.leaf}
        position={[3.574, 6.218, 3.668]}
        rotation={[2.157, -0.863, 0.155]}
        scale={[-0.042, -0.042, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf161.geometry}
        material={materials.leaf}
        position={[3.992, 6.859, 3.751]}
        rotation={[2.842, 0.397, 0.699]}
        scale={[-0.03, -0.03, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf162.geometry}
        material={materials.leaf}
        position={[3.812, 6.917, 3.84]}
        rotation={[-2.433, 0.564, -0.361]}
        scale={[-0.031, -0.031, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf163.geometry}
        material={materials.leaf}
        position={[3.706, 6.96, 3.543]}
        rotation={[0.986, 0.672, 0.809]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf164.geometry}
        material={materials.leaf}
        position={[3.565, 7.079, 3.59]}
        rotation={[-2.863, 0.641, -0.823]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf165.geometry}
        material={materials.leaf}
        position={[3.432, 6.967, 3.416]}
        rotation={[1.224, 0.56, 1.658]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf166.geometry}
        material={materials.leaf}
        position={[3.248, 6.988, 3.328]}
        rotation={[-2.239, 0.649, -1.593]}
        scale={[-0.03, -0.03, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf167.geometry}
        material={materials.leaf}
        position={[3.532, 6.774, 3.098]}
        rotation={[-0.184, 1.075, 1.98]}
        scale={[-0.042, -0.042, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf168.geometry}
        material={materials.leaf}
        position={[3.318, 6.758, 3.198]}
        rotation={[-2.72, 0.457, -1.718]}
        scale={[-0.038, -0.038, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf169.geometry}
        material={materials.leaf}
        position={[3.212, 6.815, 3.383]}
        rotation={[-2.045, 0.464, 0.591]}
        scale={[-0.031, -0.031, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf170.geometry}
        material={materials.leaf}
        position={[3.182, 7.454, 4.105]}
        rotation={[-2.67, 0.082, 0.505]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf171.geometry}
        material={materials.leaf}
        position={[2.996, 7.451, 4.093]}
        rotation={[-2.675, 0.082, -0.648]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf172.geometry}
        material={materials.leaf}
        position={[3.006, 7.241, 4.151]}
        rotation={[-2.93, 0.934, 1.415]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf173.geometry}
        material={materials.leaf}
        position={[2.437, 7.405, 4.106]}
        rotation={[-2.668, 0.578, -0.113]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf174.geometry}
        material={materials.leaf}
        position={[2.433, 7.288, 3.85]}
        rotation={[-2.615, 0.518, -1.732]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf175.geometry}
        material={materials.leaf}
        position={[2.588, 7.402, 3.811]}
        rotation={[1.899, 0.244, 0.424]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf176.geometry}
        material={materials.leaf}
        position={[2.203, 6.964, 3.723]}
        rotation={[-0.434, -0.064, -1.378]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf177.geometry}
        material={materials.leaf}
        position={[2.347, 7.035, 3.849]}
        rotation={[-1.802, 1.393, -0.297]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf178.geometry}
        material={materials.leaf}
        position={[2.456, 7.275, 3.453]}
        rotation={[-1.026, -0.527, 2.71]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf179.geometry}
        material={materials.leaf}
        position={[1.636, 6.852, 3.382]}
        rotation={[-0.576, 0.558, -1.321]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf180.geometry}
        material={materials.leaf}
        position={[1.895, 6.887, 2.951]}
        rotation={[-0.041, 0.87, 2.607]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf181.geometry}
        material={materials.leaf}
        position={[1.768, 7.045, 3.407]}
        rotation={[0.553, 0.693, 2.901]}
        scale={[-0.028, -0.028, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf182.geometry}
        material={materials.leaf}
        position={[4.545, 4.522, 1.053]}
        rotation={[1.357, 0.958, 2.813]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf183.geometry}
        material={materials.leaf}
        position={[4.84, 4.463, 0.471]}
        rotation={[2.1, -0.037, 1.592]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf184.geometry}
        material={materials.leaf}
        position={[4.765, 4.528, 0.373]}
        rotation={[2.173, 0.041, 0.045]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf185.geometry}
        material={materials.leaf}
        position={[4.536, 4.642, 0.772]}
        rotation={[2.644, 0.078, 0.109]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf187.geometry}
        material={materials.leaf}
        position={[4.704, 5.042, 0.8]}
        rotation={[1.754, 0.485, -2.941]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf188.geometry}
        material={materials.leaf}
        position={[4.836, 5.05, 0.696]}
        rotation={[1.578, 0.59, 1.731]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf189.geometry}
        material={materials.leaf}
        position={[4.706, 5.172, 0.446]}
        rotation={[1.925, 1.013, 0.361]}
        scale={[-0.026, -0.026, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf190.geometry}
        material={materials.leaf}
        position={[4.766, 5.137, 0.556]}
        rotation={[1.746, 0.566, 1.425]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf186.geometry}
        material={materials.leaf}
        position={[4.547, 4.896, -0.155]}
        rotation={[-2.927, -0.471, 1.248]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf191.geometry}
        material={materials.leaf}
        position={[4.521, 4.95, -0.275]}
        rotation={[2.169, -0.278, 0.518]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf192.geometry}
        material={materials.leaf}
        position={[4.41, 4.962, -0.185]}
        rotation={[2.084, -0.26, -0.949]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf193.geometry}
        material={materials.leaf}
        position={[4.444, 4.96, -0.05]}
        rotation={[-2.669, -1.299, 0.433]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf194.geometry}
        material={materials.leaf}
        position={[4.595, 4.88, 0.226]}
        rotation={[2.378, 0.371, 1.987]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf195.geometry}
        material={materials.leaf}
        position={[4.556, 4.897, 0.088]}
        rotation={[2.259, 0.01, 0.522]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf196.geometry}
        material={materials.leaf}
        position={[4.375, 5.21, 1.253]}
        rotation={[1.062, 0.993, 3.053]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf197.geometry}
        material={materials.leaf}
        position={[4.329, 5.31, 1.082]}
        rotation={[-0.527, 0.621, -2.539]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf198.geometry}
        material={materials.leaf}
        position={[4.542, 5.31, 1.009]}
        rotation={[0.58, 0.399, 2.133]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf199.geometry}
        material={materials.leaf}
        position={[4.5, 5.228, 0.869]}
        rotation={[0.792, 1.183, 0.62]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf200.geometry}
        material={materials.leaf}
        position={[3.989, 5.218, 1.065]}
        rotation={[1.257, 1.068, 3.065]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf201.geometry}
        material={materials.leaf}
        position={[3.795, 5.309, 0.846]}
        rotation={[-0.555, 0.378, -2.386]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf202.geometry}
        material={materials.leaf}
        position={[3.938, 5.168, 0.03]}
        rotation={[1.906, -0.173, 0.022]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf203.geometry}
        material={materials.leaf}
        position={[4.08, 5.072, 0.084]}
        rotation={[1.808, -0.248, 1.325]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf204.geometry}
        material={materials.leaf}
        position={[4.564, 5.474, -0.301]}
        rotation={[2.854, 0.25, 0.745]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf205.geometry}
        material={materials.leaf}
        position={[4.43, 5.435, -0.552]}
        rotation={[1.934, -0.48, 0.509]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf206.geometry}
        material={materials.leaf}
        position={[4.226, 5.675, -0.11]}
        rotation={[-2.648, -0.68, -0.483]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf207.geometry}
        material={materials.leaf}
        position={[4.222, 5.744, -0.3]}
        rotation={[2.7, -0.403, -0.134]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf208.geometry}
        material={materials.leaf}
        position={[5.676, 5.95, 1.197]}
        rotation={[1.353, 0.62, 2.197]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf209.geometry}
        material={materials.leaf}
        position={[5.705, 5.89, 1.007]}
        rotation={[1.41, 0.245, 1.223]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf210.geometry}
        material={materials.leaf}
        position={[5.577, 5.897, 0.541]}
        rotation={[1.904, 0.484, 0.241]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf211.geometry}
        material={materials.leaf}
        position={[5.688, 5.9, 0.744]}
        rotation={[1.636, 0.526, 1.936]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf212.geometry}
        material={materials.leaf}
        position={[5.407, 5.847, 1.225]}
        rotation={[0.631, 0.621, -2.143]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf213.geometry}
        material={materials.leaf}
        position={[5.611, 5.934, 0.679]}
        rotation={[3.075, 0.492, -0.227]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf214.geometry}
        material={materials.leaf}
        position={[5.462, 5.991, 0.828]}
        rotation={[2.963, 0.481, 0.458]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf215.geometry}
        material={materials.leaf}
        position={[5.314, 5.797, 0.7]}
        rotation={[2.865, 0.529, -1.493]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf216.geometry}
        material={materials.leaf}
        position={[4.332, 5.759, 1.267]}
        rotation={[0.312, 0.46, -1.592]}
        scale={[-0.042, -0.042, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf217.geometry}
        material={materials.leaf}
        position={[3.651, 6.269, 1.07]}
        rotation={[0.143, -0.137, -2.103]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf218.geometry}
        material={materials.leaf}
        position={[3.777, 6.368, 1.303]}
        rotation={[0.948, 0.374, -3.102]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf219.geometry}
        material={materials.leaf}
        position={[4.755, 6.182, 1.677]}
        rotation={[0.48, 0.33, -1.865]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf220.geometry}
        material={materials.leaf}
        position={[4.936, 6.259, 1.714]}
        rotation={[0.614, 0.426, -3.113]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf221.geometry}
        material={materials.leaf}
        position={[-0.003, 0.001, -0.001]}
        rotation={[-0.035, 0.576, 2.302]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf222.geometry}
        material={materials.leaf}
        position={[5.95, 6.474, 0.496]}
        rotation={[1.614, 1.089, 1.533]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf223.geometry}
        material={materials.leaf}
        position={[5.552, 6.626, 0.534]}
        rotation={[-1.733, 0.561, -1.612]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf224.geometry}
        material={materials.leaf}
        position={[5.71, 6.472, 0.333]}
        rotation={[-0.014, 1.099, 2.266]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf225.geometry}
        material={materials.leaf}
        position={[6.184, 6.61, 0.301]}
        rotation={[0.278, 1.123, -1.899]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf226.geometry}
        material={materials.leaf}
        position={[6.435, 6.655, 0.247]}
        rotation={[2.686, 0.741, 1.656]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf227.geometry}
        material={materials.leaf}
        position={[6.461, 6.761, 0.014]}
        rotation={[1.751, 1.332, 2.933]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf228.geometry}
        material={materials.leaf}
        position={[6.593, 6.755, -0.229]}
        rotation={[2.931, -0.013, 1.629]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf229.geometry}
        material={materials.leaf}
        position={[6.423, 6.952, -0.258]}
        rotation={[2.996, 0.153, 0.768]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf230.geometry}
        material={materials.leaf}
        position={[6.199, 6.973, -0.226]}
        rotation={[-2.999, 0.155, -0.749]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf231.geometry}
        material={materials.leaf}
        position={[5.03, 7.277, -0.077]}
        rotation={[-2.161, -0.348, -0.276]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf232.geometry}
        material={materials.leaf}
        position={[5.239, 7.328, -0.221]}
        rotation={[-2.143, -0.34, 1.236]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf233.geometry}
        material={materials.leaf}
        position={[4.98, 7.406, -0.237]}
        rotation={[2.406, -0.68, -0.91]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf234.geometry}
        material={materials.leaf}
        position={[5.047, 7.073, -0.585]}
        rotation={[2.016, 0.08, -1.29]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf235.geometry}
        material={materials.leaf}
        position={[5.251, 7.168, -0.671]}
        rotation={[2.43, -0.271, -0.102]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf236.geometry}
        material={materials.leaf}
        position={[4.486, 7.119, -2.514]}
        rotation={[3.09, 0.163, 0.402]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf237.geometry}
        material={materials.leaf}
        position={[4.417, 6.823, -2.173]}
        rotation={[-2.774, 0.41, 0.687]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf238.geometry}
        material={materials.leaf}
        position={[4.215, 6.83, -2.688]}
        rotation={[1.975, 0.762, -1.117]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf239.geometry}
        material={materials.leaf}
        position={[3.88, 7.019, -2.293]}
        rotation={[2.151, 0.6, -0.621]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf240.geometry}
        material={materials.leaf}
        position={[4.035, 7.158, -1.815]}
        rotation={[-3.058, 0.807, 0.488]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf241.geometry}
        material={materials.leaf}
        position={[4.035, 7.153, -2.135]}
        rotation={[-2.981, 1.078, 0.409]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf242.geometry}
        material={materials.leaf}
        position={[4.185, 6.979, -1.863]}
        rotation={[2.768, 0.003, 1.874]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf243.geometry}
        material={materials.leaf}
        position={[2.855, 6.652, -2.144]}
        rotation={[2.414, 0.209, -0.556]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf244.geometry}
        material={materials.leaf}
        position={[3.023, 6.505, -2.084]}
        rotation={[1.272, 0.282, 0.438]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf245.geometry}
        material={materials.leaf}
        position={[3.355, 6.889, -1.767]}
        rotation={[1.578, 0.81, 1.768]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf246.geometry}
        material={materials.leaf}
        position={[3.379, 6.562, -1.669]}
        rotation={[2.164, -0.117, 2.505]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf247.geometry}
        material={materials.leaf}
        position={[2.077, 6.54, -1.559]}
        rotation={[1.603, 1.123, 2.311]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf248.geometry}
        material={materials.leaf}
        position={[2.186, 6.484, -1.755]}
        rotation={[1.864, 0.057, 1.423]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf249.geometry}
        material={materials.leaf}
        position={[1.949, 6.533, -1.835]}
        rotation={[2.862, 0.816, -0.136]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf250.geometry}
        material={materials.leaf}
        position={[1.829, 6.68, -2.394]}
        rotation={[1.5, 0.563, 0.535]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf251.geometry}
        material={materials.leaf}
        position={[1.972, 6.417, -2.394]}
        rotation={[1.451, 0.531, 0.767]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf252.geometry}
        material={materials.leaf}
        position={[1.887, 6.704, -2.251]}
        rotation={[2.171, 0.269, 0.646]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf253.geometry}
        material={materials.leaf}
        position={[1.839, 6.733, -2.159]}
        rotation={[-2.586, 0.959, 0.376]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf254.geometry}
        material={materials.leaf}
        position={[1.878, 6.471, -2.26]}
        rotation={[-3.122, 0.234, -0.102]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf255.geometry}
        material={materials.leaf}
        position={[2.036, 6.343, -3.104]}
        rotation={[0.597, 0.511, 2.625]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf256.geometry}
        material={materials.leaf}
        position={[1.937, 6.168, -3.229]}
        rotation={[-1.558, 1.318, -2.961]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf257.geometry}
        material={materials.leaf}
        position={[2.021, 6.273, -3.208]}
        rotation={[0.293, 0.747, 1.82]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf258.geometry}
        material={materials.leaf}
        position={[1.754, 6.313, -3.173]}
        rotation={[0.336, 0.558, 2.112]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf259.geometry}
        material={materials.leaf}
        position={[1.582, 6.377, -3.181]}
        rotation={[-0.867, 0.858, -2.671]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf260.geometry}
        material={materials.leaf}
        position={[1.425, 6.163, -3.187]}
        rotation={[0.141, 0.986, 2.359]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf261.geometry}
        material={materials.leaf}
        position={[1.233, 6.079, -3.4]}
        rotation={[-1.895, 0.801, -2.895]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf262.geometry}
        material={materials.leaf}
        position={[1.147, 6.227, -3.331]}
        rotation={[-1.705, 0.899, -2.06]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf263.geometry}
        material={materials.leaf}
        position={[0.965, 6.912, -2.327]}
        rotation={[-0.073, 0.844, 1.978]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf264.geometry}
        material={materials.leaf}
        position={[0.586, 6.896, -2.548]}
        rotation={[-0.041, 0.724, 1.545]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf265.geometry}
        material={materials.leaf}
        position={[0.341, 6.967, -2.609]}
        rotation={[-2.415, 0.887, -1.64]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf266.geometry}
        material={materials.leaf}
        position={[2.614, 8.148, -1.415]}
        rotation={[3.105, 0.112, 0.285]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf267.geometry}
        material={materials.leaf}
        position={[2.643, 7.953, -1.513]}
        rotation={[1.816, -0.663, 0.678]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf268.geometry}
        material={materials.leaf}
        position={[1.942, 8.138, -1.392]}
        rotation={[2.13, -0.642, -0.512]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf269.geometry}
        material={materials.leaf}
        position={[1.931, 8.122, -1.256]}
        rotation={[2.58, -1.027, -1.277]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf270.geometry}
        material={materials.leaf}
        position={[1.885, 8.219, -1.025]}
        rotation={[-2.135, -1.288, 0.649]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf271.geometry}
        material={materials.leaf}
        position={[1.865, 8.024, -1.026]}
        rotation={[2.889, -0.542, -2.023]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf272.geometry}
        material={materials.leaf}
        position={[1.153, 7.579, -1.576]}
        rotation={[-1.841, 0.833, -2.39]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf273.geometry}
        material={materials.leaf}
        position={[1.452, 7.678, -1.489]}
        rotation={[0.262, 0.7, 2.414]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf274.geometry}
        material={materials.leaf}
        position={[1.59, 7.581, -1.195]}
        rotation={[0.782, 0.155, -3.11]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf275.geometry}
        material={materials.leaf}
        position={[1.664, 7.628, -1.393]}
        rotation={[-0.318, 0.335, 2.394]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf276.geometry}
        material={materials.leaf}
        position={[2.778, 7.765, -0.872]}
        rotation={[2.198, -0.178, -0.62]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf277.geometry}
        material={materials.leaf}
        position={[3.08, 7.748, -0.989]}
        rotation={[1.396, 0.704, 2.81]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf278.geometry}
        material={materials.leaf}
        position={[3.148, 7.736, -1.128]}
        rotation={[2.294, 0.167, 1.189]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf279.geometry}
        material={materials.leaf}
        position={[2.801, 7.801, -0.763]}
        rotation={[0.184, 0.836, -2.681]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf280.geometry}
        material={materials.leaf}
        position={[0.707, 7.28, -3.746]}
        rotation={[-0.477, 0.621, 2.621]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf281.geometry}
        material={materials.leaf}
        position={[0.585, 7.319, -3.691]}
        rotation={[-0.392, 0.621, -2.636]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf282.geometry}
        material={materials.leaf}
        position={[0.451, 7.402, -3.554]}
        rotation={[-0.27, 0.661, -2.867]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf283.geometry}
        material={materials.leaf}
        position={[0.151, 7.383, -3.276]}
        rotation={[0.5, 0.697, -2.79]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf284.geometry}
        material={materials.leaf}
        position={[-0.015, 7.854, -3.12]}
        rotation={[-1.324, 0.861, -2.894]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf285.geometry}
        material={materials.leaf}
        position={[0.286, 7.46, -3.428]}
        rotation={[0.326, 0.656, 2.339]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf286.geometry}
        material={materials.leaf}
        position={[0.094, 7.52, -3.043]}
        rotation={[-0.141, -0.225, 3.093]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf287.geometry}
        material={materials.leaf}
        position={[0.403, 7.252, -3.678]}
        rotation={[-1.846, 0.135, -2.409]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf288.geometry}
        material={materials.leaf}
        position={[0.218, 7.377, -3.046]}
        rotation={[0.736, 0.377, 1.202]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf289.geometry}
        material={materials.leaf}
        position={[-0.592, 7.539, -4.637]}
        rotation={[2.154, 1.188, 1.139]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf290.geometry}
        material={materials.leaf}
        position={[-0.632, 7.493, -4.718]}
        rotation={[2.811, 1.243, -0.684]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf291.geometry}
        material={materials.leaf}
        position={[-0.459, 7.105, -4.033]}
        rotation={[2.529, -0.283, 2.31]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf292.geometry}
        material={materials.leaf}
        position={[-0.47, 7.172, -4.233]}
        rotation={[-2.467, -0.785, 3.012]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf293.geometry}
        material={materials.leaf}
        position={[-0.572, 7.11, -4.19]}
        rotation={[-0.033, -0.644, -2.862]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf294.geometry}
        material={materials.leaf}
        position={[-0.53, 6.999, -4.263]}
        rotation={[-1.817, -0.785, 3.012]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf295.geometry}
        material={materials.leaf}
        position={[-0.416, 7.315, -4.24]}
        rotation={[2.709, -0.083, 1.569]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf296.geometry}
        material={materials.leaf}
        position={[-0.428, 7.346, -4.28]}
        rotation={[2.417, -0.284, 0.637]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf297.geometry}
        material={materials.leaf}
        position={[-0.474, 7.321, -4.272]}
        rotation={[1.644, -0.063, -0.535]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf298.geometry}
        material={materials.leaf}
        position={[-0.457, 7.469, -4.606]}
        rotation={[0.951, 1.203, 2.195]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf299.geometry}
        material={materials.leaf}
        position={[-0.428, 7.36, -4.627]}
        rotation={[1.126, -0.167, 0.903]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf300.geometry}
        material={materials.leaf}
        position={[-0.619, 7.377, -4.475]}
        rotation={[-2.317, -0.74, -2.226]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf301.geometry}
        material={materials.leaf}
        position={[-0.759, 7.537, -4.093]}
        rotation={[-1.139, 0.197, -2.834]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf302.geometry}
        material={materials.leaf}
        position={[-0.704, 7.629, -3.941]}
        rotation={[-0.487, 0.223, 2.913]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf303.geometry}
        material={materials.leaf}
        position={[-0.842, 7.542, -3.852]}
        rotation={[-1.695, 0.268, -1.026]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf304.geometry}
        material={materials.leaf}
        position={[-1.413, 7.667, -4.226]}
        rotation={[-2.329, 0.658, -0.14]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf305.geometry}
        material={materials.leaf}
        position={[-1.22, 7.488, -4.52]}
        rotation={[0.091, 0.824, 0.225]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf306.geometry}
        material={materials.leaf}
        position={[-1.165, 7.628, -4.53]}
        rotation={[0.04, 0.756, 1.944]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf307.geometry}
        material={materials.leaf}
        position={[-1.44, 7.665, -4.378]}
        rotation={[-1.398, 1.067, -2.506]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf308.geometry}
        material={materials.leaf}
        position={[-1.993, 7.584, -4.814]}
        rotation={[0.684, 0.549, 2.079]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf309.geometry}
        material={materials.leaf}
        position={[-2.075, 7.584, -4.875]}
        rotation={[-1.864, 0.92, -2.23]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf310.geometry}
        material={materials.leaf}
        position={[-2.325, 7.337, -4.435]}
        rotation={[-2.474, -0.174, -1.939]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf311.geometry}
        material={materials.leaf}
        position={[-2.329, 7.517, -4.357]}
        rotation={[-2.537, 0.118, -0.78]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf312.geometry}
        material={materials.leaf}
        position={[-1.598, 7.69, -3.7]}
        rotation={[2.571, 0.115, -0.491]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf313.geometry}
        material={materials.leaf}
        position={[-1.661, 7.627, -3.542]}
        rotation={[-3.137, -0.739, -1.458]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf314.geometry}
        material={materials.leaf}
        position={[-1.449, 7.724, -3.297]}
        rotation={[2.746, 0.122, -0.818]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf315.geometry}
        material={materials.leaf}
        position={[-1.394, 7.726, -3.202]}
        rotation={[-2.119, -0.653, -0.039]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf316.geometry}
        material={materials.leaf}
        position={[-0.347, 7.834, -3.482]}
        rotation={[-1.621, 0.807, -2.353]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf317.geometry}
        material={materials.leaf}
        position={[-0.364, 7.778, -3.406]}
        rotation={[-1.422, -0.663, -1.171]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf318.geometry}
        material={materials.leaf}
        position={[-0.329, 7.941, -3.283]}
        rotation={[-2.672, 0.411, -0.61]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf319.geometry}
        material={materials.leaf}
        position={[-0.209, 7.913, -3.233]}
        rotation={[-2.427, 0.408, 0.579]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf321.geometry}
        material={materials.leaf}
        position={[0.044, 7.876, -3.029]}
        rotation={[1.471, 0.985, 1.967]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf322.geometry}
        material={materials.leaf}
        position={[0.028, 7.828, -3.496]}
        rotation={[-2.849, 1.272, -0.265]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf323.geometry}
        material={materials.leaf}
        position={[0.082, 7.781, -3.461]}
        rotation={[1.868, 0.857, 1.785]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf324.geometry}
        material={materials.leaf}
        position={[0.093, 7.801, -3.569]}
        rotation={[1.491, 0.804, 0.67]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf325.geometry}
        material={materials.leaf}
        position={[0.05, 7.608, -2.912]}
        rotation={[1.611, -0.155, 2.411]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf326.geometry}
        material={materials.leaf}
        position={[0.357, 7.487, -2.688]}
        rotation={[1.611, -0.282, 1.263]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf327.geometry}
        material={materials.leaf}
        position={[0.324, 7.614, -2.581]}
        rotation={[1.653, 0.678, 1.789]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf328.geometry}
        material={materials.leaf}
        position={[-0.189, 7.618, -2.588]}
        rotation={[-0.57, 0.647, -1.769]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf329.geometry}
        material={materials.leaf}
        position={[-0.131, 7.645, -2.717]}
        rotation={[-0.813, 0.477, -3.132]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf330.geometry}
        material={materials.leaf}
        position={[-3.353, 6.688, -2.859]}
        rotation={[-2.415, -0.041, -2.041]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf331.geometry}
        material={materials.leaf}
        position={[-3.158, 6.706, -2.642]}
        rotation={[-2.917, -1.332, -1.738]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf332.geometry}
        material={materials.leaf}
        position={[-2.971, 6.957, -2.985]}
        rotation={[2.488, 0.99, -0.468]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf333.geometry}
        material={materials.leaf}
        position={[-2.843, 6.943, -2.831]}
        rotation={[0.43, 0.274, 1.95]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf334.geometry}
        material={materials.leaf}
        position={[-2.746, 7.316, -2.888]}
        rotation={[2.55, 1.115, -0.005]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf335.geometry}
        material={materials.leaf}
        position={[-2.677, 7.125, -2.958]}
        rotation={[1.026, 0.644, 0.738]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf336.geometry}
        material={materials.leaf}
        position={[-3.327, 6.892, -1.685]}
        rotation={[2.321, 0.737, -0.264]}
        scale={[-0.026, -0.026, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf337.geometry}
        material={materials.leaf}
        position={[-3.68, 6.867, -1.376]}
        rotation={[2.886, -0.216, -1.473]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf338.geometry}
        material={materials.leaf}
        position={[-4.726, 7.562, -0.812]}
        rotation={[-2.521, 0.009, 0.235]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf339.geometry}
        material={materials.leaf}
        position={[-4.669, 7.44, -1.07]}
        rotation={[2.59, -0.24, 0.3]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf340.geometry}
        material={materials.leaf}
        position={[-5.136, 7.712, -0.545]}
        rotation={[-2.507, 0.176, 0.537]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf345.geometry}
        material={materials.leaf}
        position={[-5.517, 7.779, -0.815]}
        rotation={[2.494, -0.316, -0.91]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf346.geometry}
        material={materials.leaf}
        position={[-5.342, 7.825, -0.705]}
        rotation={[-2.107, -0.452, 0.779]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf347.geometry}
        material={materials.leaf}
        position={[-5.803, 7.073, -0.189]}
        rotation={[1.843, -1.468, -0.083]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf348.geometry}
        material={materials.leaf}
        position={[-5.308, 7.658, -0.148]}
        rotation={[2.62, -1.433, 0.775]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf344.geometry}
        material={materials.leaf}
        position={[-5.426, 7.655, -0.822]}
        rotation={[3.126, -0.451, -1.592]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf341.geometry}
        material={materials.leaf}
        position={[-5.296, 7.712, -0.842]}
        rotation={[-0.584, -1.193, 2.112]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf342.geometry}
        material={materials.leaf}
        position={[-5.571, 7.489, -1.087]}
        rotation={[2.066, -0.11, -0.441]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf343.geometry}
        material={materials.leaf}
        position={[-5.604, 7.472, -1.001]}
        rotation={[2.43, -0.237, -0.689]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf350.geometry}
        material={materials.leaf}
        position={[-5.651, 7.437, -0.906]}
        rotation={[2.311, -0.274, -1.904]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf351.geometry}
        material={materials.leaf}
        position={[-5.346, 7.62, -1.004]}
        rotation={[1.355, -0.155, 1.34]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf352.geometry}
        material={materials.leaf}
        position={[-5.419, 7.667, -1.026]}
        rotation={[2.613, 1.127, -0.198]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf354.geometry}
        material={materials.leaf}
        position={[-5.387, 7.76, -0.005]}
        rotation={[2.592, -0.884, -0.641]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf355.geometry}
        material={materials.leaf}
        position={[-4.817, 7.619, 0.094]}
        rotation={[-2.865, -0.974, 0.3]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf357.geometry}
        material={materials.leaf}
        position={[-5.547, 7.459, 0.052]}
        rotation={[-2.769, -0.263, -1.489]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf358.geometry}
        material={materials.leaf}
        position={[-5.903, 7.16, 0.4]}
        rotation={[-1.72, -0.902, 0.224]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf359.geometry}
        material={materials.leaf}
        position={[-5.918, 6.683, 0.409]}
        rotation={[-2.025, -0.443, -1.444]}
        scale={[-0.026, -0.026, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf360.geometry}
        material={materials.leaf}
        position={[-5.715, 6.765, 0.5]}
        rotation={[-1.836, -0.53, 0.485]}
        scale={[-0.026, -0.026, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf361.geometry}
        material={materials.leaf}
        position={[-5.854, 6.957, 0.348]}
        rotation={[-2.911, -0.341, -0.831]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf362.geometry}
        material={materials.leaf}
        position={[-6.051, 7.161, 0.348]}
        rotation={[-3.056, -0.409, -0.84]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf349.geometry}
        material={materials.leaf}
        position={[-4.645, 7.384, 0.134]}
        rotation={[-1.976, 0.187, 1.489]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf353.geometry}
        material={materials.leaf}
        position={[-5.165, 7.337, 0.565]}
        rotation={[2.591, -0.883, -0.641]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf356.geometry}
        material={materials.leaf}
        position={[-5.098, 7.371, 0.861]}
        rotation={[-2.843, -1.105, -0.203]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf363.geometry}
        material={materials.leaf}
        position={[-4.91, 7.233, 0.901]}
        rotation={[-2.675, -1.099, 0.367]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf364.geometry}
        material={materials.leaf}
        position={[-4.913, 7.144, 0.976]}
        rotation={[-1.682, -0.399, 0.366]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf001.geometry}
        material={materials.leaf}
        position={[-5.038, 4.655, -0.751]}
        rotation={[1.922, -0.707, -1.129]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf002.geometry}
        material={materials.leaf}
        position={[-5.143, 4.626, -0.071]}
        rotation={[2.947, -1.116, 0.065]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf003.geometry}
        material={materials.leaf}
        position={[-5.329, 4.568, 0.001]}
        rotation={[1.93, -0.153, -1.667]}
        scale={[-0.023, -0.023, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf004.geometry}
        material={materials.leaf}
        position={[-4.994, 4.186, -0.163]}
        rotation={[-2.925, 1.426, -3.027]}
        scale={[-0.029, -0.029, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf365.geometry}
        material={materials.leaf}
        position={[-4.761, 4.596, -0.518]}
        rotation={[-2.445, 1.12, 0.766]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf007.geometry}
        material={materials.leaf}
        position={[-5.147, 6.219, -0.738]}
        rotation={[-1.99, -0.54, 0.827]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf008.geometry}
        material={materials.leaf}
        position={[-5.787, 6.317, -0.743]}
        rotation={[-2.458, 0.179, -0.853]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf009.geometry}
        material={materials.leaf}
        position={[-5.547, 6.153, -0.423]}
        rotation={[-1.202, -0.059, 0.929]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf010.geometry}
        material={materials.leaf}
        position={[-4.355, 5.312, 0.632]}
        rotation={[3.125, -1.164, 0.537]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf012.geometry}
        material={materials.leaf}
        position={[-4.746, 5.133, 1.168]}
        rotation={[-2.497, 0.963, -2.533]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf013.geometry}
        material={materials.leaf}
        position={[-5.716, 6.351, -1.025]}
        rotation={[2.658, 0.616, -0.893]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf014.geometry}
        material={materials.leaf}
        position={[-5.56, 6.35, -1.004]}
        rotation={[1.882, 0.706, 0.617]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf015.geometry}
        material={materials.leaf}
        position={[-4.934, 6.069, -0.669]}
        rotation={[3.057, -0.603, 0.735]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf016.geometry}
        material={materials.leaf}
        position={[-5.213, 6.277, -0.849]}
        rotation={[2.749, -0.745, 0.32]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf017.geometry}
        material={materials.leaf}
        position={[-5.405, 6.233, -0.873]}
        rotation={[2.351, -0.455, 0.853]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf018.geometry}
        material={materials.leaf}
        position={[-5.678, 6.209, -0.439]}
        rotation={[-2.908, -0.564, -0.395]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf019.geometry}
        material={materials.leaf}
        position={[-5.776, 6.033, -0.464]}
        rotation={[-2.392, -0.559, -1.586]}
        scale={[-0.026, -0.026, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf020.geometry}
        material={materials.leaf}
        position={[-5.421, 6.259, -0.74]}
        rotation={[-2.918, 0.369, 0.895]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf021.geometry}
        material={materials.leaf}
        position={[-5.548, 6.438, -0.731]}
        rotation={[2.804, -0.247, 0.72]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf022.geometry}
        material={materials.leaf}
        position={[-5.623, 6.454, -0.684]}
        rotation={[-2.516, 0.297, 0.229]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf023.geometry}
        material={materials.leaf}
        position={[-5.54, 7.531, -1.036]}
        rotation={[-2.532, 0.96, -0.311]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf024.geometry}
        material={materials.leaf}
        position={[-5.828, 6.158, 0.285]}
        rotation={[0.852, -0.138, -1.578]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf025.geometry}
        material={materials.leaf}
        position={[-5.754, 5.972, 0.525]}
        rotation={[2.063, -1.075, -1.989]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf026.geometry}
        material={materials.leaf}
        position={[-5.709, 5.985, 0.853]}
        rotation={[0.876, -1.225, -2.407]}
        scale={[-0.026, -0.026, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf027.geometry}
        material={materials.leaf}
        position={[-5.86, 6.03, -0.038]}
        rotation={[0.109, -0.285, -1.937]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf028.geometry}
        material={materials.leaf}
        position={[-5.743, 5.898, 0.375]}
        rotation={[-0.485, -0.942, -1.514]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf029.geometry}
        material={materials.leaf}
        position={[-5.756, 6.082, 0.051]}
        rotation={[0.664, 0.607, 2.898]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf030.geometry}
        material={materials.leaf}
        position={[-5.82, 6.111, 0.478]}
        rotation={[2.511, -0.815, -1.777]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf031.geometry}
        material={materials.leaf}
        position={[-5.793, 6.128, 0.416]}
        rotation={[2.046, -0.807, -0.887]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf032.geometry}
        material={materials.leaf}
        position={[-5.677, 6.227, 0.229]}
        rotation={[2.821, -0.91, 0.059]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf033.geometry}
        material={materials.leaf}
        position={[-5.789, 6.253, 0.348]}
        rotation={[2.638, -0.99, -1.104]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf034.geometry}
        material={materials.leaf}
        position={[-5.717, 6.249, 0.36]}
        rotation={[-1.905, -0.856, 1.023]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf035.geometry}
        material={materials.leaf}
        position={[-5.629, 5.854, 0.99]}
        rotation={[0.246, -1.197, 1.914]}
        scale={[-0.026, -0.026, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf036.geometry}
        material={materials.leaf}
        position={[-5.111, 6.155, 0.958]}
        rotation={[-0.032, -0.97, 2.279]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf037.geometry}
        material={materials.leaf}
        position={[-5.265, 6.171, 0.895]}
        rotation={[1.35, -0.663, -1.75]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf038.geometry}
        material={materials.leaf}
        position={[-5.199, 6.145, 0.676]}
        rotation={[1.217, -0.97, -1.973]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf039.geometry}
        material={materials.leaf}
        position={[-5.033, 6.163, 0.581]}
        rotation={[-1.721, -0.893, 1.959]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf040.geometry}
        material={materials.leaf}
        position={[-5.167, 6.091, 0.543]}
        rotation={[-0.596, -1.003, -2.254]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf041.geometry}
        material={materials.leaf}
        position={[-5.093, 6.036, 0.335]}
        rotation={[-1.196, -0.72, 0.249]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf042.geometry}
        material={materials.leaf}
        position={[-5.054, 6.094, 0.237]}
        rotation={[-1.27, -0.553, 1.733]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf043.geometry}
        material={materials.leaf}
        position={[-5.194, 6.261, 0.233]}
        rotation={[-1.155, -0.85, 1.965]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf044.geometry}
        material={materials.leaf}
        position={[-5.33, 6.192, 0.248]}
        rotation={[0.098, -0.363, -1.998]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf045.geometry}
        material={materials.leaf}
        position={[-5.217, 6.232, 0.361]}
        rotation={[1.277, 0.581, 3.029]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf046.geometry}
        material={materials.leaf}
        position={[-4.377, 5.284, 0.768]}
        rotation={[3.085, -1.163, -0.595]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf047.geometry}
        material={materials.leaf}
        position={[-4.414, 5.11, 1.019]}
        rotation={[-0.757, -0.419, 1.448]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf048.geometry}
        material={materials.leaf}
        position={[-4.414, 5.131, 0.954]}
        rotation={[-0.895, 0.03, 2.284]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf049.geometry}
        material={materials.leaf}
        position={[-4.577, 5.215, 0.812]}
        rotation={[-0.771, -0.018, -3.014]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf050.geometry}
        material={materials.leaf}
        position={[-4.498, 5.212, 0.835]}
        rotation={[-0.766, -0.019, 2.274]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf051.geometry}
        material={materials.leaf}
        position={[-4.581, 5.217, 0.968]}
        rotation={[-0.504, -0.086, -2.768]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf052.geometry}
        material={materials.leaf}
        position={[-4.624, 5.181, 1.051]}
        rotation={[-0.307, 1.207, -0.649]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf053.geometry}
        material={materials.leaf}
        position={[-4.487, 5.116, 1.034]}
        rotation={[-1.448, -0.853, -0.146]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf054.geometry}
        material={materials.leaf}
        position={[-4.642, 5.25, 1.041]}
        rotation={[-3.131, 0.07, -0.488]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf056.geometry}
        material={materials.leaf}
        position={[-4.87, 5.412, 1.051]}
        rotation={[-0.056, -0.979, -2.211]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf057.geometry}
        material={materials.leaf}
        position={[-4.752, 5.466, 1.252]}
        rotation={[0.713, -0.493, 3.031]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf058.geometry}
        material={materials.leaf}
        position={[-4.669, 5.21, 1.221]}
        rotation={[0.01, 0.119, 1.914]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf059.geometry}
        material={materials.leaf}
        position={[-5.161, 5.354, 1.167]}
        rotation={[-0.935, 0.228, -2.316]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf062.geometry}
        material={materials.leaf}
        position={[-4.695, 5.212, 1.418]}
        rotation={[-0.817, -0.021, -2.056]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf064.geometry}
        material={materials.leaf}
        position={[-4.6, 5.203, 1.657]}
        rotation={[-0.551, 1.405, -1.397]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf065.geometry}
        material={materials.leaf}
        position={[-5.083, 5.37, 1.646]}
        rotation={[2.078, 1.074, 0.735]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf087.geometry}
        material={materials.leaf}
        position={[-5.388, 5.268, 1.355]}
        rotation={[3.109, 0.689, -1.167]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf366.geometry}
        material={materials.leaf}
        position={[-3.213, 5.96, 1.123]}
        rotation={[-3.074, -0.282, -1.765]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf367.geometry}
        material={materials.leaf}
        position={[-5.346, 5.141, 1.462]}
        rotation={[-2.895, -0.027, -2.592]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf368.geometry}
        material={materials.leaf}
        position={[-5.194, 5.055, 1.78]}
        rotation={[-0.564, 0.378, -2.212]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf369.geometry}
        material={materials.leaf}
        position={[-5.174, 5.021, 1.846]}
        rotation={[-2.139, 0.257, 0.082]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf370.geometry}
        material={materials.leaf}
        position={[-5.133, 4.924, 1.826]}
        rotation={[-0.177, -0.926, -1.101]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf371.geometry}
        material={materials.leaf}
        position={[-5.043, 4.94, 1.875]}
        rotation={[1.173, -0.541, 1.724]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf372.geometry}
        material={materials.leaf}
        position={[-3.673, 5.058, 1.854]}
        rotation={[2.337, -0.873, 2.364]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf373.geometry}
        material={materials.leaf}
        position={[-3.857, 5.063, 2.15]}
        rotation={[1.953, 0.295, 1.43]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf374.geometry}
        material={materials.leaf}
        position={[-3.963, 5.096, 2.274]}
        rotation={[1.106, 1.17, 3.051]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf375.geometry}
        material={materials.leaf}
        position={[-3.583, 5.231, 1.841]}
        rotation={[1.967, 0.588, 1.32]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf376.geometry}
        material={materials.leaf}
        position={[-3.987, 5.225, 2.162]}
        rotation={[1.498, 0.984, -3.042]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf377.geometry}
        material={materials.leaf}
        position={[-4.102, 5.206, 2.076]}
        rotation={[0.406, -0.078, -1.745]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf066.geometry}
        material={materials.leaf}
        position={[-4.328, 5.206, 1.992]}
        rotation={[-0.981, -1.272, 1.377]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf069.geometry}
        material={materials.leaf}
        position={[-4.252, 5.095, 2.003]}
        rotation={[-0.761, -0.24, 1.698]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf378.geometry}
        material={materials.leaf}
        position={[-3.893, 5.577, 1.889]}
        rotation={[2.04, 0.866, 1.457]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf379.geometry}
        material={materials.leaf}
        position={[-4.251, 5.547, 2.01]}
        rotation={[-1.563, 0.723, -1.504]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf380.geometry}
        material={materials.leaf}
        position={[-4.188, 5.46, 1.842]}
        rotation={[-1.21, 1.101, -2.689]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf381.geometry}
        material={materials.leaf}
        position={[-4.718, 5.876, 1.143]}
        rotation={[1.142, 0.241, -1.047]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf382.geometry}
        material={materials.leaf}
        position={[-4.601, 6.075, 1.327]}
        rotation={[1.027, -0.547, -2.389]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf383.geometry}
        material={materials.leaf}
        position={[-4.692, 6.495, 1.423]}
        rotation={[1.108, -0.502, -2.748]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf384.geometry}
        material={materials.leaf}
        position={[-4.658, 6.53, 1.203]}
        rotation={[-0.155, -1.042, -2.594]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf385.geometry}
        material={materials.leaf}
        position={[-4.69, 6.4, 1.603]}
        rotation={[1.406, 0.12, -1.292]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf386.geometry}
        material={materials.leaf}
        position={[-4.746, 6.524, 1.679]}
        rotation={[1.362, -0.688, -1.959]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf387.geometry}
        material={materials.leaf}
        position={[-4.665, 6.472, 1.725]}
        rotation={[1.558, 0.243, 2.668]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf388.geometry}
        material={materials.leaf}
        position={[-4.708, 6.846, 1.302]}
        rotation={[1.343, -0.59, -0.881]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf389.geometry}
        material={materials.leaf}
        position={[-4.606, 6.919, 1.357]}
        rotation={[-3.124, -1.491, 0.373]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf390.geometry}
        material={materials.leaf}
        position={[-4.524, 6.942, 1.452]}
        rotation={[-2.743, -1.113, 0.663]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf391.geometry}
        material={materials.leaf}
        position={[-4.5, 6.869, 1.521]}
        rotation={[-1.817, -0.111, 1.07]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf392.geometry}
        material={materials.leaf}
        position={[-4.674, 7.026, 1.629]}
        rotation={[2.383, -1.082, -0.433]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf393.geometry}
        material={materials.leaf}
        position={[-4.636, 7.017, 1.717]}
        rotation={[-2.298, -1.289, -0.089]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf394.geometry}
        material={materials.leaf}
        position={[-4.678, 6.957, 1.886]}
        rotation={[-0.829, -0.535, 1.263]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf395.geometry}
        material={materials.leaf}
        position={[-4.795, 6.983, 1.9]}
        rotation={[3.058, -0.815, -1.124]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf396.geometry}
        material={materials.leaf}
        position={[-3.776, 6.598, 1.467]}
        rotation={[-0.894, -0.833, 1.743]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf397.geometry}
        material={materials.leaf}
        position={[-3.987, 6.63, 1.559]}
        rotation={[2.166, -0.955, -1.751]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf398.geometry}
        material={materials.leaf}
        position={[-5.177, 5.76, 3.724]}
        rotation={[2.09, -1.259, -1.782]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf400.geometry}
        material={materials.leaf}
        position={[-5.175, 5.717, 3.466]}
        rotation={[2.013, -0.095, -0.617]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf401.geometry}
        material={materials.leaf}
        position={[-5.198, 5.687, 3.594]}
        rotation={[1.921, -0.278, -2.382]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf402.geometry}
        material={materials.leaf}
        position={[-4.971, 5.807, 3.396]}
        rotation={[1.517, 0.448, -2.89]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf403.geometry}
        material={materials.leaf}
        position={[-4.974, 5.866, 3.339]}
        rotation={[0.194, -0.026, -2.795]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf404.geometry}
        material={materials.leaf}
        position={[-4.908, 5.734, 3.418]}
        rotation={[1.591, 0.448, 2.895]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf405.geometry}
        material={materials.leaf}
        position={[-4.721, 5.652, 3.136]}
        rotation={[1.691, 0.1, 0.338]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf406.geometry}
        material={materials.leaf}
        position={[-4.687, 5.695, 3.225]}
        rotation={[1.911, 0.468, 1.753]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf407.geometry}
        material={materials.leaf}
        position={[-4.692, 5.372, 3.711]}
        rotation={[2.66, -0.302, -1.081]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf408.geometry}
        material={materials.leaf}
        position={[-4.572, 5.367, 3.851]}
        rotation={[-2.797, -1.347, -0.984]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf409.geometry}
        material={materials.leaf}
        position={[-4.454, 5.555, 3.702]}
        rotation={[3.016, -1.007, -1.161]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf410.geometry}
        material={materials.leaf}
        position={[-4.308, 5.605, 3.616]}
        rotation={[-1.551, -0.914, 1.3]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf399.geometry}
        material={materials.leaf}
        position={[-4.675, 5.654, 3.738]}
        rotation={[0.187, -1.029, 1.393]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf411.geometry}
        material={materials.leaf}
        position={[-4.1, 5.985, 2.435]}
        rotation={[1.562, -0.119, -1.605]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf412.geometry}
        material={materials.leaf}
        position={[-3.7, 5.941, 2.704]}
        rotation={[1.198, -0.468, -3.125]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf413.geometry}
        material={materials.leaf}
        position={[-3.509, 5.929, 2.547]}
        rotation={[0.586, 0.049, 1.743]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf414.geometry}
        material={materials.leaf}
        position={[-3.588, 5.859, 2.486]}
        rotation={[0.943, 0.5, 0.081]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf415.geometry}
        material={materials.leaf}
        position={[-3.819, 6.127, 2.329]}
        rotation={[2.253, 0.913, 0.594]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf416.geometry}
        material={materials.leaf}
        position={[-3.828, 6.096, 2.512]}
        rotation={[2.956, 1.331, 1.237]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf417.geometry}
        material={materials.leaf}
        position={[-3.973, 6.063, 2.433]}
        rotation={[-2.671, 0.806, 0.011]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf418.geometry}
        material={materials.leaf}
        position={[-3.967, 6.05, 2.373]}
        rotation={[2.24, 0.715, 0.141]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf419.geometry}
        material={materials.leaf}
        position={[-4.002, 6.007, 2.496]}
        rotation={[2.761, 1.042, 1.387]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf420.geometry}
        material={materials.leaf}
        position={[-4.049, 6.022, 2.45]}
        rotation={[-1.691, 1.023, -1.416]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf421.geometry}
        material={materials.leaf}
        position={[-4.078, 5.973, 2.393]}
        rotation={[-1.822, 0.91, -2.887]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf422.geometry}
        material={materials.leaf}
        position={[-4.768, 6.565, 3.017]}
        rotation={[-1.54, 0.336, -1.533]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf423.geometry}
        material={materials.leaf}
        position={[-4.695, 6.456, 3.085]}
        rotation={[-1.783, 0.639, -0.362]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf424.geometry}
        material={materials.leaf}
        position={[-4.628, 6.472, 3.026]}
        rotation={[-3.013, 0.073, 1.16]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf425.geometry}
        material={materials.leaf}
        position={[-4.733, 6.476, 2.995]}
        rotation={[-2.845, -0.031, -2.272]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf426.geometry}
        material={materials.leaf}
        position={[-4.476, 6.521, 2.69]}
        rotation={[2.89, -0.361, 0.534]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf427.geometry}
        material={materials.leaf}
        position={[-4.534, 6.5, 2.768]}
        rotation={[2.961, -0.61, -0.551]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf428.geometry}
        material={materials.leaf}
        position={[-4.45, 6.476, 2.904]}
        rotation={[2.998, -0.639, -0.987]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf429.geometry}
        material={materials.leaf}
        position={[-4.377, 6.48, 2.943]}
        rotation={[-1.517, -0.713, 0.909]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf430.geometry}
        material={materials.leaf}
        position={[-4.735, 5.9, 3.12]}
        rotation={[-2.814, -0.189, -1.47]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf431.geometry}
        material={materials.leaf}
        position={[-4.596, 6.072, 2.971]}
        rotation={[2.863, -0.715, 0.109]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf432.geometry}
        material={materials.leaf}
        position={[-4.628, 6.025, 3.054]}
        rotation={[1.674, -1.013, -2.577]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf433.geometry}
        material={materials.leaf}
        position={[-4.557, 6.046, 2.881]}
        rotation={[-1.062, -0.954, 1.077]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf434.geometry}
        material={materials.leaf}
        position={[-4.502, 6.043, 2.75]}
        rotation={[-0.914, 0.632, 1.755]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf435.geometry}
        material={materials.leaf}
        position={[-4.531, 6.091, 2.752]}
        rotation={[-0.683, 0.088, -3.048]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf436.geometry}
        material={materials.leaf}
        position={[-4.632, 6.055, 2.85]}
        rotation={[2.491, -0.529, -1.196]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf437.geometry}
        material={materials.leaf}
        position={[-4.634, 5.897, 3.146]}
        rotation={[-0.302, -0.805, 1.258]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf438.geometry}
        material={materials.leaf}
        position={[-4.403, 6.215, 2.625]}
        rotation={[-0.83, 0.322, -2.085]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf439.geometry}
        material={materials.leaf}
        position={[-4.272, 6.154, 2.694]}
        rotation={[0.201, 0.417, 2.007]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf440.geometry}
        material={materials.leaf}
        position={[-4.287, 6.104, 2.703]}
        rotation={[0.073, -0.082, 0.631]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf441.geometry}
        material={materials.leaf}
        position={[-4.383, 6.35, 2.584]}
        rotation={[2.515, 1.243, -0.107]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf442.geometry}
        material={materials.leaf}
        position={[-4.361, 6.36, 2.629]}
        rotation={[1.724, 0.816, 1.662]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf443.geometry}
        material={materials.leaf}
        position={[-4.424, 6.304, 2.703]}
        rotation={[-0.322, 0.671, -1.543]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf444.geometry}
        material={materials.leaf}
        position={[-4.306, 6.273, 2.614]}
        rotation={[-1.499, 0.379, 1.691]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf445.geometry}
        material={materials.leaf}
        position={[-4.357, 6.176, 2.6]}
        rotation={[-1.668, 0.102, -3.086]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf446.geometry}
        material={materials.leaf}
        position={[-4.359, 6.269, 2.6]}
        rotation={[-2.194, 0.035, -2.948]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf447.geometry}
        material={materials.leaf}
        position={[-4.173, 6.164, 3.171]}
        rotation={[1.281, -0.879, 1.531]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf448.geometry}
        material={materials.leaf}
        position={[-4.205, 6.251, 3.202]}
        rotation={[0.943, 1.218, -2.964]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf449.geometry}
        material={materials.leaf}
        position={[-4.105, 6.387, 3.16]}
        rotation={[1.017, 1.222, -2.98]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf450.geometry}
        material={materials.leaf}
        position={[-4.059, 6.354, 3.139]}
        rotation={[2.894, 0.314, 2.139]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf451.geometry}
        material={materials.leaf}
        position={[-3.996, 6.422, 3.015]}
        rotation={[2.875, 0.261, 0.366]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf452.geometry}
        material={materials.leaf}
        position={[-4.061, 6.41, 3.086]}
        rotation={[2.826, 0.258, 0.669]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf453.geometry}
        material={materials.leaf}
        position={[-4.025, 6.372, 2.969]}
        rotation={[1.675, -0.486, 0.177]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf454.geometry}
        material={materials.leaf}
        position={[-5.733, 8.088, 0.262]}
        rotation={[2.199, -0.226, -1.537]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf455.geometry}
        material={materials.leaf}
        position={[-5.67, 8.205, 0.249]}
        rotation={[2.994, -0.994, -0.12]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf456.geometry}
        material={materials.leaf}
        position={[-5.543, 8.21, 0.41]}
        rotation={[2.835, -1.473, -0.892]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf457.geometry}
        material={materials.leaf}
        position={[-5.528, 8.138, 0.483]}
        rotation={[-1.297, -1.517, 0.58]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf458.geometry}
        material={materials.leaf}
        position={[-5.566, 8.306, 0.718]}
        rotation={[2.928, -1.202, -1.425]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf459.geometry}
        material={materials.leaf}
        position={[-5.534, 8.397, 0.57]}
        rotation={[2.353, -0.805, -0.359]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf460.geometry}
        material={materials.leaf}
        position={[-5.531, 8.47, 0.252]}
        rotation={[0.575, -1.204, -2.849]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf461.geometry}
        material={materials.leaf}
        position={[-5.601, 8.377, 0.278]}
        rotation={[2.567, -0.627, -1.687]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf462.geometry}
        material={materials.leaf}
        position={[-5.499, 8.634, 0.214]}
        rotation={[2.155, 0.13, -0.452]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf463.geometry}
        material={materials.leaf}
        position={[-5.51, 8.601, 0.282]}
        rotation={[2.179, -0.281, -2.573]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf464.geometry}
        material={materials.leaf}
        position={[-5.392, 8.606, 0.376]}
        rotation={[1.462, -0.376, 2.839]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf465.geometry}
        material={materials.leaf}
        position={[-5.418, 8.686, 0.282]}
        rotation={[-0.5, 0.016, -3.102]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf466.geometry}
        material={materials.leaf}
        position={[-5.453, 8.942, 0.104]}
        rotation={[-1.525, 0.583, 2.143]}
        scale={[-0.004, -0.004, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf467.geometry}
        material={materials.leaf}
        position={[-5.489, 8.968, 0.095]}
        rotation={[-1.608, 0.587, -2.259]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf468.geometry}
        material={materials.leaf}
        position={[-5.456, 8.991, 0.112]}
        rotation={[0.147, 0.793, 2.479]}
        scale={[-0.004, -0.004, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf469.geometry}
        material={materials.leaf}
        position={[-5.503, 9.008, 0.167]}
        rotation={[-0.848, 0.633, -2.095]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf470.geometry}
        material={materials.leaf}
        position={[-5.492, 8.976, 0.214]}
        rotation={[-1.074, 1.212, -0.576]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf471.geometry}
        material={materials.leaf}
        position={[-5.458, 8.953, 0.31]}
        rotation={[-0.841, 1.125, -0.946]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf472.geometry}
        material={materials.leaf}
        position={[-5.416, 8.997, 0.258]}
        rotation={[-1.441, 1.399, -0.991]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf473.geometry}
        material={materials.leaf}
        position={[-5.378, 8.974, 0.212]}
        rotation={[1.647, 0.133, 0.947]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf474.geometry}
        material={materials.leaf}
        position={[-5.584, 8.881, 0.449]}
        rotation={[-0.372, 0.217, -1.171]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf475.geometry}
        material={materials.leaf}
        position={[-5.487, 8.918, 0.471]}
        rotation={[-1.86, 1.032, 0.195]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf476.geometry}
        material={materials.leaf}
        position={[-5.461, 8.945, 0.424]}
        rotation={[2.952, -0.174, 0.762]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf477.geometry}
        material={materials.leaf}
        position={[-5.305, 9.056, 0.196]}
        rotation={[1.407, 0.117, -0.806]}
        scale={[-0.004, -0.004, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf478.geometry}
        material={materials.leaf}
        position={[-5.315, 9.061, 0.235]}
        rotation={[1.436, -0.065, -2.017]}
        scale={[-0.003, -0.003, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf479.geometry}
        material={materials.leaf}
        position={[-5.25, 9.096, 0.179]}
        rotation={[-1.237, -1.283, 2.364]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf480.geometry}
        material={materials.leaf}
        position={[-5.162, 8.981, 0.29]}
        rotation={[2.588, 0.493, 1.375]}
        scale={[-0.005, -0.005, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf481.geometry}
        material={materials.leaf}
        position={[-5.111, 8.957, 0.204]}
        rotation={[2.426, -0.14, 1.261]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf482.geometry}
        material={materials.leaf}
        position={[-5.183, 8.953, 0.145]}
        rotation={[1.366, -0.657, -0.376]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf483.geometry}
        material={materials.leaf}
        position={[-4.786, 8.841, 0.128]}
        rotation={[2.103, -0.751, 0.059]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf484.geometry}
        material={materials.leaf}
        position={[-4.657, 8.801, 0.222]}
        rotation={[2.708, -0.098, 1.632]}
        scale={[-0.006, -0.006, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf485.geometry}
        material={materials.leaf}
        position={[-4.902, 9.081, 0.281]}
        rotation={[-2.818, 0.111, -1.118]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf486.geometry}
        material={materials.leaf}
        position={[-4.799, 9.127, 0.294]}
        rotation={[-2.922, 0.164, 0.169]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf487.geometry}
        material={materials.leaf}
        position={[-4.378, 9.096, 0.066]}
        rotation={[1.997, 0.02, 0.009]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf488.geometry}
        material={materials.leaf}
        position={[-4.301, 9.225, 0.268]}
        rotation={[-3.026, 0.357, 0.451]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf489.geometry}
        material={materials.leaf}
        position={[-4.508, 9.1, 0.33]}
        rotation={[-2.549, 0.199, -1.103]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf490.geometry}
        material={materials.leaf}
        position={[-4.282, 8.959, 0.726]}
        rotation={[-2.051, -0.488, -0.754]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf491.geometry}
        material={materials.leaf}
        position={[-3.955, 8.898, 0.729]}
        rotation={[-0.983, -0.496, 0.739]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf492.geometry}
        material={materials.leaf}
        position={[-3.138, 9.263, 0.304]}
        rotation={[-0.783, -0.081, 1.529]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf493.geometry}
        material={materials.leaf}
        position={[-3.447, 9.327, -0.33]}
        rotation={[-0.456, -1.381, -2.437]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf494.geometry}
        material={materials.leaf}
        position={[-3.296, 9.515, 0.321]}
        rotation={[-0.053, -0.465, 2.765]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf495.geometry}
        material={materials.leaf}
        position={[-3.618, 9.329, -0.088]}
        rotation={[0.419, -0.323, -2.148]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf496.geometry}
        material={materials.leaf}
        position={[-3.4, 9.503, 0.164]}
        rotation={[0.22, -0.544, -2.371]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf497.geometry}
        material={materials.leaf}
        position={[-3.277, 9.436, 0.103]}
        rotation={[-1.262, -0.962, 2.974]}
        scale={[-0.007, -0.007, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf498.geometry}
        material={materials.leaf}
        position={[-2.488, 7.512, 0.216]}
        rotation={[-1.325, 0.354, -1.906]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf499.geometry}
        material={materials.leaf}
        position={[-2.372, 7.54, 0.446]}
        rotation={[-1.633, 0.515, -0.585]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf500.geometry}
        material={materials.leaf}
        position={[-2.247, 7.808, 0.561]}
        rotation={[-1.646, 0.526, -1.012]}
        scale={[-0.034, -0.034, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf501.geometry}
        material={materials.leaf}
        position={[-2.016, 7.954, 0.508]}
        rotation={[3.075, 0.83, 0.625]}
        scale={[-0.032, -0.032, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf502.geometry}
        material={materials.leaf}
        position={[-1.911, 7.886, 0.27]}
        rotation={[2.016, 0.072, 0.599]}
        scale={[-0.03, -0.03, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf320.geometry}
        material={materials.leaf}
        position={[-0.197, 7.49, -2.253]}
        rotation={[-0.798, 0.489, Math.PI]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf503.geometry}
        material={materials.leaf}
        position={[-0.472, 7.425, -2.097]}
        rotation={[-0.922, 0.404, -1.839]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf504.geometry}
        material={materials.leaf}
        position={[-0.281, 7.566, -1.196]}
        rotation={[-0.578, 0.967, -2.205]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf505.geometry}
        material={materials.leaf}
        position={[0.33, 7.463, -1.046]}
        rotation={[1.897, 0.711, 2.073]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf506.geometry}
        material={materials.leaf}
        position={[-1.369, 8.099, -1.63]}
        rotation={[2.79, 0.778, 0.899]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf507.geometry}
        material={materials.leaf}
        position={[-1.434, 8.03, -1.88]}
        rotation={[1.563, 0.068, 0.093]}
        scale={[-0.03, -0.03, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf508.geometry}
        material={materials.leaf}
        position={[-2.521, 8.328, -2.144]}
        rotation={[-2.876, -0.141, -0.251]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf509.geometry}
        material={materials.leaf}
        position={[-2.471, 8.264, -2.352]}
        rotation={[1.933, 0.078, 0.011]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf510.geometry}
        material={materials.leaf}
        position={[-2.805, 8.449, -1.813]}
        rotation={[2.356, 0.099, 0.086]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf511.geometry}
        material={materials.leaf}
        position={[-2.923, 8.45, -1.722]}
        rotation={[2.966, -0.227, -1.038]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf512.geometry}
        material={materials.leaf}
        position={[-1.256, 8.441, -2.122]}
        rotation={[1.953, -0.372, 0.892]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf513.geometry}
        material={materials.leaf}
        position={[-1.539, 8.466, -2.138]}
        rotation={[1.442, -0.408, -0.744]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf514.geometry}
        material={materials.leaf}
        position={[-1.483, 8.507, -2.026]}
        rotation={[2.71, -1.257, -0.645]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf515.geometry}
        material={materials.leaf}
        position={[-3.487, 7.641, -1.392]}
        rotation={[-2.871, 0.14, -0.718]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf516.geometry}
        material={materials.leaf}
        position={[-3.297, 7.514, -1.46]}
        rotation={[-1.114, 0.643, 2.209]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf517.geometry}
        material={materials.leaf}
        position={[-3.475, 7.424, -1.16]}
        rotation={[-2.89, 0.202, -1.823]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf518.geometry}
        material={materials.leaf}
        position={[-3.434, 7.4, -0.73]}
        rotation={[-2.96, -0.521, -1.513]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf519.geometry}
        material={materials.leaf}
        position={[-3.204, 7.419, -0.64]}
        rotation={[-1.997, -1.136, 0.096]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf520.geometry}
        material={materials.leaf}
        position={[-2.591, 7.364, -0.688]}
        rotation={[2.253, -0.518, -0.638]}
        scale={[-0.026, -0.026, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf521.geometry}
        material={materials.leaf}
        position={[-3.342, 7.508, -0.88]}
        rotation={[2.234, -0.505, -0.708]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf522.geometry}
        material={materials.leaf}
        position={[-3.454, 7.487, -1.119]}
        rotation={[2.803, -0.808, -1.128]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf523.geometry}
        material={materials.leaf}
        position={[-2.976, 7.135, -0.04]}
        rotation={[2.557, -0.275, -1.703]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf524.geometry}
        material={materials.leaf}
        position={[-2.814, 7.327, 0.044]}
        rotation={[3.112, -1.338, -0.696]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf525.geometry}
        material={materials.leaf}
        position={[-2.301, 7.265, -0.539]}
        rotation={[3.049, -0.419, 0.358]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf526.geometry}
        material={materials.leaf}
        position={[-2.175, 7.54, -0.622]}
        rotation={[2.972, -0.575, -1.161]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf527.geometry}
        material={materials.leaf}
        position={[-2.049, 7.583, -0.827]}
        rotation={[2.268, 0.199, -0.456]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf528.geometry}
        material={materials.leaf}
        position={[-1.728, 7.566, -0.691]}
        rotation={[2.627, 0.245, 0.719]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf530.geometry}
        material={materials.leaf}
        position={[-1.864, 7.557, -0.618]}
        rotation={[-2.466, 0.312, -0.289]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf531.geometry}
        material={materials.leaf}
        position={[-1.953, 7.574, -0.341]}
        rotation={[-2.733, 0.481, 0.165]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf532.geometry}
        material={materials.leaf}
        position={[-1.765, 7.429, -0.36]}
        rotation={[-2.601, 0.612, 1.55]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf533.geometry}
        material={materials.leaf}
        position={[-2.058, 7.444, -0.261]}
        rotation={[-0.636, 1.105, -1.061]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf529.geometry}
        material={materials.leaf}
        position={[-1.797, 7.578, -0.359]}
        rotation={[-3.089, 0.842, 0.717]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf534.geometry}
        material={materials.leaf}
        position={[-1.461, 7.262, -0.614]}
        rotation={[-1.879, 0.459, -0.541]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf535.geometry}
        material={materials.leaf}
        position={[-1.141, 7.314, -0.938]}
        rotation={[-2.545, 0.015, 1.374]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf536.geometry}
        material={materials.leaf}
        position={[-1.291, 7.516, -1.22]}
        rotation={[-1.937, -0.922, 1.507]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf537.geometry}
        material={materials.leaf}
        position={[-1.419, 7.395, -0.704]}
        rotation={[-3.076, -0.97, 0.031]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf538.geometry}
        material={materials.leaf}
        position={[-0.984, 7.499, -1.211]}
        rotation={[-2.058, 0.126, 1.482]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf539.geometry}
        material={materials.leaf}
        position={[-1.049, 7.561, -1.375]}
        rotation={[-1.874, -0.88, 2.012]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf540.geometry}
        material={materials.leaf}
        position={[-1.21, 7.382, -0.879]}
        rotation={[-2.23, -1.256, 0.247]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf541.geometry}
        material={materials.leaf}
        position={[-1.466, 7.511, -1.246]}
        rotation={[2.325, -0.668, -0.764]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf542.geometry}
        material={materials.leaf}
        position={[-1.238, 7.431, -0.939]}
        rotation={[-1.765, -1.055, 1.371]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf543.geometry}
        material={materials.leaf}
        position={[-1.225, 7.384, -1.037]}
        rotation={[-1.792, -0.996, 2.249]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf544.geometry}
        material={materials.leaf}
        position={[-2.54, 8.58, -1.676]}
        rotation={[2.701, -0.878, -0.71]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf545.geometry}
        material={materials.leaf}
        position={[-2.317, 8.566, -1.834]}
        rotation={[2.467, -1.123, 0.252]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf546.geometry}
        material={materials.leaf}
        position={[-2.293, 8.563, -1.643]}
        rotation={[-2.476, -0.186, 0.994]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf547.geometry}
        material={materials.leaf}
        position={[-2.611, 7.992, -0.062]}
        rotation={[-3.072, -0.251, 0.93]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf548.geometry}
        material={materials.leaf}
        position={[-2.748, 8.027, 0.04]}
        rotation={[-2.111, 0.103, -0.297]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf549.geometry}
        material={materials.leaf}
        position={[-3.027, 8.183, -0.151]}
        rotation={[2.745, -0.058, 0.283]}
        scale={[-0.013, -0.013, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf550.geometry}
        material={materials.leaf}
        position={[-3.047, 8.087, -0.184]}
        rotation={[1.969, -0.261, 0.21]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf551.geometry}
        material={materials.leaf}
        position={[-3.217, 8.044, -0.081]}
        rotation={[2.281, -0.409, -1.131]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf552.geometry}
        material={materials.leaf}
        position={[-3.144, 8.039, 0.008]}
        rotation={[-2.076, -1.15, 0.451]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf553.geometry}
        material={materials.leaf}
        position={[-2.753, 7.806, -0.503]}
        rotation={[2.217, 0.237, -0.25]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf554.geometry}
        material={materials.leaf}
        position={[-2.705, 7.9, -0.321]}
        rotation={[-2.931, 0.024, -0.082]}
        scale={[-0.024, -0.024, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf555.geometry}
        material={materials.leaf}
        position={[-2.036, 8.082, -1.475]}
        rotation={[-2.002, -0.87, -3.023]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf556.geometry}
        material={materials.leaf}
        position={[-2.295, 8.105, -1.411]}
        rotation={[-1.063, 0.012, -1.767]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf557.geometry}
        material={materials.leaf}
        position={[-2.215, 8.187, -1.455]}
        rotation={[-0.93, 0.217, -2.524]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf558.geometry}
        material={materials.leaf}
        position={[-1.968, 8.393, -1.573]}
        rotation={[-1.242, -0.408, -2.217]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf559.geometry}
        material={materials.leaf}
        position={[-1.857, 8.58, -1.556]}
        rotation={[-0.489, 0.401, -3.085]}
        scale={[-0.015, -0.015, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf560.geometry}
        material={materials.leaf}
        position={[-1.957, 8.429, -1.485]}
        rotation={[-0.641, 0.753, -1.744]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf561.geometry}
        material={materials.leaf}
        position={[-1.802, 8.528, -1.457]}
        rotation={[2.306, 1.039, 1.768]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf562.geometry}
        material={materials.leaf}
        position={[-1.699, 8.988, -0.916]}
        rotation={[0.976, 0.745, -2.752]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf563.geometry}
        material={materials.leaf}
        position={[-2.008, 8.955, -1.268]}
        rotation={[-0.135, 0.019, -2.426]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf564.geometry}
        material={materials.leaf}
        position={[-1.759, 8.977, -0.992]}
        rotation={[0.064, -0.184, -2.01]}
        scale={[-0.012, -0.012, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf565.geometry}
        material={materials.leaf}
        position={[-1.98, 8.917, -1.15]}
        rotation={[1.059, 0.541, -2.975]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf566.geometry}
        material={materials.leaf}
        position={[-1.67, 8.981, -1.342]}
        rotation={[-1.32, -0.41, -2.831]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf567.geometry}
        material={materials.leaf}
        position={[-1.595, 9.069, -1.202]}
        rotation={[-0.072, -0.54, 2.63]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf568.geometry}
        material={materials.leaf}
        position={[-1.847, 8.814, -1.353]}
        rotation={[1.762, -0.513, 0.642]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf569.geometry}
        material={materials.leaf}
        position={[-0.422, 9.465, -1.694]}
        rotation={[0.353, -0.592, 1.565]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf570.geometry}
        material={materials.leaf}
        position={[-0.498, 9.551, -1.669]}
        rotation={[0.989, -0.934, -2.808]}
        scale={[-0.008, -0.008, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf571.geometry}
        material={materials.leaf}
        position={[-0.425, 9.541, -1.81]}
        rotation={[-0.12, -0.954, 2.864]}
        scale={[-0.009, -0.009, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf572.geometry}
        material={materials.leaf}
        position={[-0.471, 9.523, -1.817]}
        rotation={[0.88, -0.294, -1.602]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf573.geometry}
        material={materials.leaf}
        position={[-0.451, 9.386, -1.962]}
        rotation={[2.402, -0.56, 1.298]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf574.geometry}
        material={materials.leaf}
        position={[-0.573, 9.446, -1.949]}
        rotation={[2.044, -0.711, -0.345]}
        scale={[-0.009, -0.009, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf575.geometry}
        material={materials.leaf}
        position={[-0.424, 9.191, -1.732]}
        rotation={[2.576, -0.439, 1.413]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf576.geometry}
        material={materials.leaf}
        position={[-0.527, 9.27, -1.692]}
        rotation={[2.975, -0.083, 0.062]}
        scale={[-0.01, -0.01, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf577.geometry}
        material={materials.leaf}
        position={[-0.469, 9.091, -1.503]}
        rotation={[-1.71, 0.208, 0.219]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf578.geometry}
        material={materials.leaf}
        position={[-0.465, 9.163, -1.594]}
        rotation={[3.112, -0.265, 0.293]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf579.geometry}
        material={materials.leaf}
        position={[4.842, 6.775, 0.931]}
        rotation={[0.029, -0.388, -2.133]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf580.geometry}
        material={materials.leaf}
        position={[5.02, 6.733, 1.286]}
        rotation={[1.193, 0.524, -2.968]}
        scale={[-0.025, -0.025, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf581.geometry}
        material={materials.leaf}
        position={[4.943, 7.016, 0.653]}
        rotation={[1.226, 0.525, 3.016]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf582.geometry}
        material={materials.leaf}
        position={[4.577, 6.798, 0.357]}
        rotation={[-1.123, 1.014, 2.986]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf584.geometry}
        material={materials.leaf}
        position={[4.983, 7.1, 0.563]}
        rotation={[1.01, 1.12, 2.186]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf585.geometry}
        material={materials.leaf}
        position={[4.876, 7.044, 0.258]}
        rotation={[-0.733, 1.514, 2.938]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf586.geometry}
        material={materials.leaf}
        position={[4.772, 7.044, 0.371]}
        rotation={[-2.011, 0.553, -1.173]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf587.geometry}
        material={materials.leaf}
        position={[4.542, 6.822, 0.617]}
        rotation={[0.894, 1.269, 3.103]}
        scale={[-0.011, -0.011, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf588.geometry}
        material={materials.leaf}
        position={[4.496, 6.831, 0.447]}
        rotation={[-1.303, 0.964, -2.05]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf583.geometry}
        material={materials.leaf}
        position={[4.249, 6.316, 0.689]}
        rotation={[1.979, -0.249, -1.642]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf589.geometry}
        material={materials.leaf}
        position={[4.445, 6.298, 0.789]}
        rotation={[1.257, -0.845, 3.118]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf590.geometry}
        material={materials.leaf}
        position={[4.676, 6.287, 0.524]}
        rotation={[0.042, -0.272, 2.067]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf591.geometry}
        material={materials.leaf}
        position={[4.514, 6.354, 0.433]}
        rotation={[-0.323, 0.224, 3.109]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf592.geometry}
        material={materials.leaf}
        position={[4.572, 6.274, 0.28]}
        rotation={[-1.16, 0.189, 2.891]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf593.geometry}
        material={materials.leaf}
        position={[2.522, 7.601, -0.617]}
        rotation={[-0.547, 0.431, -2.447]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf594.geometry}
        material={materials.leaf}
        position={[2.676, 7.62, -0.459]}
        rotation={[1.041, 0.792, 2.871]}
        scale={[-0.014, -0.014, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf595.geometry}
        material={materials.leaf}
        position={[2.63, 6.787, 1.557]}
        rotation={[0.737, 0.101, 2.844]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf596.geometry}
        material={materials.leaf}
        position={[2.759, 6.757, 1.199]}
        rotation={[0.234, 0.511, 2.052]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf597.geometry}
        material={materials.leaf}
        position={[2.97, 6.906, 0.969]}
        rotation={[-0.201, 0.702, -3.02]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf598.geometry}
        material={materials.leaf}
        position={[3.13, 6.798, 1.221]}
        rotation={[0.591, 0.74, -2.503]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf599.geometry}
        material={materials.leaf}
        position={[3.216, 6.868, 1.148]}
        rotation={[1.185, 0.706, 2.247]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf600.geometry}
        material={materials.leaf}
        position={[3.443, 6.872, 0.622]}
        rotation={[0.573, 0.629, 2.422]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf601.geometry}
        material={materials.leaf}
        position={[3.343, 6.598, 0.67]}
        rotation={[1.263, -0.738, 2.331]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf602.geometry}
        material={materials.leaf}
        position={[4.105, 7.401, -1.49]}
        rotation={[2.916, -0.262, 2.211]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf603.geometry}
        material={materials.leaf}
        position={[4.068, 7.644, -1.578]}
        rotation={[2.9, -0.504, 0.57]}
        scale={[-0.016, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf604.geometry}
        material={materials.leaf}
        position={[3.974, 7.882, -1.669]}
        rotation={[2.366, -0.687, 0.197]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf605.geometry}
        material={materials.leaf}
        position={[3.848, 8, -1.335]}
        rotation={[1.753, -0.281, -1.446]}
        scale={[-0.015, -0.015, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf606.geometry}
        material={materials.leaf}
        position={[3.968, 8.045, -1.316]}
        rotation={[-2.048, -1.378, 0.929]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf607.geometry}
        material={materials.leaf}
        position={[4.125, 7.99, -0.974]}
        rotation={[0.87, -1.518, -1.058]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf608.geometry}
        material={materials.leaf}
        position={[4.697, 7.718, -0.857]}
        rotation={[-2.324, -0.395, 1.106]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf609.geometry}
        material={materials.leaf}
        position={[4.022, 8.142, -0.783]}
        rotation={[2.987, -0.681, -0.497]}
        scale={[-0.017, -0.017, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf011.geometry}
        material={materials.leaf}
        position={[4.115, 8.055, -0.513]}
        rotation={[1.974, 0.019, -0.648]}
        scale={[-0.018, -0.018, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf088.geometry}
        material={materials.leaf}
        position={[4.284, 8.12, -0.429]}
        rotation={[2.209, 0.222, 0.833]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf610.geometry}
        material={materials.leaf}
        position={[4.202, 8.173, -0.117]}
        rotation={[2.414, 1.358, 2.041]}
        scale={[-0.027, -0.027, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf611.geometry}
        material={materials.leaf}
        position={[4.197, 8.234, -0.317]}
        rotation={[2.211, 1.161, 0.483]}
        scale={[-0.022, -0.022, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf612.geometry}
        material={materials.leaf}
        position={[4.676, 7.667, 0.161]}
        rotation={[-2.616, -1.113, -1.555]}
        scale={[-0.021, -0.021, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf613.geometry}
        material={materials.leaf}
        position={[4.793, 7.843, 0.181]}
        rotation={[-1.033, -1.316, 1.269]}
        scale={[-0.02, -0.02, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf614.geometry}
        material={materials.leaf}
        position={[4.735, 7.852, -0.057]}
        rotation={[-2.728, -1.345, -0.516]}
        scale={[-0.019, -0.019, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf615.geometry}
        material={materials.leaf}
        position={[4.924, 7.849, -0.184]}
        rotation={[-1.342, -0.642, 1.815]}
        scale={[-0.03, -0.03, -0.005]}
      />
      </group>
    </group>
  )
}

useGLTF.preload('models/tree.glb')