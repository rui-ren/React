

document.getElementById('generate').addEventListener('click', perfomAction);


function performAction(e) {
	const newAnimal = document.getElementById('animal').value;
	const favFact   = document.getElementById('favorite').value;
	
	// get all the data
	getAnimal('/animalData', )
	
	// then post the data to server
	.then(function(data) {
		console.log(data);
		postData('/addAnimal', {animal:data.animal, fact: data.fact, fav: favFact});
	})
	// update the UI
	.then(
		updateUI()
	)
}

// update UI callback function 
const updateUI = async() => {
	
	const request = await fetch('/all');
	
	try {
		const allData = await request.json();
		document.getElementById('animalName').innerHTML = allData[0].animal;
		document.getElementById('animalFact').innerHTML = allData[0].facts;
		document.getElementById('animalFav').innerHTML  = allData[0].fav;
	} catch (error) {
		console.log("error", error);
	}
}

