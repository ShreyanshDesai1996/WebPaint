var width=window.innerWidth;
var height=window.innerHeight;
var colr="black";
var menu = document.querySelector("#cpick");
var menuState = 0;
var active = "cpick--active";



$(function() {
    //generate();
    //clear();
    logNumber();
});

function gen2()
{
		//alert("generating grid");
		var value = 100;
		var numrows=(height/20)-2;
        var rowsize=100;
        var content = "";
        var num = 1;
		var blockw=width/100;
        for (var i = 1; i <= numrows; i++) {
            for (var j = 1; j <= rowsize; j++) {
                if (j === 1) {
                    content += "<div class='row' ><div class='grid' style=\"max-width:"+blockw+"\">" +num+ "</div>";
                } else if (j === rowsize) {
                    content += "<div class='grid' style=\"max-width:"+blockw+" \">" +num+ "</div></div>";
                } else {
                    content += "<div class='grid' style=\"max-width:"+blockw+"\">" +num + "</div>";
                }
                //num++;
            }
        }
		content+="<ul class=\"menu\"><li class=\"menu-item\" id=\"black\">Black </li><li class=\"menu-item\" id=\"pink\">Pink </li><li class=\"menu-item\" id=\"red\">Red </li> <li class=\"menu-item\" id=\"gold\">Gold </li><li class=\"menu-item\" id=\"green\">Green </li></ul>";
        $("#grids").html(content);
		
		//make sure the right click menu is hidden
            menu = document.querySelector('.menu');
			$(menu).fadeOut("slow");
            //menu.classList.add('off');
            
            //add the right click listener to the box
            let box = document.getElementById('grids');
            box.addEventListener('contextmenu', showmenu);
            
            //add a listener for leaving the menu and hiding it
            menu.addEventListener('mouseleave', hidemenu);
            
            //add the listeners for the menu items
            addMenuListeners();
			
			 function addMenuListeners(){
            document.getElementById('red').addEventListener('click', setColour);
            document.getElementById('gold').addEventListener('click', setColour);
            document.getElementById('green').addEventListener('click', setColour);
			document.getElementById('black').addEventListener('click', setColour);
			document.getElementById('pink').addEventListener('click', setColour);
        }
        
        function setColour(ev){
            hidemenu();
            let clr = ev.target.id;
			colr=clr;
			//alert(colr);
            //document.getElementById('grids').style.backgroundColor = clr;
        }
        
        function showmenu(ev){
            //stop the real right click menu
            ev.preventDefault(); 
            //show the custom menu
            console.log( ev.clientX, ev.clientY );
            menu.style.top = `${ev.clientY - 20}px`;
            menu.style.left = `${ev.clientX - 20}px`;
			$(menu).fadeIn("slow");
            //menu.classList.remove('off');
			
			
        }
        
        function hidemenu(ev){
            //menu.classList.add('off');
			
			$(menu).fadeOut("slow");
            menu.style.top = '-200%';
            menu.style.left = '-200%';
			
        }
}




//Event delegation
function logNumber() {
    $("#grids").on("click", ".grid", function() {
        var value = $(this).text();
		$(this).css("background-color", colr);
		$(this).css("color", colr);
        //alert("You click "  +value+" "+width+" "+height+" "+gid);
    });
	
	
	
}

function clear() {
    $("#clearButton").on("click", function() {
        $("#grids").html(" ");
    });
}