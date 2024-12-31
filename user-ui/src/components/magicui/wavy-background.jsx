"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const noise = createNoise3D();
    let w,
        h,
        nt,
        i,
        x,
        ctx,
        canvas;
    const canvasRef = useRef(null);
    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
        };
        render();
    };

    const waveColors = colors ?? [
        "#38bdf8", // Vibrant blue
        "#60a5fa", // Soft sky blue
        "#a5b4fc", // Pale lavender blue
        "#fef3c7", // Warm light yellow
        "#fcd34d", // Golden yellow
        "#f9a8d4", // Soft pink
        "#f472b6", // Vibrant pink
    ];
    const drawWave = (n) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.35); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId;
    const render = () => {
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome"));
    }, []);

    return (
        (<div
            className={cn("min-h-screen flex flex-col items-center justify-center", containerClassName)}>
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>)
    );
};
