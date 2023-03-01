"use strict";

async function getGiphy(evt) {
  evt.preventDefault();

  let search = $("#search").val();

  let response = await axios.get("api.giphy.com/v1/gifs/search", {
    params: { search },
  });

  console.log("response", response);

  $(".giphy-container").html(response.data);
}

$(".form").submit(getGiphy);
