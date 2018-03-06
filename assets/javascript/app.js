$(document).ready(function () {
    // starts the timer at 30 seconds
    var time = 30;
    // runs the timer
    var count;
    // stores the current question number
    var qNumber = 1;
    // stores the "id" of correct answer
    var correctID;
    // stores the text of the correct answer
    var rightAnswer;
    // stores "id" of the answer the user clicked on
    var userGuess;
    // stores number of correct guesses
    var numberCorrect = 0;
    // stores number of incorrect guesses
    var numberIncorrect = 0;
    // stores number of times the timer ran out
    var numberTime = 0;
    

    // How do we start the game?
    $("#start").on("click", function () {
        $("#directions").hide();
        $("#start").hide();
        // timer appears on screen, set at 30 seconds
        $("#timer").removeAttr("hidden").show();
        count = setInterval(timer, 1000);
        count
        // text on screen changes to first question
        $("#q" + qNumber).appendTo("#text").removeAttr("hidden").show();
    });

    function timer() {
        time--;
        $("#time").text(time);
        // What happens when the question timer runs out?
        if (time <= 0) {
            clearInterval(count);
            answer();
        } else if (time <= 5) {
            $("#time").removeClass("pink").addClass("red");
        } else if (time <= 10) {
            $("#time").addClass("pink");
        }
    };

    // What happens when we click an anwer?
    $(".guess").on("click", function () {
        userGuess = $(this).attr("id");
        // timer stops
        clearInterval(count);
        answer();
    });

    function answer() {
        // question disappears
        $("#q" + qNumber).hide();
        correctID = $("#correct" + qNumber);
        rightAnswer = correctID.text();
        // screen tells user if they were wrong, right or out of time
        if (userGuess === ("correct" + qNumber)) {
            $("#guess").text("That is correct!").appendTo("#text").removeAttr("hidden").show();
            numberCorrect++;
        } else if (userGuess === ("incorrect" + qNumber)) {
            $("#guess").text("Sorry, wrong answer.").appendTo("#text").removeAttr("hidden").show();
            $("#right").text(rightAnswer);
            $("#answer").appendTo("#text").removeAttr("hidden").show();
            numberIncorrect++;
        } else {
            $("#guess").text("Out of time!").appendTo("#text").removeAttr("hidden").show();
            $("#right").text(rightAnswer);
            $("#answer").appendTo("#text").removeAttr("hidden").show();
            numberTime++;
        };
        $("#image" + qNumber).appendTo("#text").removeAttr("hidden").show();
        // gives correct answer
        qNumber++;
        // after a set number of seconds screen will change to new question
        setTimeout(function () {
            nextQ();
        }, 5000);
    };

    function nextQ() {
        $("#time").removeClass("pink red");
        $("#image" + (qNumber - 1)).hide();
        $("#guess").hide();
        $("#answer").hide();
        if (qNumber < 8) {
            $("#time").text("30");
            time = 30;
            count = setInterval(timer, 1000);
            count
            $("#q" + qNumber).appendTo("#text").removeAttr("hidden").show();
            // What happens at the end of the game?
        } else {
            $("#timer").hide();
            // shows number of correct, incorrect, and unanswered questions
            $("#numberCorrect").text(numberCorrect);
            $("#numberIncorrect").text(numberIncorrect);
            $("#numberTime").text(numberTime);
            $("#score").appendTo("#text").removeAttr("hidden").show();
        }
    };

    $("#startOver").on("click", function() {
        $("#score").hide();
        time = 30;
        qNumber = 1;
        numberCorrect = 0;
        numberIncorrect = 0;
        numberTime = 0;
        $("#time").text("30");
        $("#directions").text("Want to try again?").show();
        $("#start").show();
    });



    // Start Over button apears
    // does NOT reload the page, resets the page

});