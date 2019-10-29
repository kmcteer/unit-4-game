$(document).ready(function() {


        var comPick = math.floor(math.random() *50) + 12;
            console.log("compPick:" + compPick);
            $(".randomNumber").html(compPick);


        var stoneOne = Math.floor(Math.random() *75) + 1;
            console.log("Stone 1: " + stoneOne);
            $("#img1").html("<img src=" + "assets/images/bluestone.jpg" + "value=" + stoneOne + ">");


        var stoneTwo = Math.floor(Math.random() *75) + 1;
            console.log("Stone 2: " + stoneTwo);
            $("#img2").html("<img src=" + "assets/images/diamond.jpg" + "value=" + stoneTwo + ">");

        var stoneThree = Math.floor(Math.random() *75) + 1;
            console.log("Stone 3: " + stoneThree);
            $("#img3").html("<img src=" + "assets/images/greenstone.jpg" + "value=" + stoneThree + ">");

            var stoneFour = Math.floor(Math.random() *75) + 1;
            console.log("Stone 4: " + stoneFour);
            $("#img4").html("<img src=" + "assets/images/redstone.jpg" + "value=" + stoneFour + ">");    

        var wins = 0;
            console.log("wins: " + wins) ;

        var losses =0;
            console.log("losses:" + losses) ;

        var score =0;
            console.log("score: " + score) ;

        function reset () {
            compPick = Math.floor(Math.random() * 50) + 12;
                console.log("compPick: " + compPick);
            $(".randomNumber").html(compPick);

            score= 0;
            $(".scoreDisplay").html(score);


        var stoneOne = Math.floor(Math.random() *75) + 1;
        console.log("Stone 1: " + stoneOne);
        $("#img1").html("<img src=" + "assets/images/bluestone.jpg" + "value=" + stoneOne + ">");


        stoneTwo = Math.floor(Math.random() *75) + 1;
        console.log("Stone 2: " + stoneTwo);
        $("#img2").html("<img src=" + "assets/images/diamond.jpg" + "value=" + stoneTwo + ">");

        stoneThree = Math.floor(Math.random() *75) + 1;
        console.log("Stone 3: " + stoneThree);
        $("#img3").html("<img src=" + "assets/images/greenstone.jpg" + "value=" + stoneThree + ">");

        stoneFour = Math.floor(Math.random() *75) + 1;
        console.log("Stone 4: " + stoneFour);
        $("#img4").html("<img src=" + "assets/images/redstone.jpg" + "value=" + stoneFour + ">");    

            $("img").on("click", function () {
                var newScore = score += parseInt($(this).attr("value"));        
                console.log("New Score: " + newScore);
                $(scoreDisplay).html(newScore);
                $(".scoreDisplay").html(newScore);

                if(newScore === compPick) {
                    wins++ ;
                    $(".wins").html("wins: " + wins);
                        console.log("Wins: " + wins);
                        reset();
                }

                    else if(newScore > compPick) {
                        losses++ ;
                        $(".losses").html("Losses: " + losses);
                        console.log("Losses: " + losses);
                        reset();

                    }

 });
}

    $("img").on("click", function () {
        var newScore = scpre +=parseInt($(this).attr("value"));
            console.log("New Score:" + newScore);
            $(".scoreDisplay").html(newScore);

            if(newScore === compPick) {
                wins++ ;
                $(".wins").html("Wins: " + wins);
                    console.log("wins: " + wins);
                    reset();
            }

            else if(newScore > compPick) 
            {
                lossess++ ;
                $(".losses").html("losses: " + losses) ;
                    console.log ("Losses: " + losses);
                    reset();
            }

    });