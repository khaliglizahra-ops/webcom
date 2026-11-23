import { forwardRef } from 'react';
import { Link as RouterLink, type LinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localize } from '../../i18n/lang';

/**
 * Drop-in replacement for react-router's Link that keeps the visitor in
 * their language: <Link to="/services"> becomes /az/services on Azerbaijani
 * pages. Non-root or already-prefixed targets pass through untouched.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...rest }, ref) {
    const { i18n } = useTranslation();
    const target = typeof to === 'string' && to.startsWith('/') ? localize(to, i18n.language) : to;
    return <RouterLink ref={ref} to={target} {...rest} />;
});

export default Link;
export { Link };
