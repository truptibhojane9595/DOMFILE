document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const movieDisplayContainer = document.getElementById('movie-display-container');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalClose = document.querySelector('.close');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const searchTerm = input.value.trim();
        if (searchTerm === '') return;

        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=13d037e2`);
            const data = await response.json();
            if (data.Response === 'True') {
                displayMovies(data.Search);
                input.value = ''; 
            } else {
                movieDisplayContainer.innerHTML = `<p>No movies found</p>`;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    function displayMovies(movies) {
        movieDisplayContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie-container';
            movieElement.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'default-poster.jpg'}" alt="${movie.Title}">
                <p>${movie.Title} (${movie.Year})</p>
            `;
            movieElement.addEventListener('click', async function() {
                const movieDetails = await fetchMovieDetails(movie.imdbID);
                displayMovieDetails(movieDetails);
            });
            movieDisplayContainer.appendChild(movieElement);
        });
    }

    async function fetchMovieDetails(movieID) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=13d037e2`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching movie details:', error);
            return null;
        }
    }

    function displayMovieDetails(movie) {
        if (!movie) return;

        modal.style.display = 'block';
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2>${movie.Title} (${movie.Year})</h2>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
        `;

        const closeModal = document.querySelector('.close');
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
