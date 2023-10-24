import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import MainBar from "./component/MainBar";
import Dashboard from "./pages/Dashboard";
import Holdings from "./pages/Holdings";
import Performance from "./pages/Performance";
const Layout = () => {
  return (
    <main className="main grid h-screen p-3">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/holdings" element={<Holdings />} />
          <Route exact path="/performance" element={<Performance />} />
        </Routes>
      </Router>
    </main>
  );
};

export default Layout;
