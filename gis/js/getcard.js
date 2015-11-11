geturl = "http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1/query?geometry=2228377%2C+1371951%2C+2228477%2C+1372051&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"


function tree_count_func(features){
	return features.length;
}
function leaf_area_func(features){
	var totalcanopy = 0
	for (f=0; f<features.length;f++)
	{
		fattr = features[f].attributes;
		totalcanopy += parseInt(fattr.CanopyRadiusFT) * parseInt(fattr.CanopyRadiusFT) * Math.PI;
	}
	return totalcanopy;
}
function total_height_func(features){
	var totalheight = 0
	for (f=0; f<features.length;f++)
	{
		fattr = features[f].attributes;
		totalheight += parseInt(fattr.TOTHT);
	}
	return totalheight;
}
function distribution_func(features){
	var speciesdist = {};
	for (f=0; f<features.length;f++)
	{
		var fattr = features[f].attributes;
		var speciesname = fattr.COMMONNAME;
		if (speciesdist[speciesname] == null)
		{
			speciesdist[speciesname] = 1;	
		}
		else
		{
			speciesdist[speciesname] += 1;				
		}
	}
	return speciesdist;
}
function species_func(features){
	var speciesdist = {};
	var speciescount = 0;
	for (f=0; f<features.length;f++)
	{
		var fattr = features[f].attributes;
		var speciesname = fattr.COMMONNAME;
		if (speciesdist[speciesname] == null)
		{
			speciescount += 1;
			speciesdist[speciesname] = 1;	
		}
		else
		{
			speciesdist[speciesname] += 1;				
		}
	}
	return speciescount;
}
function nearby_top_func(features){
	var speciesdist = {};
	var speciescount = 0;
	var top8 = [null,null,null,null,null,null,null,null];
	nontop8 = [];
	for (f=0; f<features.length;f++)
	{
		var fattr = features[f].attributes;
		var speciesname = fattr.COMMONNAME;
		if (speciesdist[speciesname] == null)
		{
			speciescount += 1;
			speciesdist[speciesname] = 1;	
		}
		else
		{
			speciesdist[speciesname] += 1;				
		}
	}
	var keys = Object.keys(speciesdist);
	for (s=0; s<keys.length; s++)
	{
		spec = keys[s];
		if ((top8[0] == null) || (speciesdist[spec]>speciesdist[top8[0]]))
		{
			if (top8[0] != null) nontop8.push(top8[0]);
			top8[0] = spec;
			loc = 1;
			while ((loc < 8) && ((top8[loc] == null) || (speciesdist[spec]>speciesdist[top8[loc]])))
			{
				var inter = top8[loc];
				top8[loc] = spec;
				top8[loc-1] = inter;
				loc += 1;
			}
		}
	}
	finalsel = {};
	for (var i=0; i<top8.length; i++)
	{
		spec = top8[i];
		if (spec != null) finalsel[spec] = speciesdist[spec];
	}
//	for (var i=0; i<nontop8.length; i++)
//	{
//		spec = nontop8[i];
//		if (spec != null)
//		{
//			if (finalsel["others"] == null) finalsel["others"] = 0;
//			finalsel["others"] += speciesdist[spec];	
//		}
//	}
	return Object.keys(finalsel);
}

var typeDict = {
	'tree_count':[tree_count_func,[]],
	'leaf_area':[leaf_area_func,["CanopyRadiusFT"]],
	'total_height':[total_height_func,["TOTHT"]],
	'tree_distribution':[distribution_func,["COMMONNAME"]],
	'num_species':[species_func,["COMMONNAME"]],
	'nearby_top':[nearby_top_func,["COMMONNAME"]],
}

function getNearby(x, y, data, injectionFunc)
{
	nbx = x;
	nby = y
	nbr = 100;
	nbif = injectionFunc;
	nbdata = data;
	nearbyHelper(null, []);	
}
var nbx;
var nby;
var nbr;
var nbdata;
var nbif;
function nearbyHelper(nullval, top8)
{
	nbr += 200;
	points = [[nbx-nbr,nby-nbr],[nbx-nbr,nby+nbr],
			  [nbx+nbr,nby+nbr],[nbx+nbr,nby-nbr]];
	statList = ['nearby_top'];
	if (top8 == null) top8 = [];
	if (top8.length < 8 && nbr < 2000)
	{
		getStatistics(statList, points, nbdata, nearbyHelper);
	}
	else
	{
		nbif(nbdata, top8);
	}
}


function getStatistics(statList,points,data,cardID,injectionFunc)
{
	console.log('called for '+cardID+' with statList: '+statList+' with injectionFunc: '+injectionFunc);
	require([
		"esri/tasks/query", "esri/tasks/QueryTask", "esri/geometry/Multipoint", "esri/SpatialReference"
	], 
	function(Query, QueryTask, Multipoint, SpatialReference) {
	  var query = new Query();
	 	queryTask = new QueryTask("http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1");
		var of = getOutFuncList(statList);
		query.outFields = of[0];	
		query.returnGeometry = true;
    	query.spatialRelationship = Query.SPATIAL_REL_ENVELOPEINTERSECTS;
		var mpJson ={"points":points,"spatialReference":({" wkid":4326 })};
 		var multipoint = new Multipoint(mpJson);
		query.geometry = multipoint;
		var funclist = of[1];
		queryTask.execute(query, function(featureset) {
			retvals = [];
			for (var i=0; i<funclist.length;i++){
				var features = featureset.features;
				retvals.push(funclist[i](features));
			}
			injectionFunc(cardID,data, retvals);
		});
	});	
}

function getOutFuncList(statList)
{
	var outfieldsText = [];
	var flist = [];
	var i2 = 0;
	for (var i=0;i<statList.length;i++)
	{
		console.log(statList);
		flist.push(typeDict[statList[i]][0]);
		var toAdd = typeDict[statList[i]][1];
		for(j=0;j<toAdd.length;j++)
		{
			var addbit = toAdd[j];
			outfieldsText.push(addbit);
		}
	}
	return [outfieldsText, flist];
}
