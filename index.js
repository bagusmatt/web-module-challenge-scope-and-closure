// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  counter1 will always reset count to 0 when invoked, then add 1 to it. count is also in a closure. counter 2 has count = 0 in the universal space meaning it can be called upon by multiple functions.
 * 2. Which of the two uses a closure? How can you tell?
 *  counter 1 has a closure. It is because 'function counter() {}' is whithin 'functionMaker (){}'
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *  counter1 would be helpful if everytime you wanted to invoke the function it will reset count and alter it in the same way. counter2 is better if you want the count to be independant and have multiple function able to use and change it in different ways.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();
console.log(counter1());
// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  // console.log(Math.floor(Math.random() * 3));
  return Math.floor(Math.random() * 3);
}
inning();
// console.log(inning);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, numInnings) {
  let home = 0;
  let away = 0;

  for (i = 0; i < numInnings; i++) {
    home = home + callback();
    away += callback();
  }
  let final = { Home: home, Away: away };

  return final;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inningCB, numInnings) {
  let home = 0;
  let away = 0;

  for (let i = 0; i < numInnings; i++) {
    let inning = getInningScore(inningCB, 1);

    home = home + inning.Home;
    away = away + inning.Away;

    console.log(`${i + 1}st Inning: ${away} - ${home}`);
  }
}
scoreboard(finalScore, inning, 9);
