import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    // Ensure we're on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Don't render until mounted (avoid SSR issues)
    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className='px-4 py-2 bg-primary-from text-white rounded'
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} theme
        </button>
    );
};

export default ThemeSwitcher;