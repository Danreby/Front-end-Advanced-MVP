import { useEffect } from "react"
import { NavLink } from 'react-router-dom'


export const NavBar = ({menuOpen, setMenuOpen, setLanguage, language}) => {

        useEffect(() => {
            document.body.style.overflow = menuOpen ? "hidden" : "auto";
        }, [menuOpen]);

        const handleLangChange = (e) => {
            setLanguage(e.target.value)
            setMenuOpen(false)
        }

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
    }

  const { home, about, shop, contact } = texts[language] || texts.pt

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#F5EBD8] border-b border-[#E8D8B9] shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <NavLink to="/" onClick={() => setMenuOpen(false)} className="font-mono text-xl font-bold text-black"> Flori<span className="text-yellow-700">Cult</span> </NavLink>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className={({isActive}) => `text-black hover:text-yellow-700 transition-colors ${isActive? 'font-bold underline': ''}`}> {home} </NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({isActive}) => `text-black hover:text-yellow-700 transition-colors ${isActive? 'font-bold underline': ''}`}> {about} </NavLink>
                    <NavLink to="/shop" onClick={() => setMenuOpen(false)} className={({isActive}) => `text-black hover:text-yellow-700 transition-colors ${isActive? 'font-bold underline': ''}`}> {shop} </NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({isActive}) => `text-black hover:text-yellow-700 transition-colors ${isActive? 'font-bold underline': ''}`}> {contact} </NavLink>
                    <select
                        className="text-black hover:underline transition-colors]"
                        defaultValue="pt"
                        onChange={handleLangChange}
                    >
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
    )
}