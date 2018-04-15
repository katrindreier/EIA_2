namespace Aufgabe2 {
 
    let numberPlayers: string;
    let numPlayers: number=0;
    let numberPairs: string;
    let numPairs: number=0;
    let cards: string[]=[];
    let listContent: string[]=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
            
    document.addEventListener("DOMContentLoaded", SelectPairs);
    document.addEventListener("DOMContentLoaded", SelectPlayers);
    document.addEventListener("DOMContentLoaded", pushCards);
    document.addEventListener("DOMContentLoaded", CreateCards);
    document.addEventListener("DOMContentLoaded", CreatePlayers);
 
    function SelectPairs () : number {
        
        while (numPairs < 5  || numPairs >= 15) {
            numberPairs = prompt("Wie viele Pärchen wollt ihr suchen?", "");
            numPairs= parseInt(numberPairs);  
             console.log(numPairs + " Paare")
                if (numPairs > 15) { 
                numberPairs = prompt("Das sind zu viele, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs= parseInt(numberPairs);  
                console.log(numPairs + " Paare")
                break
                }
                else if (numPairs < 5) { 
                numberPairs = prompt("Laaaangweilig, Wie viele Pärchen wollt ihr suchen?", "");
                numPairs= parseInt(numberPairs);  
                console.log(numPairs + " Paare")
                break
                }
                break        
               }
                console.log (numPairs);
                return numPairs;     
             } 
    
    
 
    
    function SelectPlayers () : number {
        
        while (numPlayers <= 1  || numPlayers >= 5) {
            numberPlayers = prompt("Wie viele seid ihr?", "");
            numPlayers= parseInt(numberPlayers);  
             console.log(numPlayers + " Spieler")
                if (numPlayers > 5) { 
                numberPlayers = prompt("Ihr dürft höchstens zu fünft sein!", "");
                numPlayers= parseInt(numberPlayers); 
                console.log(numPlayers + " Spieler")
                break
                }
                else if (numPlayers < 1) { 
                numberPlayers = prompt("Also einer muss mindestens mitspielen!", "");
                numPlayers= parseInt(numberPlayers);  
                console.log(numPlayers + " Spieler")
                break
                }
                break     
               }
                return numPlayers;     
             } 
    
  let numCards: number= SelectPairs ();
  let numPlayers: number= SelectPlayers ();
  
        
    function pushCards () : void {                                                   //hier werden die Karten ins Arrey gepusht
        let c : number = 0
         
        console.log(cards[c]) 
            while (c < numCards) {
                let content : string = listContent[c];
                cards.push (content);

                c++;
                console.log(cards[c]);     
                
            
                }
                
            
    }
    
   function CreateCards () : void {
       console.log("Los geht's " + numCards * 2 + " Karten werden generiert.");
       var node : any= document.getElementById("Cards");
       var childNodeHTML : string;
       let i: number=0;
       let n: number=cards.length;

            
             while ((numCards*2) > i) {
            
             
             console.log(n);
             let status: number = Math.floor(Math.random() * (2 + 1));
             let num: number = Math.floor(Math.random() * (n + 1));                              //Status der Karte
             let cardStatus: string;    
                 if (status == 0) {
                     cardStatus = "hidden"}
                   
                 else if (status == 1) {
                    cardStatus = "open";
                 }
            
                else if (status == 2) {
                cardStatus = "taken";
                }
            
               
             console.log("Karte" + " " + cardStatus + " " + num + " " + i );    
            
             
            childNodeHTML = "<div  class=" + cardStatus + " id='Card" + i + "'>";           //hier werden Div-Container für die Karten generiert
            childNodeHTML += "<p>";
            childNodeHTML += cards[num];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            var cardContent : string = cards[num];  
        
            console.log(cards);
    
            i++;
           }
       }
    
    
    function CreatePlayers () : void {
       console.log("Los geht's " + numPlayers + " Spieler werden generiert");
       var node : any= document.getElementById("Players");
       var childNodeHTML : string;
       let i: number=0;

            
             while (numPlayers > i) {
               
             console.log("Spieler" + " " + i );    
            
             
            childNodeHTML = "<div  class=Player" + i + "'>";           //hier werden Div-Container für die Spieler generiert
            childNodeHTML += "<p>";
            childNodeHTML += "Spieler";     
            childNodeHTML += i;
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;

        
            console.log(cards);
    
            i++;
           }
       }
            
        
    }
        
  

    
    
    




    
    
