Snap.plugin(function(Snap, Element, Paper, global, Fragment) {

	eve.on("snap.util.attr.font-family", function(value){
		if (value !== null && typeof value === 'object')
		{
			if (value.src === undefined || value.fontFamily === undefined || this.type !== 'text')
			{
				return;
			}

			var el = this;
			var paper = (el.node.ownerSVGElement && Snap._.wrap(el.node.ownerSVGElement)) ||
				(el.node.parentNode && Snap._.wrap(el.node.parentNode));
			var defs = Snap._.getSomeDefs(this);

			if (paper.customFonts === undefined)
			{
				paper.customFonts = []
			}

			if (! already_loaded(paper, value))
			{
				// load font
				Snap.load(value.src, function(svg){
					if (svg instanceof Fragment) {

						// set font family to element
						el.attr('font-family', value.fontFamily);

						// check once again if font loaded by another async process or not and save font
						if (! already_loaded(paper, value))
						{
							paper.customFonts.push(value);
							svg = svg.select('font');
							defs.appendChild(svg.node);

							eve('snap.font.loaded', global, value.fontFamily);
						}

					}
				});
			} else {
				// set font family to element
				el.attr('font-family', value.fontFamily);
			}
		}
	});

	var already_loaded = function(paper, font)
	{
		if (paper.customFonts === undefined)
		{
			return false;
		}

		for (var i = 0; i < paper.customFonts.length; i++ )
		{
			if (paper.customFonts[i].fontFamily == font.fontFamily)
			{
				return true;
			}
		}

		return false;
	}
});
