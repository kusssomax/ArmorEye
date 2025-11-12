import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./ProjectSection.module.scss";
import droneModel from "@/assets/models/droneModel.glb";
import { motion } from "motion/react";
import type { Variants } from "motion";
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

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

function Controls() {
    return (
        <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
        />
    );
}

const ProjectSection = () => {
    const { t } = useTranslation();
    
    return (
        <section id="project" className={styles.section}>
            <motion.h1 variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.title}>{t("project.title")}</motion.h1>
        
        <motion.div variants={showVariants} initial={"initial"} whileInView={"visible"} className={styles.contentWrapper}>
            <p className={styles.description}>{t("project.description")}</p>
            <div className={styles.modelContainer}>
                <Canvas camera={{ position: [5, 5, 5], fov: 15 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Suspense fallback={null}>
                        <Model url={droneModel} />
                    </Suspense>
                    <Controls />
                </Canvas>
            </div>
        </motion.div>
        </section>
    );
};

// Попереднє завантаження моделі (опціонально, для оптимізації)
useGLTF.preload(droneModel);

export default ProjectSection;