var Aufgabe2;
(function (Aufgabe2) {
    let numberPlayers;
    let numPlayers = 0;
    let numberPairs;
    let numPairs = 0;
    let cards = [];
    let listContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
    document.addEventListener("DOMContentLoaded", SelectPairs);
    document.addEventListener("DOMContentLoaded", SelectPlayers);
    document.addEventListener("DOMContentLoaded", pushCards);
    document.addEventListener("DOMContentLoaded", createCards);
    document.addEventListener("DOMContentLoaded", CreatePlayers);
    function SelectPairs() {
        while (numPairs < 5 || numPairs > 15) {
            numberPairs = prompt("Wie viele Pärchen wollt ihr suchen?", "");
            numPairs = parseInt(numberPairs);
            console.log(numPairs + " Paare");
            if (numPairs > 15) {
                numberPairs = prompt("Das sind zu viele, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs = parseInt(numberPairs);
                console.log(numPairs + " Paare");
                break;
            }
            else if (numPairs < 5) {
                numberPairs = prompt("Laaaangweilig, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs = parseInt(numberPairs);
                console.log(numPairs + " Paare");
                break;
            }
            break;
        }
        console.log(numPairs);
        return numPairs;
    }
    function SelectPlayers() {
        while (numPlayers <= 1 || numPlayers >= 5) {
            numberPlayers = prompt("Wie viele seid ihr?", "");
            numPlayers = parseInt(numberPlayers);
            console.log(numPlayers + " Spieler");
            if (numPlayers > 5) {
                numberPlayers = prompt("Ihr dürft höchstens zu fünft sein!", "");
                numPlayers = parseInt(numberPlayers);
                console.log(numPlayers + " Spieler");
                break;
            }
            else if (numPlayers < 1) {
                numberPlayers = prompt("Also einer muss mindestens mitspielen!", "");
                numPlayers = parseInt(numberPlayers);
                console.log(numPlayers + " Spieler");
                break;
            }
            break;
        }
        return numPlayers;
    }
    let numCards = SelectPairs();
    let Players = SelectPlayers();
    function pushCards() {
        let c = 0;
        let content = 0;
        while (c <= numCards - 1) {
            cards.push(listContent[c]);
            cards.push(listContent[c]);
            c++;
            console.log(cards);
        }
    }
    function createCards() {
        console.log("Los geht's " + numCards * 2 + " Karten werden generiert.");
        var node = document.getElementById("Cards");
        var childNodeHTML;
        let i = 0;
        let n = 0;
        while ((numCards * 2) >= i) {
            //alert();
            //console.log(n);
            n = cards.length - 1;
            let status = Math.floor(Math.random() * (2 + 1));
            let num = Math.floor(Math.random() * n); //Status der Karte
            let cardStatus;
            if (status == 0) {
                cardStatus = "hidden";
            }
            else if (status == 1) {
                cardStatus = "open";
            }
            else if (status == 2) {
                cardStatus = "taken";
            }
            console.log("Karte" + " " + cardStatus + " " + num + " " + i);
            childNodeHTML = "<div  class=" + cardStatus + " id='Card" + i + "'>"; //hier werden Div-Container für die Karten generiert
            childNodeHTML += "<p>";
            childNodeHTML += cards.splice(num, 1);
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("länge " + cards.length);
            i++;
        }
    }
    function CreatePlayers() {
        console.log("Los geht's " + Players + " Spieler werden generiert");
        var node = document.getElementById("Players");
        var childNodeHTML;
        let p = 0;
        while (Players > p) {
            console.log("Spieler" + " " + p);
            childNodeHTML = "<div  class=Player" + p + "'>"; //hier werden Div-Container für die Spieler generiert
            childNodeHTML += "<p>";
            childNodeHTML += "Spieler";
            childNodeHTML += p;
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            p++;
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map