$(document).ready(function () {

    var time = 30;
    var count;
    var id;
    var qNumber = 1;
    var correct = $("#correct" + qNumber);
    var rightAnswer = correct.text();
    var userGuess;

    $(".guess").on("click", function () {
        userGuess = $(this).attr("id");
        clearInterval(count);
        answer();
        console.log("qNumber: " + qNumber);
    });

    function nextQ() {
        
    };

    function answer() {
        $("#q" + qNumber).hide();
        console.log ("userGuess: " + userGuess);
        if (userGuess === ("correct" + qNumber)) {
            $("#guess").text("That is correct!");
        } else { $("#guess").text("Sorry, wrong answer.") };
        $("#right").text(rightAnswer)
        $("#answer").appendTo("#text").removeAttr("hidden");
        qNumber++;
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