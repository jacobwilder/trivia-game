// import questions from './quiz';

$(document).ready(function () {
    import questions from './questions';
console.log("QUESTIONS" + questions);
    // Object consisting of 50 questions


    let timeLeft = 15;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let userChoice = [];

    $("#finish").hide();
    $(".questions").hide();
    $("#continue").hide();

    $("#start").on("click", timer);
    $("#submit").on("click", finish);

    
    let quizBank = questions.slice();
    let output = [];
    while (quizBank.length > 0 && output.length < 5) {
        let index = Math.random() * quizBank.length;
        let question = quizBank.splice(index, 1);
        output.push(question[0]);
    }

    console.log("quizBank: " + JSON.stringify(quizBank, null, 4));
    console.log("output: " + JSON.stringify(output, null, 4));
    console.table(output);
        // let randomQ = questions[Math.round(Math.random()*questions.length)];
        // let randomQ2 = questions[Math.round(Math.random()*questions.length)];
        // let randomQ3 = questions[Math.round(Math.random()*questions.length)];
        // let randomQ4 = questions[Math.round(Math.random()*questions.length)];
        // let randomQ5 = questions[Math.round(Math.random()*questions.length)];

        // quizArr.push(randomQ, randomQ2, randomQ3, randomQ4, randomQ5);
        // let sortedArr = quizArr.slice();
        // let duplicatesArr = [];
        
        // for (let i = 0; i < quizArr.length - 1; i++) {
        //     if (sortedArr[i+1] === sortedArr[i]) {
        //         console.log("DUPLICATE FOUND");
        //         duplicatesArr.push(sortedArr[i]);
        //     }

        // }

        // console.log(quizArr.slice().sort());
        // console.log(sortedArr);
    
    //quiz formation function WORK IN PROGRESS
    function populateQuiz() {

        $("#question1").prepend(output[0].question);
        $("#question2").prepend(output[1].question);
        $("#question3").prepend(output[2].question);
        $("#question4").prepend(output[3].question);
        $("#question5").prepend(output[4].question);
    
        $("#question1-answers input").each(function (i) {
    
            $(this).next().html(output[0].answers[i]);
    
        });
    
        $("#question2-answers input").each(function (i) {
    
            $(this).next().html(output[1].answers[i]);
    
        });
    
        $("#question3-answers input").each(function (i) {
    
            $(this).next().html(output[2].answers[i]);
    
        });
    
        $("#question4-answers input").each(function (i) {
    
            $(this).next().html(output[3].answers[i]);
    
        });
    
        $("#question5-answers input").each(function (i) {
    
            $(this).next().html(output[4].answers[i]);
    
        });


    }
    // adds questions to headers with respective tags

    function timer() {
        clearInterval(countDown);
        countDown = setInterval(decrement, 1000);
        populateQuiz();
        $(".jumbotron").html("<h2>Time Remaining: " + timeLeft + "</h2>");
        $("#buttons").hide();
        $("#finish").show();
        $(".questions").show();
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
            }).then(function (result) {
                window.location = 'index.html';
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
        userChoice.push($('input[name="inlineRadioOptions5"]:checked').val());

        for (i = 0; i < questions.length; i++) {
            if (userChoice[i] === questions[i].correct) {
                correct++;
            } else {
                wrong++;
            }
        }
    }

    function finish() {
        clearInterval(countDown);
        
        $("#timeRemaining").hide();
        $("#submit").hide();
        $("#questioncontainer").hide();
        $("#results").show();
        $("#reset").show();
        $("#continue").show();

        console.log(userChoice);
        
        userChoice.push($('input[name="inlineRadioOptions1"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions2"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions3"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions4"]:checked').val());
        userChoice.push($('input[name="inlineRadioOptions5"]:checked').val());

        for (i = 0; i < output.length; i++) {
            if (userChoice[i] === output[i].correct) {
                console.log("user: " + userChoice[i] + " correct: " + output[i].correct);
                correct++;
            } else {
                incorrect++;
            }
        }

        $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
        $("#wrong").html("<h2>Wrong Guesses: " + incorrect + "</h2>");
        $("#score").html("<h2>Total Score: " + correct + " out of " + (incorrect + correct) + "</h2>");


    }

})