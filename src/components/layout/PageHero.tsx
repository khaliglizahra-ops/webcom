import type { ReactNode } from 'react';
import AnimatedTitle from '../ui/AnimatedTitle';
import classes from './PageHero.module.css';

interface PageHeroProps {
    eyebrow: string;
    title: string;
    accent?: string;
    subtitle?: string;
    children?: ReactNode;
    /** optional wide photo under the heading */
    image?: string;
}

export default function PageHero({ eyebrow, title, accent, subtitle, children, image }: PageHeroProps) {
    return (
        <section className={classes.hero}>
            <div className="container">
                <span className="eyebrow">{eyebrow}</span>
                <div className={classes.row}>
                    <h1 className={classes.title}><AnimatedTitle text={title} accent={accent} delay={80} /></h1>
                    {(subtitle || children) && (
                        <div className={classes.side} data-reveal="up" style={{ '--d': '450ms' } as React.CSSProperties}>
                            {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
                            {children}
                        </div>
                    )}
                </div>
            </div>
            {image && (
                <div className={`container ${classes.mediaWrap}`}>
                    <div className={`photo ${classes.media}`} data-reveal="photo" style={{ '--d': '300ms' } as React.CSSProperties}>
                        <img src={image} alt="" fetchPriority="high" />
                    </div>
                </div>
            )}
        </section>
    );
}
