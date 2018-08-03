(function () {


var margin = { top: 20, right: 30, bottom: 50, left: 30 }

  var width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

    // You'll probably need to edit this one
  var svg = d3.select("#female-inmates").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



var icon = "\uf183";
	var fontSize = 60;
	var iconSpace = 5;
	var legendSpace = 30;
	var legendX = 650;
	var legendY = 20;
	var legendTitle = "Ethnicity";

	//var colorScale = d3.scaleOrdinal()
		//			.range(["pink", "orange"]);

	var dataRating = ["White", "Black"]
	var dataIcons = [[dataRating[0], icon], [dataRating[1], icon]];
	//var dataText = ["When you hover over the stars...", "...you can show additional information next to the chart...", "...In this tutorial I will explain...", "...how you can make this interactive pictogram chart...", "...and customize the colors and icons."];

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([10, 0])
    .html(function(d) {
      return d.name + ": " + d.year 
    })

  svg.call(tip)
	d3.queue()
   .defer(d3.csv, "females_def.csv")
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
		.attr("x", function(d, i){ return ((i%7 + 1) * (fontSize + 1 + iconSpace)) - fontSize;})
		.attr("y", function(d, i){ if(i%7 == 0){row++}; return row * (fontSize + 10);})
		.attr('font-family', 'FontAwesome')
		.attr('font-size', fontSize)
    .attr('class', "persons")

    .attr("fill", function(d){ 
          if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }})
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


    d3.select("#first-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", 1)
    })


    d3.select("#second-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){
          if (d.contains_love=="True") {
            return 1
          }
          else{
            return 0.1
          }
        })
    })
    .on('stepout', function(){
            svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
    })


    })


    d3.select("#third-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Teresa Wilson Bean Lewis") {
            return "#b20000"
          }
          else{

                    if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }
          }
        })
    })
    .on('stepout', function(){
      svg.selectAll(".persons")
      .transition()
      .duration(200)
        .attr("opacity", function(d){
          if (d.contains_love=="True") {
            return 1
          }
          else{
            return 0.1
          }
        })
        .attr("fill", function(d){
          if (d.name=="Teresa Wilson Bean Lewis" == "White"){
            return "#A5A447"
          }
          else{

          if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#Asian"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }

          }
      })
      })


    d3.select("#fourth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Lisa Ann Coleman") {
            return "#b20000"
          }
          else{

                      if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }
          }
        })
    })
    .on('stepout', function(){
        svg.selectAll(".persons")
          .transition()
          .duration(200)
          .attr("fill", function(d){
      if (d.name=="Lisa Ann Coleman") {
                  return "#E9B230"
                }
      else{

            if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }
          }
    })
          })

    d3.select("#fifth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){
          if (d.contains_god=="True") {
            return 1
          }
          else{
            return 0.1
          }
        })
    })

    d3.select("#sixth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Kimberly Lagayle McCarthy") {
            return "#b20000"
          }
           else{

                    if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }
          }
        })
    })
        .on('stepout', function(){
        svg.selectAll(".persons")
          .transition()
          .duration(200)
          .attr("fill", function(d){
      if (d.name=="Kimberly Lagayle McCarthy") {
                  return "#E9B230"
                }
      else{

            if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "#EF95AA"){
            return "#FFE7D5"

          }
          else if (d.race_ == "Native American"){
            return "#CA3D77"
          }
          else if (d.race_ =="Other"){
            return "light grey"
          }
          else if (d.race_ == "Hispanic"){
            return "#E2617F"
          }
          }
    })
          })


}



})()