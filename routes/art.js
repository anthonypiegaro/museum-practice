const express = require("express");
const router = express.Router();
const returnImages = require("../returnImages");
const departmentName = "Egyptian Art";

router.get("/", async (req, res) => {
    res.render("index", {departmentName: departmentName});
});

router.get("/getImages", async (req, res) => {
    const images = await returnImages(departmentName);
    const data = {images: Array.from(images)}
    res.json(data)
})

module.exports = router;