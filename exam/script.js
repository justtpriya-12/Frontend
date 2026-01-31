const questions = [
    {
        question: "1. how many country share border with india?",
        options: ["2","7","12","20"],
        answer: 1
    },
    {
        question: "2. how many planet in our solar system?",
        options: ["10", "8", "7", "6"],
        answer: 1
    },
    {
        question: "3. What is 12-12?",
        options: ["24", "144", "0", "13"],
        answer: 2
    },
    {
        question: "4. who is the president of India?",
        options: ["rajiv gandhi","draupadi murmu", "man mohan singh", "rahul gandhi"],
        answer: 1
    },
    {
        question: "5. what is 2*4 ?",
        options: ["8","6","2","16"],
        answer: 0
    }
];

let userAnswers = Array(questions.length).fill(null);

function loadQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    questions.forEach((q, i) => {
        const box = document.createElement("div");
        box.className = "question-box";

        const title = document.createElement("h3");
        title.textContent = q.question;
        box.appendChild(title);

        q.options.forEach((opt, idx) => {
            const optDiv = document.createElement("div");
            optDiv.className = "option";
            optDiv.textContent = opt;

            optDiv.onclick = () => {
                userAnswers[i] = idx;

                box.querySelectorAll(".option")
                    .forEach(el => el.classList.remove("correct", "wrong"));

                optDiv.classList.add(idx === q.answer ? "correct" : "wrong");
            };

            box.appendChild(optDiv);
        });

        quizDiv.appendChild(box);
    });
}

document.getElementById("submitBtn").onclick = () => {
    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === questions[i].answer) score++;
    });

    document.getElementById("result").textContent =
        `Your Score: ${score} / ${questions.length}`;
};

loadQuiz();
