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

class StrutureMovie{
    constructor(Title,Director,Year) {
        this.Title = Title
        this.Director = Director
        this.Year = Year
    }
}

document.getElementById("Add").addEventListener("click",function(){
    const Title = document.getElementById("title").value
    const Director = document.getElementById("director").value
    const Year = document.getElementById("year").value
    if (Title && Director && Year) {
        const details = new StrutureMovie(Title,Director,Year)
        const exist = MovieList.some(
            m => m.Title == Title &&
            m.Director == Director &&
            m.Year == Year
        )
        if (!exist) {
            MovieList.push(details)
            const movie = document.getElementById("Mlist")
            movie.innerHTML = ""
            display.moveMovies()
        }
    }

    document.getElementById("title").value = ""
    document.getElementById("director").value = ""
    document.getElementById("year").value = ""

})

display.moveMovies()

