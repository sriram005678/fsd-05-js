let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);





function printMe(button){
   button.addEventListener('click',function(){

    let currentElement = this,
    questionWrapperElement = currentElement.parentNode.parentNode,
    questionTextElement = questionWrapperElement.querySelector('.question-text');
    console.log(questionTextElement);
    

    hideAllquestionText();
    
    questionTextElement.style.display = 'block';

   });
}

buttons.forEach(printMe);


function hideAllquestionText(){
   let questionTexts = document.querySelectorAll('.question-text');

   questionTexts.forEach(function(questionText){
      questionText.style.display = 'none';
   });
}








