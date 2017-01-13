/**
 * @desc Evento que abre o cierra el menu. Se ejecuta al
 * presionar click en el icono de menu de hamburguesa.
 * @param none - none
 * @return none - none
 */
$(document).ready(function() {
  $("#menu-btn").on("click", function(e) {
    e.preventDefault();
    var distance = $('#articles').css('left');
    if (distance == "auto" || distance == "0px") {
      openMenu();
    } else {
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