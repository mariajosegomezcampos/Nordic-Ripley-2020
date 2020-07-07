 

// funcion scroll ancla 
 $('nav a').click(function(e){ //Creamos un evento click para el enlace			
   e.preventDefault();		//evitar el eventos del enlace normal
   let strAncla=$(this).attr('href'); //id del ancla - le agrego un atributo mediant attr
      $('body,html').stop(true,true).animate({				
         scrollTop: $(strAncla).offset().top
      },2000);
   
});



// codigo carla 

// s

//funcion libreria slick

   $('.section-slider').slick({
     arrows: false
   });
