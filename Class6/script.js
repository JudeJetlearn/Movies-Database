const MovieList = [{Title:"Spiderman",Director:"Sam Raimi",Year:"2021"},{Title:"Moana",Director:"Ron Clements & John Musker",Year:"2016"}] 

class display{
    static addMovies(storeMovie) {
        const movie = document.getElementById("Mlist")
        const row = document.createElement("tr")
        row.innerHTML = "<td>"+ storeMovie.Title + "</td>" + "<td>"+ storeMovie.Director + "</td>" + "<td>"+ storeMovie.Year + "</td>"
        movie.appendChild(row)
    }

    static moveMovies() {
        MovieList.forEach(storeMovie => display.addMovies(storeMovie))
    }
}

display.moveMovies()

