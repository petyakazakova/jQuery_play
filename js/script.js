//check if DOM is fully loaded first
$(document).ready(function() {
	//LIST

		// $('#container').html('<strong>Hello</strong>');
		$('#container').text('Hello');

		//select multiple
		$('.class1, .class2').addClass('highlighted');

		//select descendants
		// $('#listing li').addClass('highlighted');

		//select only direct descendants
		$('#listing > li').addClass('highlighted');


	//FORM

		//selection with attr
		// $('input[required]').addClass('highlighted');
		// $('input[placeholder=Email]').addClass('highlighted');
		//select all pl that contain "Name"
		$('input[placeholder*=Name]').addClass('highlighted');

	//ANIMALS - traversing the DOM
	// move through the dom until you find what you need

		// CSS selectors
		var result = $('#animals .creature');
		var result = $('#animals > .creature'); //direct descendants
		// console.log(result);
		//DOM traversing (more efficient)
		result = $('#animals').find('.creature');
		result = $('#animals').children('.creature');
		// console.log(result);

		//first, last, prev, next()
		var result = $('#animals').children().first().children('.creature').last(); //cats
		console.log(result);
		result = $('#animals').children().first().children().last().prev().prev(); //cats
		console.log(result);

		//traversing parents - parent(), parents(), closest()
		var result = $('#cat').parent();
		console.log(result);

});
