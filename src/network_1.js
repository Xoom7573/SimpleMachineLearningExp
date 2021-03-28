const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
  { input: [0, 0, 0], output: [0] },    // Example Learning Data
  { input: [0, 0, 1], output: [0] },    // Example Learning Data
  { input: [0, 1, 1], output: [0] },    // Example Learning Data
  { input: [1, 0, 1], output: [1] },    // Example Learning Data
  { input: [1, 1, 1], output: [1] }     // Example Learning Data
]);

const output = network.run([1, 0, 0]);

console.log(`Change of output being 1: ${output}`);