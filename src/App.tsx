import MainLayout from "@/layouts/MainLayout.tsx";
import HeroSection from "@/components/HeroSection/HeroSection.tsx";
import AboutUsSection from "@/components/AboutUs/AboutUsSection.tsx";
import ProjectSection from "@/components/ProjectSection/ProjectSection.tsx";
import VideoSection from "@/components/VideoSection/VideoSection.tsx";
import ContactUs from "@/components/ContactUs/ContactUs.tsx";


function App() {

  return (
    <>
        <MainLayout>
            <HeroSection/>
            <AboutUsSection/>
            <ProjectSection/>
            <VideoSection/>
            <ContactUs/>
        </MainLayout>
    </>
  )
}

export default App
