function tree_count_func(e){return e.length}function leaf_area_func(e){var t=0;for(f=0;f<e.length;f++)fattr=e[f].attributes,t+=parseInt(fattr.CanopyRadiusFT)*parseInt(fattr.CanopyRadiusFT)*Math.PI;return t}function total_height_func(e){var t=0;for(f=0;f<e.length;f++)fattr=e[f].attributes,t+=parseInt(fattr.TOTHT);return t}function distribution_func(e){var t={};for(f=0;f<e.length;f++){var r=e[f].attributes,a=r.COMMONNAME;null==t[a]?t[a]=1:t[a]+=1}return t}function species_func(e){var t={},r=0;for(f=0;f<e.length;f++){var a=e[f].attributes,n=a.COMMONNAME;null==t[n]?(r+=1,t[n]=1):t[n]+=1}return r}function getStatistics(e,t,r,a,n){console.log("called for "+a+" with statList: "+e+" with injectionFunc: "+n),require(["esri/tasks/query","esri/tasks/QueryTask","esri/geometry/Multipoint","esri/SpatialReference"],function(s,i,u,f){var o=new s;queryTask=new i("http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1");var l=getOutFuncList(e);o.outFields=l[0],o.returnGeometry=!0,o.spatialRelationship=s.SPATIAL_REL_ENVELOPEINTERSECTS;var c={points:t,spatialReference:{" wkid":4326}},p=new u(c);o.geometry=p;var g=l[1];queryTask.execute(o,function(e){retvals=[];for(var t=0;t<g.length;t++){var s=e.features,i=Math.round(100*g[t](s))/100;retvals.push(i)}n(a,r,retvals)})})}function getOutFuncList(e){for(var t=[],r=[],a=0,n=0;n<e.length;n++){console.log(e),r.push(typeDict[e[n]][0]);var s=typeDict[e[n]][1];for(j=0;j<s.length;j++){var i=s[j];t.push(i)}}return[t,r]}geturl="http://tulip.gis.gatech.edu:6080/arcgis/rest/services/zGT/TreeBasemap/MapServer/1/query?geometry=2228377%2C+1371951%2C+2228477%2C+1372051&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson";var typeDict={tree_count:[tree_count_func,[]],leaf_area:[leaf_area_func,["CanopyRadiusFT"]],total_height:[total_height_func,["TOTHT"]],tree_distribution:[distribution_func,["COMMONNAME"]],num_species:[species_func,["COMMONNAME"]]};