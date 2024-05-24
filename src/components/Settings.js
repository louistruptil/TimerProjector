import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import './Settings.css';

const Settings = () => {
    const { setTheme } = useContext(ThemeContext);
    const [openSetting, setOpenSetting] = useState(false);

    const handleChangeColor = (event) => {
        setTheme((prevTheme) => ({
            ...prevTheme,
            clockColor: event.target.value,
        }));
    };
    const handleClick = () => {
        console.log(openSetting ? "Close" : "Open");
        setOpenSetting(!openSetting);
    };

    return (
        <div className="Settings">
            <div className="SettingsButton">
                <button type="button" onClick={handleClick}>⛭</button>
            </div>
            <label>
                {openSetting && <input type="color" className="colorPicker" onChange={handleChangeColor} />}
            </label>
            {openSetting && <div className="BlurScreen"/>}
        </div>
    );
};

export default Settings;