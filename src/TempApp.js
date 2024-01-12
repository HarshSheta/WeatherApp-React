import React, { useEffect, useState } from 'react';
import WeatherCompo from './WeatherCompo';

const TempApp = () => {
    const [searchValue, setSearchValue] = useState('surat');
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=<Your Api Key>`;
            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity } = data.main;
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { speed } = data.wind
            const { country, sunrise, sunset } = data.sys

            const myNewWeatherInfo = { temp, humidity, weathermood, name, speed, country, sunrise, sunset }
            setTempInfo(myNewWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='search...' autoFocus id="search" className='searchTerm'
                        value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className='searchButton' type='search' onClick={getWeatherInfo} >Search</button>
                </div>
            </div>
            {/* Temp Card */}
            <WeatherCompo tempInfo={tempInfo} />
        </>
    )
}

export default TempApp