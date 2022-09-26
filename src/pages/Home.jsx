import About from "../components/About";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/PageLayout";

export default function Home() {
    return (
        <PageLayout title="Plamen Michev">
            <HeroBanner />
            <About />
        </PageLayout>
    )
}