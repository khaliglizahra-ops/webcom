import { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import classes from './XRayViewer.module.css';
import { useTranslation } from 'react-i18next';
import { Code2, LayoutTemplate } from 'lucide-react';

export default function XRayViewer() {
    const { t } = useTranslation();
    const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate position relative to container width
        const x = clientX - rect.left;
        let posPercentage = (x / rect.width) * 100;

        // Clamp between 0 and 100
        posPercentage = Math.max(0, Math.min(100, posPercentage));
        setSliderPos(posPercentage);
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    return (
        <section className={`section ${classes.xraySection}`}>
            <div className="container">
                <div className={classes.header}>
                    <h2 className={classes.title}>{t('xray.titlePart1', "We Don't Just Design. We")} <span>{t('xray.titleHighlight', "Engineer")}</span>.</h2>
                    <p className={classes.subtitle}>
                        {t('xray.subtitle', "Drag the slider to see beyond the beautiful exterior and explore the high-performance digital engines running beneath our custom solutions.")}
                    </p>
                </div>

                <div className={classes.viewerWrapper}>
                    {/* Perspective Container */}
                    <div className={classes.perspectiveFrame}>

                        <div
                            className={classes.sliderContainer}
                            ref={containerRef}
                            onMouseMove={onMouseMove}
                            onTouchMove={onTouchMove}
                            onMouseUp={handleDragEnd}
                            onTouchEnd={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                        >

                            {/* RIGHT LAYER (Background): The Code & System Architecture */}
                            <div className={classes.layerCore}>
                                <div className={classes.coreContent}>
                                    <div className={classes.codeMockup}>
                                        <div className={classes.codeHeader}>
                                            <span className={classes.dot}></span>
                                            <span className={classes.dot}></span>
                                            <span className={classes.dot}></span>
                                            <span className={classes.filename}>api/routes/checkout.ts</span>
                                        </div>
                                        <pre className={classes.codeLines}>
                                            <code>{`async function processPayment(req) {
  const { cart, user } = req.body;
  
  // High-performance payload validation
  const session = await db.initiate(user);
  
  try {
    const res = await stripe.create({
      amount: cart.total,
      currency: 'usd',
      payment_method: "secure_token"
    });
    
    return Response.json(res);
  } catch (err) {
    logger.error("Sys Fault", err);
    throw new SecureError();
  }
}`}</code>
                                        </pre>
                                    </div>

                                    <div className={classes.schemaNode1}>
                                        <span className={classes.pulseDot}></span> {t('xray.node1')}
                                    </div>
                                    <div className={classes.schemaNode2}>
                                        <span className={classes.pulseDot}></span> {t('xray.node2')}
                                    </div>
                                    <div className={classes.schemaLine}></div>
                                </div>
                                <div className={classes.layerLabelWrapper}>
                                    <span className={classes.layerLabel}><Code2 size={16} /> {t('xray.labelCore')}</span>
                                </div>
                            </div>

                            {/* LEFT LAYER (Clipped Foreground): The Finished UI */}
                            <div
                                className={classes.layerSurface}
                                style={{ width: `${sliderPos}%` }}
                            >
                                <div className={classes.surfaceContent}>
                                    {/* Simulated polished UI card */}
                                    <div className={classes.uiCard}>
                                        <div className={classes.uiImageHolder}></div>
                                        <div className={classes.uiTitle}>{t('xray.uiTitle')}</div>
                                        <div className={classes.uiPrice}>{t('xray.uiPrice')}</div>
                                        <button className={classes.uiBtn}>{t('xray.uiBtn')}</button>
                                        <div className={classes.uiReviews}>{t('xray.uiReviews')}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Clipped Label for Left Layer (to move with clip) */}
                            <div
                                className={classes.layerSurfaceLabelClipped}
                                style={{ width: `${sliderPos}%` }}
                            >
                                <div className={classes.layerLabelWrapper}>
                                    <span className={classes.layerLabelSurface}><LayoutTemplate size={16} /> {t('xray.labelSurface')}</span>
                                </div>
                            </div>

                            {/* The Dragger Handle */}
                            <div
                                className={classes.sliderHandle}
                                style={{ left: `${sliderPos}%` }}
                                onMouseDown={handleDragStart}
                                onTouchStart={handleDragStart}
                            >
                                <div className={classes.handleBar}></div>
                                <div className={classes.handleKnob}>
                                    <div className={classes.arrows}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
