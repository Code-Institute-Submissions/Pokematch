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

/* button behaviour */ 
$('.button').hover(function(){          
    $(this).css('cursor','pointer');
    return false;       
});

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

 $("#game-rules1").click(function() {
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

 $("#game-rules2").click(function() {
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

$("#game-rules3").click(function() {
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

$("#game-rules4").click(function() {
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

$("#game-rules5").click(function() {
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