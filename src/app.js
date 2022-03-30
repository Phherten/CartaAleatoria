/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("boton").onclick = function() {
  var paloHtml = document.getElementById("palo");
  var invertidoHtml = document.getElementById("invertido");
  var numero = Math.floor(Math.random() * (14 - 1) + 1);
  var palo = Math.floor(Math.random() * (5 - 1) + 1);
  var numeroHtml = document.getElementById("numero");
  var carta = document.getElementById("carta");

  carta.className = "carta mt-5";

  switch (numero) {
    case 1:
      numeroHtml.innerHTML = "1";
      break;
    case 2:
      numeroHtml.innerHTML = "2";
      break;
    case 3:
      numeroHtml.innerHTML = "3";
      break;
    case 4:
      numeroHtml.innerHTML = "4";
      break;
    case 5:
      numeroHtml.innerHTML = "5";
      break;
    case 6:
      numeroHtml.innerHTML = "6";
      break;
    case 7:
      numeroHtml.innerHTML = "7";
      break;
    case 8:
      numeroHtml.innerHTML = "8";
      break;
    case 9:
      numeroHtml.innerHTML = "9";
      break;
    case 10:
      numeroHtml.innerHTML = "10";
      break;
    case 11:
      numeroHtml.innerHTML = "J";
      break;
    case 12:
      numeroHtml.innerHTML = "Q";
      break;
    case 13:
      numeroHtml.innerHTML = "K";
      break;
    default:
      break;
  }

  switch (palo) {
    case 1:
      paloHtml.innerHTML = "♦";
      invertidoHtml.innerHTML = "♦";
      paloHtml.className = "normal rojo";
      invertidoHtml.className = "invertido rojo";
      console.log("♦");
      break;
    case 2:
      paloHtml.innerHTML = "♥";
      invertidoHtml.innerHTML = "♥";
      paloHtml.className = "normal rojo";
      invertidoHtml.className = "invertido rojo";
      console.log("♥");
      break;
    case 3:
      paloHtml.innerHTML = "♠";
      invertidoHtml.innerHTML = "♠";
      paloHtml.className = "normal negro";
      invertidoHtml.className = "invertido negro";
      console.log("♠");
      break;
    case 4:
      paloHtml.innerHTML = "♣";
      invertidoHtml.innerHTML = "♣";
      paloHtml.className = "normal negro";
      invertidoHtml.className = "invertido negro";
      console.log("♣");
      break;
    default:
      break;
  }
};
