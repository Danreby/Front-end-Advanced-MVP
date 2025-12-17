import { NavLink } from 'react-router-dom';

export const MobileMenu = ({ menuOpen, setMenuOpen, setLanguage, language }) => {
  const handleLangChange = (e) => {
    setLanguage(e.target.value);
    setMenuOpen(false);
  };

  const texts = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      shop: 'Loja',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      shop: 'Shop',
      contact: 'Contact',
    }
  };

  const { home, about, shop, contact } = texts[language] || texts.pt;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F5EBD8] border-b border-[#E8D8B9] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu" title="Close Menu"
        >
        &times;
      </button>

        <NavLink to="/" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {home} </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {about} </NavLink>
        <NavLink to="/shop" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {shop} </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {contact} </NavLink>
        <select
          className={`bg-transparent text-2xl font-semibold text-black my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          value={language}
          onChange={handleLangChange}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
    </div>
  );
};
