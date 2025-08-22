import "./App.css";
import store from "./utils/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn.jsx";
import Profil from "./pages/Profil.jsx";
import Accueil from "./pages/Accueil.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Transaction from "./pages/Transaction.jsx";

function App() {
  const accountType = [
    {
      id: 1,
      type: "Argent Bank Checking(x8349)",
      amount: 2082.79,
      valable: "Available Balance",
    },
    {
      id: 2,
      type: "Argent Bank Saving(x67124)",
      amount: 10928.42,
      valable: "Available Balance",
    },
    {
      id: 3,
      type: "Argent Bank Credit Card (x5201)",
      amount: 184.3,
      valable: "Current Balance",
    },
  ];
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/profile/:id"
              element={<Profil accountType={accountType} />}
            />
            <Route
              path="/profile/:id/transaction/:id"
              element={<Transaction accountType={accountType} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;