import React, { useMemo } from "react";
import {
  Circle,
  CircleDot,
  Activity,
  Cross,
  Orbit,
  Sparkles,
  Bot,
  ScanSearch,
  Waves,
  MessageSquare,
  BrainCircuit,
  BotMessageSquare,
  MessageSquareLock,
  HeartPlus,
  HeartPulse,
  ShieldPlus,
  Pill,
} from "lucide-react";

function BackgroundEffect({ variant = "dashboard" }) {
  const particleCount = variant === "chat" ? 18 : 16;

  const iconColors = [
    "text-cyan-300/60",
    "text-sky-300/55",
    "text-blue-300/45",
    "text-slate-300/40",
  ];

  const topOffset =
    variant === "report"
      ? 180
      : variant === "dashboard"
      ? 120
      : 100;

  const icons =
    variant === "chat"
      ? [
          Sparkles,
          Bot,
          Orbit,
          BrainCircuit,
          MessageSquareLock,
          BotMessageSquare
        ]
      : variant === "report"
      ? [
          Activity,
          Orbit,
          HeartPulse,
          ShieldPlus,
          Pill,
        ]
      : [
          Circle,
          HeartPulse,
          Activity,
          Cross,
          Orbit,
        ];

 const particleData = useMemo(
  () =>
    Array.from({ length: particleCount }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 10 + 18,
      duration: Math.random() * 8 + 18,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.25 + 0.35,
    })),
  [particleCount]
);

  const showParticles =
    variant === "dashboard" ||
    variant === "report" ||
    variant === "chat";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Dashboard / Report / Chat Glow */}
      {showParticles && (
        <>
          <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-cyan-400/8 blur-[140px]" />

          <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-blue-500/8 blur-[160px]" />

          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/6 blur-[220px]" />
        </>
      )}

      {/* Glow only page */}
      {variant === "glow" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
        </div>
      )}

      {/* Floating Icons */}
      {showParticles &&
        particleData.map((particle) => {
          const Icon = icons[particle.id % icons.length];
          const color =
            iconColors[particle.id % iconColors.length];

          return (
            <div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.left}%`,
                top: `calc(${particle.top}% + ${topOffset}px)`,
                opacity: particle.opacity,
                transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
                animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            >
              <Icon
                size={particle.size}
                strokeWidth={1.6}
                className={`${color} tiny-glow`}
              />
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(BackgroundEffect);;