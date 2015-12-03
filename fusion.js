// This code runs when the page loads
$(function() {

  $(".forclicks").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    	$(this).slideUp();
  })

})

$(document).ready(function(){
	$(".reloadclick").click( function(){
	location.reload();
})
})