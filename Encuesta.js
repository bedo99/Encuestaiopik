let baseURL = "http://localhost:5000/api/";
let sizeQuestions = 0;
let axiosService = axios.create({
  baseURL: baseURL,
});
let questionFormElement = document.getElementById('questionForm');
window.onload = () => {
  axiosService.get('questions').then((response) => {
    const questions = response.data;
    questions.forEach((element, index) => {
      questionFormElement.innerHTML += 
      `<div id="question-${index+1}" style="display: none;">` +
            `<h2>Pregunta ${index+1}</h2>` +
            `<h3>¿${element.description}?</h3>` +
            '<div class="form-group">' +
                `<textarea class="form-control rounded-0" id="exampleFormControlTextarea${index+1}" rows="4"></textarea>` +
            '</div>' +
            `<div class="button" onclick="sendAnswer(${element.id}, ${index+1})">Continuar</div>` +
      '</div>';
    });
    questionFormElement.innerHTML += 
      `<div id="question-${questions.length+1}" style="display: none;">` +
          '<h2 style="text-align: center; margin: 10px;">Gracias por ayudar a mejorar el servicio</h2>' +
      '</div>';
      sizeQuestions = questions.length;
      var el = document.getElementById('question-1')
      el.style.display = "block";
  })
}

function sendAnswer(idAnswer, index) {
  let answerTxt = document.getElementById(`exampleFormControlTextarea${index}`).value.trim();
  if(answerTxt == null || answerTxt == '') {
    alert("vacio");
    return;
  }
  axiosService
  .post('answers', { idQuestion: idAnswer, description: answerTxt })
  .then((response) => {
    nextQuestion(index+1);
    growProgressBar((100 / sizeQuestions) * index);
  });  
}


//Cambiar Pregunta
function nextQuestion(question_number) {
  var current_question_number = question_number - 1;
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();
  var el = document.getElementById('question-'+question_number);
  var el2 = document.getElementById('question-'+current_question_number);  
  el.style.display = "block";
  el2.style.display = "none";
}
//Barra de Progreso
function growProgressBar(percentage_width) {
  console.log(percentage_width);
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width + '%';
}

