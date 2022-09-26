import About from "../components/About";
import Experience from "../components/Experience";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/PageLayout";

export default function Home() {
    return (
        <PageLayout title="Plamen Michev">
            <HeroBanner />
            <About />
            <Experience />
        </PageLayout>
    )
}