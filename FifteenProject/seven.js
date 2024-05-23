const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.querySelector('.question-btn').addEventListener('click', () => {
        const isOpen = question.classList.contains('show-text');

        questions.forEach(item => item.classList.remove('show-text'));

        if (!isOpen) {
            question.classList.add('show-text');
        }
    });
});


