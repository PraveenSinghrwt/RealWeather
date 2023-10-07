import React from 'react'
import ForecastDay from './ForecastDay'

import locationIcon from '../WeatherIcon/locationIcon.png';


export default function CurrentWeather({ currentCity, temp, humidityImg, humidity, windImg, windSpeed, airPressureImg, airPressure, weatherImg, weatherText }) {
    return (
        <>
            <div className='w-2/3'>
                <div className=' bg-gradient-to-r from-slate-200 to-slate-300 m-5 p-5 rounded-xl shadow-lg shadow-gray-500 text-black flex justify-between'>
                    <section className='flex flex-col justify-between'>
                        <div>
                            <div className=' flex space-x-2'>
                                <img className='w-8' src={locationIcon} alt="" />
                                <p className='text-2xl '>{currentCity}</p>
                            </div>
                            <h1 className='text-4xl font-semibold'>{temp}° C </h1>
                        </div>
                        <div className=' flex space-x-4'>
                            <div className=' flex flex-col justify-center items-center'>
                                <img className='w-10' src={humidityImg} alt="" />
                                <p>Humidity</p>
                                <p className=' font-semibold'>{humidity} %</p>
                            </div>
                            <div className=' flex flex-col justify-center items-center'>
                                <img className='w-10' src={windImg} alt="" />
                                <p>Wind Speed</p>
                                <p className=' font-semibold'>{windSpeed} mph</p>
                            </div>
                            <div className=' flex flex-col justify-center items-center'>
                                <img className='w-10' src={airPressureImg} alt="" />
                                <p>Air Pressure</p>
                                <p className=' font-semibold'>{airPressure} hPa</p>
                            </div>
                        </div>
                    </section>
                    <section className='text-center'>
                        <img className=' w-40 drop-shadow-2xl' src={weatherImg} alt="" />
                        <p className='mt-2 text-xl'>{weatherText}</p>
                    </section>
                </div>
                <ForecastDay city={currentCity}></ForecastDay>
            </div>


        </>
    )
}
