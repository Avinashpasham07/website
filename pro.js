// Simple success message display
if(window.location.hash === '#contact') {
    document.getElementById('success-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 5000);
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };
    
    // Store in localStorage
    let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    
    // Display success message
    document.getElementById('success-message').style.display = 'block';
    
    // Display the collected data (for your reference)
    document.getElementById('data-display').textContent = JSON.stringify(formData, null, 2);
    document.getElementById('form-data').classList.add('visible');
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 5000);
});

// Copy button functionality
document.getElementById('copy-btn').addEventListener('click', function() {
    const data = document.getElementById('data-display').textContent;
    navigator.clipboard.writeText(data)
        .then(() => alert('Data copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
});

// Display all submissions in console (for debugging)
function showAllSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    console.log("All Form Submissions:", submissions);
}

// Call this function to see all stored submissions
showAllSubmissions();
