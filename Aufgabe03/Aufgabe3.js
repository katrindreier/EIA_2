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
    document.addEventListener("click", playMemory);
    function SelectPairs() {
        while (numPairs < 5 || numPairs > 15) {
            numberPairs = prompt("Wie viele Pärchen wollt ihr suchen?", "");
            numPairs = parseInt(numberPairs);
            //  console.log(numPairs + " Paare")
            if (numPairs > 15) {
                numberPairs = prompt("Das sind zu viele, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs = parseInt(numberPairs);
                //    console.log(numPairs + " Paare")
                break;
            }
            else if (numPairs < 5) {
                numberPairs = prompt("Laaaangweilig, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs = parseInt(numberPairs);
                //   console.log(numPairs + " Paare")
                break;
            }
            break;
        }
        //   console.log(numPairs);
        return numPairs;
    }
    function SelectPlayers() {
        while (numPlayers <= 1 || numPlayers >= 5) {
            numberPlayers = prompt("Wie viele seid ihr?", "");
            numPlayers = parseInt(numberPlayers);
            //  console.log(numPlayers + " Spieler")
            if (numPlayers > 5) {
                numberPlayers = prompt("Ihr dürft höchstens zu fünft sein!", "");
                numPlayers = parseInt(numberPlayers);
                //  console.log(numPlayers + " Spieler")
                break;
            }
            else if (numPlayers < 1) {
                numberPlayers = prompt("Also einer muss mindestens mitspielen!", "");
                numPlayers = parseInt(numberPlayers);
                //  console.log(numPlayers + " Spieler")
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
        }
    }
    function createCards() {
        console.log("Los geht's " + numCards * 2 + " Karten werden generiert.");
        var node = document.getElementById("Cards");
        var childNodeHTML;
        let i = 0;
        let n = 0;
        while ((numCards * 2) > i) {
            n = cards.length;
            let num = Math.floor(Math.random() * n); //Status der Karte
            console.log("Karte" + " " + cards[num] + " " + i);
            childNodeHTML = "<div class=hidden" + " id='Card" + i + "'>"; //hier werden Div-Container für die Karten generiert
            childNodeHTML += "<p>";
            childNodeHTML += cards[num];
            // childNodeHTML += cards.splice(num, 1);
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            cards.splice(num, 1);
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
    let i = 0;
    var karte1;
    var karte2;
    var karte1Inhalt;
    var karte2Inhalt;
    let c = 0;
    function playMemory(karte) {
        var target = karte.target;
        if (target.classList.contains("hidden")) {
            i++;
            if (i == 1) {
                target.className = "open";
                karte1Inhalt = target.getElementsByTagName('p')[0].innerHTML;
                karte1 = target.id;
                console.log("Inhalt " + karte1Inhalt + "id " + karte1);
                i++;
                document.addEventListener("click", playMemory);
            }
            if (i == 3) {
                //   console.log ("target " + target); 
                target.className = "open";
                karte2 = target.id;
                karte2Inhalt = target.getElementsByTagName('p')[0].innerHTML;
                console.log("Inhalt " + karte2Inhalt + "id " + karte2);
                i++;
            }
        }
        setTimeout(() => {
            if ((karte1Inhalt == karte2Inhalt) && (i == 4)) {
                alert("Glückwunsch! Du hast ein Pärchen!!");
                document.getElementById(karte2).className = "taken";
                document.getElementById(karte1).className = "taken";
                i = 0;
                c++;
                karte1 = undefined;
                karte2 = undefined;
            }
            if ((karte1Inhalt != karte2Inhalt) && (i == 4)) {
                document.getElementById(karte1).className = "hidden";
                document.getElementById(karte2).className = "hidden";
                karte1 = undefined;
                karte2 = undefined;
                i = 0;
            }
            if (i > 4) {
                alert("Du darfst nur 2 Karten aufdecken!!");
                document.getElementById(karte1).className = "hidden";
                document.getElementById(karte2).className = "hidden";
                i = 0;
            }
            if (c == numCards) {
                alert("Juhu! Du hast alle Pärchen gefunden!");
                c = 0;
            }
        }, 1500);
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe3.js.map