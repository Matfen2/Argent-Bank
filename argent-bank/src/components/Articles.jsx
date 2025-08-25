import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
const Articles = () => {
  const [open, setOpen] = useState(false);
  return (
    <article className="transaction">
      <header className="transactionHeader">
        <div
          className="transactionIcon"
          style={{
            transform: !open ? "rotate(0deg)" : "rotate(180deg)",
            transition: " .3s ease-in-out",
          }}
          onClick={() => setOpen(!open)}
        >
          <IoChevronDownOutline />
        </div>
        <div className="transactionDetails">
          <p className="transactionDate">June 20th, 2020</p>
          <p className="transactionDescription">Golden Sun Bakery</p>
          <p className="transactionAmount">$ 5.00</p>
          <p className="transactionBalance">2082.79</p>
        </div>
      </header>
      <div
        className={
          open ? "transactionInputs open" : "transactionInputs closed"
        }
      >
        <p className="text-input">
          Transaction Type:
          <input type="text" className="transactionTypeInput" />
        </p>
        <p className="text-input">
          Category: <input type="text" className="transactionCategoryInput" />
        </p>
        <p className="text-input">
          Notes: <input type="text" className="transactionNotesInput" />
        </p>
      </div>
    </article>
  );
};

export default Articles;