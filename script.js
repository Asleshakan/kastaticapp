// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('message-button');
    const messageSection = document.getElementById('message-section');
    const dynamicMessage = document.getElementById('dynamic-message');

    // Add an event listener to the button
    button.addEventListener('click', () => {
        // Display the message section
        messageSection.style.display = 'block';

        // Set the dynamic message
        dynamicMessage.textContent = 'Hello, this is a dynamically loaded message!';
    });
});
