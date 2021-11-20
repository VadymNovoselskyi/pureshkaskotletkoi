// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(process.env.PORT);
// Route Route
app.get('/', function (req, res) {
    var name = "Louise";
    var listnames = ["Louise", "Sadie", "Erik", "Ralph", "Gina"];
    // Render index page
    res.render('pages/index.ejs', {
        // EJS variable and server-side variable
        name, listnames
    });
});
// Route Route
app.get('/test', function (req, res) {
    var name = "Louise";
    var listnames = ["1", "2", "3", "4", "5"];
    // Render index page
    res.render('pages/index.ejs', {
        // EJS variable and server-side variable
        name, listnames
    });
app.get('/schemas', function(req, res) {
    res.render('schemas/sitemap')
    })
});