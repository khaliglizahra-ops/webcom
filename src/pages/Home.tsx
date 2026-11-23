import Seo from '../components/Seo';
import { homeJsonLd } from '../data/schema';
import { useTranslation } from 'react-i18next';
import Hero from '../components/layout/Hero';
import Ticker from '../components/sections/Ticker';
import Manifesto from '../components/sections/Manifesto';
import SelectedWork from '../components/sections/SelectedWork';
import ServiceCards from '../components/sections/ServiceCards';
import Process from '../components/sections/Process';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
    const { t } = useTranslation();

    return (
        <main>
            <Seo title={t('meta.homeTitle')} description={t('meta.homeDesc')} jsonLd={homeJsonLd(t)} />

            <Hero />
            <Ticker />
            <Manifesto />
            <SelectedWork />
            <ServiceCards />
            <Process />
            <FinalCTA />
        </main>
    );
}
