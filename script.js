const questions = [
  {
    question: "¿Qué es una prueba de software?",
    options: [
      "Un análisis de mercado",
      "Una revisión de los documentos del proyecto",
      "Un proceso para verificar si el software funciona correctamente",
      "Un informe sobre el rendimiento del software",
    ],
    correct: 2,
  },
  {
    question: "¿Cuál de los siguientes no es un tipo de prueba de software?",
    options: [
      "Prueba unitaria",
      "Prueba de integración",
      "Prueba de compilación",
      "Prueba de regresión",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué es un documento de especificación de requisitos de software (SRS)?",
    options: [
      "Un contrato legal entre el cliente y el desarrollador",
      "Un plan detallado de pruebas",
      "Un documento que describe los requisitos funcionales y no funcionales del software",
      "Un manual de usuario del sistema",
    ],
    correct: 2,
  },
  {
    question:
      "¿Cuál es la principal función de un tester en un equipo de desarrollo?",
    options: [
      "Escribir código para el producto",
      "Evaluar y validar que el software funcione correctamente",
      "Implementar las características solicitadas por el cliente",
      "Administrar el sistema operativo",
    ],
    correct: 1,
  },
  {
    question: "¿Qué se entiende por 'pruebas de estrés' en software?",
    options: [
      "Pruebas que verifican la funcionalidad básica del software",
      "Pruebas que evalúan cómo el sistema maneja una carga elevada",
      "Pruebas que miden el consumo de energía del software",
      "Pruebas de compatibilidad con otros sistemas",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál de las siguientes herramientas se utiliza para la documentación de software?",
    options: ["GitHub", "Microsoft Word", "JIRA", "Selenium"],
    correct: 1,
  },
  {
    question: "¿Qué es un caso de prueba?",
    options: [
      "Un escenario específico diseñado para verificar el comportamiento de una funcionalidad",
      "Un error encontrado en el software",
      "El proceso de corregir errores en el código",
      "Un plan para lanzar el producto final",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es un 'bug' en software?",
    options: [
      "Una característica nueva del sistema",
      "Un error o defecto en el software",
      "Un archivo de configuración",
      "Una mejora en el código",
    ],
    correct: 1,
  },
  {
    question: "¿Qué se utiliza en un control de versiones de software?",
    options: [
      "Para monitorear los cambios en los documentos de usuario",
      "Para gestionar la configuración de hardware",
      "Para rastrear cambios en el código fuente",
      "Para crear diagramas UML",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es el 'testing de regresión'?",
    options: [
      "Prueba para verificar nuevas características",
      "Prueba para confirmar que los cambios no han afectado el software existente",
      "Prueba realizada después de lanzar el software",
      "Prueba enfocada en la seguridad del software",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es la automatización de pruebas?",
    options: [
      "El uso de scripts o herramientas para ejecutar pruebas sin intervención manual",
      "El proceso de escribir manualmente cada prueba",
      "La ejecución de pruebas por el equipo de desarrollo",
      "Un informe detallado del rendimiento de las pruebas",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es un 'documento de diseño técnico'?",
    options: [
      "Un manual de usuario para el software",
      "Un documento que describe cómo se implementará técnicamente una solución",
      "Un informe del plan de pruebas",
      "Un gráfico del rendimiento del software",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es una prueba de 'usabilidad'?",
    options: [
      "Prueba para medir el tiempo de ejecución del software",
      "Prueba para asegurar que el sistema sea fácil de usar por los usuarios finales",
      "Prueba para verificar la instalación del software",
      "Prueba de rendimiento del hardware",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál de los siguientes es un estándar común para documentación de software?",
    options: ["UML", "HTML", "CSS", "JSON"],
    correct: 0,
  },
  {
    question: "¿Qué tipo de prueba se realiza sin acceso al código fuente?",
    options: [
      "Prueba de caja blanca",
      "Prueba de rendimiento",
      "Prueba de caja negra",
      "Prueba unitaria",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es una prueba de aceptación del usuario (UAT)?",
    options: [
      "Prueba realizada por los desarrolladores",
      "Prueba realizada para medir el rendimiento del software",
      "Prueba realizada por los usuarios para verificar si cumple con los requisitos",
      "Prueba realizada antes del lanzamiento inicial",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es un 'plan de pruebas'?",
    options: [
      "Un conjunto de casos de prueba",
      "Un informe de errores encontrados",
      "Un documento que describe el enfoque y alcance de las pruebas de software",
      "Un resumen de las pruebas ejecutadas",
    ],
    correct: 2,
  },
  {
    question: "¿Cuál es la fase inicial del ciclo de vida de las pruebas?",
    options: [
      "Planificación de pruebas",
      "Diseño de casos de prueba",
      "Ejecución de pruebas",
      "Gestión de incidentes",
    ],
    correct: 0,
  },
  {
    question: "¿Qué herramienta se usa comúnmente para el seguimiento de bugs?",
    options: ["Microsoft Excel", "Google Docs", "JIRA", "AutoCAD"],
    correct: 2,
  },
  {
    question: "¿Qué es la documentación técnica en un proyecto de software?",
    options: [
      "Instrucciones para usuarios finales",
      "Información sobre cómo funciona el software internamente",
      "Un acuerdo entre desarrolladores y clientes",
      "Un conjunto de diagramas para el equipo de ventas",
    ],
    correct: 1,
  },
  {
    question: "¿Qué significa la abreviatura API?",
    options: [
      "Application Programming Interface",
      "Applied Programming Integration",
      "Automated Programming Instructions",
      "Advanced Programming Interface",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es un diagrama de flujo en la documentación?",
    options: [
      "Una representación visual de los flujos de control y operaciones en un sistema",
      "Un conjunto de casos de prueba",
      "Un diagrama de hardware del sistema",
      "Un informe del progreso de desarrollo",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es un informe de pruebas?",
    options: [
      "Un documento que describe cómo implementar una prueba",
      "Un resumen de los resultados de las pruebas ejecutadas",
      "Un documento que describe los errores en el sistema",
      "Un plan detallado de las pruebas futuras",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál de las siguientes es una herramienta para la automatización de pruebas?",
    options: ["Selenium", "Git", "Linux", "Slack"],
    correct: 0,
  },
  {
    question:
      "¿Cuál de los siguientes elementos suele formar parte de la documentación de software?",
    options: [
      "Descripción técnica del sistema",
      "Archivos de configuración de la red",
      "Análisis financiero del proyecto",
      "Listado de empleados",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es una prueba de integración?",
    options: [
      "Prueba de módulos independientes",
      "Prueba de cómo interactúan varios módulos entre sí",
      "Prueba del rendimiento del software",
      "Prueba del diseño de la interfaz de usuario",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál de los siguientes documentos describe el plan de trabajo de las pruebas?",
    options: [
      "Especificación de requisitos de software",
      "Documento de diseño técnico",
      "Plan de pruebas",
      "Documento de usuario",
    ],
    correct: 2,
  },
  {
    question: "¿Cuál es el objetivo principal de una revisión de código?",
    options: [
      "Aumentar la velocidad del desarrollo",
      "Detectar errores o mejoras en el código antes de su ejecución",
      "Implementar nuevas características",
      "Crear documentación del sistema",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es un diagrama UML?",
    options: [
      "Un lenguaje de programación",
      "Una herramienta para la automatización de pruebas",
      "Un lenguaje visual para modelar la estructura de un sistema",
      "Un estándar de seguridad",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es la trazabilidad en la documentación de software?",
    options: [
      "Capacidad de rastrear la evolución de los errores en el sistema",
      "Capacidad de rastrear el origen de los requisitos a través del ciclo de vida del software",
      "Capacidad de identificar al equipo de desarrollo",
      "Capacidad de monitorear el rendimiento del software",
    ],
    correct: 1,
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];
let currentSummaryIndex = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submit-btn");
const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const summary = document.getElementById("summary");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentQuestionNumber = document.getElementById(
  "current-question-number"
);
const totalQuestions = document.getElementById("total-questions");

function loadQuestion() {
  questionContainer.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const optionWrapper = document.createElement("div");
    optionWrapper.classList.add("form-check", "option-checkbox");

    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = "options";
    checkbox.value = index;
    checkbox.classList.add("form-check-input");
    optionWrapper.appendChild(checkbox);

    const label = document.createElement("label");
    label.textContent = option;
    label.classList.add("form-check-label");
    optionWrapper.appendChild(label);

    optionsContainer.appendChild(optionWrapper);
  });

  submitBtn.classList.remove("d-none");
  currentQuestionNumber.textContent = currentQuestion + 1;
}

function selectAnswer() {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );
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

// function showResults() {
//     questionContainer.classList.add('d-none');
//     optionsContainer.classList.add('d-none');
//     submitBtn.classList.add('d-none');

//     summary.innerHTML = '';
//     questions.forEach((question, index) => {
//         const questionResult = document.createElement('div');
//         questionResult.classList.add('mb-3', 'result-item');

//         const questionText = document.createElement('p');
//         questionText.textContent = `${index + 1}. ${question.question}`;
//         questionResult.appendChild(questionText);

//         const userAnswerText = document.createElement('p');
//         const correctAnswerText = document.createElement('p');

//         userAnswerText.textContent = `Tu respuesta: ${question.options[userAnswers[index]]}`;
//         correctAnswerText.textContent = `Respuesta correcta: ${question.options[question.correct]}`;

//         if (userAnswers[index] === question.correct) {
//             userAnswerText.classList.add('text-success');
//         } else {
//             userAnswerText.classList.add('text-danger');
//         }

//         questionResult.appendChild(userAnswerText);
//         questionResult.appendChild(correctAnswerText);
//         summary.appendChild(questionResult);
//     });

//     correctCount.textContent = `Respuestas correctas: ${correctAnswers}`;
//     incorrectCount.textContent = `Respuestas incorrectas: ${incorrectAnswers}`;

//     showSummaryAt(0);
//     resultModal.show();
// }

function showResults() {
  questionContainer.classList.add("d-none");
  optionsContainer.classList.add("d-none");
  submitBtn.classList.add("d-none");

  summary.innerHTML = "";
  questions.forEach((question, index) => {
    const questionResult = document.createElement("div");
    questionResult.classList.add("mb-3", "result-item");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionResult.appendChild(questionText);

    // Crear una lista de las opciones con letras
    const letters = ["a", "b", "c", "d"];
    const letteredOptions = question.options
      .map((option, idx) => {
        const isCorrect = idx === question.correct; // Verifica si es la respuesta correcta
        const optionText = `${letters[idx]}. ${option}`;
        return isCorrect
          ? `<span class="text-success font-weight-bold">${optionText} (Correcta)</span>`
          : optionText;
      })
      .join("<br>");

    // Mostrar las respuestas con letras
    const optionsText = document.createElement("p");
    optionsText.innerHTML = `Opciones: <br>${letteredOptions}`;
    questionResult.appendChild(optionsText);

    const userAnswerText = document.createElement("p");
    userAnswerText.textContent = `Tu respuesta: ${
      question.options[userAnswers[index]]
    }`;
    if (userAnswers[index] === question.correct) {
      userAnswerText.classList.add("text-success");
    } else {
      userAnswerText.classList.add("text-danger");
    }

    const correctAnswerText = document.createElement("p");
    correctAnswerText.textContent = `Respuesta correcta: ${
      question.options[question.correct]
    }`;

    questionResult.appendChild(userAnswerText);
    questionResult.appendChild(correctAnswerText);
    summary.appendChild(questionResult);
  });

  correctCount.textContent = `Respuestas correctas: ${correctAnswers}`;
  incorrectCount.textContent = `Respuestas incorrectas: ${incorrectAnswers}`;

  showSummaryAt(0);
  resultModal.show();

  // Agregar botón de reinicio
  const restartBtn = document.createElement("button");
  restartBtn.classList.add("btn", "btn-warning");
  restartBtn.textContent = "Reiniciar Cuestionario";
  restartBtn.addEventListener("click", restartQuiz);
  const modalFooter = resultModal._element.querySelector(".modal-footer");

  // Asegúrate de que solo se agregue una vez el botón
  if (!modalFooter.querySelector(".btn-warning")) {
    modalFooter.appendChild(restartBtn);
  }
}

// Función para reiniciar el cuestionario
// function restartQuiz() {
//     currentQuestion = 0;
//     correctAnswers = 0;
//     incorrectAnswers = 0;
//     userAnswers = [];
//     summary.innerHTML = '';
//     totalQuestions.textContent = questions.length;
//     loadQuestion();
//     resultModal.hide();
//     questionContainer.classList.remove('d-none'); // Asegúrate de mostrar la pregunta
//     optionsContainer.classList.remove('d-none'); // Asegúrate de mostrar las opciones
//     submitBtn.classList.remove('d-none'); // Mostrar el botón de enviar
// }

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  userAnswers = [];
  summary.innerHTML = "";
  shuffleQuestions(); // Mezclar las preguntas al reiniciar
  totalQuestions.textContent = questions.length;
  loadQuestion();
  resultModal.hide();
  questionContainer.classList.remove("d-none"); // Asegúrate de mostrar la pregunta
  optionsContainer.classList.remove("d-none"); // Asegúrate de mostrar las opciones
  submitBtn.classList.remove("d-none"); // Mostrar el botón de enviar
}

function showSummaryAt(index) {
  const allResults = document.querySelectorAll(".result-item");
  allResults.forEach((result, i) => {
    result.style.display = i === index ? "block" : "none";
  });
  currentSummaryIndex = index;

  prevBtn.disabled = currentSummaryIndex === 0;
  nextBtn.disabled = currentSummaryIndex === allResults.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentSummaryIndex > 0) {
    showSummaryAt(currentSummaryIndex - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSummaryIndex < questions.length - 1) {
    showSummaryAt(currentSummaryIndex + 1);
  }
});

// function loadQuestion() {
//   questionContainer.textContent = questions[currentQuestion].question;
//   optionsContainer.innerHTML = "";

//   questions[currentQuestion].options.forEach((option, index) => {
//     const optionWrapper = document.createElement("div");
//     optionWrapper.classList.add("form-check", "option-checkbox");

//     const checkbox = document.createElement("input");
//     checkbox.type = "radio";
//     checkbox.name = "options";
//     checkbox.value = index;
//     checkbox.id = `option${index}`;
//     checkbox.classList.add("form-check-input");
//     optionWrapper.appendChild(checkbox);

//     const label = document.createElement("label");
//     label.setAttribute("for", `option${index}`); // Vinculamos el label con el checkbox
//     label.textContent = option;
//     label.classList.add("form-check-label");
//     optionWrapper.appendChild(label);

//     optionsContainer.appendChild(optionWrapper);
//   });

//   submitBtn.classList.remove("d-none");
//   currentQuestionNumber.textContent = currentQuestion + 1;
// }
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
        label.setAttribute('for', `option${index}`);
        label.textContent = `${String.fromCharCode(97 + index)}. ${option}`; // Agregar a, b, c, d
        label.classList.add('form-check-label');
        optionWrapper.appendChild(label);

        optionsContainer.appendChild(optionWrapper);
    });

    submitBtn.classList.remove('d-none');
    currentQuestionNumber.textContent = currentQuestion + 1;
}
//recien agregados
function shuffleOptions() {
    questions.forEach(question => {
        for (let i = question.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
        }
    });
}
document.getElementById('start-quiz-btn').addEventListener('click', () => {
    restartQuiz(); // Iniciar sin mezclar respuestas
});

document.getElementById('start-shuffled-quiz-btn').addEventListener('click', () => {
    shuffleOptions(); // Mezclar las opciones de las preguntas
    restartQuiz(); // Reiniciar el cuestionario con las respuestas mezcladas
});
submitBtn.addEventListener("click", selectAnswer);

// Carga la primera pregunta y establece el número total de preguntas
totalQuestions.textContent = questions.length;
loadQuestion();
