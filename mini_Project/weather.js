import readline from "readline/promises";
const api_key = '081373826b0f4bdcd9bee7dbca0be2f8';
const base_url = 'http://api.openweathermap.org/data/2.5/weather'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const getWeather = async (city) => {
    const url = `${base_url}?q=${city}&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("City not fount. Please Check the city name...!");
        }
        const weatherData = await response.json();
       
        

        console.log("\n=============Weather Information===============\n");
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
        console.log("======================***=======================\n");    
    } catch (error) {
        console.log(error);
        
        
    }

}
 
const city = await rl.question("Enter a City name to get its weather: ")
await getWeather(city);
rl.close()