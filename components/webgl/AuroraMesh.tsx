"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Weiche, sehr langsame Salbei↔Sand-Wolken (fbm simplex noise), halbtransparent.
const fragmentShader = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uAmp;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // Ashima simplex noise
  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float fbm(vec2 p){
    float f = 0.0; float w = 0.5;
    for(int i=0;i<4;i++){ f += w * snoise(p); p *= 2.0; w *= 0.5; }
    return f;
  }

  void main(){
    vec2 uv = vUv;
    float t = uTime * uSpeed;
    float n1 = fbm(uv * 1.8 + vec2(t, t * 0.6));
    float n2 = fbm(uv * 2.6 - vec2(t * 0.4, t));
    float n = smoothstep(0.15, 0.85, (n1 + n2) * 0.5 * uAmp + 0.5);

    vec3 col = mix(uColorA, uColorB, n);
    col = mix(col, uColorC, smoothstep(0.55, 1.0, n2 * 0.5 + 0.5) * 0.5);

    // feines, animiertes Grain gegen Banding
    float grain = fract(sin(dot(uv * uTime, vec2(12.9898,78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.02;

    gl_FragColor = vec4(col, uOpacity);
  }
`;

interface AuroraMeshProps {
  colorA?: string;
  colorB?: string;
  colorC?: string;
  speed?: number;
  amp?: number;
  opacity?: number;
}

export function AuroraMesh({
  colorA = "#f5f2ec",
  colorB = "#dce6df",
  colorC = "#6e8f7d",
  speed = 0.04,
  amp = 0.9,
  opacity = 0.6,
}: AuroraMeshProps) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  const last = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uAmp: { value: amp },
      uOpacity: { value: opacity },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uColorC: { value: new THREE.Color(colorC) },
    }),
    [speed, amp, opacity, colorA, colorB, colorC],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (t - last.current < 1 / 30) return; // FPS-Cap 30 (ruhig + sparsam)
    last.current = t;
    if (mat.current) mat.current.uniforms.uTime.value = t;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
