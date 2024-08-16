import React from "react";
import "./header.scss";

interface HeaderProps {
  onToggleSidebar: () => void;
  toggleSidebarRef: React.RefObject<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  toggleSidebarRef,
}) => {
  return (
    <header className="header">
      <div className="profile-section">
        {/* Profile section content goes here */}
      </div>
      <button
        className="toggle-sidebar-btn"
        onClick={onToggleSidebar}
        ref={toggleSidebarRef}
      >
        Toggle Sidebar
      </button>
    </header>
  );
};

export default Header;
