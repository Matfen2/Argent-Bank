import { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import Account from "../components/Account";
import { useNavigate } from "react-router-dom";
import UpdataUserName from "../components/UpdataUserName";

const Profil = ({ accountType }) => {
  // Récupère le token de l'état global
  const userToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate("/"); // 🔹 Redirige automatiquement si l'utilisateur n'est pas connecté
    }
  }, [userToken, navigate]);

  return (
    <section className="page userPage">
      {/* Mise à jour du nom d'utilisateur */}
      <UpdataUserName />

      {/* Affichage des informations de compte */}
      {accountType.length > 0 ? (
        accountType.map((acc, index) => <Account key={index} infos={acc} />)
      ) : (
        <p>Aucun compte disponible.</p> // Message si aucune donnée de compte n'est passée
      )}
    </section>
  );
};

Profil.propTypes = {
  // Validation de la prop accountType, qui doit être un tableau d'objets
  accountType: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Profil;