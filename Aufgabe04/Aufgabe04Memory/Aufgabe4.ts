namespace Aufgabe2 {
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    let select: NodeListOf<HTMLSelectElement> = document.getElementsByTagName("select");
    let Players: number;
    let numCards: number;
    let cards: string[] = [];
    var themeInt: string[];
    interface CardDeck {
                color: string;
                theme: string[]; 
                font: string;
                size: string;  
      }
    
    interface Player {
                name: string; 
                score: number;    
       }
    
 
    document.addEventListener('DOMContentLoaded', init);

 function init(_event: Event): void { 
     var node: any = document.getElementById("Settings");
        let childNodeHTML: string;
            childNodeHTML = "<p>";
            childNodeHTML += "Einstellungen";
            childNodeHTML += "</p>";                                                           
            childNodeHTML += " </div> ";
            childNodeHTML += "<input id='number' type='number' name='players' placeholder='Spielerzahl' min='1' max='5'/>";
            
            childNodeHTML += "<button type='button' id='playerNames'>";
            childNodeHTML += "Spielernamen eingeben";
            childNodeHTML += "</button>";
           
            childNodeHTML += "<input id='number' type='number' name='players' placeholder='Kartenzahl' min='4' max='8'/>";    
            childNodeHTML += "<select id='theme'>";
            childNodeHTML +=  "<option value='Professoren'>Profs</option>";
            childNodeHTML +=  "<option value='Tiere'>Tiere</option>";
            childNodeHTML +=  "<option value='Buchstaben'>Buchstaben</option>";
            childNodeHTML +=  "</select>";
            childNodeHTML +=  "<button type='button' id='play'>";
            childNodeHTML +=  "Spielen";
            childNodeHTML +=  "</button>";
        
     
            node.innerHTML += childNodeHTML; 
            let addPlayerNumber: HTMLButtonElement = <HTMLButtonElement>document.getElementById("playerNames");
            addPlayerNumber.addEventListener("click", addPlayer); 
            
             let playButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("play");
            playButton.addEventListener("click", settings);
    }

function addPlayer(): void {
    Players = 0;
    var node: any = document.getElementById("Settings");
     let childNodeHTML: string;
     Players = parseInt(inputs[0].value); 
     let i: number = 1; 
     while (i <= Players) {
                console.log ("Durchgang " + i)
                childNodeHTML +=  "<br>";
                childNodeHTML +=  "<input type='text' name='firstname' placeholder='Spieler";
                childNodeHTML +=  i
                childNodeHTML += "'/>";
                
                i++;
                }
    node.innerHTML += childNodeHTML;
     let addPlayerNumber: HTMLButtonElement = <HTMLButtonElement>document.getElementById("playerNames");
     addPlayerNumber.addEventListener("click", addPlayer);  
    let playButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("play");
    playButton.addEventListener("click", settings);
    } 
    
function settings(): void {
      
    numCards = parseInt(inputs[1].value); 
    console.log (numCards + " " + Players);

    if (numCards >= 1 && Players >= 1  && Players <= 5 && numCards <= 8) {
    
    let settings: HTMLDivElement = <HTMLDivElement>document.getElementById("Settings");
    settings.className = "hideSettings";
    themeInt = ["Hase", "Katze", "Hund", "Pferd", "Kuh", "Esel", "Schwein", "Gans"];  
   
        
      if (select[0].value == "Buchstaben") {
             themeInt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
              
      } 
     
      else if (select[0].value == "Professoren") {
             themeInt = ["Müller", "Frieß", "Schäfer-Schöntal", "Aichele", "Dell'Oro", "Reusch", "Friess", "Krach",  ];  
      } 
      
    
  /*     var cardsInterface: CardDeck;
       cardsInterface = {
            color: select[2].value,
            theme: themeInt,
            font: select[1].value,
            size: select[3].value,
        };*/
        
      
        
 
        
        
   // console.log(cardsInterface);
        
    pushCards();
    createCards();
    CreatePlayers();
    document.addEventListener("click", playMemory);
    }
    
    
    }


    function pushCards(): void {                         //hier werden die Karten ins Array gepusht
        let c: number = 0;
        let content: number = 0;


        while (c <= numCards - 1) {


          cards.push(themeInt[c]);
          cards.push(themeInt[c]);


            c++;
            
        }

         
    }

    function createCards(): void {
        console.log("Los geht's " + numCards * 2 + " Karten werden generiert.");
        var node: any = document.getElementById("Cards");
        var childNodeHTML: string;
        let i: number = 0;
        let n: number = 0;


        while ((numCards * 2) > i) {


            n = cards.length;


            let num: number = Math.floor(Math.random() * n);                              //Status der Karte


         //   console.log("Karte" + " " + cards[num] + " " + i);


            childNodeHTML = "<div class=hidden" + " id='Card" + i + "'>";           //hier werden Div-Container für die Karten generiert
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






    function CreatePlayers(): void {
        console.log("Los geht's " + Players + " Spieler werden generiert");
        var node: any = document.getElementById("Players");
        var childNodeHTML: string;
        let p: number = 0;
        let n: number = 2;


        while (Players > p) {

            console.log("Spieler" + " " + p);


            childNodeHTML = "<div  class=Player" + p + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += "Spieler " + [n] + " " + inputs[n].value;                          //Name der Spieler
            childNodeHTML += "</p>";                                                           //hier werden Div-Container für die Spieler generiert
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            n++;
            p++;
        }
    }

    let i: number = 0;
    var karte1: string;
    var karte2: string;
    var karte1Inhalt: string;
    var karte2Inhalt: string;
    let c: number = 0;

    function playMemory(karte: Event): void {


        var target: HTMLElement = <HTMLElement>karte.target;
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




}

