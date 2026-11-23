import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>{t('meta.homeTitle')}</title>
                <meta name="description" content={t('meta.homeDesc')} />
                <meta property="og:title" content={t('meta.homeTitle')} />
                <meta property="og:description" content={t('meta.homeDesc')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://webcomagency.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

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
