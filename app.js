"use strict";
const api_key = 'oTB7fw1Fst1HG5FfXlUR26gzAmmiJW0D';
const gif_url = 'api.giphy.com/v1/gifs/search';
const giphyContainer = document.querySelector('.giphy-container');

/**
 * function called getGiphy
 *
 * listens to the click event on the form
 * captures the value being search for
 * awaits the promise from the axios get request and stores the resulting data
 * specifically gets the url of the first gif from that data
 *
 * then calls the addGiphy function with the url from that response data
 */
async function getGiphy(evt) {
  console.log("getgiphy has fired");
  evt.preventDefault();

  let search = $("#search").val();

  let response = await axios.get("http://api.giphy.com/v1/gifs/search",
    { params: { api_key: api_key, q: search, limit: 10 } });

  console.log("response=", response);

  let urlOfFirstGif = response.data.data[0].images.original.url;
  console.log("urlOfFirstGif=", urlOfFirstGif);

  addGiphy(urlOfFirstGif);
}

/**
 * function called addGiphy
 *
 * takes in the url from the response data from getGiphy
 * makes an <img> from that source and appends it the the container
 */
async function addGiphy(url) {
  console.log("addGiphy has fired");
  const newGifImg = `<img src='${url}'/>`;

  console.log("newGifImg=", newGifImg);
  $('.giphy-container').append(newGifImg);
}


$(".form").submit(getGiphy);