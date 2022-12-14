const express = require("express");
const router = express.Router();
const departmentName = "Egyptian Art";

async function getDepartmentId(departmentName) {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments");
    const data = await response.json();
    const id = data.departments.find(department => {
        return department.displayName == departmentName;
    }).departmentId;
    return id;
}

async function getObjectIds(id) {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`);
    const data = await response.json();
    return data.objectIDs;
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

async function getRandomImage(ids, set) {
    const id = getRandom(ids);
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    const data = await response.json();
    if (data.primaryImage == "") {
        return getRandomImage(ids, set);
    } else {
        if (set.has(data.primaryImage)) {
            return getRandomImage(ids, set)
        } else {
            set.add(data.primaryImage);
            return data.primaryImage;
        }
    }
}

router.get("/", async (req, res) => {
    const departmentId = await getDepartmentId(departmentName);
    const ids = await getObjectIds(departmentId);
    const image = await getRandomImage(ids, new Set());
    res.render("index", {departmentName: departmentName});
});

module.exports = router;