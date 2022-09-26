import { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function PageLayout({ title, children }) {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <section>
            <NavBar />
            {children}
            <Footer />
        </section>
    )
}