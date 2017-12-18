///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECT METHODS
// This weekend you are going to make a tamagotchi object and have it do something. We can store functions inside objects.
// Start by making a Tamagotchi, just a regular object with properties. Give it the following keys and you can assign whatever values you would like to make it your own: name, creatureType, foodInTummy, restedness, health.
// Example
// Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain functions as values. When a function is stored within an object, it's called a method.
// Let's add a method of cry to our Tamagotchi that will log "Waaaaaa!!!" anytime the cry method is called.
// Invoke the cry method to test that it works.
// Write a method puke into your Tamagotchi object that console.logs the Tamagotchi having a sick-up (example: Bleeeeh :O~~)
// Invoke the puke method to confirm that it works.
// Write a method yawn into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: Yaaaawwwwn!).
// Invoke the yawn method.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remember that using when using the keyword this, we can have our object methods act upon other properties that are intrinsic to our object.
// Update the yawn and puke methods to output the Tamogatchi's name in the sentence with the yawn or puke action. Execute these methods to confirm the output.
// Update the cry method to decrease the amount of food in the Tamagotchi's tummy.
// In addition, the cry method should now also log a sentence that will tell us the amount of food in the Tamagotchi's tummy.
// Hint: We would refer to the foodInTummy property with this.foodInTummy.
// Execute the cry method to see the output.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tamagotchi = {
  name: "Pumbaa",
  creatureType: "Warthog",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function(){
	  console.log(this.name + ": Waaaaaa!!!");
	  this.foodInTummy-- // decreases by one
	  console.log(this.name + " just lost food from his tummy, now at  " + this.foodInTummy);
  },
  puke: function(){
	  console.log(this.name + ": Bleeeeh :O~~");
	  this.health-- // decreases by one
	  console.log(this.name + " just lost some health, now at  " + this.health);
  },
  yawn: function(){
	  console.log(this.name + ": Yaaaawwwwn!");
	  this.restedness-- // decreases by one
	  console.log(this.name + " just lost some rest, now at  " + this.restedness);
  }
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();
