import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className="w-screen h-screen overflow-y-scroll font-[poppins]">
            <Header />
            <main className="bg-blue-900 w-full mt-[60px] min-h-[calc(100%-60px)] flex items-center justify-center">
                <Outlet />
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}

export default Layout;
