$(document).on("turbolinks:load", function() {
  $("#api-response").html();

  $("a.api-call").on("click", function(event) {
    event.preventDefault();

    $.get(this.href, function(data) {
      console.log(data);

      var pretty_json = JSON.stringify(data, undefined, 4);

      $("#api-response").html(pretty_json);
    });

  });
});

$(document).on("turbolinks:render", function() {
  $("#api-response").html("");
});
