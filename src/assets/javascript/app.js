// import questions from './quiz';
$(document).ready(function () {
    let timeLeft = 15;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let userChoice = [];
    let generatedQuiz;

    $("#start").on("click", timer);

    function timer() {
        clearInterval(countDown);
        countDown = setInterval(decrement, 1000);
    }

    function decrement() {
        timeLeft--;
        $(".jumbotron").html("<h2>Time Remaining: " + timeLeft + "</h2>");
        if (timeLeft === 0) {
            alert("You ran out of time!");
            stop();
        }
    }

})

