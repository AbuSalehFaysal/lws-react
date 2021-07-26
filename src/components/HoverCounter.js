import React from 'react';

export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    console.log('HoverCounter Rendered!');
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hover {count} Times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
