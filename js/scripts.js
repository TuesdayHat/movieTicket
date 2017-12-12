// BACK END LOGIC
// var discountPrice = 9.00;
// var adultPrice = 12.00;

function Movie(title) {
  this.title = title;
  this.showtime = [900, 1200, 1750];
  this.price = 12.00;
}; // End of 'Movie' function.

Movie.prototype.setDiscount = function(age){
  if (age < 18 || age >= 65){
    this.price = this.price - 4;
  } else {
    this.price = this.price;
  };
};

Movie.prototype.matineePrice = function() {

}


// FRONT END LOGIC
$(document).ready(function() {
  $("#userAge").submit(function(event) {
    event.preventDefault();
    var age = $("#ageInput").val();
    $(".displayInitial").hide();
    $(".hideInitial").show();

    // Create movie objects.
    var thor = new Movie("Thor", age);
    $("ul.movieList").append('<li><span class="movie-title" id="thor">' + thor.title + '</span></li>');
    var starWars = new Movie("Star Wars", age);
    $("ul.movieList").append('<li><span class="movie-title" id="starWars">' + starWars.title + '</span></li>');
    var justiceLeague = new Movie("Justice League", age);
    $("ul.movieList").append('<li><span class="movie-title" id="justiceLeague">' + justiceLeague.title + '</span></li>');

    thor.setDiscount(age);
    starWars.setDiscount(age);
    justiceLeague.setDiscount(age);
    var movies = [thor, starWars, justiceLeague];

    $("#thor").last().click(function() {
      $(".click-show").show();
      $("#price").empty();
      $("#movie-display-title").text(thor.title);
      console.log(thor.title);
      for (i = 0; i < thor.showtime.length; i++) {
        if (thor.showtime[i] === 1750) {
          $("#price").append(thor.showtime[i] + ": $" + thor.price * 1.8 + "<br>");
        } else {
          thor.price = thor.price;
          $("#price").append(thor.showtime[i] + ": $" + thor.price + "<br>");
        }
      }
    }); // End of 'click' listener.

    $("#starWars").last().click(function() {
      $(".click-show").show();
      $("#price").empty();
      $("#movie-display-title").text(starWars.title);
      console.log(starWars.title);
      for (i = 0; i < starWars.showtime.length; i++) {
        if (starWars.showtime[i] === 1750) {
          $("#price").append(starWars.showtime[i] + ": $" + starWars.price * 1.8 + "<br>");
        } else {
          starWars.price = starWars.price;
          $("#price").append(starWars.showtime[i] + ": $" + starWars.price + "<br>");
        }
      }
    }); // End of 'click' listener.

    $("#justiceLeague").last().click(function() {
      $(".click-show").show();
      $("#price").empty();
      $("#movie-display-title").text(justiceLeague.title);
      // $("#price").text(justiceLeague.price);
      console.log(justiceLeague.title);
      for (i = 0; i < justiceLeague.showtime.length; i++) {
        if (justiceLeague.showtime[i] === 1750) {
          $("#price").append(justiceLeague.showtime[i] + ": $" + justiceLeague.price * 1.8 + "<br>");
        } else {
          justiceLeague.price = justiceLeague.price;
          $("#price").append(justiceLeague.showtime[i] + ": $" + justiceLeague.price + "<br>");
        }
      }
    }); // End of 'click' listener.




  }); // End of 'submit' listener.





}); // End of 'document.ready' listener.
