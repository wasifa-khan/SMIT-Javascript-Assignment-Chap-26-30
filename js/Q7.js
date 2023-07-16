var userInput = prompt("Enter your weight in kilograms:");
var weight = parseFloat(userInput.replace(/[^\d.]/g, ''));
document.write("The weight of user is: " + weight + " kilograms");
