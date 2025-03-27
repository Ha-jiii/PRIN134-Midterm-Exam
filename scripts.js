document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.card');

    let currentHighlightedIndex = 0;
    
    
    // 1.
    const petButtons = document.querySelectorAll('.btn-full');
    petButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });
    
    // 2. 
    const petAllBtn = document.querySelector('#btn-select-all');
    petAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    });
    
    // 3.
    const unpetAllBtn = document.querySelector('#btn-unselect-all');
    unpetAllBtn.addEventListener('click', function() {
        petButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
    });

    highlightCard(currentHighlightedIndex);
    
    // 4.
    const lastBtn = document.querySelector('#btn-select-last');
    lastBtn.addEventListener('click', function() {
        currentHighlightedIndex = cards.length - 1;
        highlightCard(currentHighlightedIndex);
    });
    
    // 5.
    const firstBtn = document.querySelector('#btn-select-first');
    firstBtn.addEventListener('click', function() {
        currentHighlightedIndex = 0;
        highlightCard(currentHighlightedIndex);
    });
    
    // 6.
    const nextBtn = document.querySelector('#btn-select-next');
    nextBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    
    // 7.
    const prevBtn = document.querySelector('#btn-select-previous');
    prevBtn.addEventListener('click', function() {
        currentHighlightedIndex = (currentHighlightedIndex - 1 + cards.length) % cards.length;
        highlightCard(currentHighlightedIndex);
    });
    
    // 8.
    const siteLogo = document.querySelector('.banner-content');
    siteLogo.addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__jackInTheBox');

        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__jackInTheBox');
        }, { once: true });
    });

    function highlightCard(index) {
        cards.forEach(card => {
            card.classList.remove('card-selected', 'active');
        });
        cards[index].classList.add('card-selected', 'active');
        currentHighlightedIndex = index;
    }
});