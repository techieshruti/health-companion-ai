import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import ReportDetails from "./pages/ReportDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/report-details" element={<ReportDetails />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;