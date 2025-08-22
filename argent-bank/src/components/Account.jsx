import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = ({ infos }) => {
  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const userState = useSelector((state) => state.user || {});
  const { profile } = userState;
  return (
    <Link
      to={`/profile/${profile.id}/transaction/${infos.id}`}
      className="accountsLinks"
    >
      <div className="userAccount">
        <section className="userAccount-details">
          <p className="userAccount-title">{infos.type}</p>
          <h1 className="userAccount-balance">${formatAmount(infos.amount)}</h1>
          <p className="userAccount-available"> {infos.valable} </p>
        </section>
        <section className="userAccount-actions">
          <button className="userAccount-button">View transactions</button>
        </section>
      </div>
    </Link>
  );
};

Account.propTypes = {
  infos: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    valable: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;