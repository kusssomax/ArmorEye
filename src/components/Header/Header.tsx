import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "@/assets/images/logo-black.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

    
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="#" className={styles.logo}>
                    <img src={logo} alt="armorEye-logo"/>
                </a>
                
                <button 
                    className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <nav className={`${styles.navBar} ${isMenuOpen ? styles.navBarOpen : ''}`}>
                    <a href="#aboutUs" onClick={handleScrollToSection('aboutUs')}>About us</a>
                    <a href="#project" onClick={handleScrollToSection('project')}>Project</a>
                    <a href="#results" onClick={handleScrollToSection('results')}>Results</a>
                    <a href="#contacts" onClick={handleScrollToSection('contacts')}>Contacts</a>
                </nav>
            </div>
            <div className={styles.divider}></div>
        </header>
    );
};

export default Header;