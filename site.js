var current_name = "";
var beer_list = ["Coors Lite",
    "Coors Banquet",
    "Miller Lite", 
    "Miller High Life", 
    "Bud Light", 
    "Budweiser", 
    "Bud Light Platinum", 
    "Labatt Blue", 
    "Labatt Blue Light", 
    "Oberon", 
    "Two Hearted", 
    "Blue Moon", 
    "Blue Moon Light Sky", 
    "Guiness", 
    "Guiness Extra Stout", 
    "Guiness Baltimore Blonde", 
    "Milwauke Ice", 
    "Milwauke Light", 
    "Corona Extra", 
    "Corona Light", 
    "Montucky", 
    "Yuengling", 
    "Stroh\'s", 
    "Soft Parade", 
    "Bell\'s Quite Brite", 
    "Modelo", 
    "Modelo Negra", 
    "Michelob Ultra", 
    "Hamm\'s", 
    "Natural Light", 
    "Natural Ice", 
    "Bud Ice", 
    "Naturdays", 
    "Natty Daddy", 
    "Heinekin", 
    "Heinekin 0", 
    "Bitburger", 
    "Desperado", 
    "Voodoo Ranger Juice Force", 
    "Voodoo Ranger Imperial IPA", 
    "Fat Tire", 
    "Stella Artois", 
    "Skol", 
    "Aguila", 
    "Brahma", 
    "Lagunitas IPA", 
    "Sierra Nevada Hazy Little Thing", 
    "Bear Hug", 
    "All Day IPA", 
    "Busch", 
    "Busch Light", 
    "Busch Apple", 
    "Angry Orchard Apple", 
    "Einbecker Blood Orange", 
    "Allagash White", 
    "Sierra Nevada Pale Ale", 
    "Left Hand Milk Stout Nitro", 
    "Cigar City Brewing Jai Alai IPA", 
    "Victory Brewing Sour Monkey", 
    "Lawson\’s Sip of Sunshine IPA", 
    "Lagunitas Little Sumpin\’ Sumpin\’ Ale", 
    "Dogfish Head Seaquench Ale", 
    "New Belgium Voodoo Ranger Juicy Haze IPA", 
    "Lagunitas Hazy Wonder", 
    "Victory Golden Monkey", 
   "Kona Big Wave Golden Ale", 
    "Dogfish Head 90 Minute IPA", 
    "Mighty Squirrel Cloud Candy IPA", 
    "Beck\'s Pilsner", 
    "Lagunitas DayTime IPA", 
    "Local Light", 
    "Elysian Brewing Space Dust IPA", 
    "Zombie Dust", 
    "Rothaus Pils Tannenzaepfle", 
    "Lord Hobo Boomsauce Double IPA", 
    "Night Shift Santilli IPA", 
    "Hoegaarden White", 
    "Smirnoff Ice Original", 
    "Corona Hard Seltzer", 
    "White Claw", 
    "High Noon", 
    "Ranch Water", 
    "Bud Light Lime", 
    "Truly", 
    "Pabst Blue Ribbon Hard Coffee", 
    "Pabst Blue Ribbon", 
    "Samuel Adams Boston Lager", 
    "Pacifico Clara", 
    "Peroni Nastro Azzurro Pale Lager", 
    "Vizzy Hard Seltzer", 
    "Narragansett Lager", 
    "Michelob Ultra Pure Gold", 
    "Shiner Bock", 
    "Lawson\’s Sip of Sunshine IPA", 
    "Twisted Tea", 
    "Dogfish Head Seaquench Ale", 
    "Lagunitas Hazy Wonder", 
    "Dogfish Head 90 Minute IPA", 
    "Mighty Squirrel Cloud Candy IPA", 
    "Rolling Rock Extra Pale", 
    "Mike\’s Hard Lemonade", 
    "Shipyard Seasonal", 
    "Tecate", 
    "Pilsner Urquell Beer", 
    "Red Stripe", 
    "Night Shift Santilli IPA", 
    "Smirnoff Seltzer", 
    "PRESS Premium Hard Seltzer", 
    'Hoegaarden White',
    "Oskar Blues Dale\’s Pale Ale", 
    "Sixpoint Resin", 
    "Schöfferhofer Grapefruit Hefeweizen", 
    "Harpoon IPA", 
    "Golden Road Brewing Mango Cart", 
    "Amstel Light", 
    "Stone Delicious IPA", 
    'Corona Premier',
    "Dos Equis Lager", 
    "Yuengling Light Lager", 
    "Night Shift Nite Lite Craft Light Lager", 
    "LandShark Lager", 
    'Samuel Adams Sam \’76 Beer',
    "New Holland Dragon\’s Milk Bourbon Barrel Stout", 
    "Founders Breakfast Stout", 
    "Samuel Smith Organic Chocolate Stout", 
    "North Coast Old Rasputin Russian Imperial Stout", 
    "Goose Island Bourbon County Stout", 
    "Founders KBS", 
    "Samuel Smith Oatmeal Stout", 
    "Great Divide Yeti Imperial Stout", 
    "New Holland Dragon\’s Milk White", 
    "Murphy\’s Stout", 
    "Mast Landing Gunner\’s Daughter Milk Stout", 
    "Young\’s Double Chocolate Stout", 
    "Kentucky Bourbon Barrel Stout", 
    "Bell\’s Kalamazoo Stout", 
    "Guinness Over The Moon", 
    "Belching Beaver Peanut Butter Milk Stout", 
    "The Temptress Imperial Milk Stout", 
    "Dragon Stout", 
    "Deschutes Obsidian Stout", 
    "Boulevard Whiskey Barrel Stout", 
    "Bell\’s Special Double Cream Stout", 
    "Fremont Dark Star", 
    "Dogfish Head Beer For Breakfast Stout", 
    "Modern Times Black House Coffee Stout", 
    "Odell Lugene Chocolate Milk Stout", 
    "Kostritzer Schwarzbier Lager", 
    "Brooklyn Winter Lager", 
    "Jack\’s Abby Smoke & Dagger Dark Lager", 
    "Perrin Black Ale", 
    "Xingu Black", 
    "Schwarz Weather Black Lager", 
    "Jacks Abby Cascadian Schwartzbier", 
    "Mönchshof Schwarzbier", 
    "Innstadt Extra Schwarze Original", 
    "MateVeza Black Lager", 
    "Kcco Black Lager", 
    "Okanagan Spring Brewmasters Black Lager", 
    ];
var value_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function check_fields() {
    if (document.getElementById("ratings").value == "" || current_name == "" || document.getElementById("beers").value == "") {
        return true;
    }
    if (!beer_list.includes(document.getElementById("beers").value)) {
        return true;
    }
    if (!value_list.includes(document.getElementById("ratings").value)) {
        return true;
    }

    return false;
}

function add_beer(data) {
    beer_list.push(data.split(",")[1]);
}

//broken
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

function populate_list() {
    var list = document.getElementById("beer")

    beer_list.forEach(function(entry){
        var option = document.createElement('option');
        option.value = entry;
        list.appendChild(option);
     });
}


$(document).ready( function() {
    console.log("Ready!");

    //read_beers();
    populate_list();


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
            alert("Please fill out all fields with proper values first.");
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