// Custom JS
$(document).ready(function () {
  
  // RATIO & window size
  function windowRatio() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    if ((windowHeight < 768 ) && (windowWidth > 1024)) {
      $('.error-ratio').addClass('on');
      $('.container').hide();
    } else if ((windowHeight < 768 ) && (windowWidth > windowHeight)) {
      $('.error-ratio').addClass('on');
      $('.container').hide();
    } else {
      $('.error-ratio').removeClass('on');
      $('.container').show();
    }
    
    console.log(windowHeight);
    console.log(windowWidth);
  }
  
  windowRatio();
  
  $( window ).resize(function() {
    windowRatio();
  });
  
  // MODAL on click
  // open
  $('.btn-modal').click(function () {
    var buttonId = $(this).attr('id');
    var modalClass = null;
    
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
    
    $('.modal-container').removeClass("out").addClass("opened");
    $('body').addClass('modal-active');
  });
  
  // close
  $('.modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
    $('.modal').removeClass('opened-modal');
  });

  $('.modal').click(function () {
    event.stopPropagation();
  });
  
});