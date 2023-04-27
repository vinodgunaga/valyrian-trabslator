let btnTranslate = document.querySelector("#btn-translate");

let txtInput = document.querySelector("#txt-input");

let outputDiv = document.querySelector("#translate-output");

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function generateURL(inputText) {
    return serverURL + "?" + "text=" + inputText;
}

function outputText(json) {
    outputDiv.innerText = json.contents.translated;
}

function errorHandler(errorMessage) {
    console.log("server is down " + errorMessage);
}

function clickHandler() {
    fetch(generateURL(txtInput.value))
        .then(response => response.json())
        .then(json => outputText(json))
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);