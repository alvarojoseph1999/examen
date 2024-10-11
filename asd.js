const questions = [
    {
        question: "¿Qué es una prueba de software?",
        options: ["Un análisis de mercado", "Una revisión de los documentos del proyecto", "Un proceso para verificar si el software funciona correctamente", "Un informe sobre el rendimiento del software"],
        correct: 2
    },
    {
        question: "¿Cuál de los siguientes no es un tipo de prueba de software?",
        options: ["Prueba unitaria", "Prueba de integración", "Prueba de compilación", "Prueba de regresión"],
        correct: 2
    },
    {
        question: "¿Qué es un documento de especificación de requisitos de software (SRS)?",
        options: ["Un contrato legal entre el cliente y el desarrollador", "Un plan detallado de pruebas", "Un documento que describe los requisitos funcionales y no funcionales del software", "Un manual de usuario del sistema"],
        correct: 2
    }, 
];
    
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];
let currentSummaryIndex = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const summary = document.getElementById('summary');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentQuestionNumber = document.getElementById('current-question-number');
const totalQuestions = document.getElementById('total-questions');

function loadQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = '';

    questions[currentQuestion].options.forEach((option, index) => {
        const optionWrapper = document.createElement('div');
        optionWrapper.classList.add('form-check', 'option-checkbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'radio';
        checkbox.name = 'options';
        checkbox.value = index;
        checkbox.classList.add('form-check-input');
        optionWrapper.appendChild(checkbox);

        const label = document.createElement('label');
        label.textContent = option;
        label.classList.add('form-check-label');
        optionWrapper.appendChild(label);

        optionsContainer.appendChild(optionWrapper);
    });

    submitBtn.classList.remove('d-none');
    currentQuestionNumber.textContent = currentQuestion + 1;
}

function selectAnswer() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        userAnswers.push(parseInt(selectedOption.value));

        if (parseInt(selectedOption.value) === questions[currentQuestion].correct) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Por favor selecciona una respuesta.");
    }
}

function showResults() {
    questionContainer.classList.add('d-none');
    optionsContainer.classList.add('d-none');
    submitBtn.classList.add('d-none');

    summary.innerHTML = '';
    questions.forEach((question, index) => {
        const questionResult = document.createElement('div');
        questionResult.classList.add('mb-3', 'result-item');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionResult.appendChild(questionText);

        const userAnswerText = document.createElement('p');
        const correctAnswerText = document.createElement('p');

        userAnswerText.textContent = `Tu respuesta: ${question.options[userAnswers[index]]}`;
        correctAnswerText.textContent = `Respuesta correcta: ${question.options[question.correct]}`;

        if (userAnswers[index] === question.correct) {
            userAnswerText.classList.add('text-success');
        } else {
            userAnswerText.classList.add('text-danger');
        }

        questionResult.appendChild(userAnswerText);
        questionResult.appendChild(correctAnswerText);
        summary.appendChild(questionResult);
    });

    correctCount.textContent = `Respuestas correctas: ${correctAnswers}`;
    incorrectCount.textContent = `Respuestas incorrectas: ${incorrectAnswers}`;

    showSummaryAt(0);
    resultModal.show();
}

function showSummaryAt(index) {
    const allResults = document.querySelectorAll('.result-item');
    allResults.forEach((result, i) => {
        result.style.display = i === index ? 'block' : 'none';
    });
    currentSummaryIndex = index;

    prevBtn.disabled = currentSummaryIndex === 0;
    nextBtn.disabled = currentSummaryIndex === allResults.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentSummaryIndex > 0) {
        showSummaryAt(currentSummaryIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSummaryIndex < questions.length - 1) {
        showSummaryAt(currentSummaryIndex + 1);
    }
});

function loadQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = '';

    questions[currentQuestion].options.forEach((option, index) => {
        const optionWrapper = document.createElement('div');
        optionWrapper.classList.add('form-check', 'option-checkbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'radio';
        checkbox.name = 'options';
        checkbox.value = index;
        checkbox.id = `option${index}`;
        checkbox.classList.add('form-check-input');
        optionWrapper.appendChild(checkbox);

        const label = document.createElement('label');
        label.setAttribute('for', `option${index}`); // Vinculamos el label con el checkbox
        label.textContent = option;
        label.classList.add('form-check-label');
        optionWrapper.appendChild(label);

        optionsContainer.appendChild(optionWrapper);
    });

    submitBtn.classList.remove('d-none');
    currentQuestionNumber.textContent = currentQuestion + 1;
}


submitBtn.addEventListener('click', selectAnswer);

// Carga la primera pregunta y establece el número total de preguntas
totalQuestions.textContent = questions.length;
loadQuestion();