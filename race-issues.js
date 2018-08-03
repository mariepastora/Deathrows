(function () {


var margin = { top: 20, right: 30, bottom: 50, left: 0 }

  var width = 1000 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom

    // You'll probably need to edit this one
  var svg = d3.select("#race-issues").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



var icon = "\uf183";
	var fontSize = 80;
	var iconSpace = 60;
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
   .defer(d3.csv, "race_issues.csv")
   .await(ready)



   function ready(error, datapoints) {
      console.log("Data is", datapoints)

      var row = 0;
    //var chart = d3.select("svg")
    //  .attr("transform", "translate(0, 0)");

svg.call(tip);

    var icons = svg.selectAll("g")
      .data(datapoints).enter()
      .append("g");

    icons.append("text")
    .attr("x", function(d, i){ return ((i%20 + 1) * (fontSize + 1 + iconSpace)) - fontSize;})
    .attr("y", function(d, i){ if(i%20 == 0){row++}; return row * (fontSize + 10);})
    .attr('font-family', 'FontAwesome')
    .attr('font-size', fontSize)
    .attr('class', "persons")

    .attr("fill","#E9B230")
    .text(function(d) { return "\u00A0 " + icon; })



    d3.select("#twelth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", 0.8)
    })



    d3.select("#thirteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="John C. Young") {
            return "#b20000"
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
        .attr("opacity", function(d){

          if(d.name == "John C. Young"){
            return 1
          }
          else{
            return 0.2
          }
        })
    })
    .on('stepout', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="John C. Young") {
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
          .attr("opacity", function(d){

          if(d.name == "John C. Young"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })


    d3.select("#fourteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Luther Jerome Williams") {
            return "#b20000"
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
        .attr("opacity", function(d){
          if(d.name == "Luther Jerome Williams"){
            return 1
          }
          else{
            return 0.2
          }
        })
    })
    .on('stepout', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Luther Jerome Williams") {
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
         .attr("opacity", function(d){

          if(d.name == "Luther Jerome Williams"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })

    d3.select("#fifteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){

          if(d.name == "Gary Lee Graham"){
            return 1
          }
          else{
            return 0.2
          }
        })
        .attr("fill", function(d){
          if (d.name=="Gary Lee Graham") {
            return "#b20000"
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
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Gary Lee Graham") {
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
         .attr("opacity", function(d){

          if(d.name == "Gary Lee Graham"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })

    d3.select("#sixteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){

          if(d.name == "Bernard Eugene Amos"){
            return 1
          }
          else{
            return 0.2
          }
        })
        .attr("fill", function(d){
          if (d.name=="Bernard Eugene Amos") {
            return "#b20000"
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
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Bernard Eugene Amos") {
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
         .attr("opacity", function(d){

          if(d.name == "Bernard Eugene Amos"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })


    d3.select("#seventeenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){

          if(d.name == "Richard James Wilkerson"){
            return 1
          }
          else{
            return 0.2
          }
        })
        .attr("fill", function(d){
          if (d.name=="Richard James Wilkerson") {
            return "#b20000"
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
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Richard James Wilkerson") {
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
         .attr("opacity", function(d){

          if(d.name == "Richard James Wilkerson"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })

    d3.select("#eighteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("opacity", function(d){

          if(d.name == "Carl Eugene Kelly"){
            return 1
          }
          else{
            return 0.2
          }
        })
        .attr("fill", function(d){
          if (d.name=="Carl Eugene Kelly") {
            return "#b20000"
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
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Carl Eugene Kelly") {
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
         .attr("opacity", function(d){

          if(d.name == "Carl Eugene Kelly"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })


    d3.select("#nineteenth-step")
    .on('stepin', function(){
      svg.selectAll(".persons")
        .transition()
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Carl Eugene Kelly") {
            return "#E2617F"
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
          .duration(300)
        .attr("fill", function(d){
          if (d.name=="Carl Eugene Kelly") {
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
         .attr("opacity", function(d){

          if(d.name == "Carl Eugene Kelly"){
            return 0.2
          }
          else{
            return 0.2
          }
        })
      })


}



})()
