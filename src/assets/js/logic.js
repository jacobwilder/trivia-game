let timer;

let questions = [
        {question: "In what year was the first ever Wimbledon Championship held?", 
        answers: [
            1877, 
            1853, 
            1792, 
            1926
        ],
        correct: 1877
        },
        {question: "In what year was the first ever Wimbledon Championship held?", 
        answers: [
            "Iron", 
            "Nickel", 
            "Helium", 
            "Mercury"
        ],
        correct: "Mercury"
        },
        {question: "Which email service is owned by Microsoft?", 
        answers: [
            "Gmail", 
            "ProtonMail", 
            "Hotmail", 
            "Thunderbird"
        ],
        correct: "Hotmail"
        },
        {question: "Which country produces the most coffee in the world?", 
        answers: [
            "Brazil", 
            "Argentina", 
            "United States", 
            "Puerto Rico"
        ],
        correct: "Brazil"
        },
        {question: "In which city was Jim Morrison buried?", 
        answers: [
            "Paris", 
            "Rome", 
            "Sorrento", 
            "Cainnes"
        ],
        correct: "Paris"
        },
        {question: "What was the first state?", 
        answers: [
            "New York", 
            "Pennyslvania", 
            "Delaware", 
            "New Jersey"
        ],
        correct: "Delaware"
        },
        {question: "What is the capital city of Spain?", 
        answers: [
            "Barcelona", 
            "Salamanca", 
            "Madrid", 
            "Granada"
        ],
        correct: "Madrid"
        },
        {question: "What is the painting ‘La Gioconda’ more usually known as?", 
        answers: [
            "The Jovial One", 
            "Mona Lisa", 
            "The Last Supper", 
            "Duality of Man"
        ],
        correct: "Mona Lisa"
        },
    {question: "What is Chandler’s last name in the sitcom Friends?", answers: Bing.},
    {question: "About how many taste buds does the average human tongue have?", answers: 10, 000.},
    {question: "Who did Madonna kiss at the 2003 VMAs?", answers: Britney Spears and Christina Aguilera.},
    {question: "How much does the Chewbacca costume weigh?", answers: Eight pounds.},
    {question: "What colors are the Norwegian flag?", answers: Red, white, and blue.},
    {question: "Where would you find the world’s most ancient forest?", answers: Daintree Forest north of Cairns, Australia.},
    {question: "Globe and Jerusalem are types of what?", answers: Artichoke.},
    {question: "Which is the highest waterfall in the world?", answers: Angel Falls, Venezuela.},
    {question: "Ludwig Van Beethoven was born in 1770 in which city?", answers: Berlin.},
    {question: "What is the third sign of the Zodiac?", answers: Gemini.},
    {question: "What is Ariana Grande’s brother’s name?", answers: Frankie.},
    {question: "Who discovered Penicillin?", answers: Fleming.},
    {question: "Name the three primary colors.", answers: Red, yellow and blue.},
    {question: "Which name is rapper Sean Combs better known by?", answers: P. Diddy},
    {question: "Which country invented tea?", answers: China.},
    {question: "Pure water as a pH level of around?", answers: 7.},
    {question: "Which is the only vowel on a standard keyboard that is not on the top line of letters?", answers: A.},
    {question: "Who starts first in chess?", answers: White.},
    {question: "What was Britney Spears’ first song?", answers: Baby One More Time.},
    {question: "What did Queen Anne die of?", answers: A stroke.},
    {question: "Groups of lions are known as what?", answers: Prides},
    31. How many pairs of wings does a bee have? Answer: Two.
    32. What language has the most words? Answer: English.
    33. What’s the most expensive home in the world? Answer: Buckingham Palace.
    34. Kodiak island is in which US state? Answer: Alaska.
    35. Which castle is on the island of Anglesey? Answer: Beaumaria.
    36. Which reality show series is Andy Cohen’s favorite? Answer: Real Housewives.
    37. How long does it take to hard boil an egg? Answer: 7 minutes.
    38. What nationality was Marco Polo? Answer: Venetian
    39. Which scientist was awarded the 1921 Nobel Prize in Physics? Answer:  Albert Einstein.
    40. Name the world’s largest ocean. Answer: Pacific.
    41. What did the Crocodile swallow in Peter Pan? Answer: An alarm clock.
    42. What state is the Lincoln family home (Hildene) located in? Answer: Vermont.
    43. Which actress said, “Fasten your seatbelts. It’s going to be a bumpy night,” in All About Eve? Answer: Bette Davis (as Margo Channing.)
    44. Zurich is the largest city in what country? Answer: Switzerland.
    45. How many phases of the moon are there? Answer: Eight.
    46. What’s the hardest rock? Answer: A diamond.
    47. How many bones do sharks have in their bodies? Answer: None!
    
    best trivia questions & answers: high-fiving
    marchmeena29: Getty
    48. The fear referred to as arachnophobia indicates a fear of what? Answer: Spiders.
    49. What color is a Himalayan poppy flower? Answer: Blue.
    50. What was the name of the family who starred in 7th Heaven? Answer: The Camdens.
    51. Name the world’s biggest island. Answer: Greenland.
    52. Which sport does Constantino Rocca play? Answer: Golf.
    53. What’s the minimum wage in New Jersey? Answer: $10/hr.
    54. What flavor is Cointreau? Answer: Orange.
    55. Which country is Prague in? Answer: Czech Republic.
    56. What does the term ‘piano’ mean? Answer: To be played softly.
    57. Who was the first American to go into space? Answer: Alan Shephard.
    58. How many hearts does an octopus have? Answer: Three.
    59. What is the name of the thin, but long country that spans more than half of the western coast of South America? Answer: Chile.
    60. Which planet has the most gravity? Answer: Jupiter.
    61. What was Beyoncé’s first solo album? Answer: Dangerously In Love.
    62. What is your body’s largest organ? Answer: The skin.
    63. Which country did AC/DC originate in? Answer: Australia.
    64. In what state did the first official American baseball game take place? Answer: New Jersey
    65. What is “Vineyard” in Vineyard Vines named after? Answer: Martha’s Vineyard
    66. Which mammal doesn’t have vocal cords? Answer: Giraffe.
    67. The colored part of the human eye that controls how much light passes through the pupil is called? Answer: Iris.
    68. What year did the Titanic movie come out? Answer: 1997.
    69. What is the national dish of Spain? Answer: Paella.
    70. Who sang the song, “My Way”? Answer: Frank Sinatra
    71. Which horoscope sign has a crab? Answer: Cancer
    72. How many rides are at Disney World? Answer: 46.
    73. What is sushi traditionally wrapped in? Answer: Edible seaweed.
    74. What color is Absynthe? Answer: Green.
    75. When did the Cold War end? Answer: 1989.
    76. Which company owns Bugatti, Lamborghini. Audi, Porsche and Ducati? Answer: Volkswagen.
    77. The Statue of Liberty was given to the US by which country? Answer: France.
    78. Google Chrome, Safari, Firefox and Explorer are different types of what? Answer: Web browsers.
    79. Which US city is known as the City of Brotherly Love? Answer: Philadelphia.
    80. Who were the main characters in Wayne’s World? Answer: Wayne (Mike Meyers) and Garth (Dana Carvey)
    81. What substance are nails made out of? Answer: Keratin.
    82. Which instrument did John Lennon play in the Beatles? Answer: Rhythm guitar.
    83. How many years is a law school program? Answer: Three years. Total schooling is closer to seven years.
    84. How many children does Oprah Winfrey have?Answer: Zero.
    85. What is the diameter of Earth? Answer: 8,000 miles.
    86. How many weeks are in a year? Answer: 52.
    87. Who played Neo in The Matrix? Answer: Keanu Reeves.
    88. In what year was the first episode of South Park aired? Answer: 1997.
    89. What is the largest bone in the human body? Answer: The femur.
    90. How many national parks are in the United States? Answer: 58.
    91. What is the symbol for potassium? Answer: K.
    92. What is allspice alternatively known as? Answer: Pimento.
    93. Which desert is the largest in the world? Answer: The Sahara Desert.
    94. How old is Lil’ Wayne? Answer: 37 years old.
    95. When was William Shakespeare born? Answer: 23rd April 1564.
    96. Which is the only American state to begin with the letter ‘p’? Answer: Pennsylvania.
    97. What is the world’s longest river? Answer: Amazon.
    98. What’s the first letter on a typewriter? Answer: Q.
    99. Which kind of flower bulbs were once exchanged as a form of currency? Answer: Tulips.
    100. Name the Spanish artist, sculptor and draughtsman famous for co-founding the Cubist movement. Answer: Pablo Picasso.
    101. What year was Walt Disney born? Answer: 1901.
    
    102. Which Williams sister has won more Grand Slam titles? Answer: Serena.
    
    103. What planet is knows as the red planet? Answer: Mars}]