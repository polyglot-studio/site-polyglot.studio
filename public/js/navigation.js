function navigationLinkClick(e) {
  alert('clicked');
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav").on('click', 'a', function(e) {
    e.preventDefault();
    navigationLinkClick(e);
  })
});
