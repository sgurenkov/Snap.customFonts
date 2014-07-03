window.onload = function() {
	var paper = Snap('#svg');

	window.eve.on('snap.font.loaded', function(fontFamily){
		console.info(fontFamily + ' loaded');
		console.info(paper.customFonts);
	});

	paper.text(10, 50, 'Munich font first time').attr('font-family', {fontFamily: 'Munich', src: 'fonts/Munich.svg'}).attr('font-size', 50);

	paper.text(10, 150, 'Munich font second time').attr('font-family', {fontFamily: 'Munich', src: 'fonts/Munich.svg'}).attr('font-size', 50);

	paper.text(10, 250, 'Pink vapor font').attr('font-family', {fontFamily: 'Pink Vapor', src: 'fonts/PinkVapor.svg'}).attr('font-size', 50);
};
