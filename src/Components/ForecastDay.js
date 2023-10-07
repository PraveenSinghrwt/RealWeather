import React, { useEffect, useState } from 'react'
import NextForecast from './NextForecast';

export default function ForecastDay(props) {

    const [currentForecast, setCurrentForecast] = useState([]);
    const [nextForecast, setNextForecast] = useState([]);


    const updateForecast = async () => {
        try {
            let api = `https://api.weatherapi.com/v1/forecast.json?key=d4ab2da62468457e9a991013232709&q=${props.city}&days=5&aqi=no&alerts=no`;
            let data = await fetch(api);

            if (data.status === 200) {
                let jsonData = await data.json();

                setCurrentForecast(jsonData.forecast.forecastday[0].hour);
                setNextForecast(jsonData.forecast.forecastday);
            } else {
                console.error(`API request failed with status ${data.status}`);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    }

    useEffect(() => {
        updateForecast();
    })



    return (
        <>
            <div className='flex  overflow-x-scroll border-b-[0.3px] pb-3 border-gray-800'>
                <style>{`.overflow-x-scroll::-webkit-scrollbar {display: none; /* Hide the scrollbar */}`}</style>

                {currentForecast.map(current => {
                    return (
                        <div key={current.time} className='ml-4 flex flex-col justify-between bg-white rounded-2xl shadow-md shadow-gray-600 m-2 px-4 py-2 text-center '>
                            <p className='font-semibold text-lg'>{current.temp_c}°C</p>
                            <img className=' ' src={current.condition.icon} alt="" />
                            <div className=''>{current.time.split(" ")[1]}</div>
                        </div>
                    )
                })}
            </div>

            <NextForecast data={nextForecast}></NextForecast>
        </>
    )
}
