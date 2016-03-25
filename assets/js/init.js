(function($){
  $(function(){

	$('.button-collapse').sideNav();
	$('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

<script>
	function initialize() {
	var myLatlng = new google.maps.LatLng(14.578297,121.093767);
	var mapProp = {
		center: myLatlng,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: '9Dev Corp.'
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
