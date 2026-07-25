"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type SequenceItem =
  | { type: "text"; text: string; offset?: [number, number, number] }
  | {
      type: "shape";
      shape: "torus" | "sphere" | "box";
      offset?: [number, number, number];
    };

export interface MagicDustProps {
  sequence?: SequenceItem[];
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  fontFamily?: string;
  holdDuration?: number;
  animationSpeed?: number;
  scatterRadius?: number;
}

const DEFAULT_SEQUENCE: SequenceItem[] = [
  { type: "text", text: "S. DeMo", offset: [0, 0, 0] },
];

function getScatteredPositions(count: number, radius: number) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const distance = Math.cbrt(Math.random()) * radius;

    positions[index * 3] =
      distance * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] =
      distance * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = distance * Math.cos(phi);
  }

  return positions;
}

function getTextPositions(
  text: string,
  count: number,
  size: number,
  fontFamily: string,
) {
  if (typeof window === "undefined") {
    return new Float32Array(count * 3);
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) return new Float32Array(count * 3);

  context.fillStyle = "black";
  context.fillRect(0, 0, 1024, 1024);
  context.fillStyle = "white";
  context.textAlign = "center";
  context.textBaseline = "middle";

  let fontSize = 220;
  context.font = `900 ${fontSize}px ${fontFamily}`;
  const textWidth = context.measureText(text).width;

  if (textWidth > 900) {
    fontSize = Math.floor(fontSize * (900 / textWidth));
    context.font = `900 ${fontSize}px ${fontFamily}`;
  }

  context.fillText(text, 512, 512);

  const data = context.getImageData(0, 0, 1024, 1024).data;
  const points: { x: number; y: number }[] = [];

  for (let index = 0; index < 1024 * 1024; index++) {
    if (data[index * 4] > 128) {
      const x = index % 1024;
      const y = Math.floor(index / 1024);
      points.push({
        x: (x / 1024 - 0.5) * size,
        y: -(y / 1024 - 0.5) * size,
      });
    }
  }

  const positions = new Float32Array(count * 3);
  if (!points.length) return positions;

  for (let index = 0; index < count; index++) {
    const point = points[Math.floor(Math.random() * points.length)];
    positions[index * 3] = point.x + (Math.random() - 0.5) * 0.08;
    positions[index * 3 + 1] =
      point.y + (Math.random() - 0.5) * 0.08;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 0.12;
  }

  return positions;
}

function getTorusPositions(count: number, scale: number) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const radius = 2.5;
    const tube = 1;

    positions[index * 3] =
      (radius + tube * Math.cos(v)) * Math.cos(u) * scale;
    positions[index * 3 + 1] =
      (radius + tube * Math.cos(v)) * Math.sin(u) * scale;
    positions[index * 3 + 2] = tube * Math.sin(v) * scale;
  }

  return positions;
}

function getSpherePositions(count: number, radius: number) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] =
      radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }

  return positions;
}

function getBoxPositions(count: number, size: number) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index++) {
    const face = Math.floor(Math.random() * 6);
    const u = (Math.random() - 0.5) * size;
    const v = (Math.random() - 0.5) * size;
    const half = size / 2;
    const coordinates =
      face === 0
        ? [half, u, v]
        : face === 1
          ? [-half, u, v]
          : face === 2
            ? [u, half, v]
            : face === 3
              ? [u, -half, v]
              : face === 4
                ? [u, v, half]
                : [u, v, -half];

    positions.set(coordinates, index * 3);
  }

  return positions;
}

function applyOffset(
  destination: Float32Array,
  x: number,
  y: number,
  z = 0,
) {
  const result = new Float32Array(destination.length);

  for (let index = 0; index < destination.length; index += 3) {
    result[index] = destination[index] + x;
    result[index + 1] = destination[index + 1] + y;
    result[index + 2] = destination[index + 2] + z;
  }

  return result;
}

function getOrderedDelays(targets: Float32Array, count: number) {
  const delays = new Float32Array(count);
  let minimumX = Infinity;
  let maximumX = -Infinity;

  for (let index = 0; index < count; index++) {
    minimumX = Math.min(minimumX, targets[index * 3]);
    maximumX = Math.max(maximumX, targets[index * 3]);
  }

  const range = maximumX - minimumX || 1;

  for (let index = 0; index < count; index++) {
    const progress = (targets[index * 3] - minimumX) / range;
    delays[index] = progress * 0.7 + Math.random() * 0.3;
  }

  return delays;
}

const vertexShader = `
attribute vec3 aTarget;
attribute float aDelay;
attribute float aSize;
uniform float uProgress;
uniform float uSize;
varying float vAlpha;

void main() {
  float p = clamp((uProgress - aDelay) * 3.0, 0.0, 1.0);
  float ease = p < 0.5
    ? 4.0 * p * p * p
    : 1.0 - pow(-2.0 * p + 2.0, 3.0) / 2.0;
  vec3 finalPosition = mix(position, aTarget, ease);
  vec4 modelPosition = modelViewMatrix * vec4(finalPosition, 1.0);
  gl_PointSize = uSize * aSize * (1.0 / -modelPosition.z);
  gl_Position = projectionMatrix * modelPosition;
  vAlpha = smoothstep(0.0, 0.2, p);
}
`;

const fragmentShader = `
uniform vec3 uColor;
varying float vAlpha;

void main() {
  vec2 center = 2.0 * gl_PointCoord - 1.0;
  float radius = dot(center, center);
  if (radius > 1.0) discard;
  float alpha = 1.0 - smoothstep(0.7, 1.0, radius);
  gl_FragColor = vec4(uColor, alpha * vAlpha * 0.72);
}
`;

export function MagicDustCore({
  sequence = DEFAULT_SEQUENCE,
  particleCount = 10000,
  particleColor = "#ffffff",
  particleSize = 0.02,
  fontFamily = "Arial",
  holdDuration = 3,
  animationSpeed = 1,
  scatterRadius = 12,
}: MagicDustProps) {
  const color = useState(() => new THREE.Color(particleColor))[0];
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);
  const targetIndex = useRef(0);
  const phase = useRef<"constructing" | "holding" | "deconstructing">(
    "constructing",
  );
  const timer = useRef(0);

  const [{ origin, targets, sizes }] = useState(() => {
    const origin = getScatteredPositions(particleCount, scatterRadius);
    const sizes = Float32Array.from(
      { length: particleCount },
      () => Math.random() * 0.8 + 0.4,
    );
    const targets = sequence.map((item) => {
      let destination: Float32Array;

      if (item.type === "text") {
        destination = getTextPositions(
          item.text,
          particleCount,
          12,
          fontFamily,
        );
      } else if (item.shape === "torus") {
        destination = getTorusPositions(particleCount, 2);
      } else if (item.shape === "sphere") {
        destination = getSpherePositions(particleCount, 4);
      } else {
        destination = getBoxPositions(particleCount, 5);
      }

      if (item.offset) {
        destination = applyOffset(destination, ...item.offset);
      }

      return {
        destination,
        delays: getOrderedDelays(destination, particleCount),
        isText: item.type === "text",
      };
    });

    return { origin, targets, sizes };
  });

  useFrame((state, delta) => {
    if (phase.current === "constructing") {
      targetProgress.current = Math.min(
        1.5,
        targetProgress.current + delta * 0.4 * animationSpeed,
      );
      if (targetProgress.current === 1.5) {
        phase.current = "holding";
        timer.current = 0;
      }
    } else if (phase.current === "holding") {
      timer.current += delta;
      if (timer.current > holdDuration) phase.current = "deconstructing";
    } else {
      targetProgress.current = Math.max(
        0,
        targetProgress.current - delta * 0.6 * animationSpeed,
      );
      if (targetProgress.current === 0) {
        targetIndex.current = (targetIndex.current + 1) % targets.length;
        const nextTarget = targets[targetIndex.current];
        const targetAttribute = geometryRef.current?.attributes
          .aTarget as THREE.BufferAttribute | undefined;
        const delayAttribute = geometryRef.current?.attributes
          .aDelay as THREE.BufferAttribute | undefined;

        if (targetAttribute && delayAttribute) {
          targetAttribute.array.set(nextTarget.destination);
          delayAttribute.array.set(nextTarget.delays);
          targetAttribute.needsUpdate = true;
          delayAttribute.needsUpdate = true;
        }

        phase.current = "constructing";
      }
    }

    currentProgress.current +=
      (targetProgress.current - currentProgress.current) * 0.1;

    if (materialRef.current) {
      materialRef.current.uniforms.uProgress.value =
        currentProgress.current;
      materialRef.current.uniforms.uSize.value =
        Math.min(window.innerWidth, window.innerHeight) * particleSize;
    }

    if (pointsRef.current) {
      const scale = Math.min(1, state.viewport.width / 15);
      pointsRef.current.scale.set(scale, scale, scale);

      if (!targets[targetIndex.current].isText) {
        pointsRef.current.rotation.y += delta * 0.15;
      }
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  if (!targets.length) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[origin, 3]} />
        <bufferAttribute
          attach="attributes-aTarget"
          args={[targets[0].destination, 3]}
        />
        <bufferAttribute
          attach="attributes-aDelay"
          args={[targets[0].delays, 1]}
        />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uProgress: { value: 0 },
          uSize: { value: 10 },
          uColor: { value: color },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function MagicDust(props: MagicDustProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 1.5]}>
      <MagicDustCore {...props} />
    </Canvas>
  );
}
