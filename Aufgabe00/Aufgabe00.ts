


    
function greet() : void {
    var name : string = prompt("Wer bist du?", "");
    if (name != null) {
        document.getElementById("inputname").innerHTML =
            "Ahh, hallo, du bist es " + name + " :) ";
    }
}
    
    

