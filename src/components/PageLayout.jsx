import { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function PageLayout({ title, children, ...props }) {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <section {...props}>
            <NavBar />
            {children}
            <Footer />
        </section>
    )
}