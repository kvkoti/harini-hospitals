
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

// Display the current year automatically.
year.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuBtn.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link.
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Demonstration form: it does not send data to a hospital.
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const name = document.getElementById("patientName").value.trim();
    const department = document.getElementById("department").value;

    formMessage.textContent =
        "Thank you, " + name + ". Your " + department +
        " enquiry has been prepared. This demo does not send your " +
        "information to the hospital.";

    contactForm.reset();
});
