//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log("aslfkn");
	}
}

class Dog extends Animal {
	purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	console.log("woof");
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
