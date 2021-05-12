const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [ "Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let grade = 0;




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // TODO 1.1c: welcome the candidate //
candidateName = (input.question("Candidate Name: "));


}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < questions.length; i++){
    console.log(`${i+1}) ${questions[i]}`)
    candidateAnswers.push(input.question("Your Answer: "));
    console.log(`Correct Answer: ${correctAnswers[i]}\n`)
  }
 
}

function gradeQuiz() {

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  for (let i = 0; i <correctAnswers.length; i++) {
    if (correctAnswers[i] === candidateAnswers[i]) {
      grade = grade + 1;
    } else {
      grade = grade;
    }
  } 
  let finalGrade = ((grade/correctAnswers.length) *100);
  console.log(`>>> Overall Grade: ${finalGrade}% (${grade} of ${correctAnswers.length} responses correct) <<<`)
  if (finalGrade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  } 
} 

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};