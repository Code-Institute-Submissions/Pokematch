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
var ballOpenSound = new Audio("./assets/sounds/ballout.wav");
var ballCloseSound = new Audio("./assets/sounds/ballin.wav");
var matchingSound = new Audio("./assets/sounds/found.wav");
var winSound = new Audio("./assets/sounds/level.wav");
var loseSound = new Audio("./assets/sounds/lose.wav");
var choose = new Audio("./assets/sounds/push.wav");
var selected = new Audio("./assets/sounds/select.wav");
var denied = new Audio("./assets/sounds/wrong.wav");
var rulesOn = new Audio("./assets/sounds/switchon.wav");
var rulesOff = new Audio("./assets/sounds/switchoff.wav");

/* Character Arrays */
const allPokemon = [{
        name: "Pikachu",
        img: "./assets/images/pikachu.png"
    },
    {
        name: "Eevee",
        img: "./assets/images/eevee.png"
    },
    {
        name: "Cyndaquil",
        img: "./assets/images/cyndaquil.png"
    },
    {
        name: "Bulbasaur",
        img: "./assets/images/bulbasaur.png"
    },
    {
        name: "Horsea",
        img: "./assets/images/horsea.png"
    },
    {
        name: "Mew",
        img: "./assets/images/mew.png"
    },
    {
        name: "Suicune",
        img: "./assets/images/suicune.png"
    },
    {
        name: "Banette",
        img: "./assets/images/banette.png"
    }
];

$(".ball-levels").css("cursor", "pointer"); // iOS fix
/* League difficulty */
$(".ball-levels").click(function() {

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
$("#rules").click(function() {
    resetLevels();
    document.getElementById("game-rules1").style.display = "block";
    rulesOn.play();
});

$("#next_button1").click(function() {
    resetLevels();
    document.getElementById("game-rules2").style.display = "block";
    choose.play();
});

$("#next_button2").click(function() {
    resetLevels();
    document.getElementById("game-rules3").style.display = "block";
    choose.play();
});

$("#next_button3").click(function() {
    resetLevels();
    document.getElementById("game-rules4").style.display = "block";
    choose.play();
});

$("#next_button4").click(function() {
    resetLevels();
    document.getElementById("game-rules5").style.display = "block";
    choose.play();
});

$("#finish_to_title").click(function() {
    resetLevels();
    document.getElementById("league-levels").style.display = "block";
    rulesOff.play();
});

$(".return-button").click(function() {
    difficultySelect = undefined;
    resetLevels();
    document.getElementById("league-levels").style.display = "block";
    choose.play();
});

/* Game mode difficulty initialiser */
function initialiseLevel(level) {

    if (level != null) {
        // show level
        $("#league-" + level).show();
    } else {
        // show level select and return
        $("#league-levels").show();
        return;

    }



    switch (level) {
        case "pokeball":
            numberOfPokemon = 3;
            levelPokeballImage = "pball.png";
            break;
        case "greatball":
            numberOfPokemon = 4;
            levelPokeballImage = "gball.png";
            break;
        case "masterball":
            numberOfPokemon = 6;
            levelPokeballImage = "mball.png";
            break;
    }

    let pokemon = randomisePokemon(numberOfPokemon);

    // flatten to single array of (num of pokeballs)
    for (let i = 0; i < pokemon.length; i++) {
        randomisedPokemon.push(pokemon[i]);
        randomisedPokemon.push(pokemon[i]);
    }
    randomisedPokemon = randomisedPokemon.sort(() => Math.random() - 0.5);

    // assign pokemon titles (tooltips) to pokeballs - testing purposes only
    for (let i = 0; i < randomisedPokemon.length; i++) {
        var pokeballName = level + (i + 1);
        $("#" + pokeballName).attr("title", randomisedPokemon[i].name);
        $("#" + pokeballName).data("pokemon-name", randomisedPokemon[i].name);
        $("#" + pokeballName).data("pokeball-number", i + 1);
        $("#" + pokeballName).data("pokemon-img", randomisedPokemon[i].img);
    }

    /* Pokeball clicked */
    $(".ball-match").click(function() {



        if ($(this).data("matched") == "true") {
            return;
        }
        
        ballOpenSound.play();

        $(this).effect("bounce", "slow");

        var isDisabled = $(this).attr("disabled") == "disabled";
        if (isDisabled) {
            return;
        }

        currentPokemonName = $(this).data("pokemon-name");
        currentpokeballNumber = $(this).data("pokeball-number");
        currentPokemonImage = $(this).data("pokemon-img");
        currentPokeballName = $(this).attr("id");

        $(this).attr("src", currentPokemonImage);

        


        if (previousPokemonName == null) {
            // if no previous, first in sequence
            previousPokemonName = currentPokemonName;
            previouspokeballNumber = currentpokeballNumber;
            previousPokeballName = $(this).attr("id");
        } else if ((previousPokemonName == currentPokemonName) && (previouspokeballNumber != currentpokeballNumber)) {
            // match
            $("#" + previousPokeballName).data("matched", "true");
            $("#" + currentPokeballName).data("matched", "true");

            $("#" + previousPokeballName).show();
            matchingSound.play();
            ballOpenSound.pause();

            $(this).show();

            allMatchedPokemon++;

            previousPokemonName = null;
            previousPokeballName = null;

            // Win condition     
            if (allMatchedPokemon == numberOfPokemon) {
                matchingSound.pause();
                winSound.play();
                $(".ball-match").attr("disabled", "disabled"); // disable all pokeballs
                clearInterval(gameOverTimer); // stop timer


                winTimer = setInterval(function() {
                    clearInterval(winTimer);

                    $('#winModal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                    $(".ball-match").removeAttr("disabled");
                }, 1000);
            }



        } else if (previousPokemonName != currentPokemonName) {

            //no match

            $(".ball-match").attr("disabled", "disabled");
            ballOpenSound.pause();
            ballCloseSound.play();

            let pokeballHideTimer = setInterval(function() {
                clearInterval(pokeballHideTimer);

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

}

/* Game start */
$("#start").click(() => {



    if (level == null) {
        denied.play();
        alert("please select a difficulty");
        return;
    } else {

        selected.play();
        resetLevels();
        initialiseLevel(level);
    }

    /* Timer */

    //(used the following website to support with this: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

    let timeleft = 59;
    gameOverTimer = setInterval(function() {
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
        function() {
            return this.splice(Math.floor(Math.random() * this.length), 1)[0];
        },
        allPokemon.slice()
    );


    return pokeballArray;

}


/* Lose Modal */
$(".modalReturn").click(function() {
    $('#timeUpModal').modal("hide");
    resetLevels();
    document.getElementById("league-levels").style.display = "block";
});
$(".time-remaining").html(" " + 60 + " ");
$(".progressBar").attr("value", "0");

$(document).ready(function() {

    /* Sound effects */
    $("#volume-up").click(function() {
        $(this).find("i").toggleClass("fa-volume-up fa-volume-mute");

        isMuted = $("#volume-up>i").attr("class") == "fas fa-volume-mute";

        ballOpenSound.muted = isMuted;
        ballCloseSound.muted = isMuted;
        matchingSound.muted = isMuted;
        winSound.muted = isMuted;
        loseSound.muted = isMuted;
        selected.muted = isMuted;
        denied.muted = isMuted;
        choose.muted = isMuted;
        rulesOn.muted = isMuted;
        rulesOff.muted = isMuted;
    });


});