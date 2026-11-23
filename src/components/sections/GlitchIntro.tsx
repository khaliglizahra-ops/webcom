import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './GlitchIntro.module.css';

export default function GlitchIntro({ onComplete }: { onComplete?: () => void }) {
    const { t } = useTranslation();
    const [phase, setPhase] = useState<'bait' | 'hack' | 'shatter' | 'done'>('bait');
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
    const hasTriggered = useRef(false);

    // Keep a stable reference to onComplete to avoid triggering re-renders in the effect
    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // Check if we've already shocked the user this session
        const hasSeenGlitch = sessionStorage.getItem('webcom-glitch-seen');
        if (hasSeenGlitch) {
            setPhase('done');
            return;
        }

        // Wait to trigger glitch sequence until disclaimer is accepted
        if (!disclaimerAccepted) {
            return;
        }

        const timers: ReturnType<typeof setTimeout>[] = [];

        const triggerHack = () => {
            if (hasTriggered.current) return;
            hasTriggered.current = true;

            setPhase('hack');

            // Phase 2 -> 3: The shatter sequence begins (Hack runs for ~2 seconds)
            timers.push(setTimeout(() => setPhase('shatter'), 2000));

            timers.push(setTimeout(() => {
                setPhase('done');
                sessionStorage.setItem('webcom-glitch-seen', 'true');
                window.scrollTo(0, 0); // Scroll to top when the real website reveals
                if (onCompleteRef.current) onCompleteRef.current();
            }, 3200));
        };

        // Start hack after 5 seconds OR on user interaction
        const autoTimer = setTimeout(triggerHack, 5000);
        timers.push(autoTimer);

        window.addEventListener('keydown', triggerHack);
        window.addEventListener('click', triggerHack);
        window.addEventListener('touchstart', triggerHack);

        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('keydown', triggerHack);
            window.removeEventListener('click', triggerHack);
            window.removeEventListener('touchstart', triggerHack);
        };
    }, [disclaimerAccepted]);

    if (phase === 'done') return null;

    return (
        <div className={`${classes.glitchOverlay} ${phase === 'shatter' ? classes.shattering : ''}`}>

            {/* The Terrible Generic Template (The Bait) */}
            <div className={classes.genericTemplate}>
                <header className={classes.genericHeader}>
                    <div className={classes.genericLogo}>WebCom.</div>
                    <nav className={classes.genericNav}>
                        <span>{t('nav.home')}</span>
                        <span>{t('nav.about')}</span>
                        <span>{t('nav.services')}</span>
                        <span>{t('nav.contact')}</span>
                    </nav>
                </header>

                <main className={classes.genericMain}>
                    <div className={classes.genericHeroBox}>
                        <h1>{t('glitch.title')}</h1>
                        <p>{t('glitch.desc')}</p>
                        <div className={classes.genericCTA}>
                            <button className={classes.genericBtnPrimary}>{t('glitch.btn1')}</button>
                            <button className={classes.genericBtnSecondary}>{t('glitch.btn2')}</button>
                        </div>
                    </div>

                    {/* Fake generic feature grid */}
                    <div className={classes.genericFeatures}>
                        <div className={classes.genericFeatureBox}></div>
                        <div className={classes.genericFeatureBox}></div>
                        <div className={classes.genericFeatureBox}></div>
                    </div>
                </main>

                {/* Disclaimer Popup */}
                {phase === 'bait' && !disclaimerAccepted && (
                    <div className={classes.disclaimerPopup}>
                        <p>{t('glitch.disclaimer')}</p>
                        <button
                            className={classes.disclaimerBtn}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDisclaimerAccepted(true);
                            }}
                        >
                            {t('glitch.okBtn')}
                        </button>
                    </div>
                )}
            </div>

            {/* The Hacker Terminal (The Hack) */}
            {phase === 'hack' || phase === 'shatter' ? (
                <div className={classes.terminalOverlay}>
                    <div className={classes.terminalWindow}>
                        <div className={classes.terminalHeader}>
                            <div className={classes.terminalDots}>
                                <span></span><span></span><span></span>
                            </div>
                            <div className={classes.terminalTitle}>System.Override.exe</div>
                        </div>
                        <div className={classes.terminalBody}>
                            <p className={classes.typedLine1}>{t('glitch.terminal.line1')}</p>
                            <p className={classes.typedLine2}>{t('glitch.terminal.line2')}</p>
                            <p className={classes.typedLine3}>{t('glitch.terminal.line3')}</p>
                            <p className={classes.typedLine4}>{t('glitch.terminal.line4')}</p>
                            <p className={classes.typedLine5}><span className={classes.blink}>_</span></p>
                        </div>
                    </div>
                </div>
            ) : null}

        </div>
    );
}
