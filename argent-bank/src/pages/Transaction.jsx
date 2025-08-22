import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Articles from "../components/Articles";
import MyAccount from "../components/MyAccount";
import { useNavigate, useParams } from "react-router-dom";

const Transaction = ({ accountType }) => {
    console.log(accountType);
  const { id } = useParams();
  const [infos, setInfos] = useState({});
  const userToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    const account = accountType.find((el) => el.id === parseInt(id));
    setInfos(account);
    if (!userToken) {
      navigate("/"); // 🔹 Redirige automatiquement si l'utilisateur n'est pas connecté
    }
  }, [id, userToken, navigate,accountType]);

  if (!infos || Object.keys(infos).length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="page transactionPage">
      <MyAccount infos={infos} />
      <section className="transactionsTable">
        <div className="tr">
          <p className="table__title">Date</p>
          <p className="table__title">Description</p>
          <p className="table__title">Amount</p>
          <p className="table__title">Balance</p>
        </div>
        {[...Array(5)].map((_, index) => (
          <Articles key={index} />
        ))}
      </section>
    </main>
  );
};
Transaction.propTypes = {
  accountType: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Transaction;