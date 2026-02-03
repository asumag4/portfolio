import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [palette, setPalette] = useState('light');
    const [mounted, setMounted] = useState(false);

    // Ensure we're on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {

        // Remove old theme
        if (mounted) {
            document.documentElement.removeAttribute('data-theme');
        }

        // Apply new theme (only if not palette1, which is the default in `:root`)
        if (palette !== 'palette1') {
            document.documentElement.setAttribute('data-theme', palette);
        }
    }, [palette, mounted]);

    // Don't render until mounted (avoid SSR issues)
    if (!mounted) return null;

    return (
        <div className="flex gap-2">
            <button 
                onClick={() => setPalette('palette1')} 
                className="px-4 py-2 bg-palette1-primary text-white rounded"
            >
                Palette 1
            </button>
            <button 
                onClick={() => setPalette('palette2')} 
                className="px-4 py-2 bg-palette2-primary text-white rounded"
            >
                Palette 2
            </button>
            <button 
                onClick={() => setPalette('dark')} 
                className="px-4 py-2 bg-dark-primary text-white rounded"
            >
                Dark Mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;