import axios from 'axios';

const APIKEY='8d2a110b6ad468ae1a0e459757cf659d';
const APIURL='http://api.openweathermap.org/data/2.5/weather';

export const Getweather= async (city,country)=>{
    try {
        let response=await axios.get(`${APIURL}?q=${city},${country}&appid=${APIKEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log("Error while calling the api",error.message);
    }
}