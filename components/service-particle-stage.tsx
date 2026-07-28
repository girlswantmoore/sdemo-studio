"use client";

import { MagicDust, type SequenceItem } from "./ui/magic-dust-shader";

const serviceSequence: SequenceItem[] = [
  { type: "text", text: "CUSTOM" },
  { type: "text", text: "SHOPIFY" },
  { type: "text", text: "WIX" },
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
          holdDuration={0.65}
          animationSpeed={2.2}
          scatterRadius={12}
        />
      </div>
      <div className="service-particle-static" aria-hidden="true">
        <span>Custom</span>
        <i />
        <span>Shopify</span>
        <i />
        <span>Wix</span>
      </div>
      <p>One studio. Three ways to build.</p>
    </div>
  );
}
