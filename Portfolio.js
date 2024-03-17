document.addEventListener("DOMContentLoaded", function() {
    // Get the contact button
    const contactBtn = document.getElementById('contactBtn');
  
    // Add click event listener to the contact button
    contactBtn.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Get the contact section
      const contactSection = document.getElementById('contact');
  
      // Scroll smoothly to the contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    // Get the skills and projects buttons
    const skillsBtn = document.getElementById('skillsBtn');
    const projectsBtn = document.getElementById('projectsBtn');
  
    // Function to scroll smoothly to a section
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Add click event listeners to the skills and projects buttons
    skillsBtn.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('skills');
    });
  
    projectsBtn.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('projects');
    });
  });
  