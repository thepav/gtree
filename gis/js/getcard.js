geturl = "http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1/query?geometry=*G1%2C+*G2%2C+*G3%2C+*G4&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=TOTHT%2C+CROWNWIDTHNS%2C+CROWNWIDTHEW%2C+CanopyRadiusFT%2C+COMMONNAME&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"


var totalcount;
var speciescount;
var totalcanopy;
var totalcrownarea;
var totalheight;
var cardready = false;

function setupcards(envelope)
{
	totalcount = 0;
	speciescount = new Object();
	totalcanopy = 0;
	totalcrownarea = 0;
	totalheight = 0;
	cardready = false;
	var data = getjson(envelope);
}

function getcard1() {
	return {"count":totalcount, "canopy":totalcanopy, "crown":totalcrownarea, "height":totalheight};
}


function getcard2() {
	return speciescount;
}

function getjson(envelope)
{
	var jsonurl = getreplaceurl(envelope);
	var jsonhtml = $.get(jsonurl, parser);

}

function parser(data){
	var obj = jQuery.parseJSON(data);
	var features = obj.features;
	for (f=0; f<features.length;f++)
	{
		fattr = features[f].attributes;
		fname = fattr.COMMONNAME;
		totalcount += 1;
		if (speciescount[fname] == null) speciescount[fname] = 0;
		speciescount[fname] += 1;
		totalcanopy += parseInt(fattr.CanopyRadiusFT) * parseInt(fattr.CanopyRadiusFT) * Math.PI;
		totalheight += parseInt(fattr.TOTHT);
		totalcrownarea += parseInt(fattr.CROWNWIDTHNS) * parseInt(fattr.CROWNWIDTHEW);
	}
	cardready = true;
}

function getreplaceurl(envelope)
{
	var reps=[];
	for (var i=0; i<envelope.length;i++)
	{
		reps.push(["*G"+(i+1),envelope[i]]);
	}
	var newurl = geturl.slice(0);
	return replaceinner(newurl, reps)
}

function replaceinner(string, replacements)
{
	for (var i=0; i<replacements.length; i++)
	{
		var a = replacements[i][0];
		var b = replacements[i][1];
		var  ind = string.indexOf(a);
		if (ind > 0)
		{
			string = string.substr(0, ind)+b+string.substr(ind+a.length);
		}
	}
	return string;
}

