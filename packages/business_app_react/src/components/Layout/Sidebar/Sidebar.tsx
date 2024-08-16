import { useEffect, useRef } from "react";
import "./sidebar.scss";
import { sideMenuConfig } from "../../../data/SidebarMenu/menu.config";
import NavItem from "./navItem/NavItem.tsx";
import { AppLogo } from "../../Icons/AppLogo.tsx";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  toggleSidebarRef: React.RefObject<HTMLButtonElement>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  toggleSidebarRef,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !toggleSidebarRef?.current?.contains(event.target as Node) &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose, toggleSidebarRef]);

  return (
    <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="app-logo">
        <AppLogo />
      </div>
      <div className="nav-div">
        <nav>
          {sideMenuConfig.map((item) => (
            <NavItem key={`${item.label}-${item.to}`} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
