if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
// DARK MODE
const toggleBtn = document.getElementById("toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
         const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// TYPING EFFECT

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
const text = ["Frontend Developer", "Web Designer", "JavaScript Learner"];
let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
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

function openImage(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}