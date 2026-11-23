import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../ui/AnimatedTitle';
import WorkList from './WorkList';
import classes from './WorkIndex.module.css';

/** Homepage project index: heading row, then the hover-preview list. */
export default function WorkIndex() {
    const { t } = useTranslation();
    return (
        <section className={classes.section} aria-labelledby="work-index">
            <div className="container">
                <div className={classes.head}>
                    <div>
                        <span className="eyebrow">{t('tech.index')}</span>
                        <h2 id="work-index" className={classes.title}>
                            <AnimatedTitle text={t('work.arcTitle')} accent={t('work.arcAccent')} onView />
                        </h2>
                    </div>
                    <div className={classes.side}>
                        <p data-reveal="up">{t('work.arcSub')}</p>
                        <Link to="/work" className="textLink">{t('work.allLink')} <ArrowRight size={16} /></Link>
                    </div>
                </div>
                <WorkList />
            </div>
        </section>
    );
}
