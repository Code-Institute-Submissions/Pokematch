/* Card calling */
function cardLevels() {
    document.getElementById("league-levels").style.display = "none";
    document.getElementById("game-rules1").style.display = "none";
    document.getElementById("game-rules2").style.display = "none";
    document.getElementById("game-rules3").style.display = "none";
    document.getElementById("game-rules4").style.display = "none";
    document.getElementById("game-rules5").style.display = "none";
    document.getElementById("league-pokeball").style.display = "none";
    document.getElementById("league-greatball").style.display = "none";
    document.getElementById("league-masterball").style.display = "none";
}

/* On initiate */

function initialising() {
    cardLevels();
    document.getElementById("league-levels").style.display = "block";
}

window.onload = initialising;

/* How to play Cards */

$("#rules").click(function() {
    cardLevels();
    document.getElementById("game-rules1").style.display = "block";
});

$("#next_button1").click(function() {
    cardLevels();
    document.getElementById("game-rules2").style.display = "block";
});

$("#next_button2").click(function() {
    cardLevels();
    document.getElementById("game-rules3").style.display = "block";
});

$("#next_button3").click(function() {
    cardLevels();
    document.getElementById("game-rules4").style.display = "block";
});

$("#next_button4").click(function() {
    cardLevels();
    document.getElementById("game-rules5").style.display = "block";
});

$("#finish_to_title").click(function() {
    cardLevels();
    document.getElementById("league-levels").style.display = "block";
});

$(".return-button").click(function() {
    difficultySelect = undefined;
    cardLevels();
    document.getElementById("league-levels").style.display = "block";
});

/* Game mode difficulty initialiser */

let difficultySelect = null;
$(".ball-levels").click(function() {
    difficultySelect = $(this).attr("id");
});

$("#start").click(function() {
    cardLevels();

    if (difficultySelect == "pokeball") {
        document.getElementById("league-pokeball").style.display = "block";
    } else if (difficultySelect == "greatball") {
        document.getElementById("league-greatball").style.display = "block";
    } else if (difficultySelect == "masterball") {
        document.getElementById("league-masterball").style.display = "block";
    } else {
        document.getElementById("league-levels").style.display = "block";
    }
});

