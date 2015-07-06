define(function(require) {
	var Bus = require('./bus');
	var Quene = require('./Quene');
	var b = new Bus();
	var q = new Quene();

	b.HZComing();
	b.render();
	q.render();
	document.onkeydown = function(e){
		if(b.instation === true && e.keyCode === 32){
			b.getIn(q.move());
			b.render();
			q.render();
		}
	}
});