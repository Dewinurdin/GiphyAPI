$(document).ready(function() {

 var topic = ["Santa Claus", "Mrs. Claus", "Rudolph The Red Nose Raindeer", "Little Drummer Boy", "The Grinch", "Santa's Elves", "Santa's Northpole", "Frosty the Snowman", "Christmas Trees", "The birth of Jesus", "Christmas Angels", "Scrooge"];
 var api = "https://api.giphy.com/v1/gifs/search?api_key=iW1s83WhVS4y6wqeHCOFOKdAwNKH6TUt&q=";
 var apiKey = "&limit=25&offset=0&rating=G&lang=en";

//write a function to dynamically create a button
 function renderButton() {
 	for (var i=0; i<topic.length; i++) {
 		var buttons = $("<button>");
 		 	buttons.addClass("gif");
 		 	buttons.addClass("btn");
 		 	buttons.attr("data-animate", topic[i]);
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
			button.addClass("btn");
			button.addClass("gif");
			button.attr("data-animate", userInput);
			button.text(userInput);
			$("#buttons-holder").append(button);

	});

// write a function to display gif from API
// Create on Click function on buttons to append gif images to html when button is clicked
//BUTTON TRIGGERED ajax
function showGif() {
	$(document).on("click", ".gif", function() {
		$("#gif-images").empty();
		var topic = $(this).attr("data-animate");
		var giphyUrl = api + topic + apiKey;
		//console.log(giphyUrl);
		$.ajax({
		url: giphyUrl,
		Method: "GET"
		}) .done(function(response) {
			console.log(response.data);

		var results = response.data;
			for (var i=0; i<results.length; i++) {
		//show images
		var showImage = $("<img class = gif>");
			showImage.attr("src", results[i].images.fixed_height.url);
			showImage.attr("data-state: 'animate'");
		
		$("#gif-images").append(showImage);

		var dataStill = $("<img, class = gif>");
			dataStill.attr("src", results[i].images.fixed_height_still.url);
			dataStill.attr("data-state: 'still'");

		
			}		
		})
	})
}; 

showGif();

// setting a pause state and animate

// $(document).on("click", ".gif", function(){
// 	var state = $(this).attr(results.images.fixed_height_still.url);
// 	if (state === "animate") {
// 		$(this).attr()
// 	}
		
// })
	
//click function to trigger AJAX call




}) //DOC.ready





	
	





	



