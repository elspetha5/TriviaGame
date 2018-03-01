$(document).ready(function (){
// How do we start the game?
$("#start").on("click", function(){
    $("#start").hide();
    $("#q1").appendTo("#questions").removeAttr("hidden");

})
    // user clicks start button
    // timer appears on screen, set at 30 seconds
        // applies only to current question, not whole game
    // text on screen changes to first question

// How do we play the game?
    // under question is a list of answers
    // when user hovers over answer choices they look like buttons
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