navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		// Add active class to selected link
		link.classList.add('active');
		// Remove active class from other links
		navLinks.forEach(otherLink => {
			if (otherLink !== link) {
				otherLink.classList.remove('active');
			}
		});
		// Scroll to section
		const section = document.querySelector(link.hash);
		section.scrollIntoView({ behavior: 'smooth' });
	});
});
// Smooth scrolling to specific section
function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add event listener for the "Learn More" button
document.querySelector('button').addEventListener('click', function() {
    scrollToSection('projects');
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
