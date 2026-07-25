import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages | S. DeMo Studio",
  description:
    "Web design packages, individual design services, and digital consulting from S. DeMo Studio.",
};

const packages = [
  {
    number: "01",
    name: "Launch",
    bestFor: "New businesses, personal brands, and focused service offerings",
    description:
      "A clear, credible digital home that introduces the brand and turns attention into action.",
    includes: [
      "Discovery and content direction",
      "Responsive custom design",
      "Core website build",
      "Contact or lead-capture flow",
      "Technical SEO foundation",
      "Launch support",
    ],
  },
  {
    number: "02",
    name: "Commerce",
    bestFor: "Product brands ready for a sharper shopping experience",
    description:
      "A conversion-minded storefront that connects product discovery, brand storytelling, and checkout.",
    includes: [
      "Store and catalog strategy",
      "Shopify or custom commerce build",
      "Product and collection templates",
      "Cart and secure checkout setup",
      "Analytics foundations",
      "Launch testing and support",
    ],
  },
  {
    number: "03",
    name: "Signature",
    bestFor: "Established brands that need a fully custom digital experience",
    description:
      "A bespoke site or app designed around complex goals, distinct interactions, and long-term growth.",
    includes: [
      "Experience and feature strategy",
      "Custom UI/UX system",
      "Bespoke development",
      "Motion and interaction design",
      "Third-party integrations",
      "Quality assurance and launch",
    ],
  },
];

const individualServices = [
  ["UX audit", "A focused review of usability, conversion friction, content hierarchy, and opportunities."],
  ["Landing page", "A single, high-impact page for a launch, campaign, service, event, or lead funnel."],
  ["Website refresh", "A visual and structural upgrade for an existing site that no longer reflects the brand."],
  ["E-commerce optimization", "Sharper product discovery, product pages, cart flow, and conversion touchpoints."],
  ["UI design system", "Reusable typography, color, components, and interaction rules for a consistent product."],
  ["Analytics & SEO setup", "Measurement and discoverability foundations that make future decisions more informed."],
  ["Prototype design", "Clickable flows that bring a site or app idea to life before development begins."],
  ["Ongoing support", "Planned design improvements, new pages, campaign updates, and site maintenance."],
];

const consulting = [
  {
    label: "Focused session",
    title: "Strategy intensive",
    text: "A concentrated working session to clarify your site direction, audience, offer, content, or next build decision.",
    detail: "Best for one clear challenge",
  },
  {
    label: "Short engagement",
    title: "Design direction sprint",
    text: "A collaborative sprint that turns scattered ideas into a clear sitemap, visual direction, and prioritized plan.",
    detail: "Best before a redesign or build",
  },
  {
    label: "Ongoing",
    title: "Fractional digital partner",
    text: "Recurring strategic and design support for brands that need senior digital guidance without a full-time hire.",
    detail: "Best for steady growth",
  },
];

const inquiryHref = (subject: string) =>
  `mailto:shane@sdemo.studio?subject=${encodeURIComponent(subject)}`;

export default function ServicesPage() {
  return (
    <main className="services-page" id="top">
      <nav className="nav shell" aria-label="Services navigation">
        <a
          className="wordmark-brand"
          href="/"
          aria-label="S. DeMo Studio home"
        >
          <img
            src="/brand/wordmark-nav.png"
            alt="S. DeMo Digital Design Studio"
          />
        </a>
        <div className="nav-links">
          <a href="/work">Work</a>
          <a href="#packages">Packages</a>
          <a href="#individual">Individual</a>
          <a href="#consulting">Consulting</a>
        </div>
        <a
          className="button button-small"
          href={inquiryHref("New S. DeMo Studio project")}
        >
          Start a project
        </a>
      </nav>

      <header className="services-hero shell">
        <div className="services-hero-top">
          <p className="eyebrow">Services & packages</p>
          <span>Wix · Shopify · Custom builds</span>
        </div>
        <h1>
          The right level
          <br />
          <span>of support.</span>
        </h1>
        <div className="services-hero-bottom">
          <p>
            Choose a complete build, bring one focused need, or work together
            at the strategy level. Every engagement is shaped around the
            outcome—not a one-size-fits-all checklist.
          </p>
          <a className="text-link dark" href="#packages">
            Explore the options <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="package-section" id="packages">
        <div className="shell section">
          <div className="section-heading package-heading">
            <div>
              <p className="eyebrow">Complete engagements</p>
              <h2>Packages built around momentum.</h2>
            </div>
            <p>
              Each package is customized after discovery. Scope, timeline, and
              investment are presented in a clear proposal before work begins.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((servicePackage) => (
              <article className="package-card" key={servicePackage.name}>
                <div className="package-card-top">
                  <span>{servicePackage.number}</span>
                  <span>Custom proposal</span>
                </div>
                <h3>{servicePackage.name}</h3>
                <p className="package-best">
                  Best for · {servicePackage.bestFor}
                </p>
                <p className="package-description">
                  {servicePackage.description}
                </p>
                <div className="package-includes">
                  <span>Typical scope</span>
                  <ul>
                    {servicePackage.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="text-link dark"
                  href={inquiryHref(
                    `${servicePackage.name} package inquiry`,
                  )}
                >
                  Ask about {servicePackage.name}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="individual-section shell section" id="individual">
        <div className="section-heading">
          <div>
            <p className="eyebrow">À la carte</p>
            <h2>One need. A focused solution.</h2>
          </div>
          <p>
            Individual services are designed for brands that do not need a full
            build but still want thoughtful, senior-level design support.
          </p>
        </div>
        <div className="individual-list">
          {individualServices.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a
                href={inquiryHref(`${title} inquiry`)}
                aria-label={`Ask about ${title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="consulting-section" id="consulting">
        <div className="shell section">
          <div className="consulting-heading">
            <p className="eyebrow eyebrow-light">Consulting</p>
            <h2>Clarity before commitment.</h2>
            <p>
              When the next move is not obvious, consulting gives you a clear
              point of view, an actionable plan, and a partner who can see the
              whole digital picture.
            </p>
          </div>
          <div className="consulting-grid">
            {consulting.map((option, index) => (
              <article key={option.title}>
                <div>
                  <span>0{index + 1}</span>
                  <span>{option.label}</span>
                </div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                <div className="consulting-card-bottom">
                  <span>{option.detail}</span>
                  <a
                    href={inquiryHref(`${option.title} inquiry`)}
                    aria-label={`Ask about ${option.title}`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-fit shell section">
        <p className="eyebrow">Not sure where you fit?</p>
        <div>
          <h2>Start with the goal. We&apos;ll find the right shape.</h2>
          <p>
            Tell me what you are building, what is not working, or what you want
            to make possible. I&apos;ll recommend the most useful next step.
          </p>
          <div className="services-fit-actions">
            <a
              className="button"
              href={inquiryHref("Help choosing an S. DeMo Studio service")}
            >
              Find the right service <span aria-hidden="true">↗</span>
            </a>
            <a className="email-link dark-email" href="mailto:shane@sdemo.studio">
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
        <p>Packages · Individual services · Consulting</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
