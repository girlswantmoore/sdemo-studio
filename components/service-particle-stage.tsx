"use client";

import { MagicDust, type SequenceItem } from "./ui/magic-dust-shader";

const serviceSequence: SequenceItem[] = [
  { type: "text", text: "WIX" },
  { type: "shape", shape: "torus" },
  { type: "text", text: "SHOPIFY" },
  { type: "shape", shape: "sphere" },
  { type: "text", text: "CUSTOM" },
  { type: "shape", shape: "box" },
];

export function ServiceParticleStage() {
  return (
    <div className="service-particle-stage">
      <div className="service-particle-meta" aria-hidden="true">
        <span>Platform to possibility</span>
        <span>01 — 03</span>
      </div>
      <div className="service-particle-canvas" aria-hidden="true">
        <MagicDust
          sequence={serviceSequence}
          particleCount={5500}
          particleColor="#ffffff"
          particleSize={0.022}
          holdDuration={1.25}
          animationSpeed={1.4}
          scatterRadius={12}
        />
      </div>
      <div className="service-particle-static" aria-hidden="true">
        <span>Wix</span>
        <i />
        <span>Shopify</span>
        <i />
        <span>Custom</span>
      </div>
      <p>One studio. Three ways to build.</p>
    </div>
  );
}
