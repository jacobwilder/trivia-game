// import questions from './quiz';
$(document).ready(function () {
    
    let timeLeft = 16;
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
            Swal.fire({
                title: 'You ran out of time!',
                text: 'Click to try again',
                icon: 'error',
                confirmButtonText: 'Restart'
              });
            stop();
        }
    }


    function stop() {
        clearInterval(countDown);
        
        userChoice.push($('input[name="inlineRadioOptions1"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions2"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions3"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions4"]:checked').val());    
        
        for (i = 0; i < questions.length; i++) {
            if (userChoice[i] === questions[i].correct) {
                correct++;
            } else {
                wrong++;
            }
        }          
         
        $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
        $("#wrong").html("<h2>Wrong Guesses: " + wrong + "</h2>");
        $("#score").html("<h2>Total Score: " + correct + " out of " + (wrong + correct) + "</h2>");
    }

})

