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

router.get("/", async (req, res) => {
    const departmentId = await getDepartmentId(departmentName);
    res.render("index", {departmentName: departmentName});
});

module.exports = router;