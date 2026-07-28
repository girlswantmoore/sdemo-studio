import { SiteIntro } from "../components/site-intro";
import { ServiceParticleStage } from "../components/service-particle-stage";
import { TiltCard } from "../components/ui/tilt-card";

const services = [
  {
    number: "01",
    title: "Wix design",
    text: "Strategic, polished websites that are easy for you to manage long after launch.",
    tags: ["Service sites", "Portfolios", "Landing pages"],
  },
  {
    number: "02",
    title: "Shopify design",
    text: "Conversion-minded storefronts that make discovering and buying your products feel effortless.",
    tags: ["E-commerce", "Theme design", "UX strategy"],
  },
  {
    number: "03",
    title: "Custom builds",
    text: "Distinctive digital experiences built from the ground up around your goals and your audience.",
    tags: ["Web apps", "Custom sites", "Design systems"],
  },
];

const steps = [
  ["Discover", "We define your goals, audience, and what success needs to look like."],
  ["Design", "I shape the structure, visual direction, and every key interaction."],
  ["Build", "Your approved direction becomes a responsive, production-ready site."],
  ["Launch", "We test, refine, and put your new digital home out into the world."],
];

export default function Home() {
  return (
    <>
      <SiteIntro />
      <main id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a
          className="wordmark-brand"
          href="#top"
          aria-label="S. DeMo Studio home"
        >
          <img src="/brand/wordmark-nav.png" alt="S. DeMo Digital Design Studio" />
        </a>
        <div className="nav-links">
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </div>
        <a className="button button-small" href="#contact">
          Start a project
        </a>
      </nav>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Digital design studio · UI/UX · Web design</p>
          <h1 id="hero-title">
            Websites with
            <br />
            <span>something to say.</span>
          </h1>
          <p className="hero-intro">
            S. DeMo Studio designs thoughtful digital experiences for brands
            ready to look sharper, work smarter, and make a lasting impression.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Let&apos;s work together <span aria-hidden="true">↗︎</span>
            </a>
            <a className="text-link" href="/services">
              Explore services <span aria-hidden="true">↓︎</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="monogram-wrap">
            <img src="/brand/monogram.png" alt="" />
          </div>
          <span className="art-note">Design with intention</span>
        </div>
        <div className="platform-strip" aria-label="Available platforms">
          <span>Wix</span>
          <i />
          <span>Shopify</span>
          <i />
          <span>Custom builds</span>
          <i />
          <span>UI/UX</span>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <p className="eyebrow">What I do</p>
          <p className="statement-copy">
            The best websites don&apos;t just look good. They{" "}
            <em>make sense, feel natural,</em> and move people to act.
          </p>
        </div>
      </section>

      <section className="featured-work shell section" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">Selected work · 01</p>
            <h2>A storefront built to carry the brand.</h2>
          </div>
          <p>
            A custom commerce experience for Yes Lord—uniting faith, fashion,
            product storytelling, and a frictionless path to purchase.
          </p>
        </div>
        <a
          className="featured-project"
          href="/work"
          aria-label="View the Yes Lord case study"
        >
          <div className="featured-project-image">
            <img
              src="/work/yes-lord/home.png"
              alt="Yes Lord custom storefront homepage"
            />
          </div>
          <div className="featured-project-meta">
            <div>
              <span>Yes Lord</span>
              <p>Custom e-commerce · UI/UX · Development</p>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗︎
            </span>
          </div>
        </a>
        <div className="work-divider">
          <p className="eyebrow">Selected work · 02</p>
          <p>Strategy-led consulting · Custom website</p>
        </div>
        <a
          className="featured-project"
          href="/work/modus"
          aria-label="View the Modus Strategic Management case study"
        >
          <div className="featured-project-image featured-project-image-modus">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/work/modus/home.png"
              aria-label="A walkthrough of the Modus Strategic Management website"
            >
              <source src="/work/modus/walkthrough.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="featured-project-meta">
            <div>
              <span>Modus Strategic Management</span>
              <p>Consulting · Strategy · Custom web design</p>
            </div>
            <span className="project-arrow" aria-hidden="true">
              ↗︎
            </span>
          </div>
        </a>
      </section>

      <section className="services shell section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ways to work together</p>
            <h2>Built for where your brand is going.</h2>
          </div>
          <p>
            From flexible platform builds to fully custom experiences, every
            project starts with clarity and ends with a site that feels like you.
          </p>
        </div>
        <ServiceParticleStage />
        <div className="service-grid">
          {services.map((service) => (
            <TiltCard
              className="service-card"
              effect="gravitate"
              key={service.title}
              perspective={1100}
              scale={1.025}
              tiltLimit={6}
            >
              <article className="service-card-inner">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul aria-label={`${service.title} project types`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell section">
          <div className="process-top">
            <div>
              <p className="eyebrow eyebrow-light">The process</p>
              <h2>Clear from first thought to final click.</h2>
            </div>
            <p>
              No mystery, no design-speak overload. Just a collaborative process
              that keeps you informed and the work moving.
            </p>
          </div>
          <ol className="steps">
            {steps.map(([title, text], index) => (
              <li key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="portrait">
          <img src="/brand/headshot.png" alt="Founder of S. DeMo Studio" />
          <div className="portrait-mark">SDM</div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">The studio</p>
          <h2>Design should feel personal. So should the process.</h2>
          <p className="lead">
            S. DeMo Studio is an independent digital design studio bringing
            strategy, creativity, and care to every screen.
          </p>
          <p>
            You work directly with the designer shaping your project—from the
            first conversation through launch. The result is a digital
            experience that feels considered, confident, and entirely your own.
          </p>
          <a className="text-link dark" href="#contact">
            Tell me about your idea <span aria-hidden="true">↗︎</span>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow eyebrow-light">Have a project in mind?</p>
          <h2>Let&apos;s make your next move look like your best one.</h2>
          <p>
            Share the idea, the goal, or even the rough sketch. We&apos;ll start
            from there.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="mailto:shane@sdemo.studio?subject=New%20S.%20DeMo%20Studio%20Project"
            >
              Start the conversation <span aria-hidden="true">↗︎</span>
            </a>
            <a className="email-link" href="mailto:shane@sdemo.studio">
              shane@sdemo.studio
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top" aria-label="Back to top">
          <img src="/brand/monogram.png" alt="" />
          <span>S. DeMo Studio</span>
        </a>
        <p>UI/UX · Wix · Shopify · Custom builds</p>
        <p>© {new Date().getFullYear()} S. DeMo Studio</p>
      </footer>
      </main>
    </>
  );
}
