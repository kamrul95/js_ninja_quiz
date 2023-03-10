const form = document.querySelector('.ninja-form');
const result = document.querySelector('.result');
const scoreSpan = document.querySelector('.result span');
const correctAnswers = ['B', 'B', 'B', 'A']

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((ans, index) => {
        if(ans === correctAnswers[index]) {
            score += 25;
        }
    })
    scrollTo(0, 0)
    result.classList.remove('d-none')

    let output = 0;
    const timer = setInterval(()=> {
        scoreSpan.textContent = `${output}%`
        if(output === score) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10)
})