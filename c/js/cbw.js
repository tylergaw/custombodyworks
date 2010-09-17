/**
 * Custom Body Works
 *
 * Author:      me@tylergaw.com Tyler Gaw
 * Description: Scripts for the Custom Body Works site
 */

// Create our global namespace
var CBW = {};

// CBW initializing method that is called on document.ready
CBW.init = function ()
{
	CBW.ui.init();
};

// @member CBW.ui - Controls user Interface elements for the site
CBW.ui = {
	
	init: function ()
	{
		this.positionBackground();
		this.initFancyBox();
		
		$(window).resize(
			function ()
			{
				CBW.ui.positionBackground();
			}
		);
		
		// Make some considerations for iDevices
		if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i))
		{
			this.initIphone();
		}
		else
		{
			if ($('#services-aside').length > 0)
			{
				// Services scrolling navigation
				$('#nav-services a').click(
					function ()
					{
						$.scrollTo(this.hash, 500);
						return false;
					}
				);

				$('#services-aside').sticky({offset: 6, maxDetector: '#view-bottom', minWidth: 500});
			}
		}
	},
	
	// Fancy Box used on about page gallery
	initFancyBox: function ()
	{
		$('a.fancybox').fancybox(
			{
				type: 'image',
				href: $(this).attr('href'),
				centerOnScroll: true,
				overlayOpacity: 0,
				speedIn: 200,
				speedOut: 100,
				changeSpeed: 100,
				padding: 6,
				titleShow: false,
				cyclic: true
			}
		);
	},
	
	// Set the position of the background image
	positionBackground: function ()
	{
		var start  = -320,
			offset = ($('body').width() - 960) * 0.43,
			left   = start + offset + 'px';
			
		if ($('body').width() > 500)
		{
			$('body').css('background-position', left + ' 2px');
		}
		else
		{
			$('body').css('background-position', '0px 0px');
		}
	},
		
	// Special considerations for the iphone
	initIphone: function ()
	{
		var mapUrl = 'http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=15049+State+Highway+Uu,+Bowling+Green,+MO+63334&amp;sll=40.729685,-73.97939&amp;sspn=0.009382,0.017424&amp;ie=UTF8&amp;hq=&amp;hnear=15049+State+Highway+Uu,+Bowling+Green,+Pike,+Missouri+63334&amp;ll=39.389907,-91.198947&amp;spn=0.011011,0.021265&amp;z=16&amp;iwloc=r0';
		
		// Find each address throughout the site and create a link to the google map around it
		$('.address').wrap(
			function ()
			{
				return '<a href="' + mapUrl + '"' + $(this).text() + ' />';
			}
		);
		
		// On the about page, we want to convert the thumbnails that normally open fancybox
		// into full size images
		$('#about-gallery li').each(
			function ()
			{
				var imgUrl  = $(this).find('a').attr('href'),
					imgAlt  = $(this).find('img').attr('alt'),
					html    = '<img src="' + imgUrl + '" alt="' + imgAlt + '">';
				
				$(this).addClass('iDevice').html(html);
			}
		);
	}
};

$(document).ready(
	function ()
	{
		// Check for ie6
		if ($.browser.msie && $.browser.version.substr(0, 3) === '6.0'){}
		
		CBW.init();
	}
);