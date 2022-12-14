async function getImages() {
    const response = await fetch("http://localhost:3000/getImages");
    const data = await response.json();
    console.log(data.images);
    return data.images
}

getImages();