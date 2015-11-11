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

var typeDict = {
	'tree_count':[tree_count_func,[]],
	'leaf_area':[leaf_area_func,["CanopyRadiusFT"]],
	'total_height':[total_height_func,["TOTHT"]],
	'distibution':[distribution_func,["COMMONNAME"]]
}

function getStatistics(statList,points,data,injectionFunc)
{

	require([
		"esri/tasks/query", "esri/tasks/QueryTask", "esri/geometry/Multipoint", "esri/SpatialReference"
	], 
	function(Query, QueryTask, Multipoint, SpatialReference) {
	  var query = new Query();
	 	queryTask = new QueryTask("http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1");
		var of = getOutFuncList(statList);
		query.outFields = of[0];	
		query.where = "TOTHT > 30";
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
			injectionFunc(data, retvals);
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
