import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from "./ThemeContext";
import './Clock.css';

function Clock() {
    const { theme } = useContext(ThemeContext);
    const date = new Date();
    const [time, setTime] = useState(
        date.getHours().toString().padStart(2, '0') + ":" +
        date.getMinutes().toString().padStart(2, '0') + ":" +
        date.getSeconds().toString().padStart(2, '0')
    );

    useEffect(() => {
        document.documentElement.style.setProperty('--clock-color', theme.clockColor);
    }, [theme]);

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setTime(
                date.getHours().toString().padStart(2, '0') + ":" +
                date.getMinutes().toString().padStart(2, '0') + ":" +
                date.getSeconds().toString().padStart(2, '0')
            );
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="Clock">
            <p>{time}</p>
        </div>
    );
}

export default Clock;