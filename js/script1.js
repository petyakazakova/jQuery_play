$(document).ready(function() {
  //event listeners
    $('#example').on('click', function() {
      // console.log($(this));
      // $(this).addClass('highlightedBox');
      $(this).toggleClass('highlightedBox');
    });

  //event delegation
    //target a click on a button .switch inside the #example
    $('#example').on('click', 'button.switch', function() {
      console.log($(this));

      $(this).parent().toggleClass('highlighted');
    });


});
