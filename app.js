$(document).ready(function() {
	console.log("ready");
	// this is array of topic to renderButtons

 var topic = ["Santa Claus", "Mrs. Claus", "Rudolph The Red Nose Raindeer", "Little Drummer Boy", "The Grinch", "Santa's Elves", "Santa's Northpole", "Frosty the Snowman", "Christmas Trees", "The birth of Jesus", "Christmas Angels", "Scrooge"];
 var api = "https://api.giphy.com/v1/gifs/search?api_key=iW1s83WhVS4y6wqeHCOFOKdAwNKH6TUt&q=";
 var apiKey = "&limit=25&offset=0&rating=G&lang=en";

// write a function to display gif from API
// Create on Click function on buttons to append gif images to html when button is clicked
//BUTTON TRIGGERED ajax
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
				showImage.attr("src", results[i].images.fixed_height.url);
				$("#gif-images").append(showImage);
			}		
		})
	})
}; 

showGif();

//write a function to dynamically create a button
 function renderButton() {
 	for (var i=0; i<topic.length; i++) {
 		var buttons = $("<button>");
 		 	buttons.addClass("christmas");
 		 	buttons.addClass("btn");
 		 	buttons.attr("data-giphy", topic[i]);
 		 	buttons.text(topic[i]);
 		 	$("#buttons-holder").append(buttons);
 	}
 }
	renderButton();

// setting a pause state and animate
$(".gif").on("click", function() {
	var pauseState = results.images.fixed_height_still;
				pauseState.attr({
					"data-still": still;
				
		var animateState = results.images.fixed_height.url;
			animateState.attr({
				"data-animate": animate;
})




		
	})




