import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  routes: string[];
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div>
          <Link className="navlink" to={"/"}>
            Home
          </Link>
        </div>
        <div>
          {routes.map((route, index) => {
            return (
              <Link
                className="navlink"
                key={route + index}
                to={`/region?type=${encodeURIComponent(route)}`}
              >
                {route}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
