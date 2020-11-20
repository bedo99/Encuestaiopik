var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');
var submit12 = document.getElementById('submit12');
var submit13 = document.getElementById('submit13');
var submit14 = document.getElementById('submit14');
var submit15 = document.getElementById('submit15');
var submit16 = document.getElementById('submit16');
var submit17 = document.getElementById('submit17');


var Question12 = document.getElementById('question-12');
var Question13 = document.getElementById('question-13');
var Question14 = document.getElementById('question-14');
var Question15 = document.getElementById('question-15');
var Question16 = document.getElementById('question-16');
var Question17 = document.getElementById('question-17');
var lastQuestion = document.getElementById('question-18');


Question12.style.display = "none";
Question13.style.display = "none";
Question14.style.display = "none";
Question15.style.display = "none";
Question16.style.display = "none";
Question17.style.display = "none";
lastQuestion.style.display = "none";


//Cambiar Pregunta
function nextQuestion(question_number) {

  //get the last question number (the argument passed minus 1!)
  var current_question_number = question_number - 1;

  //turn both question number vars into strings
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();

  //get the next question div element (concatenate next q number onto to 'question-')
  var el = document.getElementById('question-'+question_number);

  //get the current question div element
  var el2 = document.getElementById('question-'+current_question_number);
  
  
  //display next question
  el.style.display = "block";

  //hide current question
  el2.style.display = "none";

}

//Barra de Progreso
submit1.addEventListener('click', function() {
  nextQuestion(2);
  growProgressBar('4%');
});

submit2.addEventListener('click', function() {
  nextQuestion(3);
  growProgressBar('5%');
});

submit3.addEventListener('click', function() {
  nextQuestion(4);
  growProgressBar('10%');
});

submit4.addEventListener('click', function() {
  nextQuestion(5);
  growProgressBar('15%');
});

submit5.addEventListener('click', function() {
  nextQuestion(6);
  growProgressBar('20%');
});

submit6.addEventListener('click', function() {
  nextQuestion(7);
  growProgressBar('30%');
});

submit7.addEventListener('click', function() {
  nextQuestion(8);
  growProgressBar('35%');
});

submit8.addEventListener('click', function() {
  nextQuestion(9);
  growProgressBar('40%');
});

submit9.addEventListener('click', function() {
  nextQuestion(10);
  growProgressBar('50%');
});

submit10.addEventListener('click', function() {
  nextQuestion(11);
  growProgressBar('55%');
});

submit11.addEventListener('click', function() {
  nextQuestion(12);
  growProgressBar('60%');
});

submit12.addEventListener('click', function() {
  nextQuestion(13);
  growProgressBar('70%');
});

submit13.addEventListener('click', function() {
  nextQuestion(14);
  growProgressBar('75%');
});

submit14.addEventListener('click', function() {
  nextQuestion(15);
  growProgressBar('80%');
});

submit15.addEventListener('click', function() {
  nextQuestion(16);
  growProgressBar('90%');
});

submit16.addEventListener('click', function() {
  nextQuestion(17);
  growProgressBar('95%');
});

submit17.addEventListener('click', function() {
  nextQuestion(18);
  growProgressBar('100%');
});


function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}

