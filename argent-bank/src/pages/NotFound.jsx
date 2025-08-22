import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page">
      <div className="NotFoundContainer">
        <p className="notF">404</p>
        <Link to="/" className="main-nav-item">{"revenir à l'accueil"}</Link>
      </div>
    </div>
  );
};

export default NotFound;