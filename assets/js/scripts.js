/* Character Arrays */

const characterArray=[{
        name:"Pikachu",
        img:"../../assets/images/pikachu.png"
    },
    {
        name:"Eevee",
        img:"../../assets/images/eevee.png"
    },
        {
        name:"Cyndaquil",
        img:"../../assets/images/cyndaquil.png"
    },
        {
        name:"Bulbasaur",
        img:"../../assets/images/bulbasaur.png"
    },
        {
        name:"Horsea",
        img:"../../assets/images/horsea.png"
    },
        {
        name:"Mew",
        img:"../../assets/images/mew.png"
    },
        {
        name:"Suicune",
        img:"../../assets/images/suicune.png"
    },
        {
        name:"Banette",
        img:"../../assets/images/banette.png"
    }
];

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

$("#rules").click(function () {
  cardLevels();
  document.getElementById("game-rules1").style.display = "block";
});

$("#next_button1").click(function () {
  cardLevels();
  document.getElementById("game-rules2").style.display = "block";
});

$("#next_button2").click(function () {
  cardLevels();
  document.getElementById("game-rules3").style.display = "block";
});

$("#next_button3").click(function () {
  cardLevels();
  document.getElementById("game-rules4").style.display = "block";
});

$("#next_button4").click(function () {
  cardLevels();
  document.getElementById("game-rules5").style.display = "block";
});

$("#finish_to_title").click(function () {
  cardLevels();
  document.getElementById("league-levels").style.display = "block";
});

$(".return-button").click(function () {
  difficultySelect = undefined;
  cardLevels();
  document.getElementById("league-levels").style.display = "block"
});

/* Game mode difficulty initialiser */

let difficultySelect = null;
$(".ball-levels").click(function () {
  difficultySelect = $(this).attr("id");
});

function randomisePokemon(noOfPokemon) {
    pokeballArray = characterArray.slice(0, noOfPokemon).map(function () { 
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, 
    characterArray.slice());

    console.log(pokeballArray);
        
    // choose random elements from new array for ball IDs e.g. pokeball1    (for i+)
       
    //while loops for   

}; 


$("#start").click(function () {
  
  cardLevels();
  
  if (difficultySelect == "pokeball") {
    document.getElementById("league-pokeball").style.display = "block";
    randomisePokemon(3);
  } else if (difficultySelect == "greatball") {
    document.getElementById("league-greatball").style.display = "block";    
    randomisePokemon(4);
  } else if (difficultySelect == "masterball") {
    document.getElementById("league-masterball").style.display = "block";
    randomisePokemon(6);
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
   
  /* Matching Game rules */
});

/* Lose Modal */
$(".modalReturn").click(function () {
    $('#timeUpModal').modal("hide");
  cardLevels();
  document.getElementById("league-levels").style.display = "block"; 
});
$(".time-remaining").html(" " + 60 + " ");
  document.getElementById("pokeProgressBar").value = 0;
    document.getElementById("greatProgressBar").value = 0;
    document.getElementById("masterProgressBar").value = 0;



/* Game Rules */


