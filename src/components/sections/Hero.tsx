"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import CinematicMedia from "@/components/media/CinematicMedia";
import { brand } from "@/content/copy";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -80]);

  return (
    <div ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <CinematicMedia mediaKey="hero" kenBurns />
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-paper"
      >
        <p className="text-xs tracking-[0.4em] text-gold-soft/90 uppercase">{brand.name} &mdash; Global Network</p>
        <h1 className="font-display mt-6 max-w-4xl text-4xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Peer to Peer
          <br />
          <span className="text-gold-soft">Global Discipleship Network</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/85 sm:text-xl">
          Everyone is learning from someone.
          <br />
          Everyone can help someone grow.
        </p>
        <p className="mt-6 max-w-md text-sm text-paper/60">
          A global peer-to-peer discipleship network centered on Jesus Christ, Scripture, prayer, community, and
          mission.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/join"
            className="rounded-full bg-gold-soft px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Join P2P
          </Link>
          <Link
            href="/vision"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm tracking-wide text-paper/90 transition-colors hover:border-paper hover:text-paper"
          >
            Explore the Vision
          </Link>
        </div>

        <motion.p
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="absolute bottom-10 text-xs tracking-[0.3em] text-paper/50 uppercase"
        >
          Discover the Journey ↓
        </motion.p>
      </motion.div>
    </div>
  );
}
