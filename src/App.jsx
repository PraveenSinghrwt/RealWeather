import React, { useEffect, useState, useRef } from 'react';

import humidityImg from './WeatherIcon/humidity.png';
import windImg from './WeatherIcon/windy.png';
import airPressureImg from './WeatherIcon/airPressure.png'
import locationImg from './WeatherIcon/locationIcon.png';
import notFoundImg from './WeatherIcon/notfound.png';

import CurrentWeather from './Components/CurrentWeather';

import changeWeatherImg from './Functions/UpdateWeatherImg.js';
import changeBgImg from './Functions/UpdateBgImg';

export default function App() {

    const [city, setCity] = useState("India");
    const [temp, setTemp] = useState(" ");
    const [weatherImg, setWeatherImg] = useState(" ");
    const [weatherText, setWeatherText] = useState(" ");
    const [currentCity, setCurrentCity] = useState(" ");
    const [humidity, setHumidity] = useState(" ");
    const [windSpeed, setWindSpeed] = useState(" ");
    const [airPressure, setAirPressure] = useState(" ");
    const [feelslike, setFeelsLike] = useState(" ");
    const [uv, setUv] = useState(" ");
    const [visible, setVisible] = useState(" ");
    const [cloud, setCloud] = useState(" ");
    const [bgImg, setBgImg] = useState(`url('https://media.istockphoto.com/id/1163292935/vector/blue-sky-and-clouds-seamless-vector-background.jpg?s=612x612&w=0&k=20&c=D7O-gsjnxIzQcL9WTNNkqr6H1IqM7fGYKGSLg-NSfdg=')`);

    const [notFound, setNotFound] = useState(false);

    const buttonRef = useRef(null);

    const updateWeather = async () => {
        try {
            document.body.style.backgroundImage = "linear-gradient(to right, #112646, #0e2241, #0c1f3c, #091b37, #071832)";

            let inputValue1 = document.getElementById("inputb").value;
            let value1 = inputValue1;
            document.getElementById('inputb').value = "";
            if (value1 === "") {
            }
            else {
                setCity(value1);
            }

            let inputValue2 = document.getElementById("inputa").value;
            let value2 = inputValue2;
            if (value2 === "") {
            }
            else {
                setCity(value2);
            }

            let api = `https://api.weatherapi.com/v1/forecast.json?key=2eb2a874b4214be3b7d61446231310&q=${city}&days=1&aqi=yes&alerts=no`;
            let data = await fetch(api);
            if (data.status === 400) {
                setNotFound(true);
            } else { setNotFound(false) };
            let jsonData = await data.json();

            setTemp(jsonData.current.temp_c);
            setWeatherText(jsonData.current.condition.text);
            setCurrentCity(jsonData.location.name);
            setHumidity(jsonData.current.humidity);
            setWindSpeed(jsonData.current.wind_mph);
            setAirPressure(jsonData.current.pressure_mb);
            setFeelsLike(jsonData.current.feelslike_c);
            changeWeatherImg(jsonData.current.condition.text, setWeatherImg);

            changeBgImg(jsonData.current.condition.text, setBgImg);

            setUv(jsonData.current.uv);
            setVisible(jsonData.current.vis_km);
            setCloud(jsonData.current.cloud);

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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            buttonRef.current.click();
        }
    };

    return (
        <>
            <div className=" py-3 px-2 bg-slate-800 fixed w-full z-10 top-0 xl:hidden shadow-lg shadow-slate-800">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-4 w-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id='inputa' onKeyPress={handleKeyPress} className="block w-full rounded-lg border border-gray-300 p-3 pl-11 text-sm text-gray-900" placeholder="Search..." required />
                    <button type="submit" ref={buttonRef} onClick={updateWeather} className="absolute bottom-1.5 right-2.5 rounded-xl bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">Search</button>
                </div>
            </div>

            <div className='flex flex-col xl:flex-row 2xl:space-x-8 relative top-20 xl:top-0'>

                <div className=' w-1/3 2xl:w-1/4 2xl:ml-12 h-screen hidden  xl:flex justify-center items-center border-r-[0.3px] border-gray-800'>
                    <div className='text-center bg-slate-400  h-fit py-20 flex flex-col justify-center items-center shadow-md shadow-slate-400'>
                        <h1 className=' font-bold font-sans text-2xl'>Enter Your City</h1>
                        <input id='inputb' onKeyPress={handleKeyPress} className=' border-2 border-slate-500 m-5 h-10 w-[23rem] pl-3 text-lg' type="text" placeholder='Eg. India, New Delhi, London' />
                        <br />
                        <button ref={buttonRef} className='bg-blue-950 hover:bg-blue-950 active:bg-blue-900 py-1 px-3 m-3 rounded-md text-xl text-white w-[23rem]' onClick={updateWeather}>Search</button>
                        <br />
                        <hr className='bg-black h-[0.1rem] w-[24rem]' />
                        <p className=' bg-slate-400 w-8 relative bottom-[0.9rem] font-semibold text-lg'>Or</p>
                        <button className='bg-gray-500  hover:bg-gray-600 active:bg-gray-500  flex justify-center rounded-md font-semibold px-3 py-1 w-[23rem]'
                            onClick={userLocation}>Use Current Location
                            <img className='w-5 ml-2' src={locationImg} alt='' />
                        </button>
                    </div>
                </div>

                {notFound === true ?
                    <div className=' flex justify-center items-center'>
                        <img className='w-96 h-96 xl:relative xl:left-[50%]' style={{ aspectRatio: "3/4", mixBlendMode: "lighten" }} src={notFoundImg} alt="" />
                    </div>
                    :
                    <CurrentWeather currentCity={currentCity} temp={temp} humidityImg={humidityImg} humidity={humidity}
                        windImg={windImg} windSpeed={windSpeed} airPressureImg={airPressureImg} airPressure={airPressure} weatherImg={weatherImg} weatherText={weatherText}
                        feelslike={feelslike} uv={uv} visible={visible} cloud={cloud} bgImg={bgImg}
                    ></CurrentWeather>
                }
            </div>
        </>
    )
}
