function AISummary() {
  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 p-[1px] shadow-xl">
      <div className="rounded-3xl bg-white p-8">
        <div className="flex items-start gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
            🤖
          </div>

          <div className="flex-1">

            <h2 className="text-2xl font-bold text-slate-900">
              AI Summary
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              Your report contains <strong>42 tests</strong>.
              Most values are within the normal range.
              Vitamin D is low, TSH is slightly elevated,
              and LDL cholesterol needs attention.
              No critical abnormalities were detected.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AISummary;