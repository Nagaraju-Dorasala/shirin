<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function( $ ){
	$('.menu-item-5628 a').html('<i class="fas fa-home"></i>');
	$('.menu-item-5732 a').attr('target','_blank');
	$('.menu-item-5732 a').prepend('<i aria-hidden="true" class="fab fa-linkedin" style="margin-right: 10px;"></i>');
	var $menu = $('.sticky');

  // Store the initial position of the menu
  var menuOffset = $menu.offset().top;

  // Function to handle the scroll event
  function handleScroll() {
    var scroll = $(window).scrollTop();

    // Check if the user has scrolled past the menu
    if (scroll >= menuOffset) {
      // Make the menu sticky
      $menu.addClass('active');
    } else {
      // Remove sticky class when scrolling back up
      $menu.removeClass('active');
    }
  }

  // Attach the scroll event handler
  $(window).scroll(handleScroll);
  
});

</script>
<!-- end Simple Custom CSS and JS -->
