import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import classes from './ClientMarquee.module.css';

export default function ClientMarquee() {
    const { t } = useTranslation();
    const names = projects.map(p => p.name);

    // rendered twice so the strip can loop seamlessly; the copy is hidden from screen readers
    const row = (hidden: boolean) => (
        <ul className={classes.row} aria-hidden={hidden || undefined}>
            {names.map(n => (
                <li key={n}>{n}<span className={classes.sep} aria-hidden="true">✦</span></li>
            ))}
        </ul>
    );

    return (
        <section className={classes.wrap} aria-label={t('marquee.label')}>
            <div className="container">
                <p className={classes.label}>{t('marquee.label')}</p>
            </div>
            <div className={classes.track}>
                <div className={classes.inner}>
                    {row(false)}
                    {row(true)}
                </div>
            </div>
        </section>
    );
}
