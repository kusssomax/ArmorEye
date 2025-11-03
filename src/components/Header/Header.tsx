import styles from "./Header.module.scss";
import logo from "@/assets/images/logo-black.png";

const Header = () => {
    const handleScrollToAboutUs = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const aboutUsSection = document.getElementById('aboutUs');
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="#" className={styles.logo}>
                    <img src={logo} alt="armorEye-logo"/>
                </a>
                
                <nav className={styles.navBar}>
                    <a href="#aboutUs" onClick={handleScrollToAboutUs}>About us</a>
                    <a href="#project">Project</a>
                    <a href="#results">Results</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </div>
            <div className={styles.divider}></div>
        </header>
    );
};

export default Header;