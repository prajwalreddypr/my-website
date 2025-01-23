// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior only for internal links
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal for Project Details
function openModal(project) {
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
    return true;
}

// Get the navigation bar
let navbar = document.querySelector('nav');
let lastScrollTop = 0;

// Add an event listener for the scroll event
window.onscroll = function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hide-navbar');
    } else {
        navbar.classList.remove('hide-navbar');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative values
};
