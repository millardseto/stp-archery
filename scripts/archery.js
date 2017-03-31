$(function() {

  /* load home page - since user hasnt clicked anything yet */
  $("#main").load("main.html", function(response, status) {
    if (status != "success") {
      $("#main").text("Failed to load page.");
    }

    $('.flexslider').flexslider();

    /* now that the partial page has loaded, wireup links on the partial page */
    $('nav a').on('click', loadPage);
  });


  /* load html fragment onto index page */
  function loadPage(){
    event.preventDefault(); // for anchor tag, don't navigate

    /* get the filename from the anchor tag */
    var file = this.href;

    /* load the html fragment into main div */
    $("#main").load(file, function(response, status){
      // status='fail'; for verifying failure message
      if (status == "success"){
        $('.flexslider').flexslider();
      } else {
        $("#main").text("Failed to load page.");
      }
    });

  } // end loadPage




});
