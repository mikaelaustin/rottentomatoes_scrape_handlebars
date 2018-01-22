var models = require('../models');
var express = require('express');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');

models.sequelize.sync();

var router = express.Router();


router.get('/', function(req,res){
	models.Movie.findAll().then((movies) => {
		var movieArray = [];
		movies.forEach((movie) => {
			movieArray.push(movie);
		});
		res.render('home', {movies: movieArray});
	});
});
router.get('/api/movies', function(req, res){
	models.Movie.findAll().then((movies) => {
		var array = []
		movies.forEach((movie)=>{
			array.push(movie)
		});
		res.json(array)
	});
});
//the route above will be similar, name this one /api/movies and res.json instead of res.render

router.get("/api/scrape", function(req,res){
	request('https://www.rottentomatoes.com/top/bestofrt/', function(err, response, html){
		if (err) {
			throw err
		}
		var $ = cheerio.load(html);
		var ranking = [];
		$('.table').each(function(){
			var tr = $(this).find("tr");
			tr.each(function(){
				var rank = $(this).find("td").eq(0).text().trim();
				var rating = $(this).find("td").eq(1).text().trim();
				var title = $(this).find("td").eq(2).text().trim();
				if(title !== ""){
					ranking.push({rank: rank, rating: rating, title: title});
				}
				
			});
		});
		models.Movie.bulkCreate(ranking)
	});
});

module.exports = router;

