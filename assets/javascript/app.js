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

    $(".guess").on("click", function () {
        userGuess = $(this).attr("id");
        clearInterval(count);
        answer();
    });

    function nextQ() {
        $("#answer").hide();
        if (qNumber < 8) {
            time = 30;
            count = setInterval(timer, 1000);
            count
            $("#q" + qNumber).appendTo("#text").removeAttr("hidden");
        } else {
            $("#timer").hide();

        }
    };

    function answer() {
        $("#q" + qNumber).hide();
        correctID = $("#correct" + qNumber);
        rightAnswer = correctID.text()
        console.log(rightAnswer);
        if (userGuess === ("correct" + qNumber)) {
            $("#guess").text("That is correct!");
        } else { $("#guess").text("Sorry, wrong answer.") };
        $("#right").text(rightAnswer)
        $("#answer").appendTo("#text").removeAttr("hidden").show();
        qNumber++;
        setTimeout(function () {
            nextQ();
        }, 5000);
    };

    function timer() {
        time--;
        $("#time").text(time);
        if (time <= 0) {
            clearInterval(count);
            answer();
        } else if (time <= 5) {
            $("#time").removeClass("pink").addClass("red");
        } else if (time <= 10) {
            $("#time").addClass("pink");
        }
    };

    // How do we start the game?
    $("#start").on("click", function () {
        $("#start").hide();
        // timer appears on screen, set at 30 seconds
        $("#timer").removeAttr("hidden");
        count = setInterval(timer, 1000);
        count
        // text on screen changes to first question
        $("#q" + qNumber).appendTo("#text").removeAttr("hidden");
    });



    // applies only to current question, not whole game

    // What happens when we click an anwer?

    // timer stops
    // question disappears
    // screen tells user if they were wrong or right
    // if wrong gives correct answer
    // after a set number of seconds screen will change to new question

    // What happens when the question timer runs out?
    // timer stops at 0
    // current question disappears
    // screen says Out of Time!
    // gives correct answer
    // after a set number of seconds screen will change to new question

    // What happens at the end of the game?
    // timer stops
    // shows number of correct, incorrect, and unanswered questions
    // Start Over button apears
    // does NOT reload the page, resets the page

});