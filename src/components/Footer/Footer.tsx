import styles from "./Footer.module.scss";
import logo from "@/assets/images/logo-black.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
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
                                Innovative solutions for modern challenges. 
                                We deliver excellence in every project.
                            </p>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Quick Links</h3>
                        <nav className={styles.footerNav}>
                            <a href="#aboutUs" onClick={handleScrollToSection('aboutUs')}>About us</a>
                            <a href="#project" onClick={handleScrollToSection('project')}>Project</a>
                            <a href="#results" onClick={handleScrollToSection('results')}>Results</a>
                            <a href="#contacts" onClick={handleScrollToSection('contacts')}>Contacts</a>
                        </nav>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Contact</h3>
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
                        <h3 className={styles.sectionTitle}>Follow Us</h3>
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
                        © {new Date().getFullYear()} ArmorEye. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

