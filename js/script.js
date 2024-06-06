$(document).ready(function () {
            $('#accordion .card-header').click(function () {
                $('#accordion .card-header').removeClass('active');
$(this).addClass('active');
});
});


function animateCounter(targetElement, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(function() {
        current += increment;
        targetElement.textContent = current + "+";

        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}
const experienceCounter = document.getElementById('experience-counter');
animateCounter(experienceCounter, 0, 38, 2000); 