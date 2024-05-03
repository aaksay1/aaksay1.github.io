document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_hdk75jd', 'template_8105i7z', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email successfully sent!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});