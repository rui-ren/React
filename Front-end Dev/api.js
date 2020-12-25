

// Async Fetch w/web API's 

//

let baseURL = 'http://api.animalinfo.org/data/?animal=';
let apiKey ='&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
	const newAnimal = document.getElementById('animal').value;
	getAnimal(baseURL, newAnimal, apiKey);
}

const getAnimal = async (baseURL, annimal, key) => {
	
	const res = await fetch(baseURL+animal+key)
	try {
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

