// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_a595p3e",
        "template_olwdokd",
        this,
        {
            publicKey: "5Jh1nr5hW3DYWX-38"
        }
    )
    .then(() => {
        alert("Thank you! Your message has been sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Sorry! Message could not be sent. Please try again.");
    });
});