const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.listen(3000, () => {
    console.log("The App is listening on PORT 3000.")
});