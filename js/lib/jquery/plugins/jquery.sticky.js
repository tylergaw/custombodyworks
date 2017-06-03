/**
 * jQuery-Plugin "sticky"
 * 
 * Make an element "sticky" at a certain point while scrolling the page
 * 
 */

(function ($) {
	
	// @param OBJ options
	// @return jQuery OBJ - the stick element
	$.fn.sticky = function (options)
	{
		var $this    = this,
			settings = $.extend($.fn.sticky.defaults, options),
			
			// Private storage
			internal = {
				position: null,
				elemTop: 0,
				maxTop: null,
				elemHeight: 0,
				offset: 0,
				initTop: 0
			};
		
		// Complete a number of start up tasks
		internal.setup = function ()
		{
			var detector         = null;
				detectorTop      = null;
			
			internal.position    = $this.css('position');
			internal.elemTop     = $this.offset().top;
			internal.elemHeight  = $this.innerHeight();
			internal.offset      = settings.offset;
			internal.initTop     = $this.offset().top - $this.parent().offset().top;
			
			if (settings.maxDetector)
			{
				detector = $(settings.maxDetector);
				internal.detectorTop = Math.floor(detector.offset().top);
				internal.maxTop = internal.detectorTop - (internal.elemHeight + internal.offset);
			}
			
			// Bind our positioning method to the window's scroll
			setInterval(
				function ()
				{
					$this.setPosition();
				}, 10);			
		};
		
		// Method that checks and sets the position of our element
		this.setPosition = function ()
		{			
			var scrollTop = $(window).scrollTop(),
				newTop    = ($this.offset().top - $this.parent().offset().top) - internal.initTop;
			
			// Check for a minimum width and stop everything if the window is under that
			if (settings.minWidth && $(window).width() < settings.minWidth)
			{
				$this.css('position', internal.position);
				return false;
			}
			
			// First, are we to or past the point that the element should stick?
			if ((internal.elemTop - scrollTop) <= internal.offset)
			{	
				$this.css({'position': 'fixed', 'top': internal.offset});
			}
			else
			{
				$this.css('position', internal.position);
			}
			
			// Have we gone too far down?
			if ($this.offset().top >= internal.maxTop)
			{
				
				if (newTop > internal.maxTop || newTop === 0)
				{
					newTop = internal.maxTop;	
				}
				
				$this.css({'position': 'relative', 'top': newTop});
			}
		};
		
		internal.setup();
		
		// Returning this allows our plugin to be chainable
		return this;
	};
	
	$.fn.sticky.defaults = {
		
		// The number of pixels the gap between the 
		// element and the scroll stopper
		offset: 0,
		
		// @member STRING
		// This needs to be a valid jQuery selector
		// it will be used as the bottom collision detection
		maxDetector: null,
		
		// @member INT
		// The minimum window width for this to function
		// this is a consideration for CSS with media queries
		minWidth: null
	}
	
}(jQuery));