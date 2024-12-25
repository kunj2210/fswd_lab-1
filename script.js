// Movie Collection Manager

let movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
    { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, releaseYear: 1994 }
];

// Function to add a new movie to the collection
const addMovie = (title, genre, rating, releaseYear) => {
    const newMovie = { title, genre, rating, releaseYear };
    movies.push(newMovie);
    console.log(`Added movie: ${title}`);
};

// Function to list all movies in a specific genre
const listMoviesByGenre = (genre) => {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    return filteredMovies.map(movie => `${movie.title} (${movie.releaseYear})`).join('<br>');
};

// Function to find the highest-rated movie in the collection
const findHighestRatedMovie = () => {
    const highestRated = movies.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
    return `${highestRated.title} with a rating of ${highestRated.rating}`;
};

// Function to get all movie titles
const getAllMovieTitles = () => {
    return movies.map(movie => movie.title).join(', ');
};

// Function to find movies released after a specific year
const findMoviesAfterYear = (year) => {
    const recentMovies = movies.filter(movie => movie.releaseYear > year);
    return recentMovies.map(movie => `${movie.title} (${movie.releaseYear})`).join('<br>');
};

// Event Listeners
document.getElementById('addMovieBtn').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);
    addMovie(title, genre, rating, releaseYear);
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('releaseYear').value = '';
});

document.getElementById('listMoviesBtn').addEventListener('click', () => {
    const genre = document.getElementById('genreFilter').value;
    const moviesList = listMoviesByGenre(genre);
    document.getElementById('genreMoviesList').innerHTML = moviesList || 'No movies found in this genre.';
});

document.getElementById('highestRatedBtn').addEventListener('click', () => {
    const highestRated = findHighestRatedMovie();
    document.getElementById('highestRatedMovie').innerHTML = highestRated;
});

document.getElementById('allTitlesBtn').addEventListener('click', () => {
    const allTitles = getAllMovieTitles();
    document.getElementById('allTitlesList').innerHTML = allTitles || 'No movies in the collection.';
});

document.getElementById('recentMoviesBtn').addEventListener('click', () => {
    const year = parseInt(document.getElementById('yearFilter').value);
    const recentMovies = findMoviesAfterYear(year);
    document.getElementById('recentMoviesList').innerHTML = recentMovies || 'No movies found after this year.';
});