function SummaryCard({ icon, title, value, color, bg }) {
  const Icon = icon;
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/15
        bg-white/5
        backdrop-blur-xl
        p-4
        hover:border-cyan-400/40
        hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
      "
    >
      {/* subtle glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative flex flex-col items-center text-center">

        {/* Icon */}
        <div
          className={`
flex
h-12
w-12
items-center
justify-center
rounded-xl
border
border-white/10
${bg}
`}
        >
        <Icon className={`w-7 h-7 ${color}`} />
        </div>

        {/* Number */}
        <h2 className="mt-3 text-3xl font-bold text-white">
          {value}
        </h2>

        {/* Label */}
        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
          {title}
        </p>

      </div>
    </div>
  );
}

export default SummaryCard;