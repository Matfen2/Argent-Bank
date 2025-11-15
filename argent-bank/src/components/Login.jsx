import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../utils/slices/authSlice";
import { API_ENDPOINTS } from "../config/api.js"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user || {});
  const { profile } = userState;

  console.log('API_BASE_URL:', import.meta.env.VITE_API_URL);
  console.log('LOGIN ENDPOINT:', API_ENDPOINTS.LOGIN);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      dispatch(loginFailure("Tous les champs sont obligatoires."));
      return;
    }

    dispatch(loginStart());

    try {
      const response = await axios.post(
        API_ENDPOINTS.LOGIN, // ← MODIFICATION ICI
        {
          email: username,
          password: password,
        }
      );

      dispatch(
        loginSuccess({
          token: response.data.body.token,
          user: response.data.user,
        })
      );

      setUsername("");
      setPassword("");

      if (response) {
        navigate(`/profile/${profile.id}`);
      }
    } catch (err) {
      if (err.response) {
        dispatch(
          loginFailure("Utilisateur introuvable ou mot de passe incorrect.")
        );
      } else {
        dispatch(
          loginFailure(
            "Erreur de connexion au serveur. Vérifiez votre connexion."
          )
        );
      }
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button" disabled={loading}>
          {loading ? "Chargement..." : "Sign In"}
        </button>
      </form>
    </section>
  );
};

export default Login;