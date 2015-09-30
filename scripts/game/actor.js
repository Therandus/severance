define(['utils/class'], function (classUtils) {
	var Actor = classUtils.createClass(function (options) {
		this.name = options.name;
		this.hp = options.hp;
		this.attackValue = options.attackValue;
	}, {
		getDescription: function () {
			return this.name + ' - HP: ' + this.hp;
		},
		
		attack: function (actor) {
			actor.hp -= this.attackValue;
		}
	});
	
	return Actor;
});
