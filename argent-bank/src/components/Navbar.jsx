import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";

const Navbar = () => {
  return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>Sign In
        </NavLink>
      </nav>
  )
}

export default Navbar
