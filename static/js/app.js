// from data.js
var tableData = data;

d3.select("h1").text("Hello World");


var table = d3.select("table");

var tbody = d3.select("tbody");


//append a table to webpage and adds rows
var row = tbody.append("tr");
//row.append("td").text(data[0].datetime);


data.forEach(function(item){
    var row = tbody.append("tr");
    row.append("td").text(item.datetime).style("text-align: center");
    row.append("td").text(item.city);
    row.append("td").text(item.state).style("text-align: center");
    row.append("td").text(item.country).style("text-align: center");
    row.append("td").text(item.shape).style("text-align: center");
    row.append("td").text(item.durationMinutes).style("text-align: center");
    row.append("td").text(item.comments);

});

var filterbtn = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

/*
inputField.on("change", function(){
    var newText = d3.event.target.value;
    console.log(newText);
});
*/

function handleClick(){
    d3.event.preventDefault();
    
    d3.select("tbody").selectAll("*").remove();
    var newText = inputField.property("value");
    var filteredData = data.filter(sighting => sighting.datetime === newText);
    d3.select("h1").style("background", "blue");
    
    filteredData.forEach(function(item){
        var row = tbody.append("tr");
        row.append("td").text(item.datetime).style("text-align: center");
        row.append("td").text(item.city);
        row.append("td").text(item.state).style("text-align: center");
        row.append("td").text(item.country).style("text-align: center");
        row.append("td").text(item.shape).style("text-align: center");
        row.append("td").text(item.durationMinutes).style("text-align: center");
        row.append("td").text(item.comments);

    });
};

filterbtn.on("click", handleClick);


// add a search feature to search through date/time
