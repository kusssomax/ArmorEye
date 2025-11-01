import Header from "@/components/Header/Header.tsx";
import type {MainLayoutProps} from './MainLayout.types.ts';

const MainLayout = ( {children}: MainLayoutProps ) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>

        </>
    );
};

export default MainLayout;