var userCount = 0;
var randomNumber = 0;
var currentScore = 0;


var plants = {
  bamboo: {
    name: "bamboo",
    value: 0
  },
  airplant: {
    name: "airplant",
    value: 0
  },
  jade: {
    name: "jade",
    value: 0
  },
  spider: {
    name: "spider",
    value: 0
  }
}
// setting up a method to retrieve a random numnber
plants.bamboo.value = random();
plants.jade.value = random();
plants.spider.value = random();
plants.airplant.value = random();

// Set up a start for the game; create a function

function addValue(clickedPlant) {
  currentScore += clickedPlant.value;

  $("#your-score").text(currentScore)
}

function random() {
  return Math.floor(Math.random() * 12) + 1;

}



function listen() {
  document.onkeyup = userCount;

}

function startGame() {
  // get a random number to populate the goal number
  randomNumber = randomTotal();
  plants.bamboo.value = random();
  plants.jade.value = random();
  plants.spider.value = random();
  plants.airplant.value = random();
}

// create function to capture clicks for the pictures.
//add the addValue to it and set it equal to pics



function randomTotal() {
  randomNumber = (Math.floor(Math.random() * 120) + 19);
  return Math.floor(Math.random() * 120) + 19;

  function userCount() {
    userCount = (p1 + p2 + p3 + p4);
    if (userCount < randomNumber) {
      listen();

      if (userCount = randomNumber) {
        wins++;
        //Help  $("#clear").on("click", function (reset);

        // send alert saying you!

      } else if (userCount > randomNumber) {
        // reset
        // send alert saying you lost!
        losses++;
      }
    }

  }

}
//function reset() {
wins = 0;
losses = 0;
// $("#clear").on("click", function (event) {
//      $("#display").empty();
//     }