import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  routes: string[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
  return (
    <nav>
      {routes.map((route, index) => {
        return (
          <div key={route + index}>
            <Link to={`/region?type=${encodeURIComponent(route)}`}>
              {route}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
