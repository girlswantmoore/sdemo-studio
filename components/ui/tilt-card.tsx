"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export interface TiltCardProps {
  tiltLimit?: number;
  scale?: number;
  perspective?: number;
  effect?: "gravitate" | "evade";
  spotlight?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function TiltCard({
  tiltLimit = 15,
  scale = 1.05,
  perspective = 1200,
  effect = "evade",
  spotlight = true,
  className,
  style,
  children,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const neutralTransform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  const [transform, setTransform] = useState(neutralTransform);
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: 50,
    y: 50,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(true);
  const direction = effect === "evade" ? -1 : 1;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMotionAllowed(!media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!motionAllowed || event.pointerType !== "mouse") return;
      const element = cardRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const xProgress = (event.clientX - rect.left) / rect.width;
      const yProgress = (event.clientY - rect.top) / rect.height;
      const xRotation =
        (yProgress - 0.5) * (tiltLimit * 2) * direction;
      const yRotation =
        (xProgress - 0.5) * -(tiltLimit * 2) * direction;

      setTransform(
        `perspective(${perspective}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(${scale}, ${scale}, ${scale})`,
      );

      if (spotlight) {
        setSpotlightPosition({
          x: xProgress * 100,
          y: yProgress * 100,
        });
      }
    },
    [
      direction,
      motionAllowed,
      perspective,
      scale,
      spotlight,
      tiltLimit,
    ],
  );

  const handlePointerEnter = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (motionAllowed && event.pointerType === "mouse") {
        setIsHovered(true);
      }
    },
    [motionAllowed],
  );

  const handlePointerLeave = useCallback(() => {
    setTransform(neutralTransform);
    setIsHovered(false);
  }, [neutralTransform]);

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative overflow-hidden will-change-transform",
        className,
      )}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
      {spotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          aria-hidden="true"
        >
          <div
            className="absolute h-[200%] w-[200%] rounded-full"
            style={{
              left: `${spotlightPosition.x}%`,
              top: `${spotlightPosition.y}%`,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 42%)",
            }}
          />
        </div>
      )}
    </div>
  );
}
