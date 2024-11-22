document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display a loading spinner or message during submission
    const submitButton = document.querySelector('.contact-install-btn');
    submitButton.innerHTML = 'Submitting...';
    submitButton.style.backgroundColor = '#ffc107';

    // Simulate a delay to mimic an actual submission process
    setTimeout(function() {
        submitButton.innerHTML = 'Submitted';
        submitButton.style.backgroundColor = '#4CAF50'; // Success color
    }, 2000);
});
