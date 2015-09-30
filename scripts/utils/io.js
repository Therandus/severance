define([], function () {
	var $input = $('#gameInput');
	var $output = $('#gameOutput');
	var inputHistory = [];
	var historyIndex = 0;

	var read = function () {
		var input = $input.val();
		$input.val('');
		historyIndex = 0;
		inputHistory.unshift(input);
		return input;
	};
	var moveHistory = function (indexDelta) {
		historyIndex += indexDelta;
		if (historyIndex < 0) {
			historyIndex = 0;
		} else if (historyIndex >= inputHistory.length) {
			historyIndex = inputHistory.length - 1;
		}
		$input.val(inputHistory[historyIndex]);
	};
	var write = function (text) {
		$output.append($('<div>').text(text));
	};
	var scrollToBottom = function () {
		$output.stop().animate({ scrollTop: $output[0].scrollHeight }, 2000);
	};
	
	return {
		read: read,
		write: write,
		scrollToBottom: scrollToBottom,
		moveHistory: moveHistory
	};
});
