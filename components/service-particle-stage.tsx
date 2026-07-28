"use client";

import { useEffect, useRef, useState } from "react";
import { MagicDust, type SequenceItem } from "./ui/magic-dust-shader";

const serviceSequence: SequenceItem[] = [
  { type: "text", text: "CUSTOM" },
  { type: "text", text: "SHOPIFY" },
  { type: "text", text: "WIX" },
];

export function ServiceParticleStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActive(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-particle-stage" ref={stageRef}>
      <div className="service-particle-meta" aria-hidden="true">
        <span>Platform to possibility</span>
        <span>01 — 03</span>
      </div>
      <div className="service-particle-canvas" aria-hidden="true">
        {isActive && (
          <MagicDust
            sequence={serviceSequence}
            particleCount={5500}
            particleColor="#ffffff"
            particleSize={0.022}
            holdDuration={0.65}
            animationSpeed={2.2}
            scatterRadius={12}
          />
        )}
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
