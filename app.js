// Variable API to hold URL
	var url = "https://api.giphy.com/v1/gifs/search?api_key=iW1s83WhVS4y6wqeHCOFOKdAwNKH6TUt&q=";
	var apiKey = "&limit=25&offset=0&rating=G&lang=en";
	var queryURL = url + santa + apiKey;
	var santa = "santa%20animated";
	var rudolph = "rudolph%20the%20red%20nose%20raindeer";

		$.ajax({
		url: queryURL,
		Method: "GET"
		}).done(function(response) {
			console.log(response);

		var giphyUrl = response.data.data.images.original.url;
		giphyUrl.attr("src", giphyUrl);
		giphyUrl.attr("alt", "giphy images");
		});

// Create Click function on buttons to append gif images to html

	$(document).on("click", "#button1", function(){
		$("#gif-images").append(giphyUrl);
	}) 

// setting a pause state and animate
		
	




