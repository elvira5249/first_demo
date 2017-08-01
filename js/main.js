
(function ($) {

  function initialization() {
    hideNavigation();

    configureCalbacks();
  }

  function configureCalbacks() {
    $('.profileBtnNext').click(function(event) {
      if (goToNextItem(event)) {
        showNavigation();
      }
    });

    $('.btnNext').click(function(event) {
      goToNextItem(event);
    });

    $('.btnBack').click(function() {
      goToPrevItem();
    });

    $('#profileButton').click(function(){
      hideNavigation();
    });
  }

  function hideNavigation() {
    $('#content').removeClass();
    $('#content').addClass("col-sm-12");
    $('#navigation').addClass('hidden');
  }

  function showNavigation() {
    $('#navigation').removeClass('hidden');
    $('#content').removeClass();
    $('#content').addClass("col-md-7 col-sm-6");
  }

  function goToNextItem(event) {
    const active = $('#navigation .active');

    if (!checkFormValidity($(event.target).parent('form'))) {
      return false;
    }

    active.next('li').removeClass('disabledLink');
    active.addClass('visited');
    active.next('li').find('a').trigger('click');

    return true;
  }

  function goToPrevItem() {
    $('#navigation .active').prev('li').find('a').trigger('click');
  }

  function checkFormValidity(form) {
    if (!form || form.length === 0) {
      return true;
    }

    // form.validate({ errorPlacement: (error, element) => {console.log(error)} });

    return form.valid();
  }

  initialization();
})(jQuery)
