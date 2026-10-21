/*
	YOUR TASKS
	Each task has a matching TODO comment below that shows where it goes.

	1. Use prompt() to ask the player's name and save it to player.name
	2. Use player.name in at least two messages
	3. Make the locked door only open if player.inventory includes "key"
	4. Make the dragon cause damage: subtract from player.health
	5. If player.health drops to 0 or below, alert "Game over"
	6. Finish showStats() so it alerts the player's name, health, and inventory
	7. Add a new room of your own that pushes a new item into player.inventory

	BONUS
	- At the start of the game, reset health to 100 and inventory to empty,
	  so a second play-through doesn't keep items from the first one
	- Add a room that heals the player (but not above 100)
	- Add a room that needs TWO items to get in
*/

//the player object holds everything we know about the player.
//we use const because we never replace the whole object, we only change its properties.
const player = {
	name: "Anonymous Hero",
	health: 100,
	inventory: [], //starts empty. use push() to add items.
};

//this code runs when the player clicks the start button
function startGame() {
	//TODO 1: use prompt() to ask the player's name.
	//save what they type to player.name.
	//if they click Cancel, prompt() gives back null, so keep "Anonymous Hero".

	//TODO 2: use player.name in this message, like "Welcome, Ada! You wake up..."

	//confirm() gives back true (OK) or false (Cancel), so choice is a boolean.
	//we use const because we won't change this variable later on.
	const choice = confirm(
		"You wake up in a dark room. There are two doors in front of you. Click OK to go left, or Cancel to go right.",
	);

	//use an if statement to check the player's choice and call the appropriate function.
	if (choice) {
		chooseLeftDoor();
	} else {
		chooseRightDoor();
	}
}

function chooseLeftDoor() {
	//we can call this variable choice again because it's a different variable that only exists inside this function.
	const choice = confirm(
		"You enter the left door and find a treasure chest. Click OK to open it, or Cancel to keep walking.",
	);
	if (choice) {
		openTreasureChest();
	} else {
		leaveTreasureChest();
	}
}

function openTreasureChest() {
	//EXAMPLE: push() adds items to the end of the inventory array.
	player.inventory.push("gold coins");
	player.inventory.push("key");

	alert("You open the treasure chest and find gold coins and a rusty key!");
	showStats();
	chooseLockedDoor();
}

function leaveTreasureChest() {
	alert(
		"You decide to leave the treasure chest alone and continue on your adventure.",
	);
	chooseLockedDoor();
}

function chooseLockedDoor() {
	alert("You reach a heavy iron door with a keyhole.");

	//TODO 3: right now the door always opens.
	//use an if statement with player.inventory.includes("key")
	//so the player only wins if they picked up the key.
	//otherwise, alert that the door is locked and send them back with chooseLeftDoor().
	alert("The door swings open. Sunlight! You escaped! You win!");
}

function chooseRightDoor() {
	const choice = confirm(
		"You enter the right door and find a sleeping dragon. Click OK to try to sneak past it, or Cancel to go back.",
	);
	if (choice) {
		sneakPastDragon();
	} else {
		chooseLeftDoor();
	}
}

function sneakPastDragon() {
	//TODO 4: instead of always losing, subtract some damage from player.health (try -= 40).
	//alert how much health the player has left.

	//TODO 5: if player.health is 0 or below, alert "Game over".
	//otherwise, send the player somewhere else, like chooseLeftDoor().
	alert(
		"You try to sneak past the dragon, but it wakes up and eats you! Game over.",
	);
}

//call showStats() anywhere you want the player to see how they're doing.
function showStats() {
	//TODO 6: alert the player's name, health, and inventory.
	//example: "Ada | Health: 60 | Inventory: gold coins,key"
}

//TODO 7: write a new room function here.
//it should push a new item into player.inventory,
//and another function should call it so the player can get there.
