function BackgroundEffect({ variant = "particles" }) {
  const particles = Array.from({ length: 24 });
const colors = [
  "rgba(186,230,253,0.55)", // light sky blue
  "rgba(165,243,252,0.50)", // light cyan
  "rgba(224,242,254,0.45)", // almost white blue
];
  const particleData = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 12 + 18,
  duration: Math.random() * 10 + 14,
  delay: Math.random() * 8,
}));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Radial Glow */}
      {(variant === "particles" || variant === "chat") && (
        <>
          <div className="absolute top-24 right-24 h-64 w-64 rounded-full bg-cyan-400/6 blur-[120px]" />

<div className="absolute bottom-32 left-16 h-72 w-72 rounded-full bg-blue-500/6 blur-[140px]" />

<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/4 blur-[180px]" />
        </>
      )}

      {/* Report Glow */}
      {variant === "glow" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>
      )}

      {/* Floating Medical Particles */}
      {(variant === "particles" || variant === "chat") &&
        particleData.map((particle) => {
  const icons = [
    "●",
    "+",
    "○",
    "✚",
    "⌁",
    "🧬",
  ];

  const icon = icons[particle.id % icons.length];
const scale =
  icon === "✚"
    ? 1.2
    : icon === "⌁"
    ? 1.3
    : 1;

  return (
    <div
      key={particle.id}
      className="absolute select-none"
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        fontSize: `${particle.size}px`,
        color: colors[particle.id % colors.length],
       transform: `scale(${scale})`,
  animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
  animationDelay: `${particle.delay}s`,
      }}
    >
      {icon}
    </div>
  );
})}
    </div>
  );
}

export default BackgroundEffect;