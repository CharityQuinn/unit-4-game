var userCount = 0;
var randomNumber = 0;
var currentScore = 0;
var userTotal = 0;
var wins = 0;
var losses = 0;
var ball = 0;
var ice = 0;
var rocks = 0;
var orangeIce = 0;
var randomTotal = 0;

console.log("Javascript page started");

gameTotal();

// get a random number to populate the goal number
function gameTotal() {
  randomNumber = Math.floor((Math.random() * 120) + 19);
  console.log("This is the number to get " + randomNumber);
  $(".card-text").html("<str>Number to get to is: </str>" + randomNumber);
  $("#your-score").html("Your total is: " + userTotal);
}


// setting up a method to retrieve a random numnber for plants
function random() {
  return Math.floor((Math.random() * 12) + 1);
}

console.log("This is the gameTotal " + randomNumber);
ball = random();
orangeIce = random();
rocks = random();
ice = random();


console.log("This is ball's value " + ball);
console.log("This is ice's value " + ice);
console.log("This is orangeIce's value " + orangeIce);
console.log("This is rock's value " + rocks);
console.log("This is randomNumber's total " + randomNumber);
listen();



// create function to capture clicks for the pictures.
function listen() {
  console.log("In listen, waiting for click")
  document.getElementById("#ball").onclick = processClicks(ball);
  
  document.getElementById("#orangeIce").onclick = processClicks("orangeIce");
  
  document.getElementById("#rocks").onclick = processClicks(rocks);
  document.getElementById("#ice").onclick = processClicks(ice);
}


function processClicks() {
  var x;
  if (x === ball) {
    userTotal = userTotal + ball;
    $("#your-score").html("Your total is: " + userTotal);
    evalualt(userTotal);
  }


  if (x === ice) {
    userTotal = userTotal + ice;
    $("#your-score").html("Your total is: " + userTotal);
    evaluate(userTotal);
  }


  if (x === orangeIce) {
    userTotal = userTotal + orangeIce;
    $("#your-score").html("Your total is: " + userTotal);
    evaluate(userTotal);
  }


  if (x === rocks) {
    userTotal = userTotal + rocks;
    $("#your-score").html("Your total is: " + userTotal);
    evaluate(userTotal);
  }

}


function evaluate() {
  if (userTotal = 0) {
    console.log("Press a picture to get started");
    listen();
  } else if (userTotal < randomNumber) {
    console.log("Inside the count user has " + userTotal + " They need to get to " + randomNumber);
    listen();
  }
  if (userTotal === randomNumber) {
    wins++;
    alert("You have won!")
  } else if (userTotal > randomNumber) {
    alert("You have lost.")
    losses++;
    reset();
  }

}



function reset() {
  wins = 0;
  losses = 0;
  $("#clear").on("click", function (event) {
    $("#display").empty();
  })
}