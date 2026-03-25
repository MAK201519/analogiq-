import Link from "next/link";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function ContactSuccessPage() {
  return (
    <div>
      <NavigationBar />

      <section
        className="pt-[140px] pb-[80px] max-sm:pt-[100px] max-sm:pb-[40px]"
        style={{ backgroundColor: "#0D0D0D", minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5 w-full">
          <div className="max-w-[580px]">
            <span style={{ fontSize: 48 }}>✓</span>
            <h1
              className="mt-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#ffffff",
              }}
            >
              Thanks for getting{" "}
              <span style={{ color: "#D4500F" }}>in touch.</span>
            </h1>
            <p
              className="mt-6 text-[18px] leading-[1.65]"
              style={{ color: "#9CA3AF" }}
            >
              We&apos;ll review your message and be in touch shortly. In the
              meantime, feel free to explore our work.
            </p>
            <Link
              href="/work"
              className="inline-block mt-10 text-[15px] font-semibold transition-all duration-200"
              style={{
                color: "#D4500F",
                border: "2px solid #D4500F",
                borderRadius: 999,
                padding: "12px 28px",
                backgroundColor: "transparent",
              }}
            >
              View our work →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
