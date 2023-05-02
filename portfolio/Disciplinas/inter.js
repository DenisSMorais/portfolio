function primeiro() {
  var texto = document.getElementById("texto-escondido");
  if (texto.style.display === "none") {
    texto.style.display = "block";
    document.getElementsByTagName("button")[0].innerHTML = "-";
  } else {
    texto.style.display = "none";
    document.getElementsByTagName("button")[0].innerHTML = "+";
  }
}

function segundo() {
    var texto = document.getElementById("texto-escondido-2");
    if (texto.style.display === "none") {
      texto.style.display = "block";
      document.getElementsByTagName("button")[0].innerHTML = "-";
    } else {
      texto.style.display = "none";
      document.getElementsByTagName("button")[0].innerHTML = "+";
    }
  }

  function terceiro() {
    var texto = document.getElementById("texto-escondido-3");
    if (texto.style.display === "none") {
      texto.style.display = "block";
      document.getElementsByTagName("button")[0].innerHTML = "-";
    } else {
      texto.style.display = "none";
      document.getElementsByTagName("button")[0].innerHTML = "+";
    }
  }

  function quarto() {
    var texto = document.getElementById("texto-escondido-4");
    if (texto.style.display === "none") {
      texto.style.display = "block";
      document.getElementsByTagName("button")[0].innerHTML = "-";
    } else {
      texto.style.display = "none";
      document.getElementsByTagName("button")[0].innerHTML = "+";
    }
  }
