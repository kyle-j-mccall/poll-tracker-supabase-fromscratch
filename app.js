const pollForm = document.getElementById('poll-form');
const optionAButon = document.getElementById('option-a-button');
const optionBButon = document.getElementById('option-b-button');
const subtractA = document.getElementById('subtract-a-button');
const subtractB = document.getElementById('subtract-b-button');
const submitPollButton = document.getElementById('submit-poll-button');

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    question = data.get('question');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

    console.log(question, optionA, optionB);

    pollForm.reset();

});