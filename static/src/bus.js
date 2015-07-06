define(function(require, exports, module) {
	var  $ = require('jquery');
	require('jquery-easing');
	function Bus() {
		this.bus = $('.bus');
		this.inside = [];
		this.inStation = false;
	}
	module.exports = Bus;

	Bus.prototype.normalComing = function() {
		this.bus.animate({left:'50%'},3000,'easeInOutQuint');
		this.inStation = true;
		setTimeout('3000');
		this.inStation = false;
		this.bus.animate({left:'150%'},1500,'easeInExpo');
	}

	Bus.prototype.GodComing = function() {
		this.bus.animate({left:'50%'},3000,'easeInOutQuint');
		this.inStation = true;
		setTimeout('3000');
		this.inStation = false;
		this.bus.animate({left:'150%'},1500,'easeInExpo');
	}
	Bus.prototype.GodLeaving = function() {
		this.bus.animate({left:'150%'},1500,'easeInExpo');
		this.inStation = true;
	}

	Bus.prototype.HZComing = function() {
		this.inside = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20]
		this.bus.animate({left:'50%'},2000,'easeOutCirc');
		this.inStation = true;
		setTimeout('300');
		this.inStation = false;
		this.bus.animate({left:'150%'},1500,'easeInExpo');
	}

	Bus.prototype.getIn = function(no) {
		this.inside.push(no);
	}
	Bus.prototype.render = function(){
		var html = '';
		for(i in this.inside){
			html += '<div class="people" data-index="' + this.inside[i] + '">' + this.inside[i] + '</div>';
		}
		this.bus.html(html);
	}
});