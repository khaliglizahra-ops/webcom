import { useTranslation } from 'react-i18next';
import classes from './TrustBuilders.module.css';

export default function TrustBuilders() {
    const { t } = useTranslation();
    const testimonials = [
        {
            quote: t('trust.q1'),
            author: "Sarah J.",
            role: "CEO, TechFlow"
        },
        {
            quote: t('trust.q2'),
            author: "Marcus T.",
            role: "Founder, ScaleUp Inc"
        }
    ];

    return (
        <section className={`section ${classes.trustSection}`}>
            <div className="container">
                <h2 className={classes.headline}>{t('trust.headline')}</h2>

                <div className={classes.testimonialGrid}>
                    {testimonials.map((t, idx) => (
                        <div key={idx} className={classes.testimonialCard}>
                            <p className={classes.quote}>"{t.quote}"</p>
                            <div className={classes.authorBlock}>
                                <div className={classes.avatar}></div>
                                <div>
                                    <div className={classes.authorName}>{t.author}</div>
                                    <div className={classes.authorRole}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
