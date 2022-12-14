const contentWrapper = document.querySelector(".content-wrapper");
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

async function getImages() {
    const response = await fetch("http://localhost:3000/getImages");
    const data = await response.json();
    return data.images;
}

async function createImages() {
    const images = await getImages();
    images.forEach(image => {
        const placard = document.createElement("div");
        placard.classList.add("placard-wrapper");
        const imageContent = document.createElement("img");
        imageContent.setAttribute("src", image);
        imageContent.setAttribute("alt", "Egyptian Artwork");
        imageContent.classList.add("artwork");
        placard.appendChild(imageContent);
        contentWrapper.appendChild(placard);
    });
}

createImages();

// Creates intro
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) * 600)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                span.classList.remove("active");
                span.classList.add("fade");
            }, (idx = 1) * 50)
        }, 3500);
        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 3800);
    })
});