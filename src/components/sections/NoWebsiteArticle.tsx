import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import classes from './NoWebsiteArticle.module.css';

export default function NoWebsiteArticle() {
    const { t } = useTranslation();

    return (
        <section className={`section ${classes.articleSection}`}>
            <div className="container">
                <div className={classes.flexContainer} data-reveal="up">
                    <span className={classes.category}>{t('nav.blog')} / {t('blogPage.posts.p9Cat')}</span>
                    <div className={classes.textContent}>
                        <h2 className={classes.headline}>{t('blogPage.posts.p9Title')}</h2>
                        <p className={classes.desc}>
                            {t('blogPage.posts.p9Desc')}
                        </p>
                        <Link to="/blog/why-you-should-not-have-website" className={classes.btn}>
                            {t('blogPage.readMore')} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
