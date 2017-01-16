$(document).ready(function() {
  /**
   * @desc Evento que abre o cierra el menu. Se ejecuta al
   * hacer click en el icono de menu de hamburguesa.
   * @param none - none
   * @return none - none
   */
  $(".show-menu").on("click", function(e) {
    e.preventDefault();
    var distance = $('#articles').css('left');
    if (distance == "auto" || distance == "0px") {
      openMenu();
    } else {
      closeMenu();
    }
  });
  /**
   * @desc Evento que cierra el menu. Se ejecuta al
   * hacer click en cualquier parte del contenido
   * cuando el menu está abierto.
   * @param none - none
   * @return none - none
   */
  $(".hide-menu").on("click", function(e) {
    e.preventDefault();
    var distance = $('#articles').css('left');
    if (distance != "auto" || distance != "0px") {
      closeMenu();
    }
  });
  /**
   * @desc Eliminia del elemento "#articles" la clase 
   * "zoomInLeft" que cierra el menu y agrega la clase
   * "zoomOutRight" que abre el menu.
   * @param none - none
   * @return none - none
   */
  function openMenu() {
    $("#articles").removeClass("zoomInLeft");
    $("#articles").addClass("zoomOutRight");
  }
  /**
   * @desc Eliminia del elemento "#articles" la clase 
   * "zoomOutRight" que abre el menu y agrega la clase
   * "zoomInLeft" que cierra el menu.
   * @param none - none
   * @return none - none
   */
  function closeMenu() {
    $("#articles").removeClass("zoomOutRight");
    $("#articles").addClass("zoomInLeft");
  }
});