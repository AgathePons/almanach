// Custom JS
$(document).ready(function () {
  
  // RATIO & window size
  function windowRatio() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    if ((windowHeight < 768 ) && (windowWidth > 1024)) {
      $('.error-ratio').addClass('on');
      $('.container').addClass('hidden');
      $('.modal-container').addClass('hidden');
    } else if ((windowHeight < 768 ) && (windowWidth > windowHeight)) {
      $('.error-ratio').addClass('on');
      $('.container').addClass('hidden');
      $('.modal-container').addClass('hidden');
    } else {
      $('.error-ratio').removeClass('on');
      $('.container').removeClass('hidden');
      $('.modal-container').removeClass('hidden');
    }
    
    //console.log(windowHeight);
    //console.log(windowWidth);
  }
  
  windowRatio();
  
  $( window ).resize(function() {
    windowRatio();
  });
  
  // MODAL on click
  // open
  $('.btn-modal').click(function () {
    var buttonId = $(this).attr('id');
    
    $('.modal').each(function() {
      var getClass = $(this).attr('class');
      var modalSpecificClass = $.grep(getClass.split(" "), function(v, i){
        return v.indexOf('modal-') === 0;
      }).join();
      
      //console.log('les classes : ' + getClass);
      //console.log('La class : ' + modalSpecificClass);
      
      if (modalSpecificClass == buttonId) {
        $(this).addClass('opened-modal');
      }
    });
    
    //console.log('ID btn cliqué : ' + buttonId);
    
    $('.modal-container').removeClass('out').addClass('opened');
    $('body').addClass('modal-active');
  });
  
  // close
  $('.modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
    $('.container').css('height', '100vh');
    $('.modal').removeClass('opened-modal');
  });

  $('.modal').click(function () {
    event.stopPropagation();
  });
  
  $('.btn-close').click(function () {
    //console.log('clic');
    $('.modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.container').css('height', '100vh');
    $('.modal').removeClass('opened-modal');
  });
  
  $('.btn-valider').click(function () {
    console.log('clic');
    $('.modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.container').css('height', '100vh');
    $('.modal').removeClass('opened-modal');
  });

  
});