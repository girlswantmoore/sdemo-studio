"use client";

import { useEffect, useState } from "react";
import { MagicDust } from "./ui/magic-dust-shader";

const introSequence = [
  { type: "text" as const, text: "S. DeMo" },
];

export function SiteIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const introSeen = window.sessionStorage.getItem("sdemo-intro-seen");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (introSeen || reduceMotion) {
      return;
    }

    window.sessionStorage.setItem("sdemo-intro-seen", "true");
    setVisible(true);
    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2800);
    const removeTimer = window.setTimeout(() => setVisible(false), 3500);

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
          particleCount={14000}
          particleColor="#ffffff"
          particleSize={0.019}
          holdDuration={0.85}
          animationSpeed={2}
          scatterRadius={13}
        />
      </div>
      <div className="intro-frame" aria-hidden="true">
        <span>Digital design studio</span>
        <span>Est. 2026</span>
      </div>
      <p className="intro-subtitle">Web design · UI/UX</p>
      <button className="intro-skip" type="button" onClick={dismiss}>
        Skip intro <span aria-hidden="true">↗︎</span>
      </button>
      <div className="intro-progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
