/* Webarch Admin Dashboard 
/* This JS is only for DEMO Purposes - Extract the code that you need
-----------------------------------------------------------------*/	
$(document).ready(function() {	
//loadServerChart();
//drawMouseSpeedDemo();
//loadSalesGraph();
//loadSalesSparkline();
//loadShareMarketGraph();
//loadShareMarketGraph_Demo2();
//loadAnimatedWeatherIcons();
//loadAnimatedWidget_pure_white();
//loadSampleChart();
//loadSampleChartDemo2();
loadLocationMaps();

/**** Carousel for Testominals ****/
if ($.fn.owlCarousel){
	$("#testomonials").owlCarousel({
		singleItem:true
	});		
	
	$("#image-demo-carl").owlCarousel({	 
		navigation : false, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		pagination:false,
		autoHeight : true	 
	});
	$("#image-demo-carl-2").owlCarousel({	 
		navigation : false, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		pagination:false,
		autoHeight : true	 
	});
	
}
//Morris Charts
function randValue() {
	return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
}
var data_com2 = [
[1, randValue()],
[2, randValue()],
[3, 2 + randValue()],
[4, 3 + randValue()],
[5, 5 + randValue()],
[6, 10 + randValue()],
[7, 15 + randValue()],
[8, 20 + randValue()],
[9, 25 + randValue()],
[10, 30 + randValue()],
[11, 35 + randValue()],
[12, 25 + randValue()],
[13, 15 + randValue()],
[14, 20 + randValue()],
[15, 45 + randValue()],
[16, 50 + randValue()],
[17, 65 + randValue()],
[18, 70 + randValue()],
[19, 54 + randValue()],
[20, 65 + randValue()],
[21, 75 + randValue()],
[22, 85 + randValue()],
[23, 54 + randValue()]
];
var data_com = [
[1, randValue()],
[2, randValue()],
[3, 10 + randValue()],
[4, 15 + randValue()],
[5, 20 + randValue()],
[6, 25 + randValue()],
[7, 30 + randValue()],
[8, 35 + randValue()],
[9, 40 + randValue()],
[10, 45 + randValue()],
[11, 50 + randValue()],
[12, 55 + randValue()],
[13, 60 + randValue()],
[14, 70 + randValue()],
[15, 75 + randValue()],
[16, 80 + randValue()],
[17, 85 + randValue()],
[18, 90 + randValue()],
[19, 95 + randValue()],
[20, 100 + randValue()],
[21, 110 + randValue()],
[22, 120 + randValue()],
[23, 130 + randValue()]
];

var names = [
"Alpha",
"Beta",
"Gamma",
"Delta",
"Epsilon",
"Zeta",
"Eta",
"Theta"
];

var plot_statistics = $.plot($("#chart_1"), [{
	data: data_com, showLabels: true, label: "New Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
},{
	data: data_com2, showLabels: true, label: "Old Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
}
], {
	series: {
		lines: {
			show: true,
			lineWidth: 1, 
			fill: true,
			fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.5}] }
		},
		fillColor: "rgba(0, 0, 0, 1)",
		points: {
			show: false,
			fill: true
		}
	},
	legend:{
		show: true,
		position:"nw",
		backgroundColor: "green",
		container: $("#chart3-legend")
	},
	grid: {
		show:false,
		margin: 0,
		labelMargin: 0,
		axisMargin: 0,
		hoverable: true,
		clickable: true,
		tickColor: "rgba(255,255,255,1)",
		borderWidth: 0
	},
	colors: ["#E3E6E8","#1fb594"],
	xaxis: {
		autoscaleMargin: 0,
		ticks: 11,
		tickDecimals: 0
	},
	yaxis: {
		autoscaleMargin: 0.2,
		ticks: 5,
		tickDecimals: 0
	}
});

var plot_visits = $.plot($("#sales_chart_alt"), [{
	data: data_com, showLabels: true, label: "New Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
},{
	data: data_com2, showLabels: true, label: "Old Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
}
], {
	series: {
		lines: {
			show: true,
			lineWidth: 1, 
			fill: false,
			fillColor: { colors: [{ opacity:1 }, { opacity: 1}] }
		},
		fillColor: "rgba(0, 0, 0, 1)",
		points: {
			show: false,
			fill: true
		},
		shadowSize: 0
	},
	legend:{
		show: true,
		position:"nw",
		backgroundColor: "green",
		container: $("#chart3-legend")
	},
	grid: {
		show:false,
		margin: 0,
		labelMargin: 0,
		axisMargin: 0,
		hoverable: true,
		clickable: true,
		tickColor: "rgba(255,255,255,1)",
		borderWidth: 0
	},
	colors: ["#E3E6E8","#f35958"],
	xaxis: {
		autoscaleMargin: 0,
		ticks: 11,
		tickDecimals: 0
	},
	yaxis: {
		autoscaleMargin: 0.2,
		ticks: 5,
		tickDecimals: 0
	}
});


//Weahter Icons 
function loadAnimatedWeatherIcons(){
	/*** Animated Weather Icon **/
	var icons = new Skycons({"color": "white"});
	var icons_grey = new Skycons({"color": "#8b91a0"});
	
	icons.set("widget-partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
	icons.set("widget-partly-rainy-day", Skycons.WIND);
	//icons.set("widget-2-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("widget-wind", Skycons.WIND);
	icons_grey.set("widget-sleet", Skycons.SLEET);
	icons_grey.set("widget-2-cloudy-big", Skycons.PARTLY_CLOUDY_DAY);
	
	icons.play();
	icons_grey.play();
}

function loadAnimatedWidget_pure_white(){
	var icons_grey = new Skycons({"color": "#8b91a0"});
	icons_grey.set("white_widget_01", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("white_widget_02", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("white_widget_03", Skycons.WIND);
	icons_grey.set("white_widget_04", Skycons.SLEET);
	icons_grey.set("white_widget_05", Skycons.PARTLY_CLOUDY_DAY);
	
	icons_grey.set("white_widget_06", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("white_widget_07", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("white_widget_08", Skycons.WIND);
	icons_grey.set("white_widget_09", Skycons.SLEET);
	icons_grey.set("white_widget_10", Skycons.PARTLY_CLOUDY_DAY);
	icons_grey.set("white_widget_11", Skycons.SLEET);
	icons_grey.set("white_widget_12", Skycons.SLEET);
	
	icons_grey.set("white_widget_13", Skycons.WIND);
	icons_grey.set("white_widget_14", Skycons.SLEET);
	icons_grey.play();
}

function loadLocationMaps(){
	var myOptions = {
		zoom: 10,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		zoomControl : false,
		center: new google.maps.LatLng(40.6700, -73.9400),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#5f94ff"},{lightness:26},{gamma:5.86}]},{},{featureType:"road.highway",stylers:[{weight:0.6},{saturation:-85},{lightness:61}]},{featureType:"road"},{},{featureType:"landscape",stylers:[{hue:"#0066ff"},{saturation:74},{lightness:100}]}]
	};


//Location Map
if($('#location-map').length > 0){
 //Initialize Map
 new google.maps.Map(document.getElementById('location-map'), myOptions);
}

if($('#location-map-2').length > 0){
 //Initialize Map
 new google.maps.Map(document.getElementById('location-map-2'), myOptions);
}

$('#mapplic_demo').mapplic({
	source: 'assets/js/json/states.json',
	height: 494,
	sidebar: false,
	minimap: false,
	locations: true,
	deeplinking: true,
	fullscreen: false,
	hovertip: true,
	developer: false,
	maxscale: 3,
	height:380
});    
}

});