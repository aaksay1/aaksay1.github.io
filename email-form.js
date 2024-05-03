// Initialize EmailJS with your user ID
(function(){
    emailjs.init("NeIEKz6yxBgE57cwP"); // Replace 'your-user-id' with your actual EmailJS user ID
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send the form data using EmailJS
    emailjs.sendForm('service_hdk75jd', 'template_8105i7z', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email successfully sent!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});
