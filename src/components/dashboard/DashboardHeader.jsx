function DashboardHeader() {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        AI HEALTH COMPANION
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white">
        AI Health Dashboard
      </h1>

      <p className="mt-3 max-w-2xl text-slate-400">
        AI-generated insights and analysis from your uploaded health report.
      </p>
    </div>
  );
}

export default DashboardHeader;