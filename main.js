const card = document.querySelector('.card');
const ratings = document.querySelectorAll('.rating-choice');
const target = document.querySelector('[data-js="rating"]');
const submitBtn = document.querySelector('.btn');

let choice = '';

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        choice = e.currentTarget.textContent;
        resetRatingsState();
        rating.classList.toggle('selected');
    })
})

function resetRatingsState() {
    ratings.forEach((rating) => {
        rating.classList.remove('selected');
    })
}

submitBtn.addEventListener('click', (e) => {
    if (choice != '') {
        e.preventDefault();
        target.textContent = choice;
        card.classList.add('thanks-state');
    }
})

