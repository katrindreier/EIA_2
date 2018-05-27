namespace L06_Interfaces {
    window.addEventListener("load", init);
    let address: string = "https://aufgabe05.herokuapp.com";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");

        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            subject: inputs[4].value,
            gender: genderButton.checked
        };

        let convert: string = JSON.stringify(studi);
        console.log(convert);
        console.log(address);

        let serverRequest: XMLHttpRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=insert&data=" + convert, true);
        serverRequest.addEventListener("readystatechange", insertResponse);
        serverRequest.send();
        console.log("insert request");
    }
    
    function insertResponse(_event: ProgressEvent): void {
        let serverRequest: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        console.log("insert response");      
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            alert(serverRequest.response);
        }
    }


     function refresh(_event: Event): void {
        let serverRequest: XMLHttpRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=refresh", true);
        serverRequest.addEventListener("readystatechange", refreshResponse);
        serverRequest.send();
    }    
    
    function refreshResponse(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let serverRequest: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            output.value += serverRequest.response;
        }           
}

    function search(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let matrikel: string = inputs[7].value;
        
        let serverRequest: XMLHttpRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=search&searchFor=" + matrikel, true);
        serverRequest.addEventListener("readystatechange", searchResponse);
        serverRequest.send(); 
      }
        
     function searchResponse(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let serverRequest: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            output.value += serverRequest.response;
        }           

        
    }

  
    
    // zusätzliche Konsolenausgaben zur Demonstration
    console.group("Simple Array");
    console.log(studiSimpleArray);
    console.groupEnd();

    console.group("Associatives Array (Object)");
    console.log(studiHomoAssoc);
    console.groupEnd();

}