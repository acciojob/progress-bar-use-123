//your JS code here. If required.
// Get all necessary DOM elements
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Keep track of current active step
let currentActive = 1;

// Add event listener for next button
nextButton.addEventListener('click', () => {
    currentActive++;
    
    // Ensure currentActive doesn't exceed number of circles
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    
    updateProgress();
});

// Add event listener for prev button
prevButton.addEventListener('click', () => {
    currentActive--;
    
    // Ensure currentActive doesn't go below 1
    if(currentActive < 1) {
        currentActive = 1;
    }
    
    updateProgress();
});

// Function to update the DOM
function updateProgress() {
    // Update circle active states
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    
    // Calculate progress bar width
    const actives = document.querySelectorAll('.active');
    const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = progressWidth + '%';
    
    // Update button states
    if(currentActive === 1) {
        prevButton.disabled = true;
    } else if(currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}