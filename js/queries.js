  const menu = document.querySelector(".menu");
  var boton = document.querySelector("#burger-menu");


  //   DOMContentLoaded

  //  Media Queries
  const ipad = window.matchMedia('Screen and (max-width:767px)');
  ipad.addListener(validation);

  //   Con esta linea de codigo lo que hago es decirle a la funcion validation que Valide apenas
  //   se recargue la pagina.
  document.addEventListener("DOMContentLoaded", () => validation(ipad));



  function validation(event) {


      if (event.matches == true) {

          // Este escuchador de eventos solo se activara cuando se cumpla la condicion de el matchMedia sea true y es true cuando la pantalla tiene una ancho menos de 767px.
          console.log(event.matches)
          boton.addEventListener("click", activar);

      } else {

          // Por el contrario este se desactivara o se removera cuando la pantalla sea mayor a 767px
          console.log(event.matches)
          boton.removeEventListener("click", activar);
      }


  }


  //  Media Queries




  function activar() {

      if (menu.classList.contains("is-active")) {

          menu.classList.remove("is-active");

      } else {
          menu.classList.add("is-active");

      }




  }