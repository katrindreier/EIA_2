var L06_Interfaces;
(function (L06_Interfaces) {
    window.addEventListener("load", init);
    let address = "https://aufgabe05.herokuapp.com";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            subject: inputs[4].value,
            gender: genderButton.checked
        };
        let convert = JSON.stringify(studi);
        console.log(convert);
        console.log(address);
        let serverRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=insert&data=" + convert, true);
        serverRequest.addEventListener("readystatechange", insertResponse);
        serverRequest.send();
        console.log("insert request");
    }
    function insertResponse(_event) {
        let serverRequest = _event.target;
        console.log("insert response");
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            alert(serverRequest.response);
        }
    }
    function refresh(_event) {
        let serverRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=refresh", true);
        serverRequest.addEventListener("readystatechange", refreshResponse);
        serverRequest.send();
    }
    function refreshResponse(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let serverRequest = _event.target;
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            output.value += serverRequest.response;
        }
    }
    function search(_event) {
        let inputs = document.getElementsByTagName("input");
        let matrikel = inputs[7].value;
        let serverRequest = new XMLHttpRequest();
        serverRequest.open("GET", address + "?command=search&searchFor=" + matrikel, true);
        serverRequest.addEventListener("readystatechange", searchResponse);
        serverRequest.send();
    }
    function searchResponse(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let serverRequest = _event.target;
        if (serverRequest.readyState == XMLHttpRequest.DONE) {
            output.value += serverRequest.response;
        }
    }
    // zusätzliche Konsolenausgaben zur Demonstration
    console.group("Simple Array");
    console.log(L06_Interfaces.studiSimpleArray);
    console.groupEnd();
    console.group("Associatives Array (Object)");
    console.log(L06_Interfaces.studiHomoAssoc);
    console.groupEnd();
})(L06_Interfaces || (L06_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map