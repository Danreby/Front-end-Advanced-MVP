import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, setLanguage, language }) => {

  const handleScroll = (event, sectionId) => {
    // For mobile menu we'll just close and use navigation links
    setMenuOpen(false);
  };

  const handleLangChange = (e) => {
            setLanguage(e.target.value)
            setMenuOpen(false)
        }

    const texts = {
        pt: {
            home: 'Início',
            about: 'Sobre',
            projects: 'Projetos',
            contact: 'Contato',
            // pt: 'Português',
            // en: 'Inglês'
        },
        en: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            // pt: 'Portuguese',
            // en: 'English'
        }
    }

    const { home, about, projects, contact } = texts[language] || texts.pt

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu" title="Close Menu"
        >
        &times;
      </button>

        <a href="/"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {home} </a>
        <a href="/about"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {about} </a>
        <a href="/shop"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {projects} </a>
        <a href="/contact"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {contact} </a>
        <select className={`bg-transparent text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}
          defaultValue="pt"
          onChange={handleLangChange}
        >
          <option className="bg-[rgba(10,10,10,0.8)] text-white" value="pt" > Português </option>
          <option className="bg-[rgba(10,10,10,0.8)] text-white" value="en" > English </option>
        </select>
    </div>
  );
};
