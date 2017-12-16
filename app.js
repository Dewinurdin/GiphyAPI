$(document).ready(function() {

 var topic = ["Santa Claus", "Jingle Bells", "Rudolph The Red Nose Raindeer", "Little Drummer Boy", "The Grinch", "Twelve Days of Christmas", "Santa's Northpole", "Frosty the Snowman", "The Birth of Jesus", "Scrooge"];
 var api = "https://api.giphy.com/v1/gifs/search?api_key=iW1s83WhVS4y6wqeHCOFOKdAwNKH6TUt&q=";
 var apiKey = "&limit=25&offset=0&rating=G&lang=en";

//write a function to dynamically create a button
 function renderButton() {
 	for (var i=0; i<topic.length; i++) {
 		var buttons = $("<button>");
 			buttons.attr({
 				"class": "christmas btn",
 				"data-still": topic[i],
 			})
 		 	buttons.text(topic[i]);

 		 	$("#buttons-holder").append(buttons); 		 	
 	}
 };

renderButton();

$("#add-topic").on("click", function(event) {
		event.preventDefault();
		$("#gif-images").empty();		
		var userInput = $("#topic-form").val();
			topic.push(userInput);
		var button = $("<button>");
			button.attr({
				"class": "christmas btn",
				"data-still": userInput,				
			})
			button.text(userInput);

			$("#buttons-holder").append(button);

});

//clear out form after user inputted value and appended dynamic button
// NOT WORKING!!
//$("#topic-form").empty(); 

// write a function to display gif from API
// Create on Click function on buttons to append gif images when button is clicked

function showGif() {	
	$("#buttons-holder").on("click", "button", function() {
		$("#gif-images").empty();
		var state = $(this).attr("data-still");
		
		var giphyUrl = api + state + apiKey;

		$.ajax({
		url: giphyUrl,
		Method: "GET"
		}) .done(function(response) {	
		console.log(response.data)	
		var results = response.data;
			for (var i=0; i<results.length; i++) {
		//show images
		var showImage = $("<img>");
			showImage.attr({
					"class" : "gif",
					"src" : results[i].images.fixed_height_still.url, 
					"data-animate": results[i].images.fixed_height.url,
					"data-still": results[i].images.fixed_height_still.url,
					"data-state": "still"					
			});

		$("#gif-images").append(showImage);
   	}		
   		// setting a pause state and animate
		$("#gif-images").on("click", "img", function(){
			   	var gifState = $(this).attr("data-state")
				
				if (gifState === "still") {
		        $(this).attr("src", $(this).attr("data-animate"));
		        $(this).attr("data-state", "animate");
		      	} else {

		        $(this).attr("src", $(this).attr("data-still"));
		        $(this).attr("data-state", "still");
		      }
			})
		})
	});
}
showGif();
});
