(function () {


var margin = { top: 20, right: 20, bottom: 50, left: 30 }

  var width = 510 - margin.left - margin.right,
    height = 1620 - margin.top - margin.bottom

    // You'll probably need to edit this one
  var svg = d3.select("#african-american-inmates").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



var icon = "\uf183";
	var fontSize = 30;
	var iconSpace = 5;
	var legendSpace = 30;
	var legendX = 650;
	var legendY = 20;
	var legendTitle = "Ethnicity";

	//var colorScale = d3.scaleOrdinal()
		//			.range(["#B84245", "#4894AF"]);

	var dataRating = ["White", "Black"]
	var dataIcons = [[dataRating[0], icon], [dataRating[1], icon]];
	//var dataText = ["When you hover over the stars...", "...you can show additional information next to the chart...", "...In this tutorial I will explain...", "...how you can make this interactive pictogram chart...", "...and customize the colors and icons."];

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([10, 0])
    .html(function(d) {
      return d.name + ": " + d.year 
    })

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([10, 0])
    .html(function(d) {
      return d.name + ": " + d.year 
    })

  svg.call(tip)
  d3.queue()
   .defer(d3.csv, "african_americans.csv")
   .await(ready)

   function ready(error, datapoints) {
   		console.log("Data is", datapoints)

   		var row = 0;
		//var chart = d3.select("svg")
		//	.attr("transform", "translate(0, 0)");

svg.call(tip);

		var icons = svg.selectAll("g")
			.data(datapoints).enter()
			.append("g");

		icons.append("text")
		.attr("x", function(d, i){ return ((i%13 + 1) * (fontSize + 1 + iconSpace)) - fontSize;})
		.attr("y", function(d, i){ if(i%13 == 0){row++}; return row * (fontSize + 10);})
		.attr('font-family', 'FontAwesome')
		.attr('font-size', fontSize)
    .attr('class', "persons")
    .attr("opacity", 0.7)

		.attr("fill","#E9B230")
		.text(function(d) { return "\u00A0 " + icon; })
    .on('mouseover', function (d) {
            var tooltipData = d

          console.log(d)
          d3.select('#tooltip')
          .style("visibility", "visible")
          .style("top", d3.event.pageY + 5 + "px")
          .style("left", d3.event.pageX + 5 + "px")
          .html(function(d){
            return tooltipData.name  
          })


        })
            .on('mouseout', function(d){
            d3.select('#tooltip') 
            .style("visibility", "hidden")
            
          })
 

    d3.select("#seventh-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", 0.7)
    })


    d3.select("#eighth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){
          if (d.contains_love=="True") {
            return 0.7
          }
          else{
            return 0.1
          }
        })
    })


    d3.select("#ninth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Anthony Rozelle Banks") {
            return "#cc0000"
          }
          else{
            if (d.race_ == "White"){
              return "pink"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })
    .on('stepout', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Anthony Rozelle Banks") {
            return "#E9B230"
          }
          else{
            if (d.race_ == "White"){
              return "pink"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })


    d3.select("#tenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Johnile L. Dubois") {
            return "#cc0000"
          }
          else{
            if (d.race_ == "White"){
              return "pink"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })
      .on('stepout', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Johnile L. Dubois") {
            return "#E9B230"
          }
          else{
            if (d.race_ == "White"){
              return "pink"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })

    d3.select("#eleventh-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Marvin Lee Wilson") {
            return "#cc0000"
          }
          else{
            if (d.race_ == "White"){
              return "#F96273"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })
      .on('stepout', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(400)
        .attr("fill", function(d){
          if (d.name=="Marvin Lee Wilson") {
            return "#E9B230"
          }
          else{
            if (d.race_ == "White"){
              return "pink"
            }
            else{
              return "#E9B230"
            }
          }
        })
    })




}



})()