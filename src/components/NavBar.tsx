import { Link } from "react-router-dom";

const NavBar = ({ routes }) => {
    return (
        <nav>
            {
                routes.map((route, index) => {
                    return (
                        <div key={route + index}>
                            <Link to={`/region?type=${encodeURIComponent(route)}`}>{route}</Link>
                        </div>
                    )
                })
            }
        </nav>
    )
}

export default NavBar