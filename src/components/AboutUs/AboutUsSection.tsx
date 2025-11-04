import styles from "./AboutUsSection.module.scss";
import textureImg from "@/assets/images/Texture2.png";
import firstIcon from "@/assets/images/Vector1.svg";
import secondIcon from "@/assets/images/Vector2.svg";
import robotImage from "@/assets/images/gabriele-malaspina-CjWsslYVnPI-unsplash (1).png"
import { motion } from "motion/react";
import type {Variants} from "motion";

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
    return (
        <section id="aboutUs" className={styles.section}>
            <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.iconsWrapper}>
                <img src={firstIcon} alt="crosshair-icon"/>
                <img src={secondIcon} alt="star-icon"/>
                <img src={firstIcon} alt="crosshair-icon"/>
            </motion.div>
            <motion.h1 variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.title}>About us</motion.h1>
            <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.descriptionWrapper}>
                <img src={robotImage} alt="robot-image"/>
                <p>We are team that develops solutions in the field of computer vision for ground drones. We design
                    computer vision algorithms that enable drones to navigate in space, recognize objects, avoid
                    obstacles, and perform autonomous tasks. Our mission is to make drones smarter and safer by
                    integrating cutting-edge machine learning technologies.</p>
            </motion.div>
            <img src={textureImg} className={styles.textureImage} alt="texture-image"/>
        </section>
    );
};

export default AboutUsSection;