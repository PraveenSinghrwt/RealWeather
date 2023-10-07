import sunnyImage from '../WeatherIcon/sun.png';
import partlyCloudyImage from '../WeatherIcon/partlycloudy.png';
import cloudyImage from '../WeatherIcon/cloudy.png';
import overcastImage from '../WeatherIcon/overcast.png';
import mistImage from '../WeatherIcon/mist.png';


export default function changeWeatherImg(text, setWeatherImg){
    if (text.toLowerCase() === "sunny") {
        setWeatherImg(sunnyImage);
    }
    if (text.toLowerCase() === "partly cloudy") {
        setWeatherImg(partlyCloudyImage);
    }
    if (text.toLowerCase() === "cloudy") {
        setWeatherImg(cloudyImage);
    }
    if (text.toLowerCase() === "overcast") {
        setWeatherImg(overcastImage);
    }
    if (text.toLowerCase() === "mist") {
        setWeatherImg(mistImage);
    }
}