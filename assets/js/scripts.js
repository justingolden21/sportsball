$(document).ready(function() {
  $(window).scroll();

  $(".fa-envelope").hover(
   function(){ 
    $(this).addClass("fa-envelope-open"); 
    $(this).removeClass("fa-envelope"); 
   },
   function(){ 
    $(this).removeClass("fa-envelope-open"); 
    $(this).addClass("fa-envelope");
   }
  );

  $('#menuButton').on('click', function() {
    if($('#menuIcon').hasClass('fa-bars') ) {
      $('#menuIcon').addClass('fa-times');
      $('#menuIcon').removeClass('fa-bars');
    } else {
      $('#menuIcon').addClass('fa-bars');
      $('#menuIcon').removeClass('fa-times');
    }
  });

  //TODO: clicking away and closing menu doesn't move arrow back up
  $('.dropdown').on('click', function() {
    console.log($(this).find('.fa-caret-down').css('transform') );
    if($(this).find('.fa-caret-down').css('transform').indexOf('matrix') == -1 ) {
      $(this).find('.fa-caret-down').css('transform', 'rotate(180deg)');      
    } else {
      $(this).find('.fa-caret-down').css('transform', '');
    }


  });  



})

$(window).scroll(function() {
  //slide animation from w3 schools
  $(".slideanim").each(function(){
    let pos = $(this).offset().top;

    let winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });

  //make nav item active when scrolled to
  //https://jsfiddle.net/cse_tushar/Dxtyu/141/
  let scrollPos = $(document).scrollTop();
  $('.page-scroll').each(function(idx) {
    let currLink = $(this);
    let refElement = $('#' + currLink.attr('href').split('#')[1] );
    //check for refElement.position() before checking top attribute so we don't check a param of undefined
    if (refElement.position() && refElement.position().top <= scrollPos +100 && refElement.position().top + refElement.height() +100 > scrollPos) {
        $('.page-scroll').removeClass('active');
        currLink.addClass('active');
    }
    else{
        currLink.removeClass('active');
    }
  });
    

});
