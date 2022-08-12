import { renderPoll } from './render-utils.js';
import { createPoll, getPolls } from './fetch-utils.js';

const pollForm = document.getElementById('poll-form');
const optionAButton = document.getElementById('option-a-button');
const optionBButon = document.getElementById('option-b-button');
const subtractA = document.getElementById('subtract-a-button');
const subtractB = document.getElementById('subtract-b-button');
const submitPollButton = document.getElementById('submit-poll-button');

const currentPollEl = document.getElementById('current-poll-section');
const pastPollEl = document.getElementById('past-poll-container');

// let question = '';
// let optionA = '';
// let optionB = '';
// let votesA = 0;
// let votesB = 0;

const currentPoll = {
    question: '',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0
};

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    currentPoll.question = data.get('question');
    currentPoll.optionA = data.get('option-a');
    currentPoll.optionB = data.get('option-b');

    // currentPoll.question = question;
    // currentPoll.optionA = optionA;
    // currentPoll.optionB = optionB;

    

    pollForm.reset();
    
    displayCurrentPoll();

});

optionAButton.addEventListener('click', () => {
    
    currentPoll.votesA++;
    displayCurrentPoll();
    
});

optionBButon.addEventListener('click', () => {
    
    currentPoll.votesB++;
    displayCurrentPoll();
    
});

subtractA.addEventListener('click', () => {
    
    currentPoll.votesA--;
    displayCurrentPoll();
    
});

subtractB.addEventListener('click', () => {
    
    currentPoll.votesB--;
    displayCurrentPoll();
    
});

submitPollButton.addEventListener('click', async () => {
    

    await createPoll(currentPoll);

    currentPoll.question = '';
    currentPoll.optionA = '';
    currentPoll.optionB = '';
    currentPoll.votesA = 0;
    currentPoll.votesB = 0;

    displayAllPolls();

});




function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const renderedPoll = renderPoll(currentPoll);
    currentPollEl.append(renderedPoll);
}

async function displayAllPolls() {
    pastPollEl.textContent = '';

    const allPolls = await getPolls();

    for (let poll of allPolls) {
        const renderedPoll = renderPoll(poll);
        pastPollEl.append(renderedPoll);
    }
}