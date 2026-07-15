import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportDetails from "./pages/ReportDetails";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report" element={<ReportDetails />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;