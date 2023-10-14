import React from 'react'
import ForecastDay from './ForecastDay'

import locationIcon from '../WeatherIcon/locationIcon.png';
import CurrentDetails from './CurrentDetails';


export default function CurrentWeather({ currentCity, temp, humidityImg, humidity, windImg, windSpeed,
    airPressureImg, airPressure, weatherImg, weatherText, feelslike, uv, visible, cloud, bgImg }) {

    return (
        <>
            <div className='xl:w-2/3 2xl:w-3/4 overflow-y-auto xl:h-screen'>

                <div id='currentWeather' className=' bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl bg-cover bg-no-repeat bg-center
                     shadow-lg shadow-slate-600 text-black m-5 md:mt-4 2xl:mt-8 py-5 pl-2 pr-5 flex justify-between items-center'
                    style={{ backgroundImage: bgImg }} >
                    <section className='flex flex-col justify-between'>
                        <div>
                            <div className=' flex  space-x-2'>
                                <img className=' w-6 h-6 md:w-8 md:h-8' src={locationIcon} alt="" />
                                <p className=' text-xl md:text-2xl -mt-1 md:-mt-0'>{currentCity}</p>
                            </div>
                            <div className='flex items-center'>
                                <h1 className='text-4xl md:text-5xl font-semibold m-2 ml-3'>{temp}°</h1>
                                <p className='text-xl md:text-2xl mt-2 md:mt-3 ml-1'>{weatherText}</p>
                            </div>
                            <p className=' mt-8 mx-3 xl:hidden'> feels like - <span className='font-semibold'>{feelslike}° C </span></p>
                        </div>


                        <div className=' hidden xl:flex flex-row space-x-3 md:space-x-4 mt-6 ml-3'>
                            <div className=' flex flex-col md:justify-center items-center '>
                                <img className=' w-7 md:w-10 hidden md:flex' src={humidityImg} alt="" />
                                <p className=' text-sm'>Humidity</p>
                                <p className=' font-semibold text-sm'>{humidity} %</p>
                            </div>
                            <div className=' flex  flex-col md:justify-center items-center'>
                                <img className=' w-7 md:w-10 hidden md:flex' src={windImg} alt="" />
                                <p className=' text-sm'>Wind Speed</p>
                                <p className=' font-semibold text-sm'>{windSpeed} mph</p>
                            </div>
                            <div className=' flex flex-col md:justify-center items-center'>
                                <img className=' w-7 md:w-10 hidden md:flex' src={airPressureImg} alt="" />
                                <p className=' text-sm'>Air Pressure</p>
                                <p className=' font-semibold text-sm'>{airPressure} hPa</p>
                            </div>
                        </div>
                    </section>
                </div>
                <CurrentDetails humidity={humidity} windSpeed={windSpeed} airPressure={airPressure} uv={uv} visible={visible} cloud={cloud}></CurrentDetails>

                <ForecastDay city={currentCity}></ForecastDay>

            </div>


        </>
    )
}
