// imports 
const express = require("express");
const app = express();
const port = 3000; 


// Static Files
app.use(express.static("public"));
app.use("/stylesheets", express.static(__dirname + "public/stylesheets"));
app.use("/images", express.static(__dirname + "public/images"));


// Set Views
app.set("view engine", "ejs");


app.get("/", (req, res) => {

    // res.sendFile(__dirname + "/views/index.html");

    res.render("index", { title: "Brooke Taylor Personal Portfolio"});
})


app.get("/about", (req, res) => {
    res.render("about", { title: "A little bit about me..."});
});


app.get("/resume", (req, res) => {
    res.render("resume", { title: "Brooke Taylor Personal Portfolio"});
});

app.get("/projects", (req, res) => {
    res.render("projects", { title: "Projects"});
});

app.get("/databaseDiagrams", (req, res) => {
    res.render("databaseDiagrams", { title: "Database Diagrams"});
});

app.get("/APIunit", (req, res) => {
    res.render("APIunit", { title: "APIunit"});
});





// to serve files from uploads directory
app.use("/files", express.static("files"));


app.get("/resume", (req, res) => {
    res.download("files/resume.pdf");
});


// Listen on port 3000
app.listen(port, () => console.info("Listening on port ${port}"));