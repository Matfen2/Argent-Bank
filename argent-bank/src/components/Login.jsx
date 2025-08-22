import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import de useDispatch et useSelector
import { loginStart, loginSuccess, loginFailure } from "../utils/slices/authSlice"; // Actions Redux

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Sélectionner l'état du store Redux (chargement et erreur)
  const { loading, error } = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user || {});
  const { profile } = userState;
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérification basique des champs
    if (!username || !password) {
      dispatch(loginFailure("Tous les champs sont obligatoires."));
      return;
    }

    // Démarrer le processus de connexion (chargement)
    dispatch(loginStart());

    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
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

      // Réinitialiser les champs
      setUsername("");
      setPassword("");

      // Rediriger vers la page de profil
      if (response) {
        navigate(`/profile/${profile.id}`);
      }
    } catch (err) {
      // En cas d'erreur, afficher l'erreur dans Redux
      if (err.response) {
        // Erreur venant du serveur (ex: utilisateur introuvable)
        dispatch(
          loginFailure("Utilisateur introuvable ou mot de passe incorrect.")
        );
      } else {
        // Erreur liée au réseau ou à la requête
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
      {/* Affiche les erreurs issues de Redux */}

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
          {/* Affiche "Chargement" si l'utilisateur est en train de se connecter */}
        </button>
      </form>
    </section>
  );
};

export default Login;