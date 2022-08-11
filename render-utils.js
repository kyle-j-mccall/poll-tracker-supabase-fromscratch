

export function renderPoll(pollObj) {
    const div = document.createElement('div');
    const questionEl = document.createElement('h3');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');

    questionEl.textContent = pollObj.question;
    optionAEl.textContent = `${pollObj.optionA}: ${pollObj.votesA}`;
    optionBEl.textContent = `${pollObj.optionB}: ${pollObj.votesB}`;

    div.classList.add('rendered-poll-container');

    div.append(questionEl, optionAEl, optionBEl);

    return div;
}