import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__link-list">
        <CustomLink to="/" className="navbar__link">
          About
        </CustomLink>
        <CustomLink to="/resume" className="navbar__link">
          Resume
        </CustomLink>
        <CustomLink to="/portfolio" className="navbar__link">
          Portfolio
        </CustomLink>
        <CustomLink to="/contact" className="navbar__link">
          Contact
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
