const questions = [
  {
    question: "ما هي عاصمة السعودية؟",
    options: ["الرياض", "جدة", "مكة", "الدمام"],
    answer: "الرياض"
  },
  {
    question: "من هو مخترع الهاتف؟",
    options: ["أديسون", "بيل", "تسلا", "نيوتن"],
    answer: "بيل"
  },
  {
    question: "كم عدد الكواكب في المجموعة الشمسية؟",
    options: ["7", "8", "9", "10"],
    answer: "8"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `انتهت اللعبة 🎉 نتيجتك: ${score} من ${questions.length}`;
}

// أول سؤال
showQuestion();
