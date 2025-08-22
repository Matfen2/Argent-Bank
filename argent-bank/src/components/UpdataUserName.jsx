import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../utils/slices/profileSlice";

const UpdataUserName = () => {
  const dispatch = useDispatch();
  
  // Récupérer les informations de l'utilisateur depuis Redux
  const { profile } = useSelector((state) => state.user);
  
  // Gérer l'état des champs d'entrée
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");

  // Fonction pour enregistrer les changements
  const handleSave = () => {
    dispatch(updateUserProfile({ firstName, lastName }));
  };

  return (
    <div className="update-username">
      <h1 className="welcomeTitle">Welcome back</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="First Name"
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="updateButton" onClick={handleSave}>Save</button>
        <button className="updateButton" onClick={() => {
          setFirstName(profile.firstName);
          setLastName(profile.lastName);
        }}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdataUserName;