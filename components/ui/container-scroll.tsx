"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(media.matches);
    updateMobile();
    media.addEventListener("change", updateMobile);
    return () => media.removeEventListener("change", updateMobile);
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0.08, 0.72],
    reduceMotion ? [0, 0] : [18, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0.08, 0.72],
    reduceMotion ? [1, 1] : isMobile ? [0.78, 0.94] : [1.04, 1],
  );
  const translate = useTransform(
    scrollYProgress,
    [0.08, 0.72],
    reduceMotion ? [0, 0] : [70, -70],
  );

  return (
    <section
      className="container-scroll"
      ref={containerRef}
      aria-label="Yes Lord homepage presentation"
    >
      <div className="container-scroll-perspective">
        <Header translate={translate}>{titleComponent}</Header>
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </section>
  );
}

function Header({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="container-scroll-header"
      style={{ translateY: translate }}
    >
      {children}
    </motion.div>
  );
}

function ScrollCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="container-scroll-card"
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
      }}
    >
      <div className="container-scroll-screen">{children}</div>
    </motion.div>
  );
}
