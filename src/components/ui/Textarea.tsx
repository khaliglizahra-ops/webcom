import React, { useId } from 'react';
import clsx from 'clsx';
import classes from './Input.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export default function Textarea({
    label,
    error,
    fullWidth = true,
    className,
    id,
    rows = 4,
    ...props
}: TextareaProps) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className={clsx(classes.wrapper, fullWidth && classes['wrapper--fullWidth'], className)}>
            {label && (
                <label htmlFor={inputId} className={classes.label}>
                    {label}
                </label>
            )}
            <textarea
                id={inputId}
                className={clsx(classes.input, classes.textarea, error && classes['input--error'])}
                rows={rows}
                style={{ resize: 'vertical', minHeight: '100px' }}
                {...props}
            />
            {error && <span className={classes.errorText}>{error}</span>}
        </div>
    );
}
