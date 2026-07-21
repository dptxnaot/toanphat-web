"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimateIn({ children, delay=0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.55, delay, ease:[0.22,1,0.36,1] }} className={className}>
      {children}
    </motion.div>
  );
}
export function AnimateStagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-60px" }}
      variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.08 } } }} className={className}>
      {children}
    </motion.div>
  );
}
export function AnimateStaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={{ hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.5, ease:[0.22,1,0.36,1] } } }} className={className}>
      {children}
    </motion.div>
  );
}
