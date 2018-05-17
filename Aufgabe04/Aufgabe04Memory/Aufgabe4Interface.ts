namespace Aufgabe4 {
    
    
    
   export interface CardDeck {
                color: string;
                theme: string[]; 
                font: string;
                size: string;  
      }
    
    export interface Player {
                name: string; 
                score: number;    
       }

    export var cardsInterface: CardDeck;
    
    export let cardsDeckTiere: CardDeck = {
            color: "green",
            theme: ["Hase", "Katze", "Hund", "Pferd", "Kuh", "Esel", "Schwein", "Gans"],
            font: "times new roman",
            size: "3",
        };
    
   
    export let cardsDeckBuchstaben: CardDeck = {
            color: "red",
            theme: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"],
            font: "arial",
            size: "3",
        };
    
    export let cardsDeckProfessoren: CardDeck = {
            color: "blue",
            theme: ["Müller", "Frieß", "Schäfer-Schöntal", "Aichele", "Dell'Oro", "Reusch", "Friess", "Krach"],
            font: "arial",
            size: "1",
        };
              
   
     
    
    
    }