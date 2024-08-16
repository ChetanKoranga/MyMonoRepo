import React, { useRef, useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./layout.scss";
import MainContent from "./MainContent/MainContent";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  // State for toggling sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebarRef = useRef<HTMLButtonElement>(null);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        toggleSidebarRef={toggleSidebarRef}
      />
      <div className="main">
        <Header
          onToggleSidebar={toggleSidebar}
          toggleSidebarRef={toggleSidebarRef}
        />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
