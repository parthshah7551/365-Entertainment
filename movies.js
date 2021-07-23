var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slidess = document.getElementsByClassName("slides");
    if (n > slidess.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidess.length
    }
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
    }
    slidess[slideIndex - 1].style.display = "block";
}


//Search


var movieTitle;
var currentGenre = "Genre";

function showNoResultsText(totalcount) {

    if (totalcount == 0) {
        document.getElementById("no-results").style.display = "block";
        console.log('totalcount in showNoResultsText' + totalcount);
    } else {
        document.getElementById("no-results").style.display = "none";
    }

}

// Donefrygudchijgfbhn hgbnjv hjnh gjjn



function updateResults() {
    var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
    var counter = 0;

    if (currentGenre == 'All' || currentGenre == 'Genre') {
        movieTitle = document.getElementsByClassName('imgtext');
    }
    if (currentGenre == 'Action') {
        movieTitle = document.getElementsByClassName('containeraction')[0].getElementsByClassName('imgtext');
    }
    if (currentGenre == 'Drama') {
        movieTitle = document.getElementsByClassName('containerdrama')[0].getElementsByClassName('imgtext');
    }
    if (currentGenre == 'Sci-Fi') {
        movieTitle = document.getElementsByClassName('containerscifi')[0].getElementsByClassName('imgtext');
    }


    // Donedaefsvddsafsvqwdef

    for (var name = 0; name < movieTitle.length; name++) {
        var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

        if (compareMovieTitles.indexOf(query) === -1) {
            movieTitle[name].closest('div.images').style.display = "none";
        } else {
            movieTitle[name].closest('div.images').style.display = "block";
            counter++;
        }
    }

    // donesezxdrctfvyguhiokpl[;]

    showNoResultsText(counter);
}

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleGenreList() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

//Doneghbjnjhnkmj knj k


// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

    if (!e.target.matches('#dropbtn')) {

        var dropdownContent = document.getElementById("dropdown-content");

        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
}

//Donesdwvsdqefwrgtbsdqefwrwdqefrdwef

function getMediaPosters(selectedGenre) {
    var countMovies = 0;
    var mediaCarouselMovies;
    currentGenre = selectedGenre;
    document.getElementById("genreText").innerHTML = selectedGenre;

    if (selectedGenre == 'All') {
        document.getElementsByClassName('containeraction')[0].style.display = "block";
        document.getElementsByClassName('containeraction')[0].style.display = "block";
        document.getElementsByClassName('containerdrama')[0].style.display = "block";
        document.getElementsByClassName('containerscifi')[0].style.display = "block";
        mediaCarouselMovies = document.getElementsByClassName("images");
    }
    if (selectedGenre == 'Action') {
        document.getElementsByClassName('containeraction')[0].style.display = "block";
        document.getElementsByClassName('containerdrama')[0].style.display = "none";
        document.getElementsByClassName('containerscifi')[0].style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName('containeraction')[0].getElementsByClassName("images");
    }
    if (selectedGenre == 'Drama') {
        document.getElementsByClassName('containeraction')[0].style.display = "none";
        document.getElementsByClassName('containerdrama')[0].style.display = "block";
        document.getElementsByClassName('containerscifi')[0].style.display = "none";
        mediaCarouselMovies = document.getElementsByClassName('containerdrama')[0].getElementsByClassName("images");
    }
    if (selectedGenre == 'Sci-Fi') {
        document.getElementsByClassName('containeraction')[0].style.display = "none";
        document.getElementsByClassName('containerdrama')[0].style.display = "none";
        document.getElementsByClassName('containerscifi')[0].style.display = "block";
        mediaCarouselMovies = document.getElementsByClassName('containerscifi')[0].getElementsByClassName("images");
    }


    var mediaCarouselMoviesCount = mediaCarouselMovies.length;

    for (var count = 0; count < mediaCarouselMoviesCount; count++) {
        if (mediaCarouselMovies[count].style.display == "block")
            countMovies++;
    }
    console.log(countMovies);

    showNoResultsText(countMovies);
}