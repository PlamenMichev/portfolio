import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/PageLayout";
import './home.css'

export default function Home() {
    return (
        <PageLayout title="Plamen Michev" className="page-wrapper">
            <HeroBanner />
            <About />
            <Experience />
            <Contact />
        </PageLayout>
    )
}