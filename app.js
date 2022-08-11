import { renderPoll } from './render-utils.js';

const pollForm = document.getElementById('poll-form');
const optionAButton = document.getElementById('option-a-button');
const optionBButon = document.getElementById('option-b-button');
const subtractA = document.getElementById('subtract-a-button');
const subtractB = document.getElementById('subtract-b-button');
const submitPollButton = document.getElementById('submit-poll-button');

const currentPollEl = document.getElementById('current-poll-section');
const pastPollEl = document.getElementById('past-poll-container');

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

const currentPoll = {
    question: '',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: votesB
};

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    question = data.get('question');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

    currentPoll.question = question;
    currentPoll.optionA = optionA;
    currentPoll.optionB = optionB;

    console.log(currentPoll);

    pollForm.reset();
    console.log(currentPoll);

});

optionAButton.addEventListener('click', () => {
    votesA++;
    currentPoll.votesA = votesA;
    console.log(currentPoll);
});

optionBButon.addEventListener('click', () => {
    votesB++;
    currentPoll.votesB = votesB;
    console.log(currentPoll);
});

subtractA.addEventListener('click', () => {
    votesA--;
    currentPoll.votesA = votesA;
    console.log(currentPoll);
});

subtractB.addEventListener('click', () => {
    votesB--;
    currentPoll.votesB = votesB;
    console.log(currentPoll);
});




function displayCurrentPoll() {
    // const renderedPoll = renderPoll
}

async function displayAllPolls() {

}