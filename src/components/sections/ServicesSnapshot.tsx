import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from '../ui/LangLink';
import AnimatedTitle from '../ui/AnimatedTitle';
import { photo, servicePhotos } from '../../data/photos';
import classes from './ServicesSnapshot.module.css';

export default function ServicesSnapshot() {
    const { t } = useTranslation();
    const [active, setActive] = useState(0);

    const services = [1, 2, 3, 4, 5, 6].map((n, i) => ({
        title: t(`servicesMenu.s${n}`),
        desc: t(`servicesMenu.d${n}`),
        img: photo(servicePhotos[i], 1000),
    }));

    return (
        <section className={`section ${classes.servicesSection}`}>
            <div className="container">
                <div className="sectionHead">
                    <div>
                        <span className="eyebrow">{t('nav.services')}</span>
                        <h2><AnimatedTitle text={t('servicesMenu.headline')} accent={t('servicesMenu.accent')} onView /></h2>
                    </div>
                    <Link to="/services" className="textLink">
                        {t('servicesMenu.allLink')} <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={classes.layout}>
                    <ul className={classes.list}>
                        {services.map((svc, idx) => (
                            <li key={idx} data-reveal="up" style={{ '--d': `${idx * 80}ms` } as React.CSSProperties}>
                                <Link
                                    to="/services"
                                    className={`${classes.row} ${active === idx ? classes.active : ''}`}
                                    onMouseEnter={() => setActive(idx)}
                                    onFocus={() => setActive(idx)}
                                >
                                    <span className={classes.num}>0{idx + 1}</span>
                                    <span className={classes.text}>
                                        <span className={classes.title}>{svc.title}</span>
                                        <span className={classes.desc}>{svc.desc}</span>
                                    </span>
                                    <span className={classes.arrow} aria-hidden="true"><ArrowUpRight size={20} /></span>
                                    <img className={classes.thumb} src={svc.img.replace('w=1000', 'w=500')} alt="" loading="lazy" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={classes.preview} aria-hidden="true" data-reveal="fade" style={{ '--d': '200ms' } as React.CSSProperties}>
                        {services.map((svc, idx) => (
                            <div key={idx} className={`photo ${classes.previewImg} ${active === idx ? classes.previewOn : ''}`}>
                                <img src={svc.img} alt="" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
