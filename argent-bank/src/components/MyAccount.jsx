import PropTypes from "prop-types";

const MyAccount = ({ infos }) => {
  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="MybankAccount">
      <section className="userTransaction-details">
        <p className="userAccount-title">{infos.type}</p>
        <h1 className="userAccount-balance">${formatAmount(infos.amount)}</h1>
        <p className="userAccount-available"> {infos.valable} </p>
      </section>
    </div>
  );
};
MyAccount.propTypes = {
  infos: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    valable: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyAccount;