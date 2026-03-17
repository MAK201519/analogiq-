"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import { Button } from "@/components/ui/button";
import { staggerContainer as stagger, fadeUpItem as item } from "@/app/lib/animations";

interface FinalCTAProps {
  heading?: string;
  subheading?: string;
}

export default function FinalCTA({
  heading = "If your platform is limiting your marketing, let's talk about it.",
  subheading = "We work with a focused number of organisations at any given time. If you are a CMO, Head of Digital or marketing technology leader dealing with the gap between what you want to achieve and what your current infrastructure allows — we would be glad to understand the situation and share a clear-eyed perspective on what closing that gap realistically looks like. No pitch. Just a conversation.",
}: FinalCTAProps) {
  return (
    <section className="bg-[var(--surface)] py-[70px] max-sm:py-[40px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            className="flex flex-col items-center text-center relative overflow-hidden"
            style={{
              backgroundColor: '#0D0D0D',
              borderRadius: 45,
              border: '1px solid #191A23',
              boxShadow: '0 5px 0 0 #191A23',
              padding: '80px 64px',
            }}
          >
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div variants={item}>
                <Eyebrow muted>NEXT STEP</Eyebrow>
              </motion.div>

              <motion.h2
                variants={item}
                className="mt-4 max-w-[620px]"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, color: '#ffffff' }}
              >
                {heading}
              </motion.h2>

              <motion.p
                variants={item}
                className="text-[16px] leading-[1.65] mt-5 max-w-[480px]"
                style={{ color: '#9CA3AF' }}
              >
                {subheading}
              </motion.p>

              <motion.div variants={item} className="mt-10">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
