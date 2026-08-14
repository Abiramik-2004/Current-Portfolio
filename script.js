/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


/* Close mobile menu when clicking link */

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement =
    document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "Associate Software Engineer",
    "Frontend Developer",
    "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

/* =====================================================
   CONTACT FORM - WEB3FORMS
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const submitBtn =
    document.getElementById("submitBtn");

const buttonText =
    document.getElementById("buttonText");

const buttonIcon =
    document.getElementById("buttonIcon");


contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    /* Disable button while sending */

    submitBtn.disabled = true;

    submitBtn.style.opacity = "0.7";

    buttonText.textContent = "Sending...";

    buttonIcon.className =
        "fa-solid fa-spinner fa-spin";


    /* Get form data */

    const formData =
        new FormData(contactForm);


    const object =
        Object.fromEntries(formData);


    const json =
        JSON.stringify(object);


    try {

        /* Send form to Web3Forms */

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: json
            }
        );


        const result =
            await response.json();


        /* SUCCESS */

        if (response.status === 200) {

            formMessage.textContent =
                "✓ Message sent successfully! I'll get back to you soon.";

            formMessage.classList.remove(
                "hidden",
                "text-red-400"
            );

            formMessage.classList.add(
                "text-green-400"
            );


            /* Clear form */

            contactForm.reset();


            /* Reset button */

            buttonText.textContent =
                "Message Sent";

            buttonIcon.className =
                "fa-solid fa-check";


            /* Restore button */

            setTimeout(() => {

                buttonText.textContent =
                    "Send Message";

                buttonIcon.className =
                    "fa-solid fa-paper-plane";

                submitBtn.disabled = false;

                submitBtn.style.opacity = "1";

            }, 3000);


        } else {

            /* ERROR */

            formMessage.textContent =
                result.message ||
                "Something went wrong. Please try again.";

            formMessage.classList.remove(
                "hidden",
                "text-green-400"
            );

            formMessage.classList.add(
                "text-red-400"
            );


            submitBtn.disabled = false;

            submitBtn.style.opacity = "1";

            buttonText.textContent =
                "Send Message";

            buttonIcon.className =
                "fa-solid fa-paper-plane";

        }


    } catch (error) {

        console.error(
            "Contact form error:",
            error
        );


        formMessage.textContent =
            "Unable to send message. Please try again later.";

        formMessage.classList.remove(
            "hidden",
            "text-green-400"
        );

        formMessage.classList.add(
            "text-red-400"
        );


        submitBtn.disabled = false;

        submitBtn.style.opacity = "1";

        buttonText.textContent =
            "Send Message";

        buttonIcon.className =
            "fa-solid fa-paper-plane";

    }


    /* Hide message after 5 seconds */

    setTimeout(() => {

        formMessage.classList.add("hidden");

    }, 5000);

});



/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.remove("hidden");

    } else {

        topBtn.classList.add("hidden");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});