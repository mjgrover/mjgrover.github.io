// Course Build JavaScript Document


//'use strict';
var counter = '0';
var display_type; //1=short
var segment_val;
$.ajaxSetup({
	async: false
});

//$(document).ready(function(){
//	insert_course_card(json_file, container);
//});

function create_card(json_file, cardlocation, card_type, card_group){
	
	display_type = card_type;
	segment_val = card_group;
	
	insert_course_card(json_file, cardlocation);
}

function insert_course_card(json_file, cardlocation){
	$.getJSON(json_file, function(data){
		
		var block_to_insert ;
		var container_block ;
		
		$.each(data, function(key, value){
			
			if (value.segment == segment_val){
				
				block_to_insert = document.createElement( 'div' );
				block_to_insert.className = 'bx--col-sm-4 bx--col-lg-4';
				block_to_insert.id = 'cardContainer'+counter;

				container_block = document.getElementById( cardlocation );
				container_block.appendChild( block_to_insert );
				{
					populate_card(value);
					counter++;
				}	
			}
			else{
				if (segment_val === undefined){
			
				block_to_insert = document.createElement( 'div' );
				block_to_insert.className = 'bx--col-sm-4 bx--col-lg-4';
				block_to_insert.id = 'cardContainer'+counter;

				container_block = document.getElementById( cardlocation );
				container_block.appendChild( block_to_insert );
				{
					populate_card(value);
					counter++;
				}
			}
		}});
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

	// Add Href wrapper
//	var course_url = 'www.google.com';
	var a = document.createElement ('a');
	a.className = 'developer--card__block_link';
	a.id = 'href_wrapper'+counter;
		if (value.wrapper === "y"){
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
		if (value.learning_type == "Instructor-led"){
			h5.innerHTML = value.learning_type;
		}
		else{
			h5.innerHTML = "eLearning | "+value.learning_type;
		}

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
				h3.innerHTML = value.course_title;

				container_block = document.getElementById( 'card_body'+counter );
				container_block.appendChild( h3 );

				//Card Description
//				var Description = 'This is all the details you want to know about this course.  This is all about blah, blah, blah.';
//				diplay_type: 1= short catalog, 2= full catalog
				if (display_type == '2'){
				var p = document.createElement ('p');
				p.id = 'card_description'+counter;
				p.className = 'developer--card__description';
				p.innerHTML = value.description;
				
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

function featured_card(json_file, cardlocation){
	$.getJSON(json_file, function(data){
		
		var fcounter ='0';
		var block_to_insert ;
		var container_block ;
		
		$.each(data, function(key, value){
				block_to_insert = document.createElement( 'div' );
				block_to_insert.className = 'bx--col-md-4 bx--col-lg-4';
				block_to_insert.id = 'cardContainer'+fcounter;

				container_block = document.getElementById( cardlocation );
				container_block.appendChild( block_to_insert );
			
				var h2 = document.createElement ('h2');
				h2.id = 'featured'+fcounter;
				h2.innerHTML = "Featured Course: ";
				
				container_block = document.getElementById('cardContainer'+fcounter);
				container_block.appendChild( h2 );
			
				var h3 = document.createElement ('h3');
				h3.id = 'card_title'+fcounter;
				h3.className = 'code--taxonomy__section-header';
				h3.innerHTML = value.course_title;

				container_block = document.getElementById( 'cardContainer'+fcounter );
				container_block.appendChild( h3 );
			
				var p = document.createElement ('p');
				p.id = 'wrapper'+fcounter;
				
				container_block = document.getElementById( 'cardContainer'+fcounter );
				container_block.appendChild( p );
			
				var a = document.createElement ('a');
				a.id = 'href_wrapper'+fcounter;
					if (value.wrapper === "y"){
						a.href = "content_wrapper.html?loc="+value.course_url+"&code="+value.course_code;
						}
					else{
						a.href = "https://"+value.course_url;
					}
				a.target = '_blank';
				a.innerHTML = 'Access Course &#187;';

				container_block = document.getElementById( 'wrapper'+fcounter );
				container_block.appendChild( a );
			
			
				block_to_insert = document.createElement( 'div' );
				block_to_insert.className = 'bx--col-md-8 bx--col-lg-8'
				block_to_insert.id = 'description'+fcounter;

				container_block = document.getElementById( cardlocation );
				container_block.appendChild( block_to_insert );
			
				p = document.createElement ('p');
				p.id = 'card_description'+fcounter;
				p.innerHTML = value.description;
				
				container_block = document.getElementById( 'description'+fcounter );
				container_block.appendChild( p );
			
		});
	});
}
