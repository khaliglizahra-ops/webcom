import React from 'react';
import clsx from 'clsx';
import Link from './LangLink';
import classes from './Button.module.css';

type Variant = 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost' | 'light' | 'outlineLight' | 'glass';

interface BaseProps {
    variant?: Variant;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };
type LinkProps = BaseProps & { to: string; onClick?: () => void };

/** A button, or a router link styled as one when `to` is given. */
export default function Button(props: ButtonProps | LinkProps) {
    const { variant = 'primary', size = 'md', fullWidth = false, className, children } = props;
    const cls = clsx(
        classes.btn,
        classes[`btn--${variant}`],
        classes[`btn--${size}`],
        fullWidth && classes['btn--fullWidth'],
        className
    );

    if (props.to !== undefined) {
        return <Link to={props.to} className={cls} onClick={props.onClick} data-magnetic>{children}</Link>;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _v, size: _s, fullWidth: _f, className: _c, children: _ch, to: _t, ...rest } = props;
    return <button className={cls} data-magnetic {...rest}>{children}</button>;
}
