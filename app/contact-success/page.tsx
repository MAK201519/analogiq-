import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you | Analogiq",
  description: "We will be in touch shortly.",
};

export default function ContactSuccessPage() {
  return (
    <main>
      <section className="phero plain">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <span>Thank you</span>
          </nav>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <h2 className="big">Thank you.</h2>
          <p className="lede" style={{ marginTop: '16px' }}>We will be in touch shortly.</p>
        </div>
      </section>
    </main>
  );
}
