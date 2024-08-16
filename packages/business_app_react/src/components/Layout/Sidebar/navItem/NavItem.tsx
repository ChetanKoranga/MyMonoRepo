import { NavLink } from "react-router-dom";
import NavItemHeader from "./NavItemHeader";
import "./NavItem.scss";

interface NavItemProps {
  item: {
    label: string;
    Icon: React.ComponentType<any>;
    to: string;
    children?: any;
  };
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <div className="nav-menus">
      <NavLink
        end
        to={to}
        className="nav-item"
        // activeClassName="active-nav-item"
      >
        <Icon className="nav-icon" />
        <span className="nav-label">{label}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
