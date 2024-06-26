const COUNT_VISIBLE_PARTICIPANT = 3;
const WIDTH_ONE_PARTICIPANT = 414;
let currentScrollPosition = 0;

const listParticipants = document.querySelector('.participants');
const participants = listParticipants.querySelectorAll('.participant');
const scrollPageCount = Math.ceil(participants.length);
const scrollCounter = document.querySelector('.js-scroll-tools');
const currentScrollPage = document.querySelector('.js-visible-count');

const total = document.querySelector('.js-total');
if (total) {
    total.textContent = scrollPageCount;
}

let currentPage = COUNT_VISIBLE_PARTICIPANT;
currentScrollPage.textContent = currentPage;

const buttonRight = scrollCounter.querySelector('.js-right-arrow');
const buttonLeft = scrollCounter.querySelector('.js-left-arrow');

setButtonDisabled();


scrollCounter.onclick = function(event) {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.direction == 'left') {
        currentPage -= COUNT_VISIBLE_PARTICIPANT;
        currentScrollPosition += COUNT_VISIBLE_PARTICIPANT * WIDTH_ONE_PARTICIPANT;
    } else {
        currentPage += COUNT_VISIBLE_PARTICIPANT;
        if (currentPage > scrollPageCount) currentPage = scrollPageCount;
        currentScrollPosition -= COUNT_VISIBLE_PARTICIPANT * WIDTH_ONE_PARTICIPANT;
    }

    setButtonDisabled();
    listParticipants.style.marginLeft = `${currentScrollPosition}px`;
    currentScrollPage.textContent = currentPage;
};

function setButtonDisabled() {
    buttonLeft.disabled = currentPage <= COUNT_VISIBLE_PARTICIPANT;
    buttonRight.disabled = currentPage >= scrollPageCount;
}