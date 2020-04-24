$(function() {
// =================//
// Status (0= not eaten, 1= eaten)
// =================//
    $(".devoured-burger").on("click", function(event) {
      let id = $(this).data("id");
      let itsDevoured = $(this).data("devoured");
  
      var burgerDevoured = {
        devoured: 1
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerDevoured
      }).then(
        function() {
          console.log("changed status of eating:", itsDevoured);
          location.reload();
        }
      );
    });
// =================//
// Add new Burger.  //
// =================//
    $(".create-burger").on("submit", function(event) {
      event.preventDefault();
      let newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: $("[name=devoured]:checked").val()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger added!");
          location.reload();
        }
      );
    });
// =================//
// Delete the burger//
// =================//
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  