// Function to add 'show' class on scroll
function handleScroll() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerBottom = window.innerHeight * 0.8;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial call to handle scroll on page load
handleScroll();

// Show Surprise Message
document.getElementById('show-message-btn').addEventListener('click', function() {
    document.getElementById('surprise-message').classList.toggle('visible');
});

// Love Meter
document.getElementById('love-range').addEventListener('input', function() {
    const value = this.value;
    const description = document.getElementById('love-description');
    
    if (value < 30) {
        description.textContent = "You care a little.";
    } else if (value < 70) {
        description.textContent = "You care a lot!";
    } else {
        description.textContent = "You care deeply!";
    }
});
