function displayInfo() {


	let word = document.getElementsByTagName('input')[0].value.toLowerCase();

		document.getElementById("info-person").innerHTML = "Click on an inmate.";



	var icon = "\uf183";
	var fontSize = 30;
	var iconSpace = 5;
	var legendSpace = 30;
	var legendX = 650;
	var legendY = 20;
	var legendTitle = "Ethnicity";

//	var colorScale = d3.scaleOrdinal()
//					.range([ "#3E99C9", "#EA3F3C", "#FFF07C", "#E88032", "#83F5A7", "#A799B7"]);

	var dataRating = ["White", "Black", "Hispanic", "Asian", "Native American", "Other"]
	var dataIcons = [[dataRating[0], icon], [dataRating[1], icon]];
	//var dataText = ["When you hover over the stars...", "...you can show additional information next to the chart...", "...In this tutorial I will explain...", "...how you can make this interactive pictogram chart...", "...and customize the colors and icons."];

	d3.queue()
   .defer(d3.csv, "order_race.csv")
   .await(ready)

   function ready(error, datapoints) {
   		console.log("Data is", datapoints)	

   		var datapoints_used = []

		console.log(word)

   		for (i = 0; i < 1478; i++){	
   			if (datapoints[i]['final_words_str_tokenized'].includes(" "+word+" ")){
   				console.log(datapoints[i])
   				datapoints_used.push(datapoints[i])
			}
		}

		console.log(datapoints_used)

   		var row = 0;


		var margin = { top: 20, right: 20, bottom: 20, left: 30 }

	  	var width = 510 - margin.left - margin.right,
	    height = (datapoints_used.length / 13 * (fontSize+15)) + margin.top + margin.bottom 

	  	d3.select("#search-final")
	    .select("svg").remove()

	    // You'll probably need to edit this one

	  	var svg = d3.select("#search-final").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

		var icons = svg.selectAll("g")
			.data(datapoints_used).enter()
			.append("g");

		function updateText(className, newText){
		$(className).html(newText);}

		var person = function (d){ if (d.victim_num == 1){return "person"} else{return "people"}}

		function plural(victims){
			if (victims==1){
				return victims + " person"
			}
			else {
				return victims + " people"
			}
		}

		icons.append("text")
		.on("click", function(d){ updateText("#info-person",  "<b>" + d.name + "</b>" + " was executed in " + "<b>" + d.State +"</b>" + " on " + "<b>" + d.date_execution + "</b>" + ". <br/> " + "<br/>" + " He was convicted for the killing of " + 
		   plural(d.victim_num) + " on "+ d.date_offense + ". <br/>" + "<br/>" + "Some of his last words were: " + d.final_words_cleaned.italics())})
		
		.attr("x", function(d, i){ return ((i%13 + 1) * (fontSize + 1 + iconSpace)) - fontSize;})
		.attr("y", function(d, i){ if(i%13 == 0){row++}; return row * (fontSize + 10);})
		.attr('font-family', 'FontAwesome')
		.attr('font-size', fontSize)
		.style("cursor", "pointer")
		.attr("fill", function(d){ 
			if (d.race_ == "White"){
            return "#A5A447"
          }
          else if (d.race_ == "Black"){
            return "#E9B230"
          }
          else if (d.race_ == "Asian"){
          	return "#e3d0be"
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
		.attr("opacity",0.6)
		.on("mouseover", function(d){
			d3.select(this)
			.style("opacity", 1)
		})
		.on("mouseout", function(d){
			d3.select(this)
			.style("opacity", 0.6)
		})


		var legend = svg.append('g')
		.attr('class', 'legend')
		.attr('transform', function(d, i) { return "translate(" + legendX + ", " + legendY + ")"; });

		legend.append("text")
		.attr("transform", "translate(0, 5)")
		.text(legendTitle);

		var legendItems = legend.selectAll("g")
		.data(dataIcons).enter()
			.append("g")
				.attr("class", "item")
				.attr("transform", function(d, i){ return "translate(0, " + (i*legendSpace + fontSize) + ")"; });

		legendItems.append("text")
		.attr('font-family', 'FontAwesome')
		.attr("fill", function(d){ return colorScale(d);})
		.text(function(d) { return icon; });

		legendItems.append("text")
		.attr("transform", function(d){ return "translate(" + legendSpace + ", 0)"; })
		.text(function(d) { return d[0]; });

}

}



