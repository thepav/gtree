function randValue(){return Math.floor(31*Math.random())+10}function loadAnimatedWeatherIcons(){var e=new Skycons({color:"white"}),a=new Skycons({color:"#8b91a0"});e.set("widget-partly-cloudy-day",Skycons.PARTLY_CLOUDY_DAY),e.set("widget-partly-rainy-day",Skycons.WIND),a.set("widget-wind",Skycons.WIND),a.set("widget-sleet",Skycons.SLEET),a.set("widget-2-cloudy-big",Skycons.PARTLY_CLOUDY_DAY),e.play(),a.play()}function loadAnimatedWidget_pure_white(){var e=new Skycons({color:"#8b91a0"});e.set("white_widget_01",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_02",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_03",Skycons.WIND),e.set("white_widget_04",Skycons.SLEET),e.set("white_widget_05",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_06",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_07",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_08",Skycons.WIND),e.set("white_widget_09",Skycons.SLEET),e.set("white_widget_10",Skycons.PARTLY_CLOUDY_DAY),e.set("white_widget_11",Skycons.SLEET),e.set("white_widget_12",Skycons.SLEET),e.set("white_widget_13",Skycons.WIND),e.set("white_widget_14",Skycons.SLEET),e.play()}function loadLocationMaps(){var e={zoom:10,panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,zoomControl:!1,center:new google.maps.LatLng(40.67,-73.94),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#5f94ff"},{lightness:26},{gamma:5.86}]},{},{featureType:"road.highway",stylers:[{weight:.6},{saturation:-85},{lightness:61}]},{featureType:"road"},{},{featureType:"landscape",stylers:[{hue:"#0066ff"},{saturation:74},{lightness:100}]}]};$("#location-map").length>0&&new google.maps.Map(document.getElementById("location-map"),e),$("#location-map-2").length>0&&new google.maps.Map(document.getElementById("location-map-2"),e),$("#mapplic_demo").mapplic({source:"assets/js/json/states.json",height:494,sidebar:!1,minimap:!1,locations:!0,deeplinking:!0,fullscreen:!1,hovertip:!0,developer:!1,maxscale:3,height:380})}$(document).ready(function(){function e(){for(var e=[[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);graph_1=new Rickshaw.Graph({element:document.querySelector("#chart"),height:123,renderer:"area",series:[{data:e[0],color:"rgba(0,0,0,0.30)",name:"DB Server"},{data:e[1],color:"rgba(255,255,255,0.05)",name:"Web Server"}]});var i=new Rickshaw.Graph.HoverDetail({graph:graph_1});setInterval(function(){a.removeData(e),a.addData(e),graph_1.update()},1e3)}function a(){for(var e=[[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);graph=new Rickshaw.Graph({element:document.querySelector("#sales-graph"),height:108,renderer:"area",series:[{data:e[0],color:color_danger,name:"DB Server"},{data:e[1],color:"#f2f4f6",name:"Web Server"}]});var i=new Rickshaw.Graph.HoverDetail({graph:graph});setInterval(function(){a.removeData(e),a.addData(e),graph.update()},1e3)}function r(){for(var e=[[],[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);graph_3=new Rickshaw.Graph({element:document.querySelector("#shares-chart-01"),height:250,renderer:"bar",series:[{data:e[0],color:color_green,name:"DB Server"},{data:e[1],color:"#3db9af",name:"Web Server"},{data:e[2],color:"#f2f4f6",name:"Web Server2"}]});var i=new Rickshaw.Graph.HoverDetail({graph:graph_3});a.addData(e),graph_3.update()}function i(){for(var e=[[],[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);graph_3=new Rickshaw.Graph({element:document.querySelector("#shares-chart-02"),height:250,renderer:"bar",series:[{data:e[0],color:color_green,name:"DB Server"},{data:e[1],color:"#3db9af",name:"Web Server"},{data:e[2],color:"#f2f4f6",name:"Web Server2"}]});var i=new Rickshaw.Graph.HoverDetail({graph:graph_3});a.addData(e),graph_3.update()}function t(){for(var e=[[],[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);rick=new Rickshaw.Graph({element:document.querySelector("#ricksaw"),height:200,renderer:"area",series:[{data:e[0],color:"#736086",name:"Downloads"},{data:e[1],color:"#f8a4a3",name:"Uploads"},{data:e[2],color:"#eceff1",name:"All"}]});var i=new Rickshaw.Graph.HoverDetail({graph:rick});a.addData(e),rick.update();var t="glow",o=new Rickshaw.Graph.Axis.Time({graph:rick,ticksTreatment:t,timeFixture:new Rickshaw.Fixtures.Time.Local});o.render();var n=new Rickshaw.Graph.Axis.Y({graph:rick,tickFormat:Rickshaw.Fixtures.Number.formatKMBT,ticksTreatment:t}),l=new Rickshaw.Graph.Legend({graph:rick,element:document.getElementById("legend")});n.render();var s=new Rickshaw.Graph.Behavior.Series.Toggle({graph:rick,legend:l}),d=new Rickshaw.Graph.Behavior.Series.Order({graph:rick,legend:l}),c=new Rickshaw.Graph.Behavior.Series.Highlight({graph:rick,legend:l});$("#mini-chart-orders").sparkline([1,4,6,2,0,5,6,4,6],{type:"bar",height:"30px",barWidth:6,barSpacing:2,barColor:"#f35958",negBarColor:"#f35958"}),$("#mini-chart-other").sparkline([1,4,6,2,0,5,6,4],{type:"bar",height:"30px",barWidth:6,barSpacing:2,barColor:"#0aa699",negBarColor:"#0aa699"})}function o(){for(var e=[[],[],[]],a=new Rickshaw.Fixtures.RandomData(50),r=0;50>r;r++)a.addData(e);rick=new Rickshaw.Graph({element:document.querySelector("#ricksaw_2"),height:200,renderer:"area",series:[{data:e[0],color:"#736086",name:"Downloads"},{data:e[1],color:"#f8a4a3",name:"Uploads"},{data:e[2],color:"#eceff1",name:"All"}]});var i=new Rickshaw.Graph.HoverDetail({graph:rick});a.addData(e),rick.update();var t="glow",o=new Rickshaw.Graph.Axis.Time({graph:rick,ticksTreatment:t,timeFixture:new Rickshaw.Fixtures.Time.Local});o.render();var n=new Rickshaw.Graph.Axis.Y({graph:rick,tickFormat:Rickshaw.Fixtures.Number.formatKMBT,ticksTreatment:t}),l=new Rickshaw.Graph.Legend({graph:rick,element:document.getElementById("legend_2")});n.render();var s=new Rickshaw.Graph.Behavior.Series.Toggle({graph:rick,legend:l}),d=new Rickshaw.Graph.Behavior.Series.Order({graph:rick,legend:l}),c=new Rickshaw.Graph.Behavior.Series.Highlight({graph:rick,legend:l});$("#mini-chart-orders_2").sparkline([1,4,6,2,0,5,6,4,6],{type:"bar",height:"30px",barWidth:6,barSpacing:2,barColor:"#f35958",negBarColor:"#f35958"}),$("#mini-chart-other_2").sparkline([1,4,6,2,0,5,6,4],{type:"bar",height:"30px",barWidth:6,barSpacing:2,barColor:"#0aa699",negBarColor:"#0aa699"})}function n(){var e=500,a=-1,r=-1,i,t=0,o=[],n=30;$("html").mousemove(function(e){var i=e.pageX,o=e.pageY;a>-1&&(t+=Math.max(Math.abs(i-a),Math.abs(o-r))),a=i,r=o});var l=function(){var a=new Date,r=a.getTime();if(i&&i!=r){var s=Math.round(t/(r-i)*1e3);o.push(s),o.length>n&&o.splice(0,1),t=0,$("#mousespeed").sparkline(o,{width:2*o.length,tooltipSuffix:" pixels per second"})}i=r,setTimeout(l,e)};setTimeout(l,e)}function l(){$("#sales-sparkline").sparkline([4,6,5,7,5,5],{type:"line",width:"100%",height:"20%",lineColor:"#ffffff",lineWidth:2,fillColor:"rgba(0,0,0,0.1)",spotColor:"#ffffff",minSpotColor:"#ffffff",maxSpotColor:"#f35958",spotRadius:5,normalRangeMin:1})}e(),a(),l(),r(),i(),loadAnimatedWeatherIcons(),loadAnimatedWidget_pure_white(),loadLocationMaps(),$("#earnings-chart").sparkline([0,4,4,5,6,8,3,2,2,4,6,7],{type:"line",width:"100%",height:"150px",lineColor:"rgba(255, 255, 255, 0.2)",fillColor:"rgba(255, 255, 255, 0.2)"})}),$.fn.owlCarousel&&($("#testomonials").owlCarousel({singleItem:!0}),$("#image-demo-carl").owlCarousel({navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,pagination:!1,autoHeight:!0}),$("#image-demo-carl-2").owlCarousel({navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,pagination:!1,autoHeight:!0}));var data_com2=[[1,randValue()],[2,randValue()],[3,2+randValue()],[4,3+randValue()],[5,5+randValue()],[6,10+randValue()],[7,15+randValue()],[8,20+randValue()],[9,25+randValue()],[10,30+randValue()],[11,35+randValue()],[12,25+randValue()],[13,15+randValue()],[14,20+randValue()],[15,45+randValue()],[16,50+randValue()],[17,65+randValue()],[18,70+randValue()],[19,54+randValue()],[20,65+randValue()],[21,75+randValue()],[22,85+randValue()],[23,54+randValue()]],data_com=[[1,randValue()],[2,randValue()],[3,10+randValue()],[4,15+randValue()],[5,20+randValue()],[6,25+randValue()],[7,30+randValue()],[8,35+randValue()],[9,40+randValue()],[10,45+randValue()],[11,50+randValue()],[12,55+randValue()],[13,60+randValue()],[14,70+randValue()],[15,75+randValue()],[16,80+randValue()],[17,85+randValue()],[18,90+randValue()],[19,95+randValue()],[20,100+randValue()],[21,110+randValue()],[22,120+randValue()],[23,130+randValue()]],names=["Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta"],plot_statistics=$.plot($("#chart_1"),[{data:data_com,showLabels:!0,label:"New Visitors",labelPlacement:"below",canvasRender:!0,cColor:"#FFFFFF"},{data:data_com2,showLabels:!0,label:"Old Visitors",labelPlacement:"below",canvasRender:!0,cColor:"#FFFFFF"}],{series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.5},{opacity:.5}]}},fillColor:"rgba(0, 0, 0, 1)",points:{show:!1,fill:!0}},legend:{show:!0,position:"nw",backgroundColor:"green",container:$("#chart3-legend")},grid:{show:!1,margin:0,labelMargin:0,axisMargin:0,hoverable:!0,clickable:!0,tickColor:"rgba(255,255,255,1)",borderWidth:0},colors:["#E3E6E8","#1fb594"],xaxis:{autoscaleMargin:0,ticks:11,tickDecimals:0},yaxis:{autoscaleMargin:.2,ticks:5,tickDecimals:0}}),plot_visits=$.plot($("#sales_chart_alt"),[{data:data_com,showLabels:!0,label:"New Visitors",labelPlacement:"below",canvasRender:!0,cColor:"#FFFFFF"},{data:data_com2,showLabels:!0,label:"Old Visitors",labelPlacement:"below",canvasRender:!0,cColor:"#FFFFFF"}],{series:{lines:{show:!0,lineWidth:1,fill:!1,fillColor:{colors:[{opacity:1},{opacity:1}]}},fillColor:"rgba(0, 0, 0, 1)",points:{show:!1,fill:!0},shadowSize:0},legend:{show:!0,position:"nw",backgroundColor:"green",container:$("#chart3-legend")},grid:{show:!1,margin:0,labelMargin:0,axisMargin:0,hoverable:!0,clickable:!0,tickColor:"rgba(255,255,255,1)",borderWidth:0},colors:["#E3E6E8","#f35958"],xaxis:{autoscaleMargin:0,ticks:11,tickDecimals:0},yaxis:{autoscaleMargin:.2,ticks:5,tickDecimals:0}});