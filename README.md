GTree
======
## Card Types
#### Tour Summaries
------
* Required Fields:
  * 'name' - The name of the tour that will display to the user.
  * 'type' - This must be 'tour_summary'
  * 'color' - A plain text color that will be the background of the card.  
  * 'data' - a list of 3 dictionaries with 'name' and 'type' fields  
    * 'name' will denote the label shown to the user.  
    * 'type' denotes the GTree datatype (see bellow) that will be shown for this data value.
  * 'location' - a list of a dictionary(ies) based on location documentation below.   
* Optional Fields: 
  * The dictionaries within the 'data' list may contain an optional 'overwrite' field whose value shall overwrite whatever is calculated.  

##### Example JSON:
```json
"cards":{
  "hilltoursummary" : {
    "color" : "red",
    "data" : [ 
      {
        "name" : "Tree Count",
        "type" : "tree_count"
      },{
        "name" : "Leaf Area",
        "overwrite" : 1301196,
        "type" : "leaf_area"
      },{
        "name" : "Canopy Cover",
        "type" : "canopy_cover"
      } 
    ],
    "gis_tour_id" : "hill_tour",
    "location" : [
     {
      "locationtype" : "reference",
      "reference" : "hilltour"
     }
    ]
    "name" : "Hill Tour",
    "type" : "tour_summary"
  }
}
```  
#### Nearby Trees
------
* Required Fields:
  * 'type' - This must be 'nearby_trees'  
  * 'data' - a list of 1 dictionary with 'name' and 'type' fields  
    * 'name' this field doesn't matter but should be present  
    * 'type' denotes the GTree datatype (see bellow) that will be shown for this data value. Should be "nearby_top".  
  * 'location' - doesn't matter but should follow the normal format for a reference location type.  
* Optional Fields: 
  * The dictionaries within the 'data' list may contain an optional 'overwrite' field whose value shall overwrite whatever is calculated.  
##### Example JSON:
```json
"cards":{
   "nearbytrees" : {
     "data" : [
       {
         "name" : "doesn't matter",
         "type" : "nearby_top"
       }
     ],
     "location": [
       {
         "locationtype" : "asfddasf",
         "reference" : "asdfasdf"
       }
     ],
     "type":"nearby_trees"
   }
  }
```

#### Pie Chart
------
* Required Fields:
  * 'body' - the text in the body of the card 
  * 'type' - This must be 'pie_distribution'  
  * 'data' - a list of 1 dictionary with 'name' and 'type' fields  
    * 'name' this field doesn't matter but should be present  
    * 'type' denotes the GTree datatype (see bellow) that will be shown for this data value. Should be "tree_distribution" for trees.  
  * 'location' - Follow the normal format location type.  

##### Example JSON:
```json
"cards":{
   "techgreentreedistribution" : {
      "body" : "The Tech Green is surrounded by trees.",
      "data" : [ {
        "name" : "distribution of trees",
        "type" : "tree_distribution"
      } ],
      "location" : [ {
        "locationtype" : "reference",
        "reference" : "techgreentour"
      } ],
      "name" : "Tree Distribution",
      "title" : "Tech Green Tree Distribution",
      "type" : "pie_distribution"
    }
  }
```

## Datatypes
####Tree Count
------
* Type Label: "tree_count"  
* Description: The count of trees within the card's location.
* Calculation Method: Query GIS objects in position point array and return count from GIS.


####Leaf Area
------
* Type Label: "leaf_area"  
* Description: The canopy cover provided by all the trees in the given area.
* Calculation Method: Query GIS objects in position point array, get CanopyRadiusFT value of each object and use 2 * PI * (CanopyRadiusFT)^2 value to get cover each tree. Return sum of all calculated canopy covers.


####Total Height
------
* Type Label: "total_height"  
* Description: The total height of all the trees in the given area.
* Calculation Method: Query GIS objects in position point array, get TOTHT value of each object. Return sum of all calculated height covers.


#####Distribution
------
* Type Label: "distribution"
* Description: The numeric distribution of the tree species in the given area.
* Calculation Method: Query GIS objects in position point array, get COMMONNAME for each tree, keep track of number of trees for each species. Return object pairing species name with species count.


####Number of Species
------
* Type Label: "num_species"
* Description: The number of different tree species in the given area.
* Calculation Method: Query GIS objects in position point array, get COMMONNAME for each tree, keep track of number of new trees species. Return tree species count.

####Nearyby Trees
----
* Type Label: "nearby_top"
* Description: A list of 8 tree species nearest you.
* Calculation Method: Query GIS

## Location
Location for each card is implemented as an array of location types, denoted using "locationtype". Each type has an associated set of data. Note that all location coordinates are stored using EPSG2240 (West Georgia State Plane).
####Reference
* Type Label: "reference"
* Description: allows commonly used locations (such as zone and tour boundaries) to be referenced without needing to copy that data to each card
* Location data:
  * reference: the name of the location reference as defined in the "locations" section of Firebase

####Boundary
* Type Label: "boundary"
* Description: a set of points which creates a bounding polygon
* Location data:
  * bounds: the set of bounding points

####Circle
* Type Label: "circle"
* Description: a circular area with a center and radius (in survey feet)
* Location data:
  * centerX: x coordinate of the center of the circle
  * centerY: y coordinate of the center of the circle
  * radius: radius of the circle area
