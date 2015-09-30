require(['utils/io', 'utils/class', 'game/actor', 'game/room', 'game/path'], function (IO, classUtils, Actor, Room, Path) {
	console.log('I guess we will delete this line later and that makes me sad. :) XD ^_^ *_* -_-');
	
	var DIRECTION = {
		NORTH: 'north',
		SOUTH: 'south',
		WEST: 'west',
		EAST: 'east',
		NORTHWEST: 'northwest',
		NORTHEAST: 'northeast',
		SOUTHWEST: 'southwest',
		SOUTHEAST: 'southeast'
	};
	
	var player = new Actor({
		name: 'John Heroman the Cowardly',
		bravery: 1,
		hp: 10e9,
		attackValue: 1e4
	});
	
	var enemy = new Actor({
		name: 'Crippling Self Doubt',
		bravery: 99,
		hp: 2000,
		attackValue: 100
	});
	
	var room0 = new Room({
		name: 'Room 0 and it is sadness.'
	});
	
	var room1 = new Room({
		name: 'Room 1 and it is magic.'
	});
	
	room0.addPath(new Path({
		name: DIRECTION.NORTHWEST,
		destination: room1
	}));
	
	room1.addPath(new Path({
		name: DIRECTION.SOUTHEAST,
		destination: room0
	}));
	
	room0.addActor(player);
	room0.addActor(enemy);
	
	var runCommand = function () {
		var input = IO.read();
		
		if (input === 'attack') {
			player.attack(enemy);
			enemy.attack(player);
		}
		
		IO.write(room0.getDescription());
		IO.scrollToBottom();
	};
	
	$(window).on('keydown', function (e) {
		if (e.keyCode === 13) {
			runCommand();
		} else if (e.keyCode === 38) {
			IO.moveHistory(1);
		} else if (e.keyCode === 40) {
			IO.moveHistory(-1);
		}
	});
});
