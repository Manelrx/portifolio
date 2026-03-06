"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

interface StatsCounterProps {
    stats: StatItem[];
}

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold font-mono gradient-text">
            {prefix}{count}{suffix}
        </span>
    );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    className="text-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
}
