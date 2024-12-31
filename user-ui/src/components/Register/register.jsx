"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../magicui/googlegemini";

export function RegisterNow() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        (<div
            className="h-[400vh] w-full dark:border  rounded-md relative pt-40 overflow-clip"
            ref={ref}>
            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                description={"Get your IP approval in easy steps. Register your IP with us and get your IP approved in no time"}
            />
        </div>)
    );
}