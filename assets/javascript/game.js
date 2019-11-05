$(document).ready(function () {

    var stones = []
    var compPick = Math.floor(Math.random() * 100) + 20;
    console.log("compPick:" + compPick);
    $(".randomNumber").text(compPick);

    for (var i = 0; i < 4; i++) {
        stones.push(Math.floor(Math.random() * 12) + 1);

    }
    console.log("Stones: " + stones);
    // //  $("#img1").html("<img src=" + "assets/images/bluestone.jpg" + "value=" + stoneOne + ">");


    // var stoneTwo = Math.floor(Math.random() * 12) + 1;
    // console.log("Stone 2: " + stoneTwo);
    // // $("#img2").html("<img src=" + "assets/images/diamond.jpg" + "value=" + stoneTwo + ">");

    // var stoneThree = Math.floor(Math.random() * 12) + 1;
    // console.log("Stone 3: " + stoneThree);
    // //   $("#img3").html("<img src=" + "assets/images/greenstone.jpg" + "value=" + stoneThree + ">");

    // var stoneFour = Math.floor(Math.random() * 12) + 1;
    // console.log("Stone 4: " + stoneFour);
    // //   $("#img4").html("<img src=" + "assets/images/redstone.jpg" + "value=" + stoneFour + ">");    

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses:" + losses);

    var score = 0;
    console.log("score: " + score);

    function reset() {
        stones = []
        compPick = Math.floor(Math.random() * 100) + 20;
        console.log("compPick:" + compPick);
        $(".randomNumber").text(compPick);
    
        for (var i = 0; i < 4; i++) {
            stones.push(Math.floor(Math.random() * 12) + 1);
    
        }
        console.log("stones new:",stones)
       score=0  
       $("#scoreDisplay").text(score);


        }
   

    $(".images").on("click", function () {
        console.log(this)
        var index = $(this).attr("data-id")
        score += stones[index]
        console.log("score: ", score)
        //console.log("New Score:" + newScore);
        $("#scoreDisplay").text(score);

        if (score === compPick) {
            wins++;
            $("#wins").text(wins);
            console.log("wins: " + wins);
            reset();
        }

        else if (score > compPick) {
            losses++;
            $("#losses").text(losses);
            console.log("Losses: " + losses);
            reset();
        }

    });

})