import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedTitle from '../ui/AnimatedTitle';
import DotGlobe from '../ui/DotGlobe';
import classes from './FinalCTA.module.css';

/** Closing call to action: big headline on the left, a turning dot globe on the right. */
export default function FinalCTA({ spaced = false }: { spaced?: boolean }) {
    const { t } = useTranslation();
    return (
        <section className={`${classes.ctaSection} ${spaced ? classes.spaced : ''}`}>
            <div className={`container ${classes.grid}`}>
                <div className={classes.text}>
                    <span className="eyebrow">{t('tech.next')}</span>
                    <h2 className={classes.headline}>
                        <AnimatedTitle text={t('cta.headline')} accent={t('cta.accent')} onView />
                    </h2>
                    <p className={classes.desc} data-reveal="up">{t('cta.desc')}</p>
                    <div className={classes.btnGroup} data-reveal="up" style={{ '--d': '150ms' } as React.CSSProperties}>
                        <Button to="/strategy-call" variant="accent" size="lg">
                            {t('cta.primaryBtn')} <ArrowRight size={18} />
                        </Button>
                        <Button to="/contact" variant="glass" size="lg">
                            {t('cta.secondaryBtn')}
                        </Button>
                    </div>
                </div>
                <div className={`hud ${classes.globeBox}`} data-reveal="fade">
                    <DotGlobe className={classes.globe} />
                </div>
            </div>
        </section>
    );
}
