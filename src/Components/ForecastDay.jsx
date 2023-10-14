import React, { useEffect, useState } from 'react'
import NextForecast from './NextForecast';

export default function ForecastDay({city}) {

    const [currentForecast, setCurrentForecast] = useState([]);
    const [nextForecast, setNextForecast] = useState([]);


    const updateForecast = async () => {
        try {
            let api = `https://api.weatherapi.com/v1/forecast.json?key=2eb2a874b4214be3b7d61446231310&q=${city}&days=6&aqi=yes&alerts=no`;

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
    }, [city])

    return (
        <>
            <div className='flex  overflow-x-scroll border-b-[0.3px] pb-3 border-gray-800 ml-2'>
                <style>{`.overflow-x-scroll::-webkit-scrollbar {display: none; /* Hide the scrollbar */}`}</style>

                {currentForecast.map(current => {
                    return (
                        <div key={current.time} className=' ml-1 md:ml-2 flex flex-col justify-between bg-white rounded-2xl shadow-md shadow-gray-600 m-2 px-4 py-2 text-center '>
                            <p className='font-semibold text-sm md:text-lg'>{current.temp_c}°C</p>
                            <img className=' ' src={current.condition.icon} alt="" />
                            <div className='text-sm'>{current.time.split(" ")[1]}</div>
                        </div>
                    )
                })}
            </div>

            <NextForecast data={nextForecast}></NextForecast>
        </>
    )
}
