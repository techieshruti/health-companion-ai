import { createContext, useContext, useState, useEffect } from "react";

const ReportContext = createContext();

export function ReportProvider({ children }) {
  const [report, setReport] = useState(() => {
  const saved = localStorage.getItem("healthReport");
  return saved ? JSON.parse(saved) : null;
});

useEffect(() => {
  if (report) {
    localStorage.setItem("healthReport", JSON.stringify(report));
  } else {
    localStorage.removeItem("healthReport");
  }
}, [report]);

  return (
    <ReportContext.Provider
      value={{
        report,
        setReport,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  return useContext(ReportContext);
}