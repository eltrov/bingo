function main() {

    for (i = 0; i < 24; i++) {
        var div = document.createElement("div");
        div.class = "cell"
        div.id = "d" + i;
        div.setAttribute("onclick", "clickMe(this)");

        var id = (document.getElementById(i));
        id.appendChild(div);
    }

    // when fetching data from something like a jQuery get() function
    // the data MUST be used within the function
    // the data ceases to exist outside of the get() function
    $.get('bingo.txt', function(data) {

        // reads from file, splitting array entries on line breaks
        var bingo = data.split('\n');

        for (i = 0; i < 24; i++) {
            var rng = Math.floor(Math.random() * Math.floor(bingo.length));
            (document.getElementById("d" + i)).innerText = bingo[rng];
            bingo.splice(rng, 1);
        }

        (document.getElementById("25")).innerText = "FREE SPACE";
    });

}

function clickMe(clicked) {
    if (!clicked.className) {
        clicked.className = "checked";
    } else {
        clicked.className = "";
    }
}