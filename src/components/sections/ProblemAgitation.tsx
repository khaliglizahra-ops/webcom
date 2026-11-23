import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from '../ui/LangLink';
import { photo } from '../../data/photos';
import classes from './ProblemAgitation.module.css';

export default function ProblemAgitation() {
    const { t } = useTranslation();

    const problems = [1, 2, 3].map(n => ({
        title: t(`problem.title${n}`),
        description: t(`problem.desc${n}`),
    }));

    return (
        <section className={`section ${classes.problemSection}`}>
            <div className={`container ${classes.layout}`}>
                <div className={`photo ${classes.image}`} data-reveal="photo">
                    <img src={photo('shopDoor', 1100)} alt="" loading="lazy" />
                </div>

                <div>
                    <h2 className={classes.headline} data-reveal="up">
                        {t('problem.headline1')}
                        <span className={`serif ${classes.highlight}`}>{t('problem.headlineHighlight')}</span>
                    </h2>

                    <ol className={classes.list}>
                        {problems.map((prob, idx) => (
                            <li key={idx} className={classes.item} data-reveal="up" style={{ '--d': `${idx * 120}ms` } as React.CSSProperties}>
                                <span className={classes.num}>0{idx + 1}</span>
                                <div>
                                    <h3 className={classes.cardTitle}>{prob.title}</h3>
                                    <p className={classes.cardDesc}>{prob.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <Link to="/strategy-call" className="textLink">
                        {t('problem.inlineCta')} <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
