import React from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
