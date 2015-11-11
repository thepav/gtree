GTree
======
## Card Types
#### Tour Summaries
------
* Required Fields:
  * 'name' - The name of the tour that will display to the user.
  * 'type' - This must be 'tour_summary'
  * 'color' - A plain text color that will be the background of the card.  
  * 'data' - a list of dictionaries with 'name' and 'type' fields  
    * 'name' will denote the label shown to the user.  
    * 'type' denotes the GTree datatype (see bellow) that will be shown for this data value.
  * 'location' - a list of dictionaries with 'x' and 'y' fields representing a polygon that bounds an area in which the card will appear. 
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
        "x" : 2228377,
        "y" : 1371951
      },{
        "x" : 2228477,
        "y" : 1371951
      },{
        "x" : 2228477,
        "y" : 1371851
      },{
        "x" : 2228377,
        "y" : 1371851
      } 
    ],
    "name" : "Hill Tour",
    "type" : "tour_summary"
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
#Number of Species
------
* Type Label: "num_species"
* Description: The number of different tree species in the given area.
* Calculation Method: Query GIS objects in position point array, get COMMONNAME for each tree, keep track of number of new trees species. Return tree species count.


