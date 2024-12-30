import React, { useState, useEffect, useRef } from 'react';

const WordPullUp = ({ children, startOnView = false, delay = 100 }) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!startOnView) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [startOnView]);

    const words = children.split(' ');

    return (
        <div ref={elementRef} className="inline-block">
            {words.map((word, index) => (
                <span
                    key={index}
                    style={{
                        transition: `transform 0.5s ease ${index * delay}ms, opacity 0.5s ease ${index * delay}ms`,
                        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isInView ? 1 : 0,
                        display: 'inline-block',
                        marginRight: '8px',
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
    );
};

export default WordPullUp;
