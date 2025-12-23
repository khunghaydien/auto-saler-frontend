"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-in-up"
  | "fade-in-left"
  | "fade-in-right"
  | "scale-in"
  | "rotate-in"
  | "slide-in-bottom"
  | "slide-in-top"
  | "zoom-in"
  | "flip-in";

interface AnimationConfig {
  visible: string;
  hidden: string;
}

const ANIMATION_CONFIGS: Record<AnimationType, AnimationConfig> = {
  "fade-in-up": {
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 translate-y-10",
  },
  "fade-in-left": {
    visible: "opacity-100 translate-x-0",
    hidden: "opacity-0 -translate-x-10",
  },
  "fade-in-right": {
    visible: "opacity-100 translate-x-0",
    hidden: "opacity-0 translate-x-10",
  },
  "scale-in": {
    visible: "opacity-100 scale-100",
    hidden: "opacity-0 scale-90",
  },
  "rotate-in": {
    visible: "opacity-100 rotate-0 scale-100",
    hidden: "opacity-0 -rotate-3 scale-95",
  },
  "slide-in-bottom": {
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 translate-y-16",
  },
  "slide-in-top": {
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 -translate-y-16",
  },
  "zoom-in": {
    visible: "opacity-100 scale-100",
    hidden: "opacity-0 scale-75",
  },
  "flip-in": {
    visible: "opacity-100 rotate-y-0",
    hidden: "opacity-0 rotate-y-90",
  },
};

interface AnimatedDivProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  className?: string;
}

export function AnimatedDiv({
  children,
  animationType = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedDivProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  const config = ANIMATION_CONFIGS[animationType];
  const animationClass = isVisible ? config.visible : config.hidden;

  const baseClasses = "transition-all duration-700 ease-out will-change-transform [transform-style:preserve-3d]";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}

