// import questions from './quiz';
$(document).ready(function () {
    // question pool
    const questions = [{
        question: "In what year was the first ever Wimbledon Championship held?",
        answers: [
            "1877",
            "1853",
            "1792",
            "1926"
        ],
        correct: "1877"
    },
    {
        question: "Which element is seen as 'Hg' on the periodic table?",
        answers: [
            "Iron",
            "Nickel",
            "Helium",
            "Mercury"
        ],
        correct: "Mercury"
    },
    {
        question: "Which email service is owned by Microsoft?",
        answers: [
            "Gmail",
            "ProtonMail",
            "Hotmail",
            "Thunderbird"
        ],
        correct: "Hotmail"
    },
    {
        question: "Which country produces the most coffee in the world?",
        answers: [
            "Brazil",
            "Argentina",
            "United States",
            "Puerto Rico"
        ],
        correct: "Brazil"
    },
    {
        question: "In which city was Jim Morrison buried?",
        answers: [
            "Paris",
            "Rome",
            "Sorrento",
            "Cainnes"
        ],
        correct: "Paris"
    },
    {
        question: "What was the first state?",
        answers: [
            "New York",
            "Pennyslvania",
            "Delaware",
            "New Jersey"
        ],
        correct: "Delaware"
    },
    {
        question: "What is the capital city of Spain?",
        answers: [
            "Barcelona",
            "Salamanca",
            "Madrid",
            "Granada"
        ],
        correct: "Madrid"
    },
    {
        question: "What is the painting ‘La Gioconda’ more usually known as?",
        answers: [
            "The Jovial One",
            "Mona Lisa",
            "The Last Supper",
            "Duality of Man"
        ],
        correct: "Mona Lisa"
    },
    {
        question: "What is Chandler’s last name in the sitcom Friends?",
        answers: [
            "Bing",
            "Muriel",
            "Perry",
            "Geller"
        ],
        correct: "Bing"
    },
    {
        question: "About how many taste buds does the average human tongue have?",
        answers: [
            "100,000",
            "250,000",
            "10,000",
            "1+ Million"
        ],
        correct: "10,000"
    },
    {
        question: "How much does the Chewbacca costume weigh?",
        answers: [
            "10 lbs",
            "20 lbs",
            "5 lbs",
            "8 lbs"
        ],
        correct: "8 lbs"
    },
    {
        question: "Where would you find the world’s most ancient forest?",
        answers: [
            "Iceland",
            "Russia",
            "Japan",
            "Australia"
        ],
        correct: "Australia"
    },
    {
        question: "Globe and Jerusalem are types of what?",
        answers: [
            "Plants",
            "Geographical Features",
            "Artichoke",
            "Drugs"
        ],
        correct: "Artichoke"
    },
    {
        question: "Which is the highest waterfall in the world?",
        answers: [
            "Yosemite Falls",
            "Tugela Falls",
            "Niagara Falls",
            "Angel Falls"
        ],
        correct: "Angel Falls"
    },
    {
        question: "Ludwig Van Beethoven was born in 1770 in which city?",
        answers: [
            "Berlin",
            "Teltow",
            "Vienna",
            "Venice"
        ],
        correct: "Berlin"
    },
    {
        question: "What is the third sign of the Zodiac?",
        answers: [
            "Taurus",
            "Leo",
            "Gemini",
            "Virgo"
        ],
        correct: "Gemini"
    },
    {
        question: "Who discovered Penicillin?",
        answers: [
            "Fleming",
            "Hoffman",
            "McKenna",
            "Freud"
        ],
        correct: "Fleming"
    },
    {
        question: "Which name is rapper Sean Combs better known by?",
        answers: [
            "50 Cent",
            "P. Diddy",
            "Quavo",
            "Chance the Rapper"
        ],
        correct: "P. Diddy"
    },
    {
        question: "Which country invented tea?",
        answers: [
            "Kenya",
            "England",
            "Japan",
            "China"
        ],
        correct: "China"
    },
    {
        question: "Pure water as a pH level of around?",
        answers: [
            "5",
            "10",
            "7",
            "8"
        ],
        correct: "7"
    },
    {
        question: "Which is the only vowel on a standard keyboard that is not on the top line of letters?",
        answers: [
            "A",
            "E",
            "U",
            "O"
        ],
        correct: "A"
    },
    {
        question: "What was Britney Spears’ first song?",
        answers: [
            "Womanizer",
            "Baby One More Time",
            "Oops...I Did It Again",
            "Toxic"
        ],
        correct: "Baby One More Time"
    },
    {
        question: "What did Queen Anne die of?",
        answers: [
            "Poison",
            "Suicide",
            "Stroke",
            "Cancer"
        ],
        correct: "Stroke"
    },
    {
        question: "Groups of lions are known as what?",
        answers: [
            "Prides",
            "Murders",
            "Hunts",
            "Squads"
        ],
        correct: "Prides"
    },
    {
        question: "How many pairs of wings does a bee have?",
        answers: [
            "4",
            "2",
            "6",
            "8"
        ],
        correct: "2"
    },
    {
        question: "What language has the most words?",
        answers: [
            "French",
            "Spanish",
            "Chinese",
            "English"
        ],
        correct: "English"
    },
    {
        question: "What’s the most expensive home in the world?",
        answers: [
            "Witanhurst",
            "Antilia",
            "White House",
            "Buckingham Palace"
        ],
        correct: "Buckingham Palace"
    },
    {
        question: "Kodiak island is in which US state?",
        answers: [
            "Alaska",
            "Kentucky",
            "California",
            "New York"
        ],
        correct: "Alaska"
    },
    {
        question: "Which castle is on the island of Anglesey?",
        answers: [
            "Sarkova",
            "Limone",
            "Saratoga",
            "Beaumaria"
        ],
        correct: "Beaumaria"
    },
    {
        question: "How long does it take to hard boil an egg?",
        answers: [
            "7 minutes",
            "8 minutes",
            "5 minutes",
            "90 seconds"
        ],
        correct: "7 minutes"
    },
    {
        question: "What nationality was Marco Polo?",
        answers: [
            "Italian",
            "Venetian",
            "Russian",
            "Czechoslovakian"
        ],
        correct: "Venetian"
    },
    {
        question: "Which scientist was awarded the 1921 Nobel Prize in Physics",
        answers: [
            "Freud",
            "Newton",
            "Einstein",
            "Darwin"
        ],
        correct: "Einstein"
    },
    {
        question: "Name the world’s largest ocean.",
        answers: [
            "Mediterranean",
            "Pacific",
            "Indian",
            "Atlantic"
        ],
        correct: "Pacific"
    },
    {
        question: "What did the Crocodile swallow in Peter Pan?",
        answers: [
            "Toothbrush",
            "Soap",
            "Alarm Clock",
            "Fish"
        ],
        correct: "Alarm Clock"
    },
    {
        question: "What state is the Lincoln family home (Hildene) located in?",
        answers: [
            "Vermont",
            "Kansas",
            "Pennyslvania",
            "S. Carolina"
        ],
        correct: "Vermont"
    },
    {
        question: "Zurich is the largest city in what country?",
        answers: [
            "Ukraine",
            "Greenland",
            "Iceland",
            "Switzerland"
        ],
        correct: "Switzerland"
    },
    {
        question: "How many phases of the moon are there?",
        answers: [
            "6",
            "8",
            "31",
            "365"
        ],
        correct: "8"
    },
    {
        question: "What’s the hardest rock?",
        answers: [
            "Amethyst",
            "Quartz",
            "Diamond",
            "Basalt"
        ],
        correct: "Diamond"
    },
    {
        question: "How many bones do sharks have in their bodies?",
        answers: [
            "More than humans",
            "Less than humans",
            "Same as humans",
            "None"
        ],
        correct: "None"
    },
    {
        question: "The fear referred to as arachnophobia indicates a fear of what?",
        answers: [
            "Spiders",
            "Bugs",
            "Insects",
            "Loneliness"
        ],
        correct: "Spiders"
    },
    {
        question: "What color is a Himalayan poppy flower?",
        answers: [
            "White",
            "Blue",
            "Red",
            "Orange"
        ],
        correct: "Blue"
    },
    {
        question: "What was the name of the family who starred in 7th Heaven?",
        answers: [
            "The Camdens",
            "The Whoppers",
            "The Whites",
            "The Duggars"
        ],
        correct: "The Camdens"
    },
    {
        question: "Name the world’s biggest island.",
        answers: [
            "Greenland",
            "Caiman",
            "Hawaii",
            "Puerto Rico"
        ],
        correct: "Greenland"
    },
    {
        question: "Which sport does Constantino Rocca play?",
        answers: [
            "Soccer",
            "Football",
            "Golf",
            "Baseball"
        ],
        correct: "Golf"
    },
    {
        question: "What flavor is Cointreau?",
        answers: [
            "Orange",
            "Lemon",
            "Peach",
            "Lime"
        ],
        correct: "Orange"
    },
    {
        question: "Which country is Prague in?",
        answers: [
            "Ukraine",
            "Czech Republic",
            "Russia",
            "Bosnia"
        ],
        correct: "Czech Republic"
    },
    {
        question: "What does the term ‘piano’ mean?",
        answers: [
            "Powerful",
            "Calm",
            "Soft",
            "Hard"
        ],
        correct: "Soft"
    },
    {
        question: "Who was the first American to go into space?",
        answers: [
            "Buzz Aldrin",
            "Neil Armstrong",
            "Alan Shephard",
            "Michael Collins"
        ],
        correct: "Alan Shephard"
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            "8",
            "10",
            "12",
            "3"
        ],
        correct: "3"
    }
];


    let timeLeft = 30;
    let countDown;
    let correct = 0;
    let incorrect = 0;
    let userChoice = [];
    let quizBank = questions.slice();
    let output = [];
    let answered =[];

    $("#finish").hide();
    $(".questions").hide();
    $("#retry").hide();

    $("#start").on("click", timer);
    $("#submit").on("click", finish);
    $("#retry").on("click", retry);

    console.log("quizBank: " + JSON.stringify(quizBank, null, 4));
    console.log("output: " + JSON.stringify(output, null, 4));
    console.table(output);
    
    //quiz formation function WORK IN PROGRESS
    function populateQuiz() {
        $("h3").html("");
        $("input").val("");

            while (quizBank.length > 0 && output.length < 5) {
            let index = Math.random() * quizBank.length;
            let question = quizBank.splice(index, 1);
            output.push(question[0]);
            }

        $("#question1").prepend(output[0].question);
        $("#question2").prepend(output[1].question);
        $("#question3").prepend(output[2].question);
        $("#question4").prepend(output[3].question);
        $("#question5").prepend(output[4].question);
    
        $("#question1-answers input").each(function (i) {
    
            $(this).next().html(output[0].answers[i]);
            $(this).attr("value", output[0].answers[i])
        });
    
        $("#question2-answers input").each(function (i) {
    
            $(this).next().html(output[1].answers[i]);
            $(this).attr("value", output[1].answers[i])
    
        });
    
        $("#question3-answers input").each(function (i) {
    
            $(this).next().html(output[2].answers[i]);
            $(this).attr("value", output[2].answers[i])
        
        });
    
        $("#question4-answers input").each(function (i) {
    
            $(this).next().html(output[3].answers[i]);
            $(this).attr("value", output[3].answers[i])
        
        });
    
        $("#question5-answers input").each(function (i) {
    
            $(this).next().html(output[4].answers[i]);
            $(this).attr("value", output[4].answers[i])

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
                confirmButtonText: 'Retry?'
            }).then(function() {
                window.location = 'index.html';
            });
            clearInterval(countDown);
        }
    }


    function finish() {

        clearInterval(countDown);
        
        $("#timeRemaining").hide();
        $("#submit").hide();
        $("#questioncontainer").hide();
        $("#results").show();
        $("#reset").show();
        $("#retry").show();
        
        userChoice.push($('input[name=inlineRadioOptions1]:checked').val());
        userChoice.push($('input[name=inlineRadioOptions2]:checked').val());
        userChoice.push($('input[name=inlineRadioOptions3]:checked').val());
        userChoice.push($('input[name=inlineRadioOptions4]:checked').val());
        userChoice.push($('input[name=inlineRadioOptions5]:checked').val());

        for (i = 0; i < output.length; i++) {
            if (userChoice[i] === output[i].correct) {
                correct++;
                $(answered).push(output[i]);
            } else {
                incorrect++;
            }
            // WORK IN PROGRESS (REMOVE ANSWERED QUESTIONS FROM ARRAY)
            // for (i = 0; i < questions.length; i ++) {
            //     if (questions[i].correct == output[i].correct) {
            //         questions.splice(i, 1);
            //     }
            // }
        }


        output = [];

        $("#correct").html("<h2>Correct Guesses: " + correct + "</h2>");
        $("#wrong").html("<h2>Wrong Guesses: " + incorrect + "</h2>");
        $("#score").html("<h2>Total Score: " + correct + " out of " + (incorrect + correct) + "</h2>");
    }

    //WORK IN PROGRESS
    function retry() {
        
        userChoice = [];
        timeLeft = 30;
        
        if (correct == 5) {
            timeLeft = timeLeft + correct;
        }
        
        $("#questioncontainer").show();
        $("#submit").show();
        
        $("h3").html("");
        $("input").val("");

        populateQuiz();

        console.log("quizBank: " + JSON.stringify(quizBank, null, 4));
        console.log("output: " + JSON.stringify(output, null, 4));
        
        clearInterval(countDown);
        countDown = setInterval(decrement, 1000);
        
        $(".questions").show();
        $(".jumbotron").html("<h2>Time Remaining: " + timeLeft + "</h2>");
        
        $("#buttons").hide();
        $("#finish").show();
        $("#results").hide();
        $("input").prop('checked', false);
    }

})