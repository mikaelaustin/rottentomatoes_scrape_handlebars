$(document).ready(function(){

	/*
		ajax get information on click
		from the callback, append the first item in the array to the dom
		
		num = 0
		res[num]

		next on click .. num++ ... $(div).append(res[num])

		if num < 11 { then append this } else { remove everything, append previous button}
	*/

	$.ajax({
		method: 'GET',
		url:'/api/movies',
		dataType: 'json',
		contentType: 'application/json'
	}).then(function(res){
		//console.log(res)
		console.log(res[0])

		var counter = 0

		// var rank = "Rank: " + res[counter].rank + "    ";
		// var rating = "Rating: "+ res[counter].rating + "    ";
		// var title = "Title: " + res[counter].title + "    ";

		// $('#movie-div').append(rank).append(rating).append(title)

		$('#nextButton').click(function(next){
			$('#movie-div').empty()
			counter++
			var rank = "Rank: " + res[counter].rank + "    ";
			var rating = "Rating: "+ res[counter].rating + "    ";
			var title = "Title: " + res[counter].title + "    ";

			$('#movie-div').append(rank).append(rating).append(title)

			console.log(next)

		})
		$('#prevButton').click(function(prev){
			$('#movie-div').empty()
			counter--
			var rank = "Rank: " + res[counter].rank + "    ";
			var rating = "Rating: "+ res[counter].rating + "    ";
			var title = "Title: " + res[counter].title + "    ";

			$('#movie-div').append(rank).append(rating).append(title)
			
			console.log(prev)
		})
	})



	// $('#nextButton').on('click', function(e){
	// 	e.preventDefault()
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: '/api/movies',
	// 		dataType: 'json',
	// 		contentType: 'application/json'
	// 	}).then(function(res){
	// 		var num = 0
	// 		res[num]

	// 		if(num < 11){
	// 			$('#movieDiv').append(res[num])
	// 		}
	// 		num++

	// 	})	
	// })
	// 	$('#prevButton').on('click', function(e){
	// 	e.preventDefault()
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: '/api/movies',
	// 		dataType: 'json',
	// 		contentType: 'application/json'
	// 	}).then(function(response){
	// 		var num = 0
	// 		response[num]

	// 		if(num < 11){
	// 			$('#movieDiv').append(response[num])
	// 		}
	// 		num--

	// 	})	

	// })

	// function nextMovie(num)	{
	// }
		
});