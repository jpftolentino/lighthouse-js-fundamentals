var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of the ingredients:
console.log("While Loop:");
var counter = 0;

while (counter < ingredients.length) {
  counter++
  console.log(ingredients[counter]);
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nFor Loop:");
for(var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents backwards:
console.log("\nBackwards for Loop:");
for(j = (ingredients.length - 1); j > -1; j--){
  console.log(ingredients[j]);
}
