 
 //Creamos un evento click para el enlace
 $(".button-scroll").click(function() {
  //Creamos el string del enlace ancla
     let name = $(this).data("name")

    let box = "#" + name + "-box"
        //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
    $('html, body').animate({

    scrollTop: $(box).offset().top
    }, 2000);
 });



  //Creamos un evento click para el enlace
$('.btn-ancla').click(function(){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      let codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 2000);

});
  



   $('.section-slider-desktop').slick({
     arrows: false
   });
