// Smooth Scrolling
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal for Project Details
function openModal(project) {
    // Example project content (You can dynamically load these based on your project array)
    let projectDetails = {
        "project1": {
            title: "Project 1",
            details: "This is a detailed description of Project 1. It involves a complex algorithm to solve a real-world problem."
        }
    };

    document.getElementById('projectTitle').innerText = projectDetails[project].title;
    document.getElementById('projectDetails').innerText = projectDetails[project].details;
    document.getElementById('projectModal').style.display = "block";
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }

    // Add additional validation logic here if needed
    return true;
}


// Get the navigation bar
let navbar = document.querySelector('nav');

// Variable to keep track of the last scroll position
let lastScrollTop = 0;

// Add an event listener for the scroll event
window.onscroll = function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // User is scrolling down
        navbar.classList.add('hide-navbar');
    } else {
        // User is scrolling up
        navbar.classList.remove('hide-navbar');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
}
