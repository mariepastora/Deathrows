(function () {

  // Create the SVG

  var margin = { top: 20, right: 30, bottom: 50, left: 50 }

  var width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

    // You'll probably need to edit this one
  var svg = d3.select("#chart-words").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([10, 0])
    .html(function(d) {
      return d.year_rounded + ": " + d.year + " executions"
    })

  svg.call(tip)

  d3.queue()
    .defer(d3.csv, "words_counted.csv")
    .await(ready)

  // This is 'ready':
  // it receives an error (if there is one)
  // and datapoints, our newly-read-in data
  function ready(error, datapoints) {
    console.log("Data is", datapoints)

  datapoints.sort((a, b) => d3.ascending(a.count, b.count));

    // d3 code goes here
      // Creating scales
    var xPositionScale = d3.scaleLinear().range([0, width])
                .domain([0, d3.max(datapoints, function (d) {
                return d.count;
            })]);

    var yPositionScale = d3.scaleBand().rangeRound([height, 0]).padding(0.07)
                .domain(datapoints.map(function (d) {
                return d.word;
            }));



  var bars = svg.selectAll(".bar")

            .data(datapoints)
            .enter()
            .append("g")



    bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return yPositionScale(d.word);
            })
            .attr("height", yPositionScale.bandwidth())
            .attr("x", 0)
            .attr("width", function (d) {
                return xPositionScale(d.count);
            })
            .attr("fill", "#E9B230")
            .attr("opacity", 0.8)

       bars.append("text")
            .attr("class", "label")
            .attr("fill", "white")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return yPositionScale(d.word) + yPositionScale.bandwidth() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return xPositionScale(d.count) - 40;
            })
            .text(function (d) {
                return d.count;
            });

    // Always cut and paste the code for the axes, too!
        var yAxis = d3.axisLeft(yPositionScale);
    svg.append("g")
      .attr("class", "axis y-axis axisWhite")
      .call(yAxis);

    var xAxis = d3.axisBottom(xPositionScale)
    svg.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.selectAll(".x-axis").remove()


  }

})()