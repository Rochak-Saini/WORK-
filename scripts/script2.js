// Selecting HTML elements
const seriesNameInput = document.getElementById('series-name');
const seriesSeasonInput = document.getElementById('series-season');
const addSeriesBtn = document.getElementById('add-series-btn');
const seriesList = document.getElementById('series-list');

const movieNameInput = document.getElementById('movie-name');
const addMovieBtn = document.getElementById('add-movie-btn');
const movieList = document.getElementById('movie-list');

const animeNameInput = document.getElementById('anime-name');
const animeSeasonInput = document.getElementById('anime-season');
const addAnimeBtn = document.getElementById('add-anime-btn');
const animeList = document.getElementById('anime-list');

// Creating variables to store watch history data
let seriesData = [];
let movieData = [];
let animeData = [];

// Creating functions to update the watch history data and UI
function addSeries() {
  const seriesName = seriesNameInput.value.trim();
  const seriesSeason = seriesSeasonInput.value.trim();
  if (seriesName === '' || seriesSeason === '') {
    return;
  }
  const series = {
    name: seriesName,
    season: seriesSeason
  };
  seriesData.push(series);
  seriesNameInput.value = '';
  seriesSeasonInput.value = '';
  updateSeriesUI();
}

function updateSeriesUI() {
  seriesList.innerHTML = '';
  for (let i = 0; i < seriesData.length; i++) {
    const series = seriesData[i];
    const listItem = document.createElement('li');
    listItem.innerText = `${series.name} (Season ${series.season})`;
    seriesList.appendChild(listItem);
  }
}

function addMovie() {
  const movieName = movieNameInput.value.trim();
  if (movieName === '') {
    return;
  }
  const movie = {
    name: movieName
  };
  movieData.push(movie);
  movieNameInput.value = '';
  updateMovieUI();
}

function updateMovieUI() {
  movieList.innerHTML = '';
  for (let i = 0; i < movieData.length; i++) {
    const movie = movieData[i];
    const listItem = document.createElement('li');
    listItem.innerText = `${movie.name}`;
    movieList.appendChild(listItem);
  }
}

function addAnime() {
  const animeName = animeNameInput.value.trim();
  const animeSeason = animeSeasonInput.value.trim();
  if (animeName === '' || animeSeason === '') {
    return;
  }
  const anime = {
    name: animeName,
    season: animeSeason
  };
  animeData.push(anime);
  animeNameInput.value = '';
  animeSeasonInput.value = '';
  updateAnimeUI();
}

function updateAnimeUI() {
  animeList.innerHTML = '';
  for (let i = 0; i < animeData.length; i++) {
    const anime = animeData[i];
    const listItem = document.createElement('li');
    listItem.innerText = `${anime.name} (Season ${anime.season})`;
    animeList.appendChild(listItem);
  }
}

function displayAllData() {
  let allData = "<h2>All Watch History</h2><ul>";
  
  // Loop through each series in seriesData array and add to allData variable
  for(let i = 0; i < seriesData.length; i++) {
    allData += `<li>Series: ${seriesData[i].name}, Season: ${seriesData[i].season}, Episode: ${seriesData[i].episode}</li>`;
  }
  
  // Loop through each movie in movieData array and add to allData variable
  for(let i = 0; i < movieData.length; i++) {
    allData += `<li>Movie: ${movieData[i].name}, Year: ${movieData[i].year}</li>`;
  }
  
  // Loop through each anime in animeData array and add to allData variable
  for(let i = 0; i < animeData.length; i++) {
    allData += `<li>Anime: ${animeData[i].name}, Episode: ${animeData[i].episode}</li>`;
  }
  
  allData += "</ul>";
  
  // Add the allData variable to an HTML element
  document.getElementById("all-data").innerHTML = allData;
}

// Adding event listeners to the buttons
addSeriesBtn.addEventListener('click', addSeries);
addMovieBtn.addEventListener('click', addMovie);
addAnimeBtn.addEventListener('click', addAnime);
