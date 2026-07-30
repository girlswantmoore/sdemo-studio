import type { Metadata } from "next";
import { ContainerScroll } from "../../../components/ui/container-scroll";

export const metadata: Metadata = {
  title: "WaterBoy Landscaping Case Study | S. DeMo Studio",
  description:
    "A conversion-focused lawn care website designed by S. DeMo Studio for WaterBoy Landscaping.",
};

const capabilities = [
  {
    number: "01",
    title: "Local service positioning",
    text: "Direct messaging establishes WaterBoy as a dependable, veteran-owned lawn care company serving residential and commercial properties.",
  },
  {
    number: "02",
    title: "Service architecture",
    text: "Mowing, trimming, edging, cleanup, and maintenance are organized into clear sections that make the offer easy to understand.",
  },
  {
    number: "03",
    title: "Estimate conversion",
    text: "Prominent calls to action keep a free estimate within reach from the first screen through the final form.",
  },
  {
    number: "04",
    title: "Qualified inquiries",
    text: "The estimate form captures property type, location, service needs, project details, and optional yard photos before follow-up.",
  },
  {
    number: "05",
    title: "Responsive experience",
    text: "Bold typography, service imagery, and conversion paths remain clear and usable across desktop and mobile screens.",
  },
  {
    number: "06",
    title: "Trust signals",
    text: "Service-area details, direct contact information, reviews, and veteran-owned messaging help local customers act with confidence.",
  },
];

export default function WaterBoyWorkPage() {
  return (
    <main className="case-study waterboy-case" id="top">
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
        <a className="button button-small" href="tel:+18438176329">
          Call business ↗︎
        </a>
      </nav>

      <header className="case-hero shell">
        <div className="case-kicker">
          <span>Selected work · 03</span>
          <span>Custom build · Local services</span>
        </div>
        <h1>WaterBoy</h1>
        <div className="case-hero-bottom">
          <p>
            A bold, action-oriented website for a veteran-owned lawn care
            business built around trust, services, and qualified estimates.
          </p>
          <a className="text-link dark" href="tel:+18438176329">
            843-817-6329 <span aria-hidden="true">↗︎</span>
          </a>
        </div>
      </header>

      <ContainerScroll
        titleComponent={
          <div className="case-scroll-title">
            <p className="eyebrow">01 · First impression</p>
            <h2>Hard-working service with a clear local point of view.</h2>
          </div>
        }
      >
        <img
          className="tablet-crop-top"
          src="/work/waterboy/home.jpg"
          alt="WaterBoy Landscaping homepage with bold lawn care messaging"
        />
      </ContainerScroll>

      <section className="case-overview shell section" id="overview">
        <p className="eyebrow">The assignment</p>
        <div>
          <h2>Turn dependable lawn care into a digital experience that earns the call.</h2>
          <div className="case-overview-copy">
            <p>
              WaterBoy needed a website with the same energy as the work:
              straightforward, reliable, and visibly results-driven. The design
              leads with a memorable promise and keeps local credibility close.
            </p>
            <p>
              The customer journey moves cleanly from service discovery to a
              detailed estimate request, giving the business better context
              before the first phone call or property visit.
            </p>
          </div>
        </div>
      </section>

      <div id="experience">
        <ContainerScroll
          titleComponent={
            <div className="case-scroll-title">
              <p className="eyebrow eyebrow-light">02 · Services</p>
              <h2>Every service explained without slowing people down.</h2>
              <p className="case-scroll-description">
                Alternating imagery and concise benefit-led content make mowing,
                trimming, edging, and maintenance easy to scan.
              </p>
            </div>
          }
        >
          <img
            className="tablet-crop-top"
            src="/work/waterboy/services.jpg"
            alt="WaterBoy Landscaping services page featuring mowing and edging"
          />
        </ContainerScroll>

        <ContainerScroll
          titleComponent={
            <div className="case-scroll-title">
              <p className="eyebrow eyebrow-light">03 · Lead generation</p>
              <h2>A better estimate starts with better project context.</h2>
              <p className="case-scroll-description">
                The form captures contact details, property information,
                requested services, and optional yard photos in one focused flow.
              </p>
            </div>
          }
        >
          <img
            className="tablet-crop-top"
            src="/work/waterboy/estimate.jpg"
            alt="WaterBoy Landscaping free estimate form"
          />
        </ContainerScroll>
      </div>

      <section className="capabilities" id="capabilities">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What went into it</p>
              <h2>Built to turn local attention into action.</h2>
            </div>
            <p>
              The visual energy gets attention. The structure, trust signals,
              and estimate journey turn that attention into useful leads.
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
          <h2>Need a service website that works as hard as you do?</h2>
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
        <p>WaterBoy · Lawn care services</p>
        <a href="#top">Back to top ↑︎</a>
      </footer>
    </main>
  );
}
