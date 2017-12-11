$(document).ready(function() {
	console.log("ready");
	// this is array of topic to renderButtons

 var holiday = ["santa", "rudolph", "elves", "northpole"];

// write a function to display gif from API
function showGif () {
	$(document).on("click", ".christmas", function() {
		$("#gif-images").empty();
		var topic = $(this).attr("data-giphy");
		var giphyUrl ="https://api.giphy.com/v1/gifs/search?api_key=iW1s83WhVS4y6wqeHCOFOKdAwNKH6TUt&q=" + topic + "&limit=25&offset=0&rating=G&lang=en";
		console.log(giphyUrl);
		$.ajax({
		url: giphyUrl,
		Method: "GET"
		}) .done(function(response) {
			console.log(response);

		var results = response.data;

				for (var i=0; i<results.length; i++) {
				//show images
				var showImage = $("<img>");
				showImage.attr("src", results[i].data.images.original.url);
								
			
			}		
		})
	})
}; 

//write a function to dynamically create a button
 function renderButton() {
 	for (var i=0; i<holiday.length; i++) {
 		var buttons = $("<button>");
 		 	buttons.addClass("christmas");
 		 	buttons.addClass("btn");
 		 	buttons.attr("data-giphy", holiday[i]);
 		 	buttons.text(holiday[i]);
 		 	$("#buttons-holder").append(buttons);
 	}
 }
	renderButton();

	showGif();

// Create Renderbuttons

// Create on Click function on buttons to append gif images to html when button is clicked
//BUTTON TRIGGERED ajax

	$(document).on("click", "#button1", function(){
		$("#gif-images").append(giphyUrl);
	}) 

// setting a pause state and animate
		
	})




