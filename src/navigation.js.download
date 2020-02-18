/*
* Handles toggling the navigation menu for small screens and enables TAB key
* navigation support for dropdown menus.
*/
( function() {
	var body, buttonOpen, buttonClose, menu, links, i, len;

	body = document.getElementsByTagName( 'body' )[0];
	if ( ! body ) {
		return;
	}

	buttonOpen = document.getElementById( 'code_aside__navtoggle_open' );
	buttonClose = document.getElementById( 'code_aside__navtoggle_close' );

	if ( null === buttonOpen || null === buttonClose ) {
		return;
	}

	buttonOpen.onclick = function() {
		if ( -1 !== body.className.indexOf( 'sb-viewing' ) ) {
			body.className = body.className.replace( ' sb-viewing', '' );
		} else {
			body.className += ' sb-viewing';
		}
		return false;
	};
	buttonClose.onclick = function() {
		if ( -1 !== body.className.indexOf( 'sb-viewing' ) ) {
			body.className = body.className.replace( ' sb-viewing', '' );
		} else {
			body.className += ' sb-viewing';
		}
		return false;
	};

	return;

} )();
