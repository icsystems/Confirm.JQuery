$(document).ready(function(){
	$('#number').blur(function(){
		var element = $(this);
		var value = $(element).val();
		retcode = $(this).ConfirmUI('The number is right?',
			function(element){
				return $(element).val() <= 80;
			}
		);
	});
});
