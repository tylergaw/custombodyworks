/**
 * Custom Body Works
 *
 * Author:      me@tylergaw.com Tyler Gaw
 * Description: Scripts for the Custom Body Works site
 */

// Create our global namespace
var CBW = {};

// CBW initializing method that is called on document.ready
CBW.init = function () {
  CBW.ui.init();
};

// @member CBW.ui - Controls user Interface elements for the site
CBW.ui = {
  init: function () {
    this.positionBackground();
    this.initFancyBox();

    $(window).resize(function () {
      CBW.ui.positionBackground();
    });

    if ($("#services-aside").length > 0) {
      $("#services-aside").sticky({
        offset: 6,
        maxDetector: "#view-bottom",
        minWidth: 500,
      });
    }
  },

  // Fancy Box used on about page gallery
  initFancyBox: function () {
    $("a.fancybox").fancybox({
      type: "image",
      href: $(this).attr("href"),
      centerOnScroll: true,
      overlayOpacity: 0,
      speedIn: 200,
      speedOut: 100,
      changeSpeed: 100,
      padding: 6,
      titleShow: false,
      cyclic: true,
    });
  },

  // Set the position of the background image
  positionBackground: function () {
    var start = -320,
      offset = ($("body").width() - 960) * 0.43,
      left = start + offset + "px";

    if ($("body").width() > 500) {
      $("body").css("background-position", left + " 2px");
    } else {
      $("body").css("background-position", "0px 0px");
    }
  },
};

$(document).ready(function () {
  CBW.init();
});
