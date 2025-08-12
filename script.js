document.addEventListener('DOMContentLoaded', function() {
    // Alert button functionality
    const colorButton = document.getElementById('colorButton');
    
    colorButton.addEventListener('click', function() {
        alert('🌈 Hooray! Colors make everything better! 🌈');
        
        // Add a fun rainbow effect to the button
        this.style.animation = 'rainbowAnimation 1.5s linear infinite';
        setTimeout(() => {
            this.style.animation = '';
        }, 3000);
    });
    
    // Background color changer
    const bgButtons = document.querySelectorAll('.bg-btn');
    
    bgButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('skyblue')) {
                document.body.style.backgroundColor = '#87CEEB';
            } else if (this.classList.contains('lavender')) {
                document.body.style.backgroundColor = '#E6E6FA';
            } else if (this.classList.contains('mint')) {
                document.body.style.backgroundColor = '#98FF98';
            } else if (this.classList.contains('reset')) {
                document.body.style.backgroundColor = '#f9f7f7';
            }
        });
    });
    
    // Add hover effects to color boxes
    const colorBoxes = document.querySelectorAll('.color-box');
    
    colorBoxes.forEach(box => {
        // Set the color name as text content
        box.textContent = box.classList[1].toUpperCase();
        
        box.addEventListener('mouseover', function() {
            // Make the text visible on hover
            this.style.fontSize = '1.2rem';
        });
        
        box.addEventListener('mouseout', function() {
            // Hide the text again
            this.style.fontSize = '0';
        });
    });
    
    // Smooth scrolling for navigation links
/*
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
*/
});
