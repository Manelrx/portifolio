"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
    return (
        <motion.div
            className={`w-full flex justify-center py-8 ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
                <div className="w-2 h-2 rounded-full bg-primary/60 animate-glow-pulse" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
            </div>
        </motion.div>
    );
}
