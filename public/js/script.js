const contentWrapper = document.querySelector(".content-wrapper");

async function getImages() {
    const response = await fetch("http://localhost:3000/getImages");
    const data = await response.json();
    return data.images
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