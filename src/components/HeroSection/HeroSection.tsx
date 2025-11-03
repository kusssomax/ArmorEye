import styles from './HeroSection.module.scss';
import textureImage from "@/assets/images/Texture.png";
import {Button} from "@/components/ui/button.tsx"
import {titleVariants, buttonVariants} from "@/components/HeroSection/utils.ts";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <motion.h1 variants={titleVariants} initial={"initial"} animate={"animate"} className={styles.title}>Hi we are Messiah-
                Squad team.<br/><span>And here is our
                product</span></motion.h1>
            <motion.div variants={buttonVariants} initial={"initial"} animate={"animate"} className={styles.buttonWrapper}>
                <Button className={styles.button}>Learn more</Button>
            </motion.div>
            <img className={styles.textureImage} src={textureImage} alt="texture-background"/>
        </section>
    );
};

export default HeroSection;