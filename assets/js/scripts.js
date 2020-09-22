/* Character Arrays */

const allPokemon=[{
        name:"Pikachu",
        img:"./assets/images/pikachu.png"
    },
    {
        name:"Eevee",
        img:"./assets/images/eevee.png"
    },
        {
        name:"Cyndaquil",
        img:"./assets/images/cyndaquil.png"
    },
        {
        name:"Bulbasaur",
        img:"./assets/images/bulbasaur.png"
    },
        {
        name:"Horsea",
        img:"./assets/images/horsea.png"
    },
        {
        name:"Mew",
        img:"./assets/images/mew.png"
    },
        {
        name:"Suicune",
        img:"./assets/images/suicune.png"
    },
        {
        name:"Banette",
        img:"./assets/images/banette.png"
    }
];

/* Card calling */

function resetLevels() {

  $(".game-box-card").hide();

}

/* On initialise */

function initialise() {

  resetLevels();
  document.getElementById("league-levels").style.display = "block";

}

window.onload = initialise;

/* How to play Cards */

$("#rules").click(function () {
  resetLevels();
  document.getElementById("game-rules1").style.display = "block";
});

$("#next_button1").click(function () {
  resetLevels();
  document.getElementById("game-rules2").style.display = "block";
});

$("#next_button2").click(function () {
  resetLevels();
  document.getElementById("game-rules3").style.display = "block";
});

$("#next_button3").click(function () {
  resetLevels();
  document.getElementById("game-rules4").style.display = "block";
});

$("#next_button4").click(function () {
  resetLevels();
  document.getElementById("game-rules5").style.display = "block";
});

$("#finish_to_title").click(function () {
  resetLevels();
  document.getElementById("league-levels").style.display = "block";
});

$(".return-button").click(function () {
  difficultySelect = undefined;
  resetLevels();
  document.getElementById("league-levels").style.display = "block"
});

/* Game mode difficulty initialiser */

let difficultySelect = null;
$(".ball-levels").click(function () {
  difficultySelect = $(this).attr("id");
});

/* Randomise Pokemon in Pokeballs */

function randomiseAllPokemon(noOfPokemon) {
    var pokeballArray = allPokemon.slice(0, noOfPokemon).map(function () { 
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, 
    allPokemon.slice());
    console.log(pokeballArray);

 

  // remove the balls when clicked
$(".ball-match").click(function(){
    console.log("this was clicked");

    //$(this).removeAttr("src");    
    
    //choose random elements from new array for ball IDs e.g. pokeball1    (for i+)
    const randomPokemon = pokeballArray[Math.floor(Math.random() * pokeballArray.length)];
    console.log(randomPokemon);
    
    $(this).attr("src", randomPokemon.img);

    //$(this).on(randomPokemon).attr("img");
          
});
}; 

/* Game start */
$("#start").click(function () {
  
  resetLevels();
  
  if (difficultySelect == "pokeball") {
    document.getElementById("league-pokeball").style.display = "block";
    randomiseAllPokemon(3);
  } else if (difficultySelect == "greatball") {
    document.getElementById("league-greatball").style.display = "block";    
    randomiseAllPokemon(4);
  } else if (difficultySelect == "masterball") {
    document.getElementById("league-masterball").style.display = "block";
    randomiseAllPokemon(6);
  } else {
    document.getElementById("league-levels").style.display = "block";
    return;
  }

  // Timer
  let timeleft = 59;
  let downloadTimer = setInterval(function () {
    if (timeleft <= -1) {
        clearInterval(downloadTimer);
        $(".time-remaining").html(" " + 60 + " ");
        document.getElementById("pokeProgressBar").value = 0;
        document.getElementById("greatProgressBar").value = 0;
        document.getElementById("masterProgressBar").value = 0;
        $('#timeUpModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    } else {
        console.log("Time: " + timeleft);
        $(".time-remaining").html(" " + timeleft + " ");
        document.getElementById("pokeProgressBar").value = 59 - timeleft;
        document.getElementById("greatProgressBar").value = 59 - timeleft;
        document.getElementById("masterProgressBar").value = 59 - timeleft;
      timeleft -= 1;
    }
  }, 1000);   
});

/* Lose Modal */
$(".modalReturn").click(function () {
  $('#timeUpModal').modal("hide");
  resetLevels();
  document.getElementById("league-levels").style.display = "block";
});
$(".time-remaining").html(" " + 60 + " ");
$(".progressBar").attr("value", "0")