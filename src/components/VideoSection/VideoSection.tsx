import textureImage from "@/assets/images/Texture2.png";
import styles from "./VideoSection.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import video1 from "@/assets/videos/video1_new.mp4";
import video2 from "@/assets/videos/video2_new.mp4";
import trialVideo from "@/assets/videos/trial_video_new.mp4";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import type { Variants } from "motion";

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

const VideoSection = () => {
    const videos = [video1, video2, trialVideo];

    return (
        <section id="results" className={styles.section}>
            <motion.h1 variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.title}>Video</motion.h1>
            <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.carouselWrapper}>
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className={styles.carousel}
                >
                    <CarouselContent>
                        {videos.map((video, index) => (
                            <CarouselItem key={index} className={styles.carouselItem}>
                                <div className={styles.videoContainer}>
                                    <video
                                        className={styles.video}
                                        muted
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={styles.carouselPrev} />
                    <CarouselNext className={styles.carouselNext} />
                </Carousel>
            </motion.div>
            <img src={textureImage} alt="video-image" className={styles.textureImage} />
        </section>
    );
};

export default VideoSection;