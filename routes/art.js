const express = require("express");
const router = express.Router();
const returnImages = require("../returnImages");
const departmentName = "Egyptian Art";

router.get("/", async (req, res) => {
    const images = await returnImages(departmentName);
    console.log(images);
    res.render("index", {departmentName: departmentName});
});

module.exports = router;