import MainLayout from "@/layouts/MainLayout.tsx";
import HeroSection from "@/components/HeroSection/HeroSection.tsx";
import AboutUsSection from "@/components/AboutUs/AboutUsSection.tsx";


function App() {

  return (
    <>
        <MainLayout>
            <HeroSection/>
            <AboutUsSection/>
        </MainLayout>
    </>
  )
}

export default App
