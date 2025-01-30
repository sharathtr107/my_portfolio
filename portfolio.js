// Dark Mode Toggle
const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
document.addEventListener('mousemove', function(e) {
    let smoke = document.createElement('div');
    smoke.classList.add('smoke');
    
    smoke.style.left = e.pageX + 'px';
    smoke.style.top = e.pageY + 'px';

    document.body.appendChild(smoke);

    // Remove the smoke after animation ends
    setTimeout(function() {
        smoke.remove();
    }, 1000); // 1000 ms = 1 second for smoke particle duration
});
