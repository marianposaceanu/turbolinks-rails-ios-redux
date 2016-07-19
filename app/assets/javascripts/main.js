$(function() {
  $("a.api-call").click(function(event) {
    event.preventDefault();

    $.get(this.href, function(data) {
      console.log(data);

      var pretty_json = JSON.stringify(data, undefined, 4);

      $("#api-response").html(pretty_json);
    });

  });
});
