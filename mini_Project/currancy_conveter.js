import https from "https";
import readline from "readline";
import chalk from "chalk";

const  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = '0b67725ebe96fc3836501774';
const url = ' https://v6.exchangerate-api.com/v6/0b67725ebe96fc3836501774/latest/USD';

const convertCurrency =(amount, rate) => {
    return (amount * rate).toFixed(2);


}

https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;

    })
    response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question("Enter amount in USD: " , (amount) => {
            rl.question("Enter the target currecy[e.g., INR, EUR, NPR]: ", (currency) => {
                const rate = rates[currency.toLocaleUpperCase()];
                if(rate) {
                    console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`);
                    
                }else{
                    console.log(`Invalid Currency Code`);
                    
                }
                rl.close()

            })
        })
    })
})