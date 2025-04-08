// coffeeMaker.js

// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to simulate boiling water
async function boilWater() {
    console.log("Boiling water...");
    await delay(3000); // 3-second delay
    return "Hot Water";
}

// Function to simulate brewing coffee
async function brewCoffee(water) {
    console.log(`Brewing coffee with ${water}...`);
    await delay(2000); // 2-second delay
    return "Brewed Coffee";
}

// Function to simulate pouring coffee into a cup
async function pourIntoCup(coffee) {
    console.log(`Pouring ${coffee} into cup...`);
    await delay(1000); // 1-second delay
    return "Cup of Coffee";
}

// Function to serve the coffee
async function serveCoffee(cup) {
    console.log(`Your ${cup} is ready! Enjoy!`);
}

// Function to make coffee in sequence
async function makeCoffee() {
    const water = await boilWater();               // Step 1: Boil water
    const coffee = await brewCoffee(water);       // Step 2: Brew coffee
    const cup = await pourIntoCup(coffee);       // Step 3: Pour into cup
    await serveCoffee(cup);                       // Step 4: Serve coffee
}

// Call the makeCoffee function to start the process
makeCoffee();