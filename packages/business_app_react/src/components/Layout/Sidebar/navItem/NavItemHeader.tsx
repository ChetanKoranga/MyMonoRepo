import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "./NavItem.scss";

interface NavItemProps {
  item: {
    label: string;
    Icon: React.ComponentType<any>;
    to: string;
    children?: any[];
  };
}

const resolveLinkPath = (childTo: string, parentTo: string) =>
  `${parentTo}/${childTo}`;

const NavItemHeader: React.FC<NavItemProps> = ({ item }) => {
  const { label, Icon, to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpanded] = useState<boolean>(
    location.pathname.includes(headerToPath)
  );

  const onExpandChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <div className="nav-menus">
        <div className="nav-item" onClick={onExpandChange} tabIndex={0}>
          <Icon className="nav-icon" />
          <span className="nav-label">{label}</span>
          <ChevronDownIcon
            className={`nav-item-header-chevron ${
              expanded ? "chevron-expanded" : ""
            }`}
          />
        </div>
      </div>

      {expanded && (
        <>
          {children?.map((childItem, index) => {
            const key = `${childItem.label}-${index}`;

            const { label, Icon, children } = childItem;

            if (children) {
              return (
                <NavItemHeader
                  key={key}
                  item={{
                    ...childItem,
                    to: resolveLinkPath(childItem.to, childItem.to),
                  }}
                />
              );
            }

            return (
              <div key={key} className="nav-menus">
                <NavLink
                  to={resolveLinkPath(childItem.to, childItem.to)}
                  className="nav-item"
                  // activeClassName="active-nav-item"
                >
                  <Icon className="nav-icon" />
                  <span className="nav-label">{label}</span>
                </NavLink>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default NavItemHeader;
