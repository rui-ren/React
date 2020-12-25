
// Promise are now the accepted best practice for writing asynchronous functions in JS

// Promise can be treated as a special function that either satisfy(resolve) or fail(reject) to execute  a task




var promise = new Promise(function(resolve, reject) {
	// do a  thing, possibly async, then ...
	
	if (/* everything turned out fine*/) {
		resolve('Stuff worked!');
	}
	else {
		reject(Error("It broke"));
	}
})


const postData = async(url = '', data={}) => {
	
	const response = await fetch(url, {
		
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		
		// get the HTTP code
		try {
			const newData = await response.json();
				return newData;
		} catch(error) {
			console.log("error", error);
		}
	})
}

postData('/addMovie', {movie: 'the matrix', score: 5})



