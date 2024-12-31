"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../magicui/lamp"

export function Lamp() {
    return (
        (<LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mb-28 bg-gradient-to-br from-neutral-100 to bg-neutral-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                Intellectual
                <br />
                Property
            </motion.h1>
        </LampContainer>)
    );
}
