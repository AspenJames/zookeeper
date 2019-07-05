document.addEventListener('DOMContentLoaded', function(){
	let id = this.URL.split('/').pop();
	let configObj = {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	};

	fetch(`http://localhost:3000/animals/${id}`, configObj)
		.then(resp => resp.json())
		.then(obj => {
			let animal = new Animal(obj);

			let paragraph = document.querySelector('#animal_description');
			paragraph.innerText = animal.toString();

			let heading = document.querySelector('#animal_name');
			heading.innerText = animal.name;
		})
})