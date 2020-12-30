  var btnTranslator = document.querySelector("#btn-translator");
  var textInput = document.querySelector("#txt-input");
  var outPutDiv = document.querySelector("#output");

  var serverURl = "https://api.funtranslations.com/translate/brooklyn.json"


  function getTranslatorURL(text) {
      return serverURl + "?" + "text=" + text;
  }

  function errorHandler(error) {
      console.log("error occured", error);
      alert("something went wrong with server, try again after some time!");
  }

  function clickEventHandler() {
      //taking input from user
      var inputText = textInput.value;

      //processing the input by calling the server to fetch data and storing the output transalated text in transalatedText variable.
      fetch(getTranslatorURL(inputText))
          .then(response => response.json())
          .then(json => {
              var transalatedText = json.contents.translated;
              outPutDiv.innerText = transalatedText; //output response
          })
          .catch(errorHandler)
  };

  btnTranslator.addEventListener("click", clickEventHandler);