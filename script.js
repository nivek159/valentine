// Created by Madhav

var is_visible = false ;

function check()
{

    var input = document.getElementById("password").value;   
    input=input.trim();
    document.getElementById("password").value=input;
    if(input.match("ATICUN"))
    {
    	alert("Felicidades, lo lograste!!");
        alert("REVISA TU TOMO IV DE HISTORIA UNIVERSAL, BUEN TRABAJO");
    }
}

