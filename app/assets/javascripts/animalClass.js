class Animal {
	// constructor(id, name, age, species) {
	// 	this.id = id;
	// 	this.name = name;
	// 	this.age = age;
	// 	this.species = species;
	// }

	constructor(obj) {
		this.id = obj.id,
		this.name = obj.name,
		this.age = obj.age,
		this.species = obj.species.name
	}

	addToTable() {
		let table = document.querySelector('#animal_table')
		let trEl = document.createElement('tr');

		let idEl = document.createElement('td');
		idEl.textContent = this.id;
		
		let nameEl = document.createElement('td');
		nameEl.textContent = this.name;

		let ageEl = document.createElement('td');
		ageEl.textContent = this.age;

		let speciesEl = document.createElement('td');
		speciesEl.textContent = this.species;

		let profileEl = document.createElement('td');
		let profileLink = document.createElement('a');
		profileLink.textContent = "Show me";
		profileLink.href = `/animals/${this.id}`;
		profileEl.appendChild(profileLink);

		trEl.appendChild(idEl);
		trEl.appendChild(nameEl);
		trEl.appendChild(ageEl);
		trEl.appendChild(speciesEl);
		trEl.appendChild(profileEl);
		table.appendChild(trEl);
	}

	toString() {
		return `${this.name} is a ${this.age} year old ${this.species}. They are very nice.`
	}
}

// document.addEventListener('DOMContentLoaded', function() {
// 	let configObj = {
// 		method: "GET",
// 		headers: {
// 			"Accept": "application/json",
// 			"Content-Type": "application/json"
// 		}
// 	}
	
// 	fetch("http://localhost:3000/api/animals", configObj)
// 		.then(resp => resp.json())
// 		.then(json => {
// 			json.forEach(animal => {
// 				new Animal(
// 					animal.id,
// 					animal.name,
// 					animal.age,
// 					animal.species.name
// 				).addToTable();
// 			})
// 		})
// })
