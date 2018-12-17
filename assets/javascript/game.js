var userCount = 0;
var randomNumber = 0;
var plantNumber = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;





function plant1() {
  p1 = (Math.floor(Math.random() * 12) + 1);
  //document.onkeyup = function (userCount)
}


function plant2() {
  p2 = (Math.floor(Math.random() * 12) + 1);
}

function plant3() {
  p3 = (Math.floor(Math.random() * 12) + 1);
}

function plant4() {
  p4 = (Math.floor(Math.random() * 12) + 1);
}

function listen() {
  document.onkeyup = userCount;

}

function randomTotal() {
  randomNumber = (Math.floor(Math.random() * 120) + 19);

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