import styles from './HeroSection.module.scss';
import {Button} from "@/components/ui/button.tsx"
import {titleVariants, buttonVariants} from "@/components/HeroSection/utils.ts";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t, i18n } = useTranslation();
    
    const handleScrollToAboutUs = () => {
        const aboutUsSection = document.getElementById('aboutUs');
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.heroSection}>
            <motion.h1 variants={titleVariants} initial={"initial"} animate={"animate"} className={styles.title}>
                {t("hero.title")}<br/><span>{t("hero.titleSpan")}</span>
            </motion.h1>
            <motion.div variants={buttonVariants} initial={"initial"} animate={"animate"} className={styles.buttonWrapper}>
                <Button className={`${styles.button} ${i18n.language === "ua" ? "py-3 px-12": ""}`} onClick={handleScrollToAboutUs}>{t("hero.learnMore")}</Button>
            </motion.div>
        </section>
    );
};

export default HeroSection;