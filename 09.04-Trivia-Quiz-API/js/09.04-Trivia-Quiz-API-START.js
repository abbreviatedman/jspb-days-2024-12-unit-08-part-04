// Lesson 09.04 Trivia Quiz API - PROG

// OpenTDB
// Trivia API
// The Open Trivia Database provides a completely free JSON API for use in programming projects. Use of this API does not require a API Key, just generate the URL below, and use it in your own application to retrieve trivia questions.
// This is the url for 1 question, Any Category (simplest request possible -- 1 question chosen at random from some random category such as Film, Sports, History, etc.)
// https://opentdb.com/api.php?amount=1
// the above url returns a rand obj like:
// {"response_code":0,"results":[{"category":"Sports","type":"multiple","difficulty":"medium","question":"Who won the 2018 Monaco Grand Prix?","correct_answer":"Daniel Ricciardo","incorrect_answers":["Sebastian Vettel","Kimi Raikkonen","Lewis Hamilton"]}]}

// 1. Go to https://www.opentdb.com and click the API tab at the top of the home page

// 2. Use the select menus to customize your data request:
//    For Number of Questions, enter 1 
//    For Select Category, choose General Knowledge
//    For Select Type, choose Multiple Choice

// 3. At the bottom of the page, click GENERATE API URL.
//   Copy the generated API URL which will appear at the top of the page 
//   Come back here to your JS file and paste the URL (we'll come back for it later):
//   https://opentdb.com/api.php?amount=1&category=9&type=multiple

// DOM Elements required by JS for this application
// JS will be needing:

// Get the DOM elements: 

// 4. Get the select menu for choosing a category and have it call the fetchTriviaQuestions function


// 5. Get the score box, which is a div and the h3 that holds the question


// 6. get all 4 answer choice buttons at once w querySelectorAll
// this returns a Node List of all 4 answer choice buttons

// 7. Get the button for fetching a question and have it call the fetchTriviaQuestions function


// Global Variables
//  the correct answer is required by two functions, and as such must be in the global scope
// fetchTriviaQuestions() fetches a question, which includes the correct answer
// evalAnswerChoice() compares the user's choice to the correct answer

// 8. declare correctAnswer in the global scope; to start it has no value (undefined)
//    Also declare undefined variables for score, tries and average (avg = score / tries)


// 9. loop the array of 4 answer choice buttons, assigning each a listener that calls evalAnswerChoice function when the button is clicked; this requires that we immediately decalare the function



// 10. test the function and the id's of the buttons, which are letters A-D; make the buttons visible by turning off display: none in the .answer-choice-btn clss in the .css file
// function evalAnswerChoice() {
//     console.log(this.id); 
// }

// 11. Since we mention evalAnswerChoice and fetchTriviaQuestions in the listeners, we need to immediately declare these functions; have each function log the id of the button that called it:


    // 12. Clear away the previous question:

    // 13. Call the fetch() method, passing it the API URL as its first argument
    // 14. we don't want the same category every time, so concatenate the value of the category menu as the number
    // 15. Add the second argument to the fetch method, the object: {method: "GET"}
    // https://opentdb.com/api.php?amount=1&category 

    
    // Don't end fetch() with a semi-colon, because we need to chain on TWO then() methods
    // fetch() returns the question data in JSON format (with double quotes around all the keys). We need to parse this stringified version of the data to get a usable object

    // 16. Write the first then(), which takes a callback function as its argument; the callback takes the JSON data as its argument
    // .th

    // 17. Write the second then(); its callback takes the object as its argument. We now have access to all the properties of the object provided by the API.
    // .th
        //    We want: the question, correct_answer and incorrect_answers properties
        //    incorrect_answers is an array, since there are 3 incorrect answer choices
        //    question and correct_answer are strings
        //    these properties are children of results, the value of which is an array
        // 18. output the question

        // 19. Log the parsed object:
        console.log('obj:');
        // 20. set the value of the global correctAnswer variable
        
        // displaying answer choices: the incorrect answers and the corret answer are separate variables: an array and a string, respectively. We need to combine them into one array of 4 choices:
        
        // 21. make an array of all choices by passing the array of incorrect answers as well as the correctAnswer string to the new array; use the spread operator (...) to break down the incorrect_answers array into individual items
        // ... '&nbsp;'

        // 22. put an &nbsp; (non-breaking space at the end) of the correct as an "invisible tag" by which we can identify it

        // 23. The correct answer is the last of the 4 items in the allChoices array, so randomize the items so that the correct choice is not always choice "D"
        // Math.random()
        
        // 24. Log the array of all 4 answer choices, followed by the correct answer
    

        // 25. loop the array of 4 buttons and assign them their answer choices from the allChoices arr

            // 26. Start each choice with a letter, which is the id of the current button; this is followed by a dot then space &nbsp; space, then the answer choices from allChoices arr:
            // 27. Add the choice text to the answer choice button
            // &nbsp;
            // 28. Make the answer choice buttons normal color
            // "#eee"
            // "#333"
            // 29. make the button visible (and turn on display:none in the css for the .answer-choice-btn class)
            // "block"
        // }

    // }); // close fetch then then

} // close function fetchTriviaQuestions()


// evalAnswerChoice() runs when the user clicks any one of the 4 answer choice buttons

// 30. Declare the evalAnswerChoice() functio; 


    // 31. Each choice requires tries variable to be incremented
    // ++

    // 32. If the clicked choice's last 6 chars are '&nbsp;' , it is the correct choice,
    //  get the last six chars of 'this' using slice(-6) and compare to '&nbsp;'
    // '&nbsp;'
        // 33. if the answer is correct, make the button green w white text
        // "darkgreen"
        // 34. Increment the score for a correct answer
        // ++
    // }
        // 35. Else, the answer is incorrect, so make the button red w white text
        // "darkred"
    // }

    // 36. Right or wrong, the choice text becomes white, due to the new bg color:
    // "#fff"

    // 37. Recalculate the average and round it to 3 decimal places:
    // avg
    // 3

    // 37. Output the updated score
    // Tries: &nbsp; &nbsp; &nbsp; Score: Avg:

// } // close function evalAnswerChoice()

// END: Lesson 09.04