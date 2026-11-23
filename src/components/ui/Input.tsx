import React, { useId } from 'react';
import clsx from 'clsx';
import classes from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export default function Input({
    label,
    error,
    fullWidth = true,
    className,
    id,
    ...props
}: InputProps) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className={clsx(classes.wrapper, fullWidth && classes['wrapper--fullWidth'], className)}>
            {label && (
                <label htmlFor={inputId} className={classes.label}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={clsx(classes.input, error && classes['input--error'])}
                {...props}
            />
            {error && <span className={classes.errorText}>{error}</span>}
        </div>
    );
}
