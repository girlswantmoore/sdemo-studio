import type { ReactNode } from "react";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      className="container-scroll"
      aria-label="Yes Lord homepage presentation"
    >
      <div className="container-scroll-perspective">
        <div className="container-scroll-header">{titleComponent}</div>
        <div className="container-scroll-card">
          <div className="container-scroll-screen">{children}</div>
        </div>
      </div>
    </section>
  );
}
