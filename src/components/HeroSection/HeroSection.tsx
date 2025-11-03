import styles from './HeroSection.module.scss';
import textureImage from "@/assets/images/Texture.png";
import {Button} from "@/components/ui/button.tsx"

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}>Hi we are Messiah-
                Squad team.<br/><span>And here is our
                product</span></h1>
            <div className={styles.buttonWrapper}>
                <Button className={styles.button}>Learn more</Button>
            </div>
            <img className={styles.textureImage} src={textureImage} alt="texture-background"/>
        </section>
    );
};

export default HeroSection;