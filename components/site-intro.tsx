"use client";

import { useEffect, useState } from "react";
import { MagicDust } from "./ui/magic-dust-shader";

const introSequence = [
  { type: "text" as const, text: "S. DEMO" },
];

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setVisible(false);
      return;
    }

    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setLeaving(true), 5600);
    const removeTimer = window.setTimeout(() => setVisible(false), 6350);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.classList.remove("intro-active");
  }, [visible]);

  function dismiss() {
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 700);
  }

  if (!visible) return null;

  return (
    <div
      className={`site-intro${leaving ? " is-leaving" : ""}`}
      role="dialog"
      aria-label="S. DeMo Studio introduction"
      aria-modal="true"
    >
      <div className="intro-canvas" aria-hidden="true">
        <MagicDust
          sequence={introSequence}
          particleCount={7000}
          particleColor="#b9ff3d"
          particleSize={0.024}
          holdDuration={2}
          animationSpeed={1.35}
          scatterRadius={13}
        />
      </div>
      <div className="intro-frame" aria-hidden="true">
        <span>Digital design studio</span>
        <span>Est. 2026</span>
      </div>
      <p className="intro-subtitle">Web design · UI/UX</p>
      <button className="intro-skip" type="button" onClick={dismiss}>
        Skip intro <span aria-hidden="true">↗</span>
      </button>
      <div className="intro-progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
