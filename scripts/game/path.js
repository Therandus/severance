define(['utils/class'], function (classUtils) {
	var Path = classUtils.createClass(function (options) {
		this.name = options.name;
		this.destination = options.destination;
	}, {
		getDescription: function () {
			return this.name + ' - ' + this.destination.name;
		}
	});
	
	return Path;
});
