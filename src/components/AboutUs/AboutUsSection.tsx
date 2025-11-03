import styles from "./AboutUsSection.module.scss";
import textureImg from "@/assets/images/Texture2.png";
import firstIcon from "@/assets/images/Vector1.svg";
import secondIcon from "@/assets/images/Vector2.svg";
import robotImage from "@/assets/images/gabriele-malaspina-CjWsslYVnPI-unsplash (1).png"

const AboutUsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.iconsWrapper}>
                <img src={firstIcon} alt="crosshair-icon"/>
                <img src={secondIcon} alt="star-icon"/>
                <img src={firstIcon} alt="crosshair-icon"/>
            </div>
            <h1 className={styles.title}>About us</h1>
            <div className={styles.descriptionWrapper}>
                <img src={robotImage} alt="robot-image"/>
                <p>We are team that develops solutions in the field of computer vision for ground drones. We design
                    computer vision algorithms that enable drones to navigate in space, recognize objects, avoid
                    obstacles, and perform autonomous tasks. Our mission is to make drones smarter and safer by
                    integrating cutting-edge machine learning technologies.</p>
            </div>
            <img src={textureImg} className={styles.textureImage} alt="texture-image"/>
        </section>
    );
};

export default AboutUsSection;