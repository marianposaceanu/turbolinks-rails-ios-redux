function clearApiResponse() {
  var responseField = document.getElementById("api-response");

  if (responseField) {
    responseField.value = "";
  }
}

function bindApiCalls() {
  var responseField = document.getElementById("api-response");
  var apiLinks = document.querySelectorAll("a.api-call");

  if (!responseField || apiLinks.length === 0) {
    return;
  }

  clearApiResponse();

  apiLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      fetch(link.href, {
        headers: {
          Accept: "application/json"
        },
        credentials: "same-origin"
      })
        .then(function(response) {
          if (!response.ok) {
            throw new Error("Request failed: " + response.status);
          }

          return response.json();
        })
        .then(function(data) {
          responseField.value = JSON.stringify(data, null, 4);
        })
        .catch(function(error) {
          responseField.value = error.message;
        });
    }, { once: true });
  });
}

document.addEventListener("turbolinks:load", bindApiCalls);
document.addEventListener("turbolinks:render", clearApiResponse);
