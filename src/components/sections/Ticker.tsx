import { useTranslation } from 'react-i18next';
import classes from './Ticker.module.css';

/** Signal-colour band of services in monospace, scrolling sideways. */
export default function Ticker() {
    const { t } = useTranslation();
    const items = [1, 2, 3, 4, 5, 6].map(n => t(`servicesMenu.s${n}`));
    const row = (hidden: boolean) => (
        <ul className={classes.row} aria-hidden={hidden || undefined}>
            {items.map((it, i) => (
                <li key={i}>{it}<span className={classes.sep} aria-hidden="true">✦</span></li>
            ))}
        </ul>
    );
    return (
        <section className={classes.band} aria-label={t('nav.services')}>
            <div className={classes.track}>
                {row(false)}
                {row(true)}
            </div>
        </section>
    );
}
