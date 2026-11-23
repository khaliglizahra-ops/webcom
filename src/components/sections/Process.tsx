import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Link from '../ui/LangLink';
import AnimatedTitle from '../ui/AnimatedTitle';
import classes from './Process.module.css';

export default function Process() {
    const { t } = useTranslation();
    const steps = [1, 2, 3, 4].map(n => ({ title: t(`process.s${n}`), desc: t(`process.d${n}`) }));

    return (
        <section className={`section ${classes.processSection}`}>
            <div className="container">
                <div className="sectionHead">
                    <div>
                        <span className="eyebrow">{t('nav.process')}</span>
                        <h2><AnimatedTitle text={t('process.headline')} onView /></h2>
                    </div>
                    <Link to="/process" className="textLink">
                        {t('process.more')} <ArrowRight size={16} />
                    </Link>
                </div>

                <ol className={classes.timeline}>
                    {steps.map((step, idx) => (
                        <li key={idx} className={classes.step} data-reveal="up" style={{ '--d': `${idx * 120}ms` } as React.CSSProperties}>
                            <span className={classes.num}>0{idx + 1}</span>
                            <h3 className={classes.title}>{step.title}</h3>
                            <p className={classes.desc}>{step.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
