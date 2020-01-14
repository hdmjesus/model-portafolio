  const menu = document.querySelector(".menu");
  var boton = document.querySelector("#burger-menu");




  //  Media Queries
  const ipad = window.matchMedia("screen and (max-width:767px");

  ipad.addListener(validation);

  function validation(event) {

      if (event.matches) {

          // Este escuchador de eventos solo se activara cuando se cumpla la condicion de el matchMedia sea true y es true cuando la pantalla tiene una ancho menos de 767px.

          boton.addEventListener("click", activar);
      } else {

          // Por el contrario este se desactivara o se removera cuando la pantalla sea mayor a 767px

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