const brain = require('brain.js');

const network = new brain.NeuralNetwork();

/*
We have football teams playing each other and the ai 
decides who will more likely win between team 1 and 4. 
*/

network.train([
  { input: [1, 2], output: [1] },   // Team 2 wins
  { input: [1, 3], output: [1] },   // Team 3 wins
  { input: [2, 3], output: [0] },   // Team 2 wins
  { input: [2, 4], output: [1] }    // Team 4 wins
]);

const output = network.run([4, 3]); // team 4 should be winning!

console.log(`Change of winning: ${output}`);