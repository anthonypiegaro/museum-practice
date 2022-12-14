const express = require("express");
const router = express.Router();
const departmentName = "Egyptian Art";

router.get("/", (req, res) => {
    res.render("index", {departmentName: departmentName});
});

module.exports = router;