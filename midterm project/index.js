
// Fetch API data
fetch('https://api.themoviedb.org/3/movie/popular?api_key=cab51a09bda82511eceb01a9700772d0')
    .then(response => response.json())
    .then(data => {
        const popularMovies = document.getElementById('popularMovies');
        data.results.forEach(movie => {
            const movieTile = createMovieTile(movie);
            popularMovies.appendChild(movieTile);
        });
    })
    .catch(error => console.error('Error fetching popular movies:', error));

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cab51a09bda82511eceb01a9700772d0')
    .then(response => response.json())
    .then(data => {
        const topRatedMovies = document.getElementById('topRatedMovies');
        data.results.forEach(movie => {
            const movieTile = createMovieTile(movie);
            topRatedMovies.appendChild(movieTile);
        });
    })
    .catch(error => console.error('Error fetching top rated movies:', error));

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cab51a09bda82511eceb01a9700772d0')
    .then(response => response.json())
    .then(data => {
        const upcomingMovies = document.getElementById('upcomingMovies');
        data.results.forEach(movie => {
            const movieTile = createMovieTile(movie);
            upcomingMovies.appendChild(movieTile);
        });
    })
    .catch(error => console.error('Error fetching upcoming movies:', error));

// Function to create a movie tile
function createMovieTile(movie) {
    const movieTile = document.createElement('div');
    movieTile.classList.add('col-md-4', 'mb-4');

    movieTile.innerHTML = `
        <div class="card">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.release_date}</p>
                <button class="btn btn-primary get-details" data-movie-id="${movie.id}">More Details</button>
                <div class="details" style="display: none;">
                    <p>Description: ${movie.overview}</p>
                    <p>Genre: ${movie.genre_ids.join(', ')}</p>
                </div>
            </div>
        </div>
    `;

    return movieTile;
}

// Event listener for "Get Details" button clicks
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('get-details')) {
        const details = event.target.parentNode.querySelector('.details');
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    }
});
