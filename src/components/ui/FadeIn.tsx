import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    duration = 0.6,
    className = '',
    style: customStyle = {}
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
                    setIsVisible(true);
                    // Once it's visible, we don't need to observe it anymore
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            // Trigger when 10% of the element is visible
            threshold: 0,
            // Slightly offset to trigger just before it's fully in view
            rootMargin: '0px 0px -40px 0px'
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getTransform = () => {
        if (direction === 'up') return 'translateY(16px)';
        if (direction === 'down') return 'translateY(-16px)';
        if (direction === 'left') return 'translateX(-16px)';
        if (direction === 'right') return 'translateX(16px)';
        return 'translate(0)';
    };

    const style: React.CSSProperties = {
        ...customStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
    };

    return (
        <div ref={domRef} style={style} className={className}>
            {children}
        </div>
    );
}
