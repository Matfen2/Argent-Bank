import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Accueil from './pages/Accueil'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

      
