import React, { useEffect, useState } from 'react';

import humidityImg from './WeatherIcon/humidity.png';
import windImg from './WeatherIcon/windy.png';
import airPressureImg from './WeatherIcon/airPressure.png'
import locationImg from './WeatherIcon/locationIcon.png';

import notFoundGif from './WeatherIcon/notfound.gif';

import CurrentWeather from './Components/CurrentWeather';

import changeWeatherImg from './Functions/UpdateWeatherImg.js';

export default function App() {

    const [city, setCity] = useState("India");
    const [temp, setTemp] = useState(" ");
    const [weatherImg, setWeatherImg] = useState(" ");
    const [weatherText, setWeatherText] = useState(" ");
    const [currentCity, setCurrentCity] = useState(" ");
    const [humidity, setHumidity] = useState(" ");
    const [windSpeed, setWindSpeed] = useState(" ");
    const [airPressure, setAirPressure] = useState(" ");

    const [notFound, setNotFound] = useState(false);

    const updateWeather = async () => {
        try {
            document.body.style.backgroundImage = "linear-gradient(to right, #112646, #0e2241, #0c1f3c, #091b37, #071832)";

            let inputValue = document.getElementById("input").value;
            let value = inputValue;
            document.getElementById('input').value = "";
            if (value === "") {
            }
            else {
                setCity(value);
            }

            let api = `https://api.weatherapi.com/v1/forecast.json?key=d4ab2da62468457e9a991013232709&q=${city}&days=1&aqi=yes&alerts=no`;
            let data = await fetch(api);
            if (data.status === 400) {
                setNotFound(true);
            }else{setNotFound(false)};
            let jsonData = await data.json();

            setTemp(jsonData.current.temp_c);
            setWeatherText(jsonData.current.condition.text);
            setCurrentCity(jsonData.location.name);
            setHumidity(jsonData.current.humidity);
            setWindSpeed(jsonData.current.wind_mph);
            setAirPressure(jsonData.current.pressure_mb);
            changeWeatherImg(jsonData.current.condition.text, setWeatherImg);

        }
        catch (error) {
            console.error("An error occurred while fetching data:", error);
        }

    }

    useEffect(() => {
        updateWeather();
    })

    const userLocation = () => {
        const successCallback = (position) => {
            const newLocationText = `${position.coords.latitude}, ${position.coords.longitude}`;
            setCity(newLocationText);
        };

        const errorCallback = (error) => {
            console.log(error);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }



    return (
        <>
            <div className='flex'>

                <div className=' w-1/3 h-screen flex justify-center items-center border-r-[0.3px] border-gray-800'>
                    <div className='text-center bg-slate-400  h-fit py-20 flex flex-col justify-center items-center shadow-md shadow-slate-400'>
                        <h1 className=' font-bold font-sans text-2xl'>Enter Your City</h1>
                        <input id='input' className=' border-2 border-slate-500 m-5 h-10 w-[23rem] pl-3 text-lg' type="text" placeholder='Eg. India, New Delhi, London' />
                        <br />
                        <button className='bg-blue-900 hover:bg-blue-950 active:bg-blue-900 py-1 px-3 m-3 rounded-md text-xl text-white w-[23rem]' onClick={updateWeather}>Search</button>
                        <br />
                        <hr className='bg-black h-[0.1rem] w-[24rem]' />
                        <p className=' bg-slate-400 w-8 relative bottom-[0.9rem] font-semibold text-lg'>Or</p>
                        <button className='bg-gray-500 hover:bg-gray-600 active:bg-gray-500  flex justify-center rounded-md font-semibold px-3 py-1 w-[23rem]'
                            onClick={userLocation}>Use Current Location
                            <img className='w-5 ml-2' src={locationImg} />
                        </button>
                    </div>
                </div>
                {notFound === false &&


                    <CurrentWeather currentCity={currentCity} temp={temp} humidityImg={humidityImg} humidity={humidity}
                        windImg={windImg} windSpeed={windSpeed} airPressureImg={airPressureImg} airPressure={airPressure} weatherImg={weatherImg} weatherText={weatherText}
                    ></CurrentWeather>

                }

                {notFound === true &&
                    <div className=''>
                        <img className='' style={{aspectRatio: "3/4", mixBlendMode: "multiply"}} src={notFoundGif} alt="" />
                    </div>
                }
            </div>
        </>
    )
}
