// Load Node modules
var express = require('express');
var xml = require('xml');

const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('views engine', 'ejs');
// Port website will run on
app.listen(8080);
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
});
app.get('/sitemap.xml', function(req, res) {
    res.setHeader('Content-type', 'text/xml');
    res.render('sitemap')
});
