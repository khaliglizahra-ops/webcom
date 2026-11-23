import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, CalendarDays, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { sendEmail } from '../utils/email';
import { photo } from '../data/photos';
import classes from './Contact.module.css';

export default function Contact() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        company: '',
        project: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await sendEmail({
                from_name: `${formData.fname} ${formData.lname}`,
                reply_to: formData.email,
                company: formData.company,
                message: formData.project,
                to_email: 'khaliglizahra@gmail.com'
            });
            setStatus('success');
            setFormData({ fname: '', lname: '', email: '', company: '', project: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <main>
            <Helmet>
                <title>{t('meta.contactTitle')}</title>
                <meta name="description" content={t('meta.contactDesc')} />
                <meta property="og:title" content={t('meta.contactTitle')} />
                <meta property="og:description" content={t('meta.contactDesc')} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <PageHero eyebrow={t('nav.contact')} title={t('contact.title')} subtitle={t('contact.desc')} />

            <section className={classes.contactSection}>
                <div className={`container ${classes.grid}`}>
                    <div className={classes.formBox} data-reveal="up">
                        <h2 className={classes.formTitle}>{t('contact.formTitle')}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={classes.two}>
                                <Input
                                    label={t('contact.fields.fname')}
                                    placeholder={t('strategy.fields_placeholder.fname')}
                                    required
                                    autoComplete="given-name"
                                    value={formData.fname}
                                    onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                                />
                                <Input
                                    label={t('contact.fields.lname')}
                                    placeholder={t('strategy.fields_placeholder.lname')}
                                    required
                                    autoComplete="family-name"
                                    value={formData.lname}
                                    onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                                />
                            </div>
                            <Input
                                label={t('contact.fields.email')}
                                type="email"
                                placeholder={t('strategy.fields_placeholder.email')}
                                required
                                autoComplete="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <Input
                                label={t('contact.fields.company')}
                                placeholder={t('strategy.fields_placeholder.company')}
                                autoComplete="organization"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                            <Textarea
                                label={t('contact.fields.project')}
                                placeholder={t('contact.fields.projectPlaceholder')}
                                rows={5}
                                required
                                value={formData.project}
                                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                            />
                            <Button type="submit" size="lg" fullWidth disabled={status === 'sending'}>
                                {status === 'sending' ? t('contact.sending') : t('contact.btn')} <ArrowRight size={18} />
                            </Button>

                            <div aria-live="polite">
                                {status === 'success' && (
                                    <p className={classes.ok}><CheckCircle2 size={18} /> {t('contact.sent')}</p>
                                )}
                                {status === 'error' && <p className={classes.err}>{t('contact.error')}</p>}
                            </div>
                        </form>
                    </div>

                    <aside className={classes.side}>
                        <div className={`photo ${classes.image}`} data-reveal="photo">
                            <img src={photo('cafeOwner', 900)} alt="" loading="lazy" />
                        </div>
                        <ul className={classes.info} data-reveal="up" style={{ '--d': '150ms' } as React.CSSProperties}>
                            <li>
                                <Mail size={20} />
                                <div>
                                    <span className={classes.infoLabel}>{t('contact.emailTitle')}</span>
                                    <a href="mailto:khaliglizahra@gmail.com">khaliglizahra@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <MapPin size={20} />
                                <div>
                                    <span className={classes.infoLabel}>{t('contact.officeTitle')}</span>
                                    <span>{t('contact.officeDesc')}</span>
                                </div>
                            </li>
                            <li>
                                <CalendarDays size={20} />
                                <div>
                                    <span className={classes.infoLabel}>{t('contact.callTitle')}</span>
                                    <span>{t('contact.callDesc')}</span>
                                    <Button to="/strategy-call" variant="outline" size="sm" className={classes.callBtn}>
                                        {t('contact.callBtn')} <ArrowRight size={16} />
                                    </Button>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>
        </main>
    );
}
