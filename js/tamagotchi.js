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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another Tamogatchi
// Create another Tamogatchi. This new Tamogatchi should have the same keys and methods as the first, but the values for: name, creatureType, foodInTummy, restedness, health
// Run the methods on this new Tamogatchi and notice that they should reference the name of this new Tamogatchi.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update The Methods on Both
// Make it so that when puke is invoked, it decreases the object's health value by 1 and logs the new number to the console, and also logs the Tamagotchi's name
// Make it so that when yawn is invoked, it decreases the object's restedness value by 1 and logs the new number to the console, and also logs the Tamagotchi's name
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tamagotchi2 = {
  name: "Timon",
  creatureType: "Meercat",
  foodInTummy: 5,
  restedness: 20,
  health: 15,
  cry: function(){
    console.log(this.name + ": Waaaaaa!!!");
    this.foodInTummy-- // decreases by 1
    console.log(this.name + " just lost food from his tummy, now at  " + this.foodInTummy);
  },
  puke: function(){
    console.log(this.name + ": Bleeeeh :O~~");
    this.health-- // decreases by 1
    console.log(this.name + " just lost some health, now at  " + this.health);
  },
  yawn: function(){
    console.log(this.name + ": Yaaaawwwwn!");
    this.restedness-- // decreases by 1
    console.log(this.name + " just lost some rest, now at  " + this.restedness);
  },
  start: function(){
    sickTimer(); // activated when start method is called 
    yawnTimer(); // activated when start method is called
    hungerTimer(); // activated when start method is called
  }
}

tamagotchi2.cry();
tamagotchi2.puke();
tamagotchi2.yawn();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Let's Play
// Objects can communicate with each other, and we don't need this for objects to communicate with each other. All it takes is for an object to refer to a previously defined object.
// Let's make another object, a player. The player should have a key of name and you can provide the value.
// Let's give your player an action sayName that will log the sentence: "Hi my name is: " with your player's name at the end.
// Objects can work together! All we need to do is refer to a previously defined object. Let's give our player a feedTamagotchi method that feeds our tamagotchi. 
// Start by choosing one Tamogatchi to feed and increase their foodInTummy by 1 each time this method is called.
// Check that the Tamogatchi is successfully being fed.
// Update your feedTamagotchi method to have your player feed both of the Tamogatchi.
// Run your method and check that both are being fed.
// Write a medicateTamagotchi method that takes an argument (a Tamagotchi) that will give the specified tamagotchi medicine and increase its health by 1.
// Invoke the player.feedTamagotchi(your_tamagotchis_name) method to see if it works
// Write a knockOutTamagotchi method in the player object that will put the tamagotchi to sleep and increase its restedness by 1.
// Invoke the player.knockOutTamagotchi(your_tamagotchis_name) method to see if it works.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let player = {
  name: "sergio",
  sayName: function(){
    console.log("Hi my name is: " + this.name)
  },
  feedTamagotchi: function(){ // increases food of both tamagotchi pets by 1
    tamagotchi.foodInTummy++;
    tamagotchi2.foodInTummy++;
  },
  medicateTamagotchi: function(petToMedicate){
    petToMedicate.health++ // increases health by 1
  },
  knockOutTamagotchi: function(petToRest){
    petToRest.restedness++ // increases rest by 1
  }
}

player.feedTamagotchi();
console.log(tamagotchi.foodInTummy);
console.log(tamagotchi2.foodInTummy);
player.medicateTamagotchi(tamagotchi);
player.knockOutTamagotchi(tamagotchi);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bring it to Life
// Global
// We're going to ignore the player object for a while, and just focus on bringing our Tamagotchi to life.
// We are going to automate our Tamagotchi object! Let's use setInterval.
// Write a setInterval hungerTimer that will make the Tamagotchi cry every 6 seconds (6000 milliseconds)
// Write a setInterval yawnTimer that will make the Tamagotchi yawn every 10 seconds
// Write a setInterval sickTimer that will make the Tamagotchi puke every 25 seconds
// NOTE: As it is, to stop the timers from running you will need to comment them out and refresh the page.
// To stop the interval of the hungerTimer, use clearInterval(hungerTimer) globally.
// Inside the Objects
// Let's put our intervals inside out tamagotchi1 object.
// Make it so that your Tamagotchi objects will run a start method that will run the hungerTimer, the yawnTimer, and the sickTimer.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let hungerTimer = setInterval(function(){ this.cry() }, 6000); // activates the cry method every 6 seconds
let yawnTimer = setInterval(function(){ this.yawn() }, 10000); // activates the yawn method every 10 seconds
let sickTimer = setInterval(function(){ this.puke() }, 25000); // activates the puke method every 25 seconds

