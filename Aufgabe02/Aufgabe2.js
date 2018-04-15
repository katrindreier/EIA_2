var Aufgabe2;
(function (Aufgabe2) {
    let numberPlayers;
    let numPlayers = 0;
    let numberPairs;
    let numPairs = 0;
    let cards = [];
    let listContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    document.addEventListener("DOMContentLoaded", SelectPairs);
    document.addEventListener("DOMContentLoaded", SelectPlayers);
    document.addEventListener("DOMContentLoaded", pushCards);
    document.addEventListener("DOMContentLoaded", CreateCards);
    function SelectPairs() {
        while (numPairs < 5 || numPairs >= 15) {
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
    function pushCards() {
        let c = 0;
        console.log(cards[c]);
        while (c < numCards) {
            let content = listContent[c];
            cards.push(content);
            c++;
            console.log(cards[c]);
        }
    }
    function CreateCards() {
        console.log("Los geht's " + numCards * 2 + " Karten werden generiert.");
        var node = document.getElementById("Cards");
        var childNodeHTML;
        let i = 0;
        let n = cards.length;
        while ((numCards * 2) > i) {
            console.log(n);
            let status = Math.floor(Math.random() * (2 + 1));
            let num = Math.floor(Math.random() * (n + 1)); //Status der Karte
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
            console.log("Rote Karte" + " " + cardStatus + " " + num + " " + i);
            childNodeHTML = "<div  class=" + cardStatus + " id='Card" + i + "'>"; //hier werden Div-Container für die Karten generiert
            childNodeHTML += "<p>";
            childNodeHTML += cards[num];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var cardContent = cards[num];
            console.log(cards);
            i++;
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map