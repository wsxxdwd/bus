define(function(require, exports, module) {
	var  $ = require('jquery');
	require('jquery-easing');
	function Quene() {
		this.stop = $('.bus-stop');
		this.myIndex = 10;
		this.quene = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	}
	module.exports = Quene;

	Quene.prototype.move = function(){
		this.myIndex --;
		return this.quene.shift();
	}

	Quene.prototype.render = function(){
		var html = '';
		for(i in this.quene){
			var myClass = (i == this.myIndex ? ' me' : '');
			html += '<div class="people' + myClass + '" data-index="' + i + '">' + (myClass ? '-' : this.quene[i]) + '</div>';
		}
		this.stop.html(html);
	}
});