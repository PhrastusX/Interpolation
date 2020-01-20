
// Use string interpolation to refactor this code.
/*const countdownFive = "There are 5 seconds left until liftoff!"
const countdownFour = "There are 4 seconds left until liftoff!"
const countdownThree = "There are 3 seconds left until liftoff!"
const countdownTwo = "There are 2 seconds left until liftoff!"
const countdownOne = "There is 1 second left until liftoff!"
const liftOff = "Lift Off!"*/

let seconds = 5
for (let seconds = 5; seconds >=0; seconds--) {
  if (seconds >= 1) {
    console.log (`There are ${seconds} seconds left until liftoff!`)
  
  } else {
    console.log ("Lift Off!")
  }
  
  
}




// In your own words, write a brief description of when interpolation can be useful and how it works with variables.