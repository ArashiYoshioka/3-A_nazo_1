function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "28") {
        result.textContent = "出席番号3番";
    } else {
        result.textContent = "残念...";
    }
}
