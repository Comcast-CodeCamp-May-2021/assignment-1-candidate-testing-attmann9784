const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let grade = 0;
let finalGrade = 0;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // TODO 1.1c: welcome the candidate //
// candidateName = (input.question("Candidate Name: "));
 candidateName= input.question("What is your name? ");

}


function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

//   for(let i = 0; i < questions.length; i++){
//     console.log(`${i+1}) ${questions[i]}`)
//     candidateAnswers.push(input.question("Your Answer: ").toLowerCase());
//     console.log(`Correct Answer: ${correctAnswers[i]}\n`)
//   }
  for (let i = 0; i< questions.length; i++) {
    candidateAnswers[i]=input.question(questions[i]).toLowerCase();
  }
  return candidateAnswers;
   
}

function gradeQuiz() {

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  
  for (let i = 0; i <correctAnswers.length;i++) {
  if (candidateAnswers[i] === correctAnswers[i].toLowerCase()) 
    finalGrade++;
  console.log(`Candidate Name: ${candidateName}`);
  console.log(`\n${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  
  grade = ((finalGrade/questions.length)*100);
  console.log(`\n>>> Overall Grade: ${(finalGrade/questions.length)*100}% (${finalGrade} of ${questions.length} responses correct) <<<`); 
  if(grade>= 80){
    console.log(`>>>Status: PASS <<<`);
  } else{
    console.log(`>>> Status: FAILED <<<`);
  }
  }
  return grade
}
//   for (let i = 0; i <correctAnswers.length; i++) {
    //  if (correctAnswers[i].toLowerCase() === candidateAnswers[i]) {
//       grade = grade + 1;
//     } else {
//       grade = grade;
//     }
//   } 
//     grade = ((grade/correctAnswers.length) *100);
  // console.log(`>>> Overall Grade: ${grade}% ${grade}of ${correctAnswers.length} responses correct) <<<`)
//   if (grade >= 80) {
//     console.log(">>> Status: PASSED <<<");
//   } else {
//     console.log(">>> Status: FAILED <<<");
//   } return grade
// } 

function runProgram() {
  askForName();

  console.log(`Candidate Name: ${candidateName}`);
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