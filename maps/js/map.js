/*
	Ejemplo como utilizar Google Maps API
	Gaston D. Fernandez
	https://developers.google.com/maps/documentation/javascript/tutorial
*/

window.onload = function() {
	var mapDiv = document.getElementById('map');
	var sampacho = new google.maps.LatLng(-33.384006,-64.722775);
	var catalunya = new google.maps.LatLng(41.652393,1.691895);
	var options = {
		center: sampacho,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP //Tipo de mapa ROADMAP / SATELLITE / HYBRID / TERRAIN
	};
	var mapa = new google.maps.Map(mapDiv, options);

	// Creamos un arreglo con el estilo.
	var styles = [
	{
	   stylers: [
	   { hue: "#00ffe6" },
	   { saturation: -20 }
	   ]
	    },{
	    featureType: "road",
	    elementType: "geometry",
	    stylers: [
	    { lightness: 100 },
	    { visibility: "simplified" }
	    ]
	    },{
	      featureType: "road",
	      elementType: "labels",
	      stylers: [
	       { visibility: "off" }
	      ]
	    }
	];

	// Creamos un nuevo StyledMapType y le pasamos el arreglo de estilo.
	// asi como el nombre que se mostrara en el control de tipos de mapas.
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	//Agregamos el estilo al mapa
	mapa.mapTypes.set('map_style_1', styledMap);
	//Asociamos el estilo como por defecto al mapa que creamos anteriormente.
	mapa.setMapTypeId('map_style_1');



	var contentString = '<div id="content">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h1 id="firstHeading" class="firstHeading">Sampacho</h1>'+
	    '<div id="bodyContent">'+
	    '<p><b>Sampacho</b>, es una ciudad que se encuentra en el Departamento Río Cuarto,' +
	    ' al sur de la provincia de Córdoba (Argentina),'+
	    ' a 45 km al sudoeste de la cabecera departamental Río Cuarto,'+
	    ' en el cruce de la RN 8 con la RP E-86. '+
	    '<p>Mas informacion es, <a href="https://es.wikipedia.org/wiki/Sampacho" target="_blank">'+
	    'https://es.wikipedia.org/wiki/Sampacho</a> '+
	    '</div>'+
	    '</div>';

	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});


	var marker = new google.maps.Marker({
	    position: sampacho,
	    map: mapa,
	    title: '¡Sampacho!'
	});


	marker.addListener('click', function() {
    	infowindow.open(mapa, marker);
  	});
}



