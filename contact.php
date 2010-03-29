<?php 
	$pageId = "contact";
	$mapLink = htmlentities("http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=15049+Hwy+Uu,+Bowling+Green,+MO+63334&sll=37.0625,-95.677068&sspn=41.818029,62.666016&ie=UTF8&ll=39.389766,-91.198915&spn=0.005,0.00765&t=h&z=17&om=1");
	require('globalUpper.php');
?>
	<div id="contactInfo">
		<h3>Contact</h3>
		<p>
			Massage services and Body Treatments are available by appointment only. Please call ahead of time to make sure someone is here to assist you.
		</p>
		<ul>
			<li>Custom Body Works LLC</li>
			<li>15049 Highway Uu</li>
			<li>Bowling Green, Missouri 63334</li>
			<li>573-324-0328</li>
			<li><a href="mailto:info@custombodyworksllc.com">info@custombodyworksllc.com</a></li>
		</ul>
	</div>
	<div id="directionsHolder">
		<h3>Google Map</h3>
		<a title="This link will open a new window" id="mapLink" href="<?php echo $mapLink; ?>" rel="external"><span>Custom Body Works LLC - View Map</span></a>
		<h3 class="heading-directions">Directions</h3>
		<dl>
			<dt>From Highway 61:</dt>
			<dd>Take the Hwy UU exit.</dd>
			<dd>If Highway 61 North: Make a right</dd>
			<dd>If Highway 61 South: Make a left</dd>
			<dd>Go 1.8 miles</dd> 
			<dd>There is a sign by the road.</dd>
			<dd>Driveway will be on the right.</dd>
			<dd>The Custom Body Works building is on the left side of the driveway.</dd>
			<dd>It is the building with the deck on the front of it.</dd>
			<dd>Parking is in front of the building on the concrete pad.</dd>
		</dl>
	</div>
<?php
	require('globalLower.php');
?>
