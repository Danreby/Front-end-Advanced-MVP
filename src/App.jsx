import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingSreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import RotatingFlowersBackground from "./components/common/RotatingFlowersBackground";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#F5EBD8] text-gray-800 relative`}
      >
        <RotatingFlowersBackground />
        <div className="relative z-10">
          <NavBar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setLanguage={setLanguage}
            language={language}
          />
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setLanguage={setLanguage}
            language={language}
          />

          <main>
            <Routes>
              <Route path="/" element={<HomePage language={language} />} />
              <Route path="/shop" element={<ShopPage language={language} />} />
              <Route path="/about" element={<AboutPage language={language} />} />
              <Route path="/contact" element={<ContactPage language={language} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
