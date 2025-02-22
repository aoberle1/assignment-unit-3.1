console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let foodArray = [ 'Pork Loin', 'Asparagus', 'Mashed Potatoes', 'Gravy' ];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log( 'Favorite foods are:', foodArray );


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log( 'Number of foods:', foodArray.length );

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log( 'Second animal listed is', animalArray[1] );

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log( 'Last animal listed is', animalArray[3] );

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

// Creating variable for lastAnimal equal to animalArray at the point of animalArray.length-1, 
// last item in an array is length of array minus 1
let lastAnimal = animalArray[animalArray.length-1]
console.log( 'Last animal listed is', lastAnimal );



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
foodArray.push( 'Garlic Bread' );
console.log( ' The new food array is', foodArray );

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = foodArray.pop();
console.log( 'Removed', removedFood, 'from the list' );
console.log( 'My favorite foods have been changed to', foodArray );

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foodArray.unshift( 'Garlic Bread' );
console.log( `Added a food item to the beginning of: ${foodArray}` );


// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
foodRemoved = foodArray.shift();
console.log( 'Removed', foodRemoved, 'from array.' ); 
console.log( 'Foods are now back to', foodArray );

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

// Using indexOf method to get specific value of second item in array
let replacedFood = foodArray.indexOf( 'Asparagus' );
// console.log is testing value of replacedFood to make sure it's correct
console.log( replacedFood );

// if statement for replacing Asparagus, !== -1 is checking to see if the value of replacedFood exists, 
// if it does not exist indexOf returns value of -1
if (replacedFood !== -1 ){
    foodArray[replacedFood] = 'Brussels Sprouts';
}
console.log( foodArray );

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
foodArray.sort();
foodArray.reverse();
console.log( foodArray );

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

// using toString method on array to convert
let arrayText = foodArray.toString();
console.log( arrayText );

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

// ... is spread operator - expands the arrays into all elements
let combinedArray = [ ...foodArray, ...animalArray ];
console.log( combinedArray );

// combining with concatenation just for comparison
let otherCombinedArray = [ foodArray + animalArray ];
console.log( otherCombinedArray );