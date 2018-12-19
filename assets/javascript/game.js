var userCount = 0;
var randomNumber = 0;
var currentScore = 0;

var ball = 0;
var ice = 0;
var rocks = 0;
var orangeIce = 0;
var randomTotal = 0;






function gameTotal() {

  return Math.floor(Math.random() * 120) + 19;
}
$(".card-text").textContent = randomNumber;


function random() {
  return Math.floor(Math.random() * 12) + 1;
}


function startGame() {
  // get a random number to populate the goal number
  // setting up a method to retrieve a random numnber for plants

  randomNumber = gameTotal();
  ball = random();
  orangeIce = random();
  rocks = random();
  ice = random();

}

// create function to capture clicks for the pictures.
//add the addValue to it and set it equal to pics
function clickedCrystal() {

  userCount = (ball + orangeIce + rocks + ice)

  //$(#your - score) = userCount;
  console.log(userCount);
  console.log(this);
  return this();

}
console.log(userCount);
document.getElementById("ball").addEventListener("click", startGame(ball));
document.getElementById("ice").addEventListener("click", startGame(ice));
document.getElementById("orangeIce").addEventListener("click", startGame(orangeIce));
document.getElementById("rocks").addEventListener("click", startGame(rocks));
$userCount.innerHTML = clickedCrystal();


console.log("This is ball's total " + ball);
console.log("This is ice's total " + ice);
console.log("This is orangeIce's total " + orangeIce);
console.log("This is rock's total " + rocks);
console.log("This is randomNumber's total " + randomNumber);
console.log("This is userCount's total " + userCount);



function userCount() {
  userCount = (p1 + p2 + p3 + p4);
  if (userCount < randomNumber) {
    $("#your-score").textContent = randomNumber;
    clickedCrystal();

    if (userCount === randomNumber) {
      wins++;
     alert("You have won!")


      }
      else if (userCount > randomNumber) {
        reset()
        alert("You have lost.")

        losses++;
      }
      $("#your-score").textContent = randomNumber;
    }
  }



  function reset() {
    wins = 0;
    losses = 0;
    $("#clear").on("click", function (event) {
      $("#display").empty();
    })
  }