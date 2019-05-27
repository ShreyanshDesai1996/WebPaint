var width=window.innerWidth;
var height=window.innerHeight;

$(function() {
    generate();
    clear();
    logNumber();
});

function gen2()
{
		alert("generating grid");
		var value = 100;
		var numcols=(height/20)-1;
        var rowsize=100;
        var content = "";
        var num = 1;
		var blockw=width/100;
        for (var i = 1; i <= numcols; i++) {
            for (var j = 1; j <= rowsize; j++) {
                if (j === 1) {
                    content += "<div class='row' ><div class='grid' style=\"max-width:"+blockw+"\">" + num + "</div>";
                } else if (j === rowsize) {
                    content += "<div class='grid' style=\"max-width:"+blockw+"\">" + num + "</div></div>";
                } else {
                    content += "<div class='grid' style=\"max-width:"+blockw+"\">" + num + "</div>";
                }
                //num++;
            }
        }
        $("#grids").html(content);
}

function gen3()
{
	var elem = document.createElement('div');
	elem.attr("id","grid")
	document.body.appendChild(elem);
}

function generate() {
    $("#generateButton").on("click", function() {
        var value = parseInt($("#size").val());
        if (value > 20 || value < 1) {
            alert("Please select a number betweeen 1 and 20!");
            return;
        }
        var content = "";
        var num = 1;
        for (var i = 1; i <= value; i++) {
            for (var j = 1; j <= value; j++) {
                if (j === 1) {
                    content += "<div class='row'><div class='grid'>" + num + "</div>";
                } else if (j === value) {
                    content += "<div class='grid'>" + num + "</div></div>";
                } else {
                    content += "<div class='grid'>" + num + "</div>";
                }
                num++;
            }
        }
        $("#grids").html(content);
    });
}


//Event delegation
function logNumber() {
    $("#grids").on("click", ".grid", function() {
        var value = $(this).text();
		$(this).css("background-color", "black");
        //alert("You click "  +value+" "+width+" "+height+" "+gid);
    });
	
	$(".grid").mousedown( function() {
		var value = $(this).text();
		$(this).css("background-color", "black");
        //alert("You click "  +value+" "+width+" "+height+" "+gid);
	});
}

function clear() {
    $("#clearButton").on("click", function() {
        $("#grids").html(" ");
    });
}