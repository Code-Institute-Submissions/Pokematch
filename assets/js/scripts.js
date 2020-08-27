/* On initiate */  /* On initiate */  

 function initialising() {
  document.getElementById("league-levels").style.display = "block";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
};

window.onload = initialising;

/* How to play Slides */

    $("#rules").click(function() {
  document.getElementById("league-levels").style.display = "none";
  document.getElementById("game-rules1").style.display = "block";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

 $("#next_button1").click(function() {
  document.getElementById("league-levels").style.display = "none";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "block";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

 $("#next_button2").click(function() {
  document.getElementById("league-levels").style.display = "none";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "block";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

$("#next_button3").click(function() {
  document.getElementById("league-levels").style.display = "none";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "block";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

$("#next_button4").click(function() {
  document.getElementById("league-levels").style.display = "none";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "block";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

$("#finish_to_title").click(function() {
  document.getElementById("league-levels").style.display = "block";
  document.getElementById("game-rules1").style.display = "none";
  document.getElementById("game-rules2").style.display = "none";
  document.getElementById("game-rules3").style.display = "none";
  document.getElementById("game-rules4").style.display = "none";
  document.getElementById("game-rules5").style.display = "none";
  document.getElementById("league-pokeball").style.display = "none";
  document.getElementById("league-greatball").style.display = "none";
  document.getElementById("league-masterball").style.display = "none";
});

/* Game mode difficulty initialiser */ 

// pokeball (easy) mode



// greatball (normal) mode

//masterball (hard) mode
