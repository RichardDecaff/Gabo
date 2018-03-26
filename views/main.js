

function vistaMain() {
  $('#app').load('vistaMain.html');
  $('#titulo').text('CRM28');
  $('#botonMenu').attr('style','');
  $('#botonRegresar').attr('style', 'visibility: hidden;');
  $('.uk-navbar-container').attr('style', 'background: #f8f8f8;');
  $('#titulo').removeClass('uk-light');
  //TODO variable global en EJS para titulo main
}

function vistaAux(titulo, vista) {
  //ocultar menu
  UIkit.offcanvas('#offcanvas').hide();

  $('#app').load(vista + '.html');
  $('#titulo').text(titulo);
  $('#botonRegresar').attr('style','');
  $('#botonMenu').attr('style', 'visibility: hidden;');
  $('.uk-navbar-container').attr('style', 'background: #1e87f0;');
  $('#titulo').addClass('uk-light');
}
