(function($) {

	$(document).ready(function() {

		function init() {
			// Rating Only and Rating And Feedback
			var form = $('.ratingfeedback-form');

			if (form.length > 0) {
				var inputs = form.find('input, textarea');
				inputs.on('change input', function(e) {
					form.addClass('interacted-with');
					inputs.off('change input');
				});
			}			
		}

		init();
	});

})(jQuery)