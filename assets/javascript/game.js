$(document).ready(function () {

    // Create variables for the start of the game
    let wins = 0;
    let losses = 0;
    let hops = 0;

    // Print these variables at the start of each new game
    function newGame() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#hops").text("Number of Hops: " + hops);
    };

    //Select a random number for the game (what our goal is)
    var Random = Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(Random);

    //This function resets the random number for each game
    function randomNumber() {
        Random = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber").text(Random);
    }

    //This function sets the value of the bunny clicked on
    function randomHops () {
        $(".bunny").each(function () {
            $(this).attr("data-hopvalue", Math.floor(Math.random() * 12) +1);
        });
    }

    //This runs the new gme function and randomNumber function at the start of a game
    newGame();
    randomNumber();
    randomHops();
    $(".bunny").on("click", function() {
        var hopValue = ($(this).attr("data-hopvalue"));
        hopValue = parseInt(hopValue);
        hops += hopValue;
        $("#hops").text("Number of Hops: " + hops);

        if (hops === Random) {
            alert("You Win!");
            hops = 0;
            wins++;
            randomNumber();
            newGame();
            randomHops();
        }

        else if (hops >= Random) {
            alert("You Lose!");
            hops = 0;
            losses++;
            randomNumber();
            newGame();
            randomHops();
        }
    })
});