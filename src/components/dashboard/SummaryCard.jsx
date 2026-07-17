function SummaryCard({ icon, title, value }) {
  return (
    <div
      className="
        group
        rounded-3xl
        bg-white
        border
        border-slate-200
        shadow-md
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-cyan-300
        cursor-pointer
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-100
          to-cyan-100
          text-3xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Value */}
      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        {value}
      </h2>

      {/* Title */}
      <p className="mt-2 text-sm font-medium tracking-wide uppercase text-slate-500">
        {title}
      </p>
    </div>
  );
}

export default SummaryCard;