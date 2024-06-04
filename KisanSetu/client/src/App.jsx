import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Header from "./components/Layouts/Header";
import VegProducts from "./components/SubNavBar/VegProducts";
import TodaysFresh from "./components/SubNavBar/TodaysFresh";
import Fruits from "./components/SubNavBar/Fruits";
import DryFruits from "./components/SubNavBar/DryFruits";
import ProCatagory from "./pages/ProCatagory";

function App() {
  const [currentPage, setCurrentPage] = useState("All");

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <Header currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
      {currentPage === "All" && <HomePage />}
      {currentPage === "Veg" && <VegProducts />}
      {currentPage === "TodaysFresh" && <TodaysFresh />}
      {currentPage === "Fruits" && <Fruits />}
      {currentPage === "Dryfruits" && <DryFruits />}
      {currentPage === "Login" && (
        <LoginPage handleCurrentPage={handleCurrentPage} />
      )}
      {currentPage === "Register" && (
        <RegistrationPage handleCurrentPage={handleCurrentPage} />
      )}
      
    </>
  );
}

export default App;
