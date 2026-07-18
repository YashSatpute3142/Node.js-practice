import https from 'https';
import chalk from 'chalk';
import { error } from 'console';


const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    https.get(url, (reponse) => {

        let data = "";

        reponse.on("data", (chunk) => {
            data += chunk;

        })
        reponse.on("end",() => {
            const joke = JSON.parse(data);
            console.log(`Here is a random ${joke.type} joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        })
        reponse.on("error", (err) => {
            console.log(`Error Fetching the jike: ${err.message}`);
            
        })
    })

}

getJoke();
