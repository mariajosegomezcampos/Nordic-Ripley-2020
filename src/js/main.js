$(".button-scroll").click(function() {
    let name = $(this).data("name")
    let box = "#" + name + "-box"
    $('html, body').animate({
    scrollTop: $(box).offset().top
    }, 2000);
  });
  
  $('.slider-flex').slick({});