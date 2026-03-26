"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const portfolioImages = [
  { src: "/clients/keith-prowse/homepage-new.webp", alt: "Keith Prowse", label: "Keith Prowse" },
  { src: "/clients/capco/homepage.webp", alt: "Capco", label: "Capco" },
  { src: "/clients/experience-golf/homepage-new.webp", alt: "The Experience Golf", label: "The Experience Golf" },
];

export default function HeroSection() {
  return (
    <section className="bg-[var(--dark)] pt-[68px]">
      <div className="max-w-[1440px] mx-auto px-[100px] pt-[70px] pb-0 max-sm:px-5 max-sm:pt-10">
        {/* Centred text block */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center max-w-[860px] mx-auto"
        >
          <motion.h1
            variants={item}
            className="font-serif-italic"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#ffffff',
            }}
          >
            Turn your existing platform into a{" "}
            <span style={{ color: '#D4500F' }}>high-performing marketing engine.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[18px] max-sm:text-[16px] leading-[1.7] mt-8 max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.70)' }}
          >
            We help marketing teams activate platforms like Uniform, Sitecore
            and Optimizely, connecting data, AI and workflows to deliver
            faster execution and measurable growth.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 flex-col max-sm:w-full items-center justify-center mt-10 sm:flex-row"
          >
            {/* Primary CTA */}
            <Button
              asChild
              className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity max-sm:w-full max-sm:justify-center"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 500,
                borderRadius: 14,
                padding: '20px 35px',
                height: 'auto',
                backgroundColor: '#D4500F',
                color: '#ffffff',
                boxShadow: '0 5px 0 0 #191A23',
              }}
            >
              <Link href="/contact">Start the conversation</Link>
            </Button>

            {/* Ghost CTA — white on dark bg */}
            <Button
              asChild
              className="font-medium text-[16px] bg-transparent hover:bg-transparent hover:opacity-80 transition-opacity max-sm:w-full max-sm:justify-center"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 500,
                borderRadius: 14,
                padding: '20px 35px',
                height: 'auto',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.85)',
                boxShadow: '0 5px 0 0 rgba(255,255,255,0.15)',
              }}
            >
              <Link href="#approach">Explore how we work</Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/* Portfolio preview strip — full-width, no horizontal padding */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        className="mt-16 grid grid-cols-3 gap-3 max-sm:grid-cols-1"
        style={{ padding: '0 12px' }}
      >
        {portfolioImages.map(({ src, alt, label }, index) => (
          <div
            key={src}
            className="overflow-hidden"
            style={{ borderRadius: 16, height: 280, position: "relative" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              {...(index === 0 ? { fetchPriority: "high" } : {})}
              style={{ objectFit: "cover" }}
            />
            <span style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              backgroundColor: "rgba(13,13,13,0.75)",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'Inter', system-ui, sans-serif",
              padding: "4px 10px",
              borderRadius: 6,
            }}>
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
