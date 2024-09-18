import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const magneticEl = magnetic.current;
        magneticEl.addEventListener("mousemove", handleMouseMove);
        magneticEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            magneticEl.removeEventListener("mousemove", handleMouseMove);
            magneticEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        React.cloneElement(children, { ref: magnetic })
    );
}
