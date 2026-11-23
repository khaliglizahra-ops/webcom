import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './DifferencePopup.module.css';

interface DifferencePopupProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function DifferencePopup({ isVisible, onClose }: DifferencePopupProps) {
    const { t } = useTranslation();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        } else {
            // Wait for fade out animation before removing from DOM
            const t = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(t);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div className={`${classes.overlay} ${isVisible ? classes.visible : ''}`} onClick={onClose}>
            <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
                <div className={classes.content}>
                    <h2 className={classes.title}>{t('difference.title', 'What You Just Saw Is The Difference.')}</h2>
                    <p className={classes.desc}>
                        {t('difference.desc', 'You just witnessed the contrast between a generic, forgettable template and a high-performance, custom-engineered digital system. Don\'t settle for average.')}
                    </p>
                    <button className={classes.button} onClick={onClose}>
                        {t('difference.btn', 'Got it, let\'s explore.')}
                    </button>
                    <p className={classes.psText}>
                        {t('difference.ps', '(P.S. No, we didn\'t hack your computer.)')}
                    </p>
                </div>
            </div>
        </div>
    );
}
