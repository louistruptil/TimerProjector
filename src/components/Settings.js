import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import './Settings.css';

const Settings = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [openSetting, setOpenSetting] = useState(false);

    useEffect(() => {
        const storedColor = localStorage.getItem('clockColor');
        if (storedColor) {
            setTheme((prevTheme) => ({
                ...prevTheme,
                clockColor: storedColor,
            }));
        }
    }, []);

    const handleChangeColor = (event) => {
        const newColor = event.target.value;
        localStorage.setItem('clockColor', newColor);
        setTheme((prevTheme) => ({
            ...prevTheme,
            clockColor: newColor,
        }));
    };

    const handleClick = () => {
        console.log(openSetting ? "Close" : "Open");
        setOpenSetting(!openSetting);
    };

    return (
        <div className="Settings">
            <div className="SettingsButton">
                <button type="button" onClick={handleClick}>Settings</button>
            </div>
            {openSetting &&
                <div className="colorPickerContainer">
                    <p className="colorPickerText">Clock Color :</p>
                    <input type="color" className="colorPicker" onChange={handleChangeColor} value={theme.clockColor} />
                </div>
            }
            {openSetting && <div className="BlurScreen"/>}
        </div>
    );
};

export default Settings;