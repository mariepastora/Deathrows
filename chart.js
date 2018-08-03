(function () {

  // Create the SVG

  var margin = { top: 20, right: 30, bottom: 50, left: 50 }

  var width = 620 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom

    // You'll probably need to edit this one
  var svg = d3.select("#chart-executions").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Creating scales
  var xPositionScale = d3.scaleBand().rangeRound([0, width]).padding(0.1)
    
  var yPositionScale = d3.scaleLinear().rangeRound([height, 0]);

  var innerHeight = height - margin.top + margin.bottom

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([10, 0])
    .html(function(d) {
      return d.name + ": " + d.year 
    })



  svg.call(tip)

  

  d3.queue()
    .defer(d3.csv, "year_breakdown.csv")
    .await(ready)


  // This is 'ready':
  // it receives an error (if there is one)
  // and datapoints, our newly-read-in data
  function ready(error, datapoints) {
    console.log("Data is", datapoints)
    // d3 code goes here

    xPositionScale.domain(datapoints.map(function(d) { return d.year_rounded; }));
    yPositionScale.domain([0, d3.max(datapoints, function(d) { return d.year; })]);

  svg.selectAll('.bar')
    .data(datapoints)
    .enter().append('rect')
    .attr('class',"bar")
    .attr('x', function(d){
      return xPositionScale(d.year_rounded)
    })
    .attr("y", innerHeight)
    .attr("height", 0)
    .attr("width", xPositionScale.bandwidth())
      .transition()
      .delay(1300)
      .duration(900)
    .attr('y', function(d){
      return yPositionScale(d.year)
    })
    .attr("height", function(d){ return height - yPositionScale(d.year)})
    .attr('fill', "#E9B230")
    .attr('opacity', 0.8);

    svg.selectAll('.bar')
    .on('mouseover', function (d) {
            var tooltipData = d

          console.log(d)
          d3.select(this)
          .style("opacity", 1)
          d3.select('#tooltip')
          .style("visibility", "visible")
          .style("top", d3.event.pageY + -5+ "px")
          .style("left", d3.event.pageX + -5 + "px")
          .html(function(d){
            return tooltipData.year_rounded + ": " +  tooltipData.year + " executions"
          })


        })
            .on('mouseout', function(d){
            d3.select(this)
            .style("opacity", 0.8)
            d3.select('#tooltip') 
            .style("visibility", "hidden")
            
          })
    

    // Always cut and paste the code for the axes, too!
        var yAxis = d3.axisLeft(yPositionScale)

    svg.append("g")
      .attr("class", "axis y-axis axisWhite")
          .transition()
        .delay(1300)
        .duration(1000)
      .call(yAxis)

    var xAxis = d3.axisBottom(xPositionScale)
    svg.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.selectAll(".x-axis").remove()


  }

})()