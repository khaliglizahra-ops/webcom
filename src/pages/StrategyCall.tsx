import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import AnimatedTitle from '../components/ui/AnimatedTitle';
import { sendEmail } from '../utils/email';
import { photo } from '../data/photos';
import classes from './StrategyCall.module.css';

export default function StrategyCall() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        company: '',
        goals: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await sendEmail({
                from_name: `${formData.fname} ${formData.lname}`,
                reply_to: formData.email,
                company: formData.company,
                message: `Goals: ${formData.goals}`,
                to_email: 'khaliglizahra@gmail.com'
            });
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <main className={classes.page}>
            <Helmet>
                <title>{t('meta.strategyTitle')}</title>
                <meta name="description" content={t('meta.strategyDesc')} />
                <meta property="og:title" content={t('meta.strategyTitle')} />
                <meta property="og:description" content={t('meta.strategyDesc')} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Left: photo panel with what you get */}
            <aside className={classes.panel}>
                <img className={classes.panelImg} src={photo('barista', 1400)} alt="" />
                <div className={classes.panelShade} aria-hidden="true" />
                <div className={classes.panelContent}>
                    <Link to="/" className={classes.logo} aria-label="WebCom">
                        <img src="/logo-dark.png?v=1" alt="WebCom" />
                    </Link>
                    <div>
                        <p className={classes.panelLead}>{t('strategy.desc')}</p>
                        <ul className={classes.benefits}>
                            {['b1', 'b2', 'b3'].map((b, i) => (
                                <li key={b} style={{ animationDelay: `${600 + i * 150}ms` }}>
                                    <span className={classes.check}><Check size={14} /></span>
                                    {t(`strategy.${b}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>

            {/* Right: form */}
            <section className={classes.formSide}>
                <Link to="/" className={classes.back}>
                    <ArrowLeft size={18} /> {t('common.back')}
                </Link>

                {status === 'success' ? (
                    <div className={classes.done} aria-live="polite">
                        <CheckCircle2 size={56} className={classes.doneIcon} />
                        <h1 className={classes.title}>{t('strategy.successTitle')}</h1>
                        <p className={classes.subtitle}>{t('strategy.successDesc')}</p>
                        <Button to="/" size="lg">{t('common.backHome')}</Button>
                    </div>
                ) : (
                    <>
                        <h1 className={classes.title}>
                            <AnimatedTitle text={t('strategy.title')} delay={100} />
                        </h1>
                        <p className={classes.subtitle}>{t('strategy.subtitle')}</p>

                        <form onSubmit={handleSubmit} className={classes.form}>
                            <div className={classes.two}>
                                <Input
                                    label={t('strategy.fields.fname')}
                                    placeholder={t('strategy.fields_placeholder.fname')}
                                    required
                                    autoComplete="given-name"
                                    value={formData.fname}
                                    onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                                />
                                <Input
                                    label={t('strategy.fields.lname')}
                                    placeholder={t('strategy.fields_placeholder.lname')}
                                    required
                                    autoComplete="family-name"
                                    value={formData.lname}
                                    onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                                />
                            </div>
                            <Input
                                label={t('strategy.fields.email')}
                                type="email"
                                placeholder={t('strategy.fields_placeholder.email')}
                                required
                                autoComplete="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <Input
                                label={t('strategy.fields.company')}
                                placeholder={t('strategy.fields_placeholder.company')}
                                required
                                autoComplete="organization"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                            <Textarea
                                label={t('strategy.fields.goals')}
                                placeholder={t('strategy.fields.goalsPlaceholder')}
                                rows={4}
                                required
                                value={formData.goals}
                                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                            />

                            <Button type="submit" size="lg" fullWidth disabled={status === 'sending'}>
                                {status === 'sending' ? t('strategy.sending') : t('strategy.btn')} <ArrowRight size={18} />
                            </Button>

                            <div aria-live="polite">
                                {status === 'error' && <p className={classes.err}>{t('strategy.error')}</p>}
                            </div>
                            <p className={classes.note}>{t('strategy.noRisk')}</p>
                        </form>
                    </>
                )}
            </section>
        </main>
    );
}
