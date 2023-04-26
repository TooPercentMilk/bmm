var current_name = ""; 
var beer_list;

function check_fields() {
    return (document.getElementById("ratings").value == "" || current_name == "" || document.getElementById("beers").value == "");
}

function add_beer(data) {

}

function read_beers() {
    var fs = require('fs');
    var input = fs.createReadStream('Ratings.csv');
    
    var remaining = '';

    input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
        var line = remaining.substring(0, index);
        remaining = remaining.substring(index + 1);
        add_beer(line);
        index = remaining.indexOf('\n');
        }
    });

    input.on('end', function() {
        if (remaining.length > 0) {
        func(remaining);
        }
    });
}


$(document).ready( function() {
    console.log("Ready!");

    document.getElementById('name_field').addEventListener('keydown', function(e) {
        if (e.code == 'Enter') {
            current_name = document.getElementById("name_field").value;
            document.getElementById("name_field").value = "";
            document.getElementById("name_prompt").innerHTML = "<span>Logged in as <b>" + current_name + "</b></span><br><span>Change name?</span>";
            document.getElementById("name_prompt").style.display = 'block';
        }
    })

    document.getElementById('enter').addEventListener('click', function() {
        if (check_fields()) {
            alert("Please fill out all fields first.");
        }
        else {
            document.getElementById("rate_state").innerHTML = current_name + " rated " + document.getElementById("beers").value + 
                                                        " a " + document.getElementById("ratings").value;
            $("#rate_state").css("display", "initial");
            setTimeout(function () {
                $("#rate_state").fadeOut(1500);} , 800);

            document.getElementById("ratings").value = "";
            // document.getElementById("beers").value = "";
        }
    })

});