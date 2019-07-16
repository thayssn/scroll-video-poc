const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));
app.use("videos/", express.static(`${__dirname}/videos`));
app.listen(3000);
