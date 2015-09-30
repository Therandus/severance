define([], function () {
	var extend = function (t, o) {
		for (var k in o) {
			if (o.hasOwnProperty(k)) {
				t[k] = o[k];
			}
		}
		
		return t;
	};
	
	var createClass = function (Cons, propMap) {
		extend(Cons.prototype, propMap);
		return Cons;
	};
	
	return {
		createClass: createClass
	};
});
