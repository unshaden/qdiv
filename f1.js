const Q = [
    {
        question: 'Which of these is not a type of programming language?',
        options: ['Machine language', 'Computer language', 'Assembly language', 'High-level language'],
        answer: 'Computer language',
    },
    {
        question: 'How many tags are in a regular HTML element?',
        options: ['1', '3', '2', '0'],
        answer: '2',
    },
    {
        question: 'Machine language?',
        options: ['Similar to English', 'Made up of 1s and 0s', 'Easy to modify', 'Easy to read'],
        answer: 'Made up of 1s and 0s',
    },
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Trainer Marking Language', 'Hyper Text Marketing Language',
        'Hyper Text Markup Leveler', 'Hyper Text Markup language'],
        answer: 'Hyper Text Markup language',
    },
    {
        question: 'A variable of a Boolean data type can hold:',
        options: ['any numeric values','characters','a true and false value','string'],
        answer: 'a true and false value',
    },
    {
        question: 'Numeric data types include:',
        options: ['integers only', 'characters and strings', 'integers and floating point type', 'floating point type only'],
        answer: 'integers and floating point type',
    },
    {
        question: 'A variable declared in a method is called:',
        options: ['global data','local data','formal data','actual data' ],
        answer: 'local data',
    },
    {
        question: 'which of the following is not a programming language?',
        options: ['HTML', 'CSS', 'JavaScript', 'SQL'],
        answer: 'SQL',
    },
    {
        question: 'What does this equation mean a!=t ?',
        options: ['a is assinged t','a and t are equal','a is not equal to t','t is add to a'],
        answer: 'a is not equal to t',
    },
    {
        question: 'int a[4]={8,2,9,5},value assigned to a[1] will be:',
        options: ['5', '2', '8', '9'],
        answer: '2',
    },
];

    const testContainer = document.getElementById('test');
    const resultContainer = document.getElementById('result');
    const submitButton = document.getElementById('submit');
    const retryButton  = document.getElementById('retry');
    const showAnswerButton = document.getElementById('showAnswer');

        let currentQuestion = 0;
        let score = 0;
        let incorrectAnswers = [];

    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

}

    function displayQuestion() {
    
    const questionData = Q[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'test';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    testContainer.innerHTML = '';
    testContainer.appendChild(questionElement);
    testContainer.appendChild(optionsElement);
}

    function checkAnswer() {
    const selectedOption = document.querySelector('input[name="test"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === Q[currentQuestion].answer) {
        score++;
    } else {
        incorrectAnswers.push({
                question: Q[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: Q[currentQuestion].answer,
        });
    }
        currentQuestion++;
        selectedOption.checked = false;
            if (currentQuestion < Q.length) {
        displayQuestion();
            } else {
        displayResult();
        }
    }
}

function displayResult() {
    testContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
   
    resultContainer.innerHTML = `You scored ${score} out of ${Q.length}!
    <br/>
       <b><h3>Whatever your result   ,  we believe in you   <br/> Continue learning and progressing! </b></h3> 
  <div id="doc01"></div> 
  <img src="<p>
  <b><h1>Whatever your result   ,  we believe in you   <br/> Continue learning and progressing! </b></h1> 
  
</p>
<div id="doc01"></div> 
<img src="https://media.tenor.com/2BRaI9a_I5QAAAAM/excited-dance.gif"  
  width="350px"
height="350px"
>`;
};

    function retryTest() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    testContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
}

    function showAnswer() {
    testContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';

    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
        incorrectAnswersHtml += `
        <p>
            <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
            <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
            <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
        `;
    }

    resultContainer.innerHTML = `
        <p>You scored ${score} out of ${Q.length}!</p>
        <p>Incorrect Answers:</p>
        ${incorrectAnswersHtml}
    `;
}


    submitButton.addEventListener('click', checkAnswer);
    retryButton.addEventListener('click', retryTest);
    showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();