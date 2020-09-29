let level = null;

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

/* League difficulty */

$(".ball-levels").click(function () {

  level = $(this).attr("id");

});

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

var randomisedPokemon = [];

var previousPokemonName = null;
var previousPokemonimg = null;
var previousPokeballName = null;

/* Game mode difficulty initialiser */
function initialiseLevel(level) {

    if (level != null) {
        // show level
        $("#league-" + level).show();
    }
    else
    {
        // show level select and return
        $("#league-levels").show();
        return;
    }

    var numberOfPokemon = 0;

    switch (level) {
        case "pokeball":
            numberOfPokemon = 3;      
            break;
        case "greatball":
            numberOfPokemon = 4;
            break;
        case "masterball":
            numberOfPokemon = 6;
            break;
    }

    let pokemon = randomisePokemon(numberOfPokemon);

    // flatten to single array of (num of pokeballs)
  for (var i=0; i<pokemon.length; i++) {
    randomisedPokemon.push(pokemon[i]);
    randomisedPokemon.push(pokemon[i]);
  }
  randomisedPokemon = randomisedPokemon.sort(() => Math.random() - 0.5);

  // assign pokemon titles (tooltips) to pokeballs - testing purposes only
  for (var i=0; i<randomisedPokemon.length; i++) {
    var pokeballName = level+(i+1);
    $("#" + pokeballName).attr("title", randomisedPokemon[i].name);
    $("#" + pokeballName).data("pokemon-name", randomisedPokemon[i].name);
    $("#" + pokeballName).data("pokemon-img", randomisedPokemon[i].img);
  }

  /* Remember the previous pokemon clicked */
  $(".ball-match").click(function () {    
    var currentDefaultPokeballImg = $(this).attr("src");
    console.log("currentDefaultPokeballImg: " + currentDefaultPokeballImg);
    

    var currentPokemonName = $(this).data("pokemon-name");
    var currentPokeballimg = $(this).data("pokemon-img");
    console.log("Current: " + currentPokemonName, " Previous: " + previousPokemonName);
    console.log("Current Pokeball Image: " +  currentPokeballimg);

    if (previousPokemonName == currentPokemonName){
        // match
      $(this).attr("src", currentPokeballimg).hide();
      $(this).attr("src", previousPokeballimg).hide();
      $("#" + previousPokeballName).attr("src", currentPokeballimg);

    }

    $(this).attr("src", currentPokeballimg);
  
    previousPokemonName = currentPokemonName;
}); 

};

/* Game start */

$("#start").click(function () {

  resetLevels();
  initialiseLevel(level);
  
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

/* Randomise Pokemon in Pokeballs */

function randomisePokemon(noOfPokemon) {

  var pokeballArray = allPokemon.slice(0, noOfPokemon).map(
    function () { return this.splice(Math.floor(Math.random() * this.length), 1)[0]; },
    allPokemon.slice()
  );
  
  console.log(pokeballArray);

  return pokeballArray;

};


    /* Lose Modal */
$(".modalReturn").click(function () {
  $('#timeUpModal').modal("hide");
  resetLevels();
  document.getElementById("league-levels").style.display = "block";
});
$(".time-remaining").html(" " + 60 + " ");
$(".progressBar").attr("value", "0")