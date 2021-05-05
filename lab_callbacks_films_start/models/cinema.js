const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  const filmTitles = this.films.map((film) => {
    return film.title;
  });
  return filmTitles;
};

// Cinema.prototype.getFilmByTitle = function(title) {
//   const foundFilm = this.films.find((film) => {
//     return film.title === title;
//   });
//   return foundFilm;
// };

// Cinema.prototype.getFilmsByGenre = function(genre) {
//   const filmsOfGenre = this.films.filter((film) => {
//     return film.genre === genre;
//   });
//   return filmsOfGenre;
// };

Cinema.prototype.getFilmsByYear = function(year) {
  const filmsOfYear = this.films.filter((film) => {
    return film.year === year;
  });
  return filmsOfYear;
}

Cinema.prototype.filmByYearTrue = function(year) {
  const filmsOfYear = this.filmsByProperty('year', year);
  if (filmsOfYear.length === 0) {
    return false;
  };
  return true; 
}

Cinema.prototype.hasMinRunTime = function(time) {
  const filmRunTime = this.films.every((film) => {
    return film.length >= time;
  });
  return filmRunTime;
};

Cinema.prototype.totalRuntime = function() {
  // reduce requires 2 inputs, an accumulator and the current value of the array
  let totalTime = this.films.reduce((runningTotal, film) => {
    runningTotal += film.length;
    return runningTotal;

    //NB: If the array is NOT A NUMBER, pass an initial value to the reduce function
    // as below
  }, 0);
  return totalTime;
};
// Function takes in two arguements and returns film objects with the matching value.filmsByProperty
// const allFilms assigned this.films.filter array
// function iterates through the film array using the two arguements, in this case 'year' & 2018.
// when films with property of year equals 2018, films are added to new array and returned to terminal.
// This method can be used for any key value pair in the film object array.
Cinema.prototype.filmsByProperty = function(property, value ){
  const allFilms = this.films.filter((film) => {
    return film[property] === value
  }) 
return allFilms
}

module.exports = Cinema;

