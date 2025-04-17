// Function to change the text content dynamically
function changeText() {
    const textElement = document.getElementById("dynamicText");
    textElement.textContent = "The text has been changed!";
}

// Function to modify the CSS styles dynamically
function changeStyle() {
    const textElement = document.getElementById("dynamicText");
    textElement.style.color = "red";  // Change text color to red
    textElement.style.fontSize = "24px"; // Change font size
}

// Function to add a new element to the container
function addElement() {
    const container = document.getElementById("container");
    const newElement = document.createElement("div");
    newElement.classList.add("new-element");
    newElement.textContent = "This is a newly added element!";
    container.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const container = document.getElementById("container");
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

// Function to change the background color dynamically
function changeBackgroundColor(event) {
    document.body.style.backgroundColor = event.target.value;
}

// Contact Form Submission with Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out both fields.");
    }
});

// Toggle visibility of hidden content
function toggleVisibility() {
    const content = document.getElementById("toggleContent");
    content.style.display = content.style.display === "none" ? "block" : "none";
}

// Countdown Timer
let countdownTime = 10;
const countdownElement = document.getElementById("countdown");

function startCountdown() {
    const timer = setInterval(function() {
        countdownElement.textContent = countdownTime;
        countdownTime--;
        if (countdownTime < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Start Countdown Timer
startCountdown();

// Accordion Functionality
function toggleAccordion() {
    const panel = document.getElementById("accordionPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}
