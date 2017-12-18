/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called. 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let clicker = {
	clickCount: 0,
	click: function(){
		return this.clickCount += 1
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// It's All About Me
// Create an object called myInformation.
// Assign to it your name, your current age, and a fact about you.
// Inside myInformation, create a method called statement that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.
// It's your birthday! Call this new method that you made that will increase your age.
// Create another function that can be used to change the value of your name.
// You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name and assign this new name. Log your object to confirm the changes.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myInformation = {
	name: "sergio",
	age: 29,
	fact: "I love animals",
	statement: function(){
		return "My name is " + this.name + " and I am " + this.age + " years old and will be " + (this.age + 10) + " years old in ten years. One more thing, " + this.fact 
	},
	ageUp: function(){
		return this.age++ // increases age by 1
	},
	nameChange: function(newName){
		return this.name = newName
	}
}

myInformation.ageUp();
myInformation.nameChange("Rumpelstiltskin");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Greeter
// Create an object called greeter.
// Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message followed by the name parameter.
// Example: Oh hello there, Matthew
// Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed by the name parameter.
// Example: Arrivederci, Matthew!
// Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the name parameter, followed by " how could I forget...!"
// Example: Oh right! Matthew how could i forget...!
//Play around executing your functions by accessing them through the object.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let greeter = {
	hello: function(nameParam){
		return "Hello, " + nameParam + " !"
	},
	goodBye:  function(nameParam){
		return "Goodbye " + nameParam + "!"
	},
	whoAreYou: function(name){
		return "Oh right! " + name + " how could I forget....!"
	}
}

console.log(greeter.hello("sergio"));
console.log(greeter.goodBye("sergio"));
console.log(greeter.whoAreYou("sergio"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Collecting Strings
// Make an object called stringCollector, which has:
// a collection property - an array to hold strings
// a collect method which takes a string as a parameter
// the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// add an admireCollection method which prints out each string in the collection to the console, one line at a time
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let stringCollector = {
	collection: ["test","dsf"],
	collect: function(str){
		return str.split("").reverse().join("") // Chaining 3 methods to reverse the string, 1st 1 splits each character into an array 2nd 1 reverses the array & 3rd 1 creates a string out of the characters in the array
	},
	admireCollection: function(){
		for (let index of this.collection){
			console.log(index) // prints contents of array
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ATM
// Make an object called atm which has two properties:
// totalCash, the total amount of cash in the atm
// dispenseTwenties, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.
// If there is not enough cash, return null instead.
// For example, if the atm has 200 dollars left, the call to dispenseTwenties(6) should return 120, and update the totalCash to 80. However a call to dispenseTwenties(11) should return null.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let atm = {
	totalCash: 0,
	dispenseTwenties: function(num){
		if ((num * 20) <= this.totalCash){ // Takes users call and multiplies it by 20 to make sure theres anough twenties on the atm
			this.totalCash -= (num * 20);
			return num
		} return null
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hungry Turtles
// Create an object called Leonardo.
// Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
// Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
// Add a method to Leonardo called eatPizza() which does the following:
// If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
// If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let leonardo = {
	name: "Leonardo",
	color: "Blue",
	weapon: "Katana",
	pizzaEaten: false,
	eatPizza: function(){
		if (this.pizzaEaten === true){
			console.log("Leonardo has already eaten pizza");
			this.pizza = false;
		} else {
			console.log("Leonardo is eating pizza");
			this.pizzaEaten = true;
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calculator
// Create an object called calculator
// Create a property called output
// Create a method inside your object that will multiply two numbers and change the output value to this current value. This method should also log the value of output.
// Create a function that will divide two numbers. It should also change the output value to this current value. This method should also log the value of output.
// Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).
// If there's additional time, add methods for addition and subtraction
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let calculator = {
	output: undefined,
	multiply: function(a,b){
		this.output = a * b; // gives output a new value of a times b
		console.log(this.output)
	},
	divide: function(a,b){
		this.output = a / b; // gives output a new value of a divided by b
		console.log(this.output)
	}
}
