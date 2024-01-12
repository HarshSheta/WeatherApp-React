import React, { useState, useEffect } from 'react'

const WeatherCompo = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    const { temp, humidity, weathermood, name, speed, country, sunrise, sunset } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState('wi-day-cloudy')
                    break;
                case "Haze": setWeatherState('wi-fog')
                    break;
                case "Clear": setWeatherState('wi-day-sunny')
                    break;
                case "Smoke": setWeatherState('wi-smoke')
                    break;
                case "Mist": setWeatherState('wi-fog')
                    break;

                default:setWeatherState('wi-alien')
                    break;
            }
        }
    }, [weathermood])


    // Converting Seconds into time
    let sunriseSeconds = sunrise
    let sunriseDate = new Date(sunriseSeconds * 1000)
    let sunriseTime = `${sunriseDate.toLocaleTimeString()}`

    let sunsetSeconds = sunset
    let sunsetDate = new Date(sunsetSeconds * 1000)
    let sunsetTime = `${sunsetDate.toLocaleTimeString()}`


    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>{name}, {country}</div>
                    </div>
                </div>
                <div className='date'> {new Date().toLocaleString()} </div>
                {/* 4 Column Section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunrise'></i></p>
                            <p className='extra-info-leftside'>{sunriseTime}<br /> Sunrise</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <p className='extra-info-leftside'>{sunsetTime}<br /> Sunset</p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-humidity'></i></p>
                            <p className='extra-info-leftside'>{humidity} <br /> Humidity</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-strong-wind'></i></p>
                            <p className='extra-info-leftside'>{speed}<br />  Wind</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCompo