/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let newDate = month[d.getMonth()]+'/'+ d.getDate()+'/'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
// make sure here add https://
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const API_key = '&appid=c66e677fffb0673676cbbcbb4c6cd187';

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', getWeather);

/* Function called by event listener */
function getWeather (){
    const zipcode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    getWebAPIData(baseURL, zipcode, API_key)
        .then((data)=>{
            postData("/addWeatherData", {
                date: newDate,
                temperature: data.main.temp,
                content: feeling
            });
        })
        .then(( )=> updateUI());
}

/* Function to GET Web API Data*/
const getWebAPIData = async (baseURL, zipcode, key) => {
    if (zipcode.toString().length !== 5){
        alert("zip should be of length 5");
    }
    const res = await fetch(baseURL + zipcode + key);
    try{
        return await res.json()
    } catch (error) {
        console.log("error", error);
    }
};


/* Function to POST data */

const postData = async (url = "", data = {}) => {
    // fetch the data to server
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
    } catch (error) {
        console.log("error", error);
    }
};

/* Function to GET Project Data */
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        const temp = allData.temperature;
        let value = convertTemp(temp);

        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${value} `+ ' ' + 'F';
        document.getElementById('content').innerHTML = `My feeling today: ${allData.content}`;
    } catch (error) {
        console.log("error", error);
    }
};

const convertTemp = (data)=>{
    return ((data - 273.15) * 9/5 + 32).toFixed(3);
};
