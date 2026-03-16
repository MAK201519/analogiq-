"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

const portfolioImages = [
  { seed: "portfolio1" },
  { seed: "portfolio2" },
  { seed: "portfolio3" },
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
            Build digital platforms ready for the{" "}
            <span style={{ color: '#D4500F' }}>AI era.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[18px] leading-[1.7] mt-8 max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.70)' }}
          >
            Marketing is changing faster than most digital platforms can keep
            up. Analogiq helps organisations modernise digital platforms so
            marketing teams can move faster, experiment more and deliver better
            customer experiences.
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
              <Link href="/contact">Start a conversation</Link>
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
        {portfolioImages.map(({ seed }, i) => (
          <div
            key={seed}
            className="overflow-hidden"
            style={{ borderRadius: 16, height: 280 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${seed}/800/600`}
              alt={`Client work ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
