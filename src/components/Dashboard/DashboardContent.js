import React from "react";
import { Route, Routes } from "react-router-dom";
import Region from "./Region";
import Area from "./Area";

export default function DashboardContent() {
  return (
    <div className="dashboard-content">
      <Routes>
        <Route path="region" element={<Region />} />
        <Route path="area" element={<Area />} />
      </Routes>
    </div>
  );
}
