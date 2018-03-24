/*
Aufgabe 00
Name: Katrin Dreier 
Matrikel: 257680
Datum: 23.03.18

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/


    
function greet() : void {
    var name : string = prompt("Wer bist du?", "");
    if (name != null) {
        document.getElementById("inputname").innerHTML =
            "Ahh, hallo, du bist es " + name + " :) ";
    }
}
    
    

