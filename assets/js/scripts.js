/*Variables*/
let level = null;
let levelPokeballImage = null;

var gameOverTimer;

/*Randomised pokemon variables*/
var randomisedPokemon = [];

var previousPokemonName = null;
var previouspokeballNumber = null;
var previousPokemonImage = null;
var previousPokeballName = null;

var currentPokemonName = null;
var currentpokeballNumber = null;
var currentPokemonImage = null;
var currentPokeballName = null;

var allMatchedPokemon = 0;
var numberOfPokemon = 0;

/*Sound variables*/
var isMuted;
var ballOpenSound = new Audio("./assets/sounds/SFX_BALL_POOF.wav");
var ballCloseSound = new Audio("./assets/sounds/SFX_BALL_TOSS.wav");
var matchingSound = new Audio("./assets/sounds/SFX_GET_ITEM_1.wav");
var winSound = new Audio("./assets/sounds/SFX_LEVEL_UP.wav");
var loseSound = new Audio("./assets/sounds/SFX_SHRINK.wav");
var choose = new Audio("./assets/sounds/SFX_PRESS_AB.wav");
var selected = new Audio("./assets/sounds/SFX_PURCHASE.wav")
var denied = new Audio("./assets/sounds/DENIED.wav")

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

$(".ball-levels").css("cursor", "pointer");     // iOS fix
/* League difficulty */
$(".ball-levels").click(function () {
    
    $(".ball-levels").css("opacity", "50%");
    choose.play();
    $(this).css("opacity", "100%");

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
  $("#league-levels").show();

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

    

    switch (level) {
        case "pokeball":
            numberOfPokemon = 3;
            levelPokeballImage = "Poké_Ball_Sprite.png";
            break;
        case "greatball":
            numberOfPokemon = 4;
            levelPokeballImage = "Great_Ball_Sprite.png";
            break;
        case "masterball":
            numberOfPokemon = 6;
            levelPokeballImage = "Master_Ball_Sprite.png";
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
    $("#" + pokeballName).data("pokeball-number", i+1);
    $("#" + pokeballName).data("pokemon-img", randomisedPokemon[i].img);
  }

  /* Pokeball clicked */
  $(".ball-match").click(function () { 
    


    if($(this).data("matched") == "true"){
        return;
    }

    ballOpenSound.play();
      
    $(this).effect( "bounce", "slow" );
      
    var isDisabled = $(this).attr("disabled") == "disabled";
    if (isDisabled) { return; }

    currentPokemonName = $(this).data("pokemon-name");
    currentpokeballNumber = $(this).data("pokeball-number");
    currentPokemonImage = $(this).data("pokemon-img");
    currentPokeballName = $(this).attr("id");

    $(this).attr("src", currentPokemonImage);

    console.log("Prev: " + previousPokemonName + "" + previouspokeballNumber + ", Curr: " + currentPokemonName + currentpokeballNumber);


    if (previousPokemonName == null){
        // if no previous, first in sequence
      console.log("previousPokemonName is null");      
      previousPokemonName = currentPokemonName;
      previouspokeballNumber = currentpokeballNumber;
      previousPokeballName = $(this).attr("id");  
    }
    else if ((previousPokemonName == currentPokemonName) && (previouspokeballNumber != currentpokeballNumber)) {
      // match
      console.log("previousPokemonName matches currentPokemonName");
       $("#" + previousPokeballName).data("matched", "true");
       $("#" + currentPokeballName).data("matched", "true");
       
      $("#" + previousPokeballName).show();
      matchingSound.play();
      ballOpenSound.pause();

      $(this).show();

      allMatchedPokemon++;
      console.log(allMatchedPokemon);

      console.log

      previousPokemonName = null;
      previousPokeballName = null;

        // Win condition     
      if (allMatchedPokemon == numberOfPokemon)
      {
          matchingSound.pause();
          winSound.play();
        $(".ball-match").attr("disabled", "disabled");    // disable all pokeballs
        clearInterval(gameOverTimer);   // stop timer
            

        winTimer = setInterval(function () {            
          clearInterval(winTimer);
          
          $('#winModal').modal({
            backdrop: 'static',
            keyboard: false
        });
            $(".ball-match").removeAttr("disabled");   
        }, 1000);
    }


    
}
    else if (previousPokemonName != currentPokemonName) {
        
    //no match
        console.log("previousPokemonName does not match currentPokemonName");

        $(".ball-match").attr("disabled", "disabled");
        ballCloseSound.play();
        ballOpenSound.pause();
      let pokeballHideTimer = setInterval(function () {
        clearInterval(pokeballHideTimer);
        console.log("timer up");

        $("#" + previousPokeballName).attr("src", "./assets/images/" + levelPokeballImage);
        $("#" + currentPokeballName).attr("src", "./assets/images/" + levelPokeballImage);

        previousPokemonName = null;
        previousPokemonImage = null;
        previousPokeballName = null;
  
        currentPokemonName = null;
        currentPokemonImage = null;
        currentPokeballName = null;

        $(".ball-match").removeAttr("disabled");    
    }, 1200);

}

}); 

};

/* Game start */
$("#start").click(function () {

  
    
  if (level == null){
      alert("please select a difficulty");
      selected.pause();
      denied.play();
      return;  
  }
  else {

  selected.play();
  resetLevels();
  initialiseLevel(level);
  }
  
  /* Timer */ 
  
  //(used the following website to support with this: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
   
  let timeleft = 59;
  gameOverTimer = setInterval(function () {
    if (timeleft <= -1) {
        loseSound.play();
        clearInterval(gameOverTimer);
        
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

$( document ).ready(function() {

    /* Sound effects */
    $("#volume-up").click(function (){
        $(this).find("i").toggleClass("fa-volume-up fa-volume-mute");

        isMuted = $("#volume-up>i").attr("class") == "fas fa-volume-mute";

        console.log("Muted: " + isMuted);

        ballOpenSound.muted = isMuted;
        ballCloseSound.muted = isMuted;
        matchingSound.muted = isMuted;
        winSound.muted = isMuted; 
        loseSound.muted = isMuted;
    }); 

    
});