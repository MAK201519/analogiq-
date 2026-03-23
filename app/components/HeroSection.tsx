"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const portfolioImages = [
  { src: "/clients/wilderness/banner.png", alt: "Wilderness Destinations — luxury safari landing page" },
  { src: "/clients/keith-prowse/homepage.webp", alt: "Keith Prowse — sports and events hospitality" },
  { src: "/clients/wilderness/instagram-botswana.png", alt: "Wilderness Destinations — Botswana safari experience" },
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
            className="font-serif-italic max-md:text-[52px] max-sm:text-[38px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.0,
              color: '#ffffff',
            }}
          >
            Turn your digital platform into an{" "}
            <span style={{ color: '#D4500F' }}>AI-powered growth engine.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[18px] leading-[1.7] mt-8 max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.70)' }}
          >
            We activate AI on Uniform, Sitecore and Optimizely, so marketing
            teams can move faster, experiment continuously and drive growth
            without waiting on rebuilds.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 flex-wrap items-center justify-center mt-10"
          >
            {/* Primary CTA */}
            <Button
              asChild
              className="font-medium text-[16px] border-0 hover:opacity-90 transition-opacity"
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
              className="font-medium text-[16px] bg-transparent hover:bg-transparent hover:opacity-80 transition-opacity"
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
              <Link href="#approach">Explore our approach</Link>
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
        {portfolioImages.map(({ src, alt }) => (
          <div
            key={src}
            className="overflow-hidden"
            style={{ borderRadius: 16, height: 280, position: "relative" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
