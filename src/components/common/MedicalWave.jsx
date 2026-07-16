function MedicalWave() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-16 left-0 w-full h-full opacity-20"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,420
            C180,360 260,500 420,440
            C580,380 700,300 860,360
            C1020,420 1180,560 1440,430
          "
          stroke="#38BDF8"
          strokeWidth="4"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
            M0,420 C180,360 260,500 420,440 C580,380 700,300 860,360 C1020,420 1180,560 1440,430;
            M0,390 C180,450 280,330 430,420 C600,520 760,250 930,360 C1100,470 1260,320 1440,430;
            M0,420 C180,360 260,500 420,440 C580,380 700,300 860,360 C1020,420 1180,560 1440,430
            "
          />
        </path>

        <path
          d="
            M0,520
            C240,470 380,610 620,500
            C860,390 1080,560 1440,480
          "
          stroke="#60A5FA"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
            M0,520 C240,470 380,610 620,500 C860,390 1080,560 1440,480;
            M0,470 C220,560 420,430 660,520 C920,610 1160,430 1440,500;
            M0,520 C240,470 380,610 620,500 C860,390 1080,560 1440,480
            "
          />
        </path>
      </svg>
    </div>
  );
}

export default MedicalWave;