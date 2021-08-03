import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log('Clock Ticking');
        setDate(new Date());
    };

    useEffect(() => {
        console.log('start timer');
        const interval = setInterval(tick, 1000);
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        console.log('updating console log!');
        document.title = `Clicked ${count} times`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type="text" value={text} onChange={handleChange} />
            </p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
};

export default MyComponent;
