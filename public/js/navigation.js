function navigationLinkClick(e) {
  if (!jQuery(e.target).parent().hasClass('active')) {
    console.log(e);
    jQuery("nav#mainnav #navbarCollapse li.active").removeClass('active');
    jQuery(e.target).parent().addClass('active');
    jQuery("#navbarCollapse").removeClass('show');
    var navheight = jQuery("nav#mainnav").outerHeight();
    if (jQuery("nav#mainnav").hasClass('nav-is-bot')) {
      jQuery( "#bottomContent" ).html('');
      jQuery.get( "/pages/" + e.target.innerText.toLowerCase(), function( data ) {
        jQuery( "#bottomContent" ).html( data );
      });
      jQuery("nav#mainnav").removeClass('nav-is-bot').addClass("nav-is-top").attr('style','bottom:0;');
      jQuery("#topContent").removeClass('topLayer').addClass('disappear');
      jQuery("#bottomContent").toggleClass('topLayer').removeClass('disappear offscreen-bottom').attr('style', 'height:calc(100vh - ' + navheight + 'px);margin-top:' + navheight + 'px');
      setTimeout(function() {
        jQuery("#topContent").addClass('offscreen-top');
      }, 1200);
    }
    else {
      jQuery( "#topContent" ).html('');
      jQuery.get( "/pages/" + e.target.innerText.toLowerCase(), function( data ) {
        jQuery( "#topContent" ).html( data );
      });
      jQuery("nav#mainnav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:calc(' + navheight + 'px - 100vh);');
      jQuery("#bottomContent").removeClass('topLayer').addClass('disappear');
      jQuery("#topContent").toggleClass('topLayer').removeClass('disappear offscreen-top').attr('style', 'height:calc(100vh - ' + navheight + 'px);margin-bottom:' + navheight + 'px');
      setTimeout(function() {
        jQuery("#bottomContent").addClass('offscreen-bottom');
      }, 1200);
    }
    let stateObj = {
        page: e.target.innerText,
    };

    history.pushState(stateObj, e.target.innerText + " - Polyglot Studios", "#" + e.target.innerText.toLowerCase() );
    recalculateNavPosition();
  }
}

function recalculateNavPosition() {
  var navheight = jQuery("nav#mainnav").outerHeight();
  if (jQuery("nav#mainnav").hasClass('nav-is-bot')) {
    jQuery("nav#mainnav").attr('style','bottom:calc(' + navheight + 'px - 100vh);');
  }
  else {
    jQuery("nav#mainnav").attr('style','bottom:0;');
  }
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav #navbarCollapse").on('click', 'a', function(e) {
    e.preventDefault();
    navigationLinkClick(e);
  });

  jQuery("nav#mainnav").on('click', 'button.navbar-toggler', function(e) {
    e.preventDefault();
    e.stopPropagation();
    jQuery("#navbarCollapse").toggleClass('show');
    recalculateNavPosition();
  });
});
