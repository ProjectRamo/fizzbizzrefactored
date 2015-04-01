


	
$(document).ready(function(){
	fizzit = function(num){
		var outtext = "";
		if (num%3 == 0) {outtext=outtext+"fizz";}
		if (num%5 == 0) {outtext=outtext+"buzz";}
		if (outtext == "") {outtext = num+"";}
		return outtext;
	};
	quizzit = function(){
		keepasking = true;
		while (keepasking) {
			response = prompt("Enter a number");
			responsenum = (response * 1) + 1;
			if (isNaN(responsenum)) {
				alert ("that's not a number, try again");
			} else {
				keepasking = false;
				return responsenum;
			};
		};
	};
	var $fizz = $('#fizz')
	var maxloop = quizzit();
	for (var i=0; i<maxloop; i++) {
		$appendage = ('<li>'+fizzit(i)+'</li>');
		$('#fizzlist').append($appendage);
	};
});