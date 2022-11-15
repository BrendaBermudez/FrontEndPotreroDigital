function modoOscuro() {
 // cambia el background-color
  document.body.style.backgroundColor= "#626262";
  document.getElementById("header").style.backgroundColor= "rgb(44 44 44)";
  document.getElementById("nav").style.backgroundColor= "white";
  document.getElementById("main").style.backgroundColor= "rgb(46 46 46)";
  document.getElementById("footer").style.backgroundColor= "rgb(22 22 22 / 95%)";

  // cambia el color

  document.getElementById("footer").style.color= "white";
  document.getElementById("main").style.color= "white";
  document.getElementById("titulo_header").style.color= "white";


}
function copy(){
  alert("Esta web fue realizada por Brenda Bermudez durante el curso de FRONT END - Potrero Digital - Contactame a: bermudez.brenda@hotmail.com");
}