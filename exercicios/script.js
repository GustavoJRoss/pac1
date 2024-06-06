document.getElementById('finalizeButton').addEventListener('click', function() {
    const correctAnswers = {
        q1: '15',
        q2: 'Retorna o número de elementos em uma lista ou string',
        q3: '10',
        q4: '6',
        q5: '15',
        q6: 'Calcula o fatorial de 4',
        q7: '200',
        q8: '*\n**\n***',
        q9: '8',
        q10: '0 0\n0 1\n1 0\n1 1\n2 0\n2 1'
    };

    let score = 0;
    for (const [question, answer] of Object.entries(correctAnswers)) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answer) {
            score++;
        }
    }

    const totalQuestions = Object.keys(correctAnswers).length;
    const resultText = `Você acertou ${score} de ${totalQuestions} questões!`;
    document.getElementById('result').innerText = resultText;

    // Redireciona para a página de resultados com a pontuação
    window.location.href = `../respostaExercicio/index.html?score=${score}&total=${totalQuestions}`;})
