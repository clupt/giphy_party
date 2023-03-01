"use strict";
const api_key = 'oTB7fw1Fst1HG5FfXlUR26gzAmmiJW0D';
const gif_url = 'api.giphy.com/v1/gifs/search';
const giphyContainer = document.querySelector('.giphy-container');

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

async function addGiphy(url) {
  console.log("addGiphy has fired");
  const newGifImg = `<img src='${url}'/>`;

  console.log("newGifImg=", newGifImg);
  // $('giphy-container').append(newGifImg);
  $('.giphy-container').append(newGifImg);
}


$(".form").submit(getGiphy);