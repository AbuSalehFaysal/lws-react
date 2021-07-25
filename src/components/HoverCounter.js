import React from 'react';

export default function HoverCounter({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hover {count} Times
            </h1>
        </div>
    );
}
