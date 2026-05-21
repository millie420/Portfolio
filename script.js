// =====================
// DARK MODE
// =====================
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

const toggleBtn = document.getElementById("toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}


// =====================
// SMOOTH SCROLL NAV
// =====================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});


// =====================
// ACTIVE NAV ON SCROLL
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// =====================
// SCROLL ANIMATION
// =====================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// =====================
// TYPING EFFECT
// =====================
const text = ["Frontend Developer", "UI Designer","Web Designer", "Problem Solver"];
let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

if (typingElement) {
    document.addEventListener("DOMContentLoaded", type);
}

function type() {
    if (!typingElement) return;

    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);


// =====================
// IMAGE MODAL
// =====================
function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
    }
}

function closeImage() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}


// =====================
// CONTACT POPUPS (FIXED)
// =====================
function togglePopup(id) {
    const popup = document.getElementById(id);

    if (!popup) return;

    document.querySelectorAll(".popup").forEach(p => {
        if (p !== popup) p.classList.remove("show");
    });

    popup.classList.toggle("show");
}


// =====================
// GITHUB LINK
// =====================
function openGit() {
    window.open("https://github.com/millie420", "_blank");
}

function openCV() {
    document.getElementById("cvModal").style.display = "flex";
    document.getElementById("cvFrame").src = "cv/resume.pdf";
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
    document.getElementById("cvFrame").src = "";

}

window.onclick = function(event) {
    const modal = document.getElementById("cvModal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.getElementById("cvFrame").src = "";
    }
}

console.log("Modal display:", document.getElementById("cvModal").style.display);

window.addEventListener("load", () => {
    const modal = document.getElementById("cvModal");
    modal.style.display = "none";
});