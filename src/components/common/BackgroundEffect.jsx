import {
  Circle,
  CircleDot,
  Plus,
  Cross,
  Activity,
} from "lucide-react";

function BackgroundEffect({ variant = "particles" }) {
  const particleCount = variant === "chat" ? 10 : 16;

 const iconColors = [
  "text-cyan-300/50", // closest
  "text-sky-300/40",
  "text-blue-300/30",
  "text-slate-300/25", // farthest
];

  const icons = [
    Circle,
    CircleDot,
    Plus,
    Cross,
    Activity,
  ];

  const particleData = Array.from({ length: particleCount }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 12 + 14,
    duration: Math.random() * 8 + 18,
    delay: Math.random() * 8,
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.18 + 0.12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background Glow */}
      {(variant === "particles" || variant === "chat") && (
        <>
          <div className="absolute top-24 right-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-[120px]" />

          <div className="absolute bottom-24 left-12 h-72 w-72 rounded-full bg-blue-500/5 blur-[150px]" />

          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/4 blur-[200px]" />
        </>
      )}

      {/* Report Glow */}
      {variant === "glow" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[140px]" />
        </div>
      )}

      {/* Floating Medical Icons */}
      {(variant === "particles" || variant === "chat") &&
        particleData.map((particle) => {
          const Icon = icons[particle.id % icons.length];
          const color = iconColors[particle.id % iconColors.length];

          return (
            <div
              key={particle.id}
              className="absolute"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: particle.opacity,
                transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
                animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                filter: particle.opacity < 0.18 ? "blur(1px)" : "none",
              }}
            >
              <Icon
                size={particle.size}
                strokeWidth={1.8}
                className={color}
              />
            </div>
          );
        })}
    </div>
  );
}

export default BackgroundEffect;