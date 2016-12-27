$(document).ready(function() {
	var i = 1; 
	//var max = 101;

	var input = 0;
	input += prompt("Please input a whole number:", "#####");

	if (input % 1 == 0 && input != "" && isNumber(input)) {
		console.log("good");
		fizzbuzz(input);
	} else {
		$('body').append("Game Over");
	}



	function fizzbuzz(max) {
		while (i <= max) {
			if (i % 3 == 0 && i % 5 == 0) {
				$('body').append("fizz buzz");
			}
			else if (i % 3 == 0 ) {
				$('body').append("fizz");
			}
			else if (i % 5 == 0) {
				$('body').append("buzz");
			} else {
				$('body').append(i);
			}

			i++;
			$('body').append("<br><br>");
		}
	}
	

	function isNumber(n) {
		return !isNaN(parseInt(n)) && isFinite(n);
	}

});


