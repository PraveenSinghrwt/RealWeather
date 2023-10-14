import clearImg from '../WeatherImages/clear.jpg';
import sunnyImg from '../WeatherImages/sunny.jpg';
import partlyCloudyImg from '../WeatherImages/partlyCloudy.jpg';
import cloudyImg from '../WeatherImages/cloudy.jpg';
import patchyrainImg from '../WeatherImages/patchyImage.jpg';

export default function changeBgImg(text, setBgImg){
    if (text.toLowerCase() === "sunny") {
        setBgImg(`url(${sunnyImg})`);
    }
    if (text.toLowerCase() === "partly cloudy") {
        setBgImg(`url(${partlyCloudyImg})`);
    }
    if (text.toLowerCase() === "cloudy") {
        setBgImg(`url(${cloudyImg})`);
    }
    if (text.toLowerCase() === "overcast") {
        setBgImg(`url(${clearImg})`);
    }
    if (text.toLowerCase() === "mist") {
        setBgImg(`url(${clearImg})`);
    }
    if(text.toLowerCase() === "patchy rain possible"){
        setBgImg(`url(${patchyrainImg})`);
    }
    
}
