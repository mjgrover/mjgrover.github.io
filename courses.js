// Course Build JavaScript Document


//'use strict';
var counter = '0';
var display_type; //1=short
$.ajaxSetup({
	async: false
});

//$(document).ready(function(){
//	insert_course_card(json_file, container);
//});

function create_card(json_file, cardlocation, card_type){
	console.log("pre:Create_card "+counter+ ",Display:"+display_type+", json:"+json_file+", Location:"+cardlocation+", Card_type:"+card_type);
	display_type = card_type;
	insert_course_card(json_file, cardlocation);
	console.log("create_card "+counter+ ",Display: "+display_type);
}

function insert_course_card(json_file, cardlocation){
	$.getJSON(json_file, function(data){
		console.log("insert_course_card "+counter+",Display:"+display_type+",Card_Location:"+cardlocation);
		var block_to_insert ;
		var container_block ;
		
		$.each(data, function(key, value){
			console.log("Display: "+display_type);
			block_to_insert = document.createElement( 'div' );
			block_to_insert.className = 'bx--col-sm-4 bx--col-lg-4';
			block_to_insert.id = 'cardContainer'+counter;

			container_block = document.getElementById( cardlocation );
			container_block.appendChild( block_to_insert );
			{
				populate_card(value);
				counter++;
				console.log("cardContainer "+counter+",Display: "+display_type)
			}
		});
	});
}
function populate_card(value){

	var block_to_insert ;
	var container_block ;


	// Nested 2nd Div for Card
	block_to_insert = document.createElement( 'div' );
	block_to_insert.className = 'developer--card bx--tile ibmcode_series developer--darkcard'
	block_to_insert.id = 'card'+counter;

	container_block = document.getElementById( 'cardContainer'+counter );
	container_block.appendChild( block_to_insert );
	console.log("card "+counter+", Display: "+display_type)

	// Add Href wrapper
//	var course_url = 'www.google.com';
	var a = document.createElement ('a');
	a.className = 'developer--card__block_link';
	a.id = 'href_wrapper'+counter;
		if (value.wrapper === "true"){
			a.href = "content_wrapper.html?loc="+value.course_url+"&code="+value.course_code;
			}
		else{
			a.href = "https://"+value.course_url;
		}

	a.target = '_blank';

	container_block = document.getElementById( 'card'+counter );
	container_block.appendChild( a );

		// Add H5 class for Card Type
//		var Learning_Type = 'eLearning';
		var h5 = document.createElement ('h5');
		h5.id = 'learning_type'+counter;
		h5.className = 'developer--card__type';
		h5.innerHTML = value.Learning_Type;

		container_block = document.getElementById('href_wrapper'+counter);
		container_block.appendChild( h5 );

			// Nested 3nd Div for Card Body
			block_to_insert = document.createElement( 'div' );
			block_to_insert.className = 'developer--card__body';
			block_to_insert.id = 'card_body'+counter;

			container_block = document.getElementById( 'href_wrapper'+counter );
			container_block.appendChild( block_to_insert );

				//Card Title
//				var Course_Title = 'Name of sample course';
				var h3 = document.createElement ('h3');
				h3.id = 'card_title'+counter;
				h3.className = 'developer--card__title';
				h3.innerHTML = value.Course_Title;

				container_block = document.getElementById( 'card_body'+counter );
				container_block.appendChild( h3 );

				//Card Description
//				var Description = 'This is all the details you want to know about this course.  This is all about blah, blah, blah.';
//				diplay_type: 1= short catalog, 2= full catalog
				if (display_type == '2'){
				var p = document.createElement ('p');
				p.id = 'card_description'+counter;
				p.className = 'developer--card__description';
				p.innerHTML = value.Description;
				
				container_block = document.getElementById( 'card_body'+counter );
				container_block.appendChild( p );
				}

			//Card Bottom
			block_to_insert = document.createElement( 'div' );
			block_to_insert.className = 'developer--card__bottom';
			block_to_insert.id = 'card_bottom'+counter;

			container_block = document.getElementById( 'href_wrapper'+counter );
			container_block.appendChild( block_to_insert );

			//Card Date
			var Date = '';
			p = document.createElement ('p');
			p.id = 'card_date'+counter;
			p.className = 'developer--card__date';
			p.innerHTML = Date;

			container_block = document.getElementById( 'card_bottom'+counter );
			container_block.appendChild( p );

			//Card Arrow
			var boxWidth = 24;
			var boxHeight = 24;
			var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
			var svgElem = document.createElementNS ("http://www.w3.org/2000/svg", "svg" );

			svgElem.id = 'card_arrow';
			svgElem.setAttribute("focusable", false);
			svgElem.setAttribute("preserveAspectRatio", "xMidYMid meet");
			svgElem.setAttribute("width", boxWidth);
			svgElem.setAttribute("height", boxHeight);
			svgElem.setAttribute("viewBox", "0 0 "+boxWidth+" "+boxHeight);
			svgElem.setAttribute("aria-hidden", true);
			svgElem.style="will-change: transform;";
			path1.setAttribute('d', 'M14 4l-1.1 1.1 6 6.1H2v1.6h16.9l-6 6.1L14 20l8-8z');

			svgElem.appendChild(path1);
			container_block = document.getElementById( 'card_bottom'+counter );
			container_block.appendChild( svgElem );

}