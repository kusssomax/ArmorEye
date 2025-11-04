import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./ProjectSection.module.scss";
import textureImage from "@/assets/images/Texture.png";
import droneModel from "@/assets/models/droneModel.glb";


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
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Project</h1>
        
        <div className={styles.contentWrapper}>
            <p className={styles.description}>We are working on advanced solutions in the field of computer vision for ground drones. What do we develop? Autonomous navigation– algorithms that enable drones to navigate independently in space. Object recognition – systems that analyze the environment and identify key objects. Obstacle avoidance – technologies for safe movement in complex conditions.</p>
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
        </div>
            <img className={styles.textureImage} src={textureImage} alt="texture-background"/>
        </section>
    );
};

// Попереднє завантаження моделі (опціонально, для оптимізації)
useGLTF.preload(droneModel);

export default ProjectSection;