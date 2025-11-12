import styles from "./AboutUsSection.module.scss";
import firstIcon from "@/assets/images/Vector1.svg";
import secondIcon from "@/assets/images/Vector2.svg";
import robotImage from "@/assets/images/gabriele-malaspina-CjWsslYVnPI-unsplash (1).png"
import { motion } from "motion/react";
import type {Variants} from "motion";
import { useTranslation } from "react-i18next";

const showVariants: Variants = {
    "initial": {
        opacity: 0,
    },
    "visible": {
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        }
    }
}

const AboutUsSection = () => {
    const { t } = useTranslation();
    
    return (
        <section id="aboutUs" className={styles.section}>
            <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.iconsWrapper}>
                <img src={firstIcon} alt="crosshair-icon"/>
                <img src={secondIcon} alt="star-icon"/>
                <img src={firstIcon} alt="crosshair-icon"/>
            </motion.div>
            <motion.h1 variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.title}>{t("aboutUs.title")}</motion.h1>
            <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.descriptionWrapper}>
                <img src={robotImage} alt="robot-image"/>
                <p>{t("aboutUs.description")}</p>
            </motion.div>
        </section>
    );
};

export default AboutUsSection;