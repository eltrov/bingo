// jQuery function to read/get from data
// https://www.sitepoint.com/jquery-read-text-file/
// https://api.jquery.com/jQuery.get/

var bingoBackup = new Array;
$.get('bingo.txt', function(data) {
    // reads from file, splitting array entries on line breaks
    bingoBackup = data.split('\n');
    //console.log(bingo);
});

function main() {
    for (i = 0; i < 24; i++) {
        var id = (document.getElementById(i));

        var div = document.createElement("div");
        div.class = "cell"
        div.id = "d" + i;
        div.setAttribute("onclick", "clickMe(this)");

        id.appendChild(div);
    }
    makeCard();
}

function makeCard() {
    var bingo = [...bingoBackup];

    for (i = 0; i < 24; i++) {

        var rng = Math.floor(Math.random() * Math.floor(bingo.length));

        (document.getElementById("d" + i)).innerText = bingo[rng];

        bingo.splice(rng, 1);
    }
}

function clickMe(clicked) {
    if (!clicked.className) {
        clicked.className = "checked";
    } else {
        clicked.className = "";
    }
}