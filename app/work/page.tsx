import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yes Lord Case Study | S. DeMo Studio",
  description:
    "A custom e-commerce experience designed and built by S. DeMo Studio for Yes Lord.",
};

const capabilities = [
  {
    number: "01",
    title: "Custom commerce",
    text: "A made-to-fit storefront architecture shaped around the Yes Lord brand instead of a generic theme.",
  },
  {
    number: "02",
    title: "Secure checkout",
    text: "A clear, trusted path from product discovery to cart and secure payment, designed to reduce friction.",
  },
  {
    number: "03",
    title: "Product variants",
    text: "Straightforward color and size selection gives shoppers confidence before they add an item to cart.",
  },
  {
    number: "04",
    title: "Web analytics",
    text: "Measurement foundations for understanding traffic, shopping behavior, and the moments that drive conversion.",
  },
  {
    number: "05",
    title: "Responsive UX",
    text: "Layouts and interactions designed to stay focused, readable, and shoppable across screen sizes.",
  },
  {
    number: "06",
    title: "SEO & performance",
    text: "A technical foundation built for discoverability, fast navigation, and a stronger customer experience.",
  },
];

export default function WorkPage() {
  return (
    <main className="case-study" id="top">
      <nav className="nav shell case-nav" aria-label="Portfolio navigation">
        <a className="brand" href="/" aria-label="S. DeMo Studio home">
          <img src="/brand/monogram.png" alt="" />
          <span>S. DeMo Studio</span>
        </a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
        </div>
        <a
          className="button button-small"
          href="https://www.yeslord.shop"
          target="_blank"
          rel="noreferrer"
        >
          Visit live site ↗
        </a>
      </nav>

      <header className="case-hero shell">
        <div className="case-kicker">
          <span>Selected work · 01</span>
          <span>Custom build · E-commerce</span>
        </div>
        <h1>Yes Lord</h1>
        <div className="case-hero-bottom">
          <p>
            A bold, conversion-minded digital flagship for a faith-driven
            fashion brand.
          </p>
          <a
            className="text-link dark"
            href="https://www.yeslord.shop"
            target="_blank"
            rel="noreferrer"
          >
            yeslord.shop <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="case-cover shell">
        <img
          src="/work/yes-lord/home.png"
          alt="Yes Lord homepage with an editorial campaign image and oversized wordmark"
        />
      </section>

      <section className="case-overview shell section" id="overview">
        <p className="eyebrow">The assignment</p>
        <div>
          <h2>Turn a clear point of view into a complete shopping experience.</h2>
          <div className="case-overview-copy">
            <p>
              Yes Lord needed more than a product grid. The custom build gives
              the brand a digital home with the same confidence as the clothing:
              high contrast, direct messaging, and room for the campaign
              photography to lead.
            </p>
            <p>
              The experience connects storytelling and commerce from the first
              screen, then keeps product discovery, selection, cart, and
              checkout deliberately simple.
            </p>
          </div>
        </div>
      </section>

      <section className="case-dark" id="experience">
        <div className="shell section">
          <div className="case-section-heading">
            <p className="eyebrow eyebrow-light">The experience</p>
            <h2>Strong brand energy. Zero shopping friction.</h2>
          </div>
          <div className="screen-frame screen-shop">
            <img
              src="/work/yes-lord/shop.png"
              alt="Yes Lord shop page showing a responsive product collection"
            />
          </div>
          <div className="screen-caption">
            <span>01 · Shop discovery</span>
            <p>
              A focused collection view balances campaign-style spacing with
              clear products and promotional messaging.
            </p>
          </div>
        </div>
      </section>

      <section className="product-story shell section">
        <div className="screen-frame screen-product">
          <img
            src="/work/yes-lord/product.png"
            alt="Yes Lord product page with sale pricing, color choices, and size selection"
          />
        </div>
        <div className="screen-caption">
          <span>02 · Product decisions</span>
          <p>
            Sale pricing, color swatches, sizing, and product imagery are
            organized into a clear decision path that keeps attention on the
            item.
          </p>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What went into it</p>
              <h2>Built beyond the surface.</h2>
            </div>
            <p>
              The interface is only the visible layer. The build supports the
              full customer journey and the business intelligence behind it.
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
          <h2>Need a digital home with this much intention?</h2>
          <div>
            <a
              className="button button-light"
              href="mailto:shane@sdemo.studio?subject=New%20S.%20DeMo%20Studio%20Project"
            >
              Start a conversation <span aria-hidden="true">↗</span>
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
        <p>Yes Lord · Custom e-commerce</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
