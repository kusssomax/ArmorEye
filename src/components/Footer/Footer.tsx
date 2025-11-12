import styles from "./Footer.module.scss";
import logo from "@/assets/images/logo-black.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    
    const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerSection}>
                        <div className={styles.logoSection}>
                            <img src={logo} alt="armorEye-logo" className={styles.logo} />
                            <p className={styles.description}>
                                {t("footer.description")}
                            </p>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>{t("footer.quickLinks")}</h3>
                        <nav className={styles.footerNav}>
                            <a href="#aboutUs" onClick={handleScrollToSection('aboutUs')}>{t("header.aboutUs")}</a>
                            <a href="#project" onClick={handleScrollToSection('project')}>{t("header.project")}</a>
                            <a href="#results" onClick={handleScrollToSection('results')}>{t("header.results")}</a>
                            <a href="#contacts" onClick={handleScrollToSection('contacts')}>{t("header.contacts")}</a>
                        </nav>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>{t("footer.contact")}</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <Mail className={styles.contactIcon} />
                                <span>info@armoreye.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone className={styles.contactIcon} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin className={styles.contactIcon} />
                                <span>123 Innovation Street, Tech City</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>{t("footer.followUs")}</h3>
                        <div className={styles.socialLinks}>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={styles.socialLink}
                            >
                                <FaFacebook/>
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={styles.socialLink}
                            >
                                <FaInstagram/>
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={styles.socialLink}
                            >
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        {t("footer.copyright", { year: new Date().getFullYear() })}
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="#privacy">{t("footer.privacyPolicy")}</a>
                        <a href="#terms">{t("footer.termsOfService")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

