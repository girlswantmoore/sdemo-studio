import type { Metadata } from "next";
import { ContainerScroll } from "../../../components/ui/container-scroll";

export const metadata: Metadata = {
  title: "Modus Strategic Management Case Study | S. DeMo Studio",
  description:
    "A custom consulting website designed by S. DeMo Studio for Modus Strategic Management.",
};

const capabilities = [
  {
    number: "01",
    title: "Brand-led web design",
    text: "A composed visual system translates Modus’s strategic positioning into a confident, distinctive digital presence.",
  },
  {
    number: "02",
    title: "Service architecture",
    text: "Complex consulting capabilities are organized into clear, scannable pathways for organizations with different needs.",
  },
  {
    number: "03",
    title: "Responsive experience",
    text: "Editorial typography, layered surfaces, and navigation adapt cleanly from large displays to mobile screens.",
  },
  {
    number: "04",
    title: "Consultation journey",
    text: "Focused calls to action guide prospective clients from understanding the offer to scheduling a conversation.",
  },
  {
    number: "05",
    title: "Inquiry experience",
    text: "A tailored contact flow captures organization type, primary need, and project context before the first meeting.",
  },
  {
    number: "06",
    title: "Accessibility & clarity",
    text: "Readable structure, intentional contrast, and direct language keep a sophisticated experience easy to use.",
  },
];

export default function ModusWorkPage() {
  return (
    <main className="case-study modus-case" id="top">
      <nav className="nav shell case-nav" aria-label="Portfolio navigation">
        <a className="wordmark-brand" href="/" aria-label="S. DeMo Studio home">
          <img src="/brand/wordmark-nav.png" alt="S. DeMo Digital Design Studio" />
        </a>
        <div className="nav-links">
          <a className="case-work-nav" href="/work">Work</a>
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
        </div>
        <a
          className="button button-small"
          href="https://modussm.com"
          target="_blank"
          rel="noreferrer"
        >
          Visit live site ↗︎
        </a>
      </nav>

      <header className="case-hero shell">
        <div className="case-kicker">
          <span>Selected work · 02</span>
          <span>Custom build · Consulting</span>
        </div>
        <h1>Modus</h1>
        <div className="case-hero-bottom">
          <p>
            A refined digital presence for a consulting company that turns
            complex challenges into clear direction.
          </p>
          <a
            className="text-link dark"
            href="https://modussm.com"
            target="_blank"
            rel="noreferrer"
          >
            modussm.com <span aria-hidden="true">↗︎</span>
          </a>
        </div>
      </header>

      <ContainerScroll
        titleComponent={
          <div className="case-scroll-title">
            <p className="eyebrow">The full experience</p>
            <h2>Strategy made visible, clear, and credible.</h2>
          </div>
        }
      >
        <img
          className="tablet-crop-top"
          src="/work/modus/home.png"
          alt="Modus Strategic Management homepage with an emerald background and editorial headline"
        />
      </ContainerScroll>

      <section className="case-overview shell section" id="overview">
        <p className="eyebrow">The assignment</p>
        <div>
          <h2>Give a thoughtful consulting practice a digital presence to match.</h2>
          <div className="case-overview-copy">
            <p>
              Modus needed a website that could make sophisticated strategy,
              data, and operational services feel approachable without losing
              their authority.
            </p>
            <p>
              The custom experience pairs editorial typography with a rich,
              focused palette and a clear information hierarchy that moves
              prospective clients from discovery to inquiry.
            </p>
          </div>
        </div>
      </section>

      <div id="experience">
        <ContainerScroll
          titleComponent={
            <div className="case-scroll-title">
              <p className="eyebrow eyebrow-light">02 · About</p>
              <h2>Expertise explained with confidence and clarity.</h2>
              <p className="case-scroll-description">
                The company story establishes Modus&apos;s experience across
                health data, technology, community outcomes, and strategy.
              </p>
            </div>
          }
        >
          <img
            className="tablet-crop-top"
            src="/work/modus/about.png"
            alt="Modus Strategic Management about page describing its health data and strategy expertise"
          />
        </ContainerScroll>

        <ContainerScroll
          titleComponent={
            <div className="case-scroll-title">
              <p className="eyebrow eyebrow-light">03 · Contact</p>
              <h2>A consultation path built around useful context.</h2>
              <p className="case-scroll-description">
                A tailored inquiry experience helps Modus understand the
                organization and its primary need before the first conversation.
              </p>
            </div>
          }
        >
          <img
            className="tablet-crop-top"
            src="/work/modus/contact.png"
            alt="Modus consultation form with organization and project detail fields"
          />
        </ContainerScroll>
      </div>

      <section className="capabilities" id="capabilities">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What went into it</p>
              <h2>Designed for trust and action.</h2>
            </div>
            <p>
              Every layer supports the same goal: make expertise easy to
              understand and the next step easy to take.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-next">
        <div className="shell case-next-inner">
          <p className="eyebrow eyebrow-light">Your project could be next</p>
          <h2>Need a site that makes your expertise feel unmistakable?</h2>
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
        <p>Modus · Strategy consulting</p>
        <a href="#top">Back to top ↑︎</a>
      </footer>
    </main>
  );
}
