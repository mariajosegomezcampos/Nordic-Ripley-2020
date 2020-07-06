 

// funcion scroll ancla 
 $('nav a').click(function(e){ //Creamos un evento click para el enlace			
   e.preventDefault();		//evitar el eventos del enlace normal
   var strAncla=$(this).attr('href'); //id del ancla
      $('body,html').stop(true,true).animate({				
         scrollTop: $(strAncla).offset().top
      },2000);
   
});


//funcion libreria slick

   $('.section-slider-desktop').slick({
     arrows: false
   });
