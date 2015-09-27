/**
 * Created by antonabramov on 17/09/15.
 */
$(document).ready(function () {
  $("#slides").slidesjs({
    effect: {
      fade: {
        speed: 300,
        // [number] Speed in milliseconds of the fade animation.
        crossfade: true
        // [boolean] Cross-fade the transition.
      }
    },
    navigation: {
      effect: "fade"
    },
    width: 940,
    height: 500,
    pagination: {
      active: false
    }

  });

  //Enable thumbnail helper and set custom options
  $(".fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });

  echo.init({
    offset: 100,
    throttle: 250,
    unload: true,
    callback: function (element, op) {
      console.log(element, 'has been', op + 'ed')
    }
  });

  $('#contacts').on('submit', function (e) {
    e.preventDefault();
    var form = $('#contacts')
    var data = form.serialize();
    $.ajax({
      type: 'POST',
      url: '/contacts/send',
      data: data
    }).done(function (res) {
      if (res === 'success') {
        form.fadeOut(function () {
          form.html('Meaw... Thanks for your quesiton. \n We will answer today! ')
          form.fadeIn()
        });

      } else {
        form.prepend('Opps something wend wrong');
      }
    })

  })

});