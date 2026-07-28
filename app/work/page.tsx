import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | S. DeMo Studio",
  description:
    "Explore custom websites and digital experiences designed by S. DeMo Studio.",
};

const projects = [
  {
    number: "01",
    name: "Yes Lord",
    type: "Custom e-commerce · UI/UX · Development",
    description:
      "A bold digital storefront connecting faith, fashion, product storytelling, and a frictionless path to purchase.",
    href: "/work/yes-lord",
    image: "/work/yes-lord/home.png",
    imageAlt: "Yes Lord custom e-commerce homepage",
    tone: "dark",
  },
  {
    number: "02",
    name: "Modus",
    type: "Consulting · Strategy · Custom web design",
    description:
      "A refined consulting website that turns complex capabilities into clear direction and a focused inquiry journey.",
    href: "/work/modus",
    image: "/work/modus/home.png",
    imageAlt: "Modus Strategic Management consulting homepage",
    tone: "green",
  },
];

export default function WorkIndexPage() {
  return (
    <main className="work-index" id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark-brand" href="/" aria-label="S. DeMo Studio home">
          <img src="/brand/wordmark-nav.png" alt="S. DeMo Digital Design Studio" />
        </a>
        <div className="nav-links">
          <a href="/work" aria-current="page">Work</a>
          <a href="/services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#about">About</a>
        </div>
        <a className="button button-small" href="/#contact">
          Start a project
        </a>
      </nav>

      <header className="work-index-hero shell">
        <p className="eyebrow">Selected work</p>
        <h1>Choose a project.<br /><span>See what went into it.</span></h1>
        <p>
          Custom digital experiences shaped around the brand, the audience,
          and the action each business needs people to take.
        </p>
      </header>

      <section className="work-choice-grid shell" aria-label="Portfolio projects">
        {projects.map((project) => (
          <a
            className={`work-choice work-choice-${project.tone}`}
            href={project.href}
            key={project.name}
            aria-label={`View the ${project.name} case study`}
          >
            <div className="work-choice-top">
              <span>{project.number}</span>
              <span>View case study ↗︎</span>
            </div>
            <div className="work-choice-media">
              <img src={project.image} alt={project.imageAlt} />
            </div>
            <div className="work-choice-copy">
              <p>{project.type}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="case-next">
        <div className="shell case-next-inner">
          <p className="eyebrow eyebrow-light">Your project could be next</p>
          <h2>Let&apos;s build something worth choosing.</h2>
          <div>
            <a
              className="button button-light"
              href="mailto:shane@sdemo.studio?subject=New%20S.%20DeMo%20Studio%20Project"
            >
              Start a conversation <span aria-hidden="true">↗︎</span>
            </a>
            <a className="email-link" href="mailto:shane@sdemo.studio">
              shane@sdemo.studio
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="/" aria-label="S. DeMo Studio home">
          <img src="/brand/monogram.png" alt="" />
          <span>S. DeMo Studio</span>
        </a>
        <p>UI/UX · Wix · Shopify · Custom builds</p>
        <a href="#top">Back to top ↑︎</a>
      </footer>
    </main>
  );
}
