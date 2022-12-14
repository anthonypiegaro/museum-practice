const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const artRouter = require("./routes/art");

app.use("/", artRouter);

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server running successfully. Listening on port " + PORT);
    } else {
        console.log(error);
    }
});