var userCount = 0;
var randomNumber = 0;
var userTotal = 0;
var wins = 0;
var losses = 0;
var ball = 0;
var ice = 0;
var rocks = 0;
var orangeIce = 0;


console.log("Javascript page started");

gameTotal();

// get a random number to populate the goal number
function gameTotal() {
  randomNumber = Math.floor((Math.random() * 120) + 19);
  console.log("This is the number to get " + randomNumber);
}
  $(".card-text").html("<str>Number to get to is: </str>" + randomNumber);
  $("#your-score").html("Your total is: " + userTotal);



// setting up a method to retrieve a random numnber for plants
function random() {
  return Math.floor((Math.random() * 12) + 1);
}


ball = random();
orangeIce = random();
rocks = random();
ice = random();


console.log("This is the gameTotal " + randomNumber);
console.log("This is ball's value " + ball);
console.log("This is ice's value " + ice);
console.log("This is orangeIce's value " + orangeIce);
console.log("This is rock's value " + rocks);
console.log("This is randomNumber's total " + randomNumber);


$(document).ready(function () {

  // click for ball
  $("#ball").click(function () {
    userTotal = userTotal + ball;
    $("#your-score").html("Your total is: " + userTotal);
    console.log("Updating userTotal with the ball " + ball);
    if (userTotal === randomNumber) {
      wins++;
      alert("You have won!")
    } else if (userTotal > randomNumber) {
      stop;
      alert("You have lost.")
      losses++;
      reset();
    }
  
    
  });

  //click for ice
  $("#ice").on("click", function () {
    userTotal = userTotal + ice;
    $("#your-score").html("Your total is: " + userTotal);
    console.log("Updating userTotal with the ice " + ice);
    if (userTotal === randomNumber) {
      wins++;
      alert("You have won!")
    } else if (userTotal > randomNumber) {
      stop;
      alert("You have lost.")
      losses++;
      reset();
    }
  
    
  })

  //click for orangeice
  $("#orangeIce").on("click", function () {
    userTotal = userTotal + orangeIce;
    $("#your-score").html("Your total is: " + userTotal);
    console.log("Updating userTotal with the orangeIce " + orangeIce);
    if (userTotal === randomNumber) {
      wins++;
      alert("You have won!")
    } else if (userTotal > randomNumber) {
      stop;
      alert("You have lost.")
      losses++;
      reset();
    }
  
    
  })

  //click for rocks
  $("#rocks").on("click", function () {
    userTotal = userTotal + rocks;
    $("#your-score").html("Your total is: " + userTotal);
    console.log("Updating userTotal with the rocks " + rocks);
    if (userTotal === randomNumber) {
      wins++;
      alert("You have won!")
    } else if (userTotal > randomNumber) {
      alert("You have lost.")
      losses++;
      stop;
      reset();
    }
    
  })

  if (userTotal = 0) {
    console.log("Press a picture to get started");
    
  } else if (userTotal < randomNumber) {
    console.log("UserTotal is less than randomNum" + userTotal + " They need to get to " + randomNumber);
    
  }
 

})



function reset() {
  wins = 0;
  losses = 0;
  userTotal= 0;
  $("#clear").on("click", function (event) {
    $("#display").empty();
  });
}