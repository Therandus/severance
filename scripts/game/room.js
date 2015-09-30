define(['utils/class'], function (classUtils) {
	var Room = classUtils.createClass(function (options) {
		this.name = options.name;
		this.actors = [];
		this.paths = [];
	}, {
		getDescription: function () {
			var lines = [
				this.name,
				'This room contains:'
			];
		
			for (var i = 0; i < this.actors.length; ++i) {
				lines.push(this.actors[i].getDescription());
			}
		
			for (var i = 0; i < this.paths.length; ++i) {
				lines.push(this.paths[i].getDescription());
			}
		
			return lines.join('\n');
		},
	
		addActor: function (actor) {
			this.actors.push(actor);
		},
		addPath: function (path) {
			this.paths.push(path);
		}
	});
	
	return Room;
});
