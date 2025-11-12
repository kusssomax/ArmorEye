import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "@/assets/images/logo-black.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation();
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
                
                <div className={styles.headerControls}>
                    <LanguageSwitcher />
                    <button 
                        className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label={t("header.toggleMenu")}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                <nav className={`${styles.navBar} ${isMenuOpen ? styles.navBarOpen : ''}`}>
                    <a href="#aboutUs" onClick={handleScrollToSection('aboutUs')}>{t("header.aboutUs")}</a>
                    <a href="#project" onClick={handleScrollToSection('project')}>{t("header.project")}</a>
                    <a href="#results" onClick={handleScrollToSection('results')}>{t("header.results")}</a>
                    <a href="#contacts" onClick={handleScrollToSection('contacts')}>{t("header.contacts")}</a>
                </nav>
            </div>
            <div className={styles.divider}></div>
        </header>
    );
};

export default Header;