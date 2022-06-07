import { useState, useEffect } from 'react';

export const useResize = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    function handleResize() {
        if (window.innerWidth < 900) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return isMobile;
}