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
getClicks();
  console.log("This is ball's value " + ball);
  console.log("This is ice's value " + ice);
  console.log("This is orangeIce's value " + orangeIce);
  console.log("This is rock's value " + rocks);
  console.log("This is randomNumber's total " + randomNumber);


// create function to capture clicks for the pictures.
function getClicks() {
  console.log("Entering getClicks")
  document.getElementById("ball").onclick = function() {processClicks("ball")};
  document.getElementById("orangeIce").onclick = function() {processClicks("orangeIce")};
  document.getElementById("rocks").onclick = function() {processClicks("rocks")};
  document.getElementById("ice").onclick = function() {processClicks("ice")};
}
 function processClicks () {
   var x;
  if (x === "ball") {
    console.log("processClicks = " + ball);
    console.log("x = " + x   +"calling userNumber");
     userNumber (ball);
  }
  if (x === "orangeIce") {
    console.log("processClicks = " + orangeIce);
    userNumber (orangeIce);
  }
  if (x === "rocks") {
    console.log("processClicks = " + rocks);
    userNumber(rocks);
  }
  if (x === "ice") {
    console.log("processClicks = " + ice);
    userNumber(ice);
  }


 }
function userNumber() {

  $("#your-score").html("Your total is: " + userTotal);
  userTotal = (ball + ice + orangeIce + rocks);
  $("#your-score").html("Your total is: " + userTotal);

  if (userTotal = 0) {
  console.log("Press a picture to get started");
  } else if (userTotal < randomNumber) {

    console.log("Inside the count user has " + userTotal + " They need to get to " + randomNumber);
    if (userTotal < randomNumber) {
      getClicks ();
    }
    
  }
  if (userTotal === randomNumber) {
    wins++;
    alert("You have won!")
  } else if (userTotal > randomNumber) {
    reset()
    alert("You have lost.")

    losses++;
  }

}



//add the addValue to it and set it equal to pics
function clickedCrystal() {

  userCount = (ball + orangeIce + rocks + ice)
  $("#your-score").html("Your total is: " + userCount);
  console.log("This is the user's total inside clickedCrystal" + userCount);
  console.log("Sending userCount to function userNumber");
  userNumber(userCount);
}


function reset() {
  wins = 0;
  losses = 0;
  $("#clear").on("click", function (event) {
    $("#display").empty();
  })
}