$(function(){
	var menu = $('.lnb');
	var subBg = $('.snbWrap');
	var menuTwo = $('.lnb > ul > li > ul');

	menu.on({
		mouseover: function(){
			subBg.css('display','block');
			menuTwo.css('display','block');
		},
		mouseout: function(){
			subBg.css('display','none');
			menuTwo.css('display','none');
		}
	});

});	
