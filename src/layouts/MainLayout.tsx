import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import type {MainLayoutProps} from './MainLayout.types.ts';

const MainLayout = ( {children}: MainLayoutProps ) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default MainLayout;