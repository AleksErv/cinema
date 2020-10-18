const initOwl = function() {
    $(".owl-carousel").owlCarousel({
        nav: true,
    });
}
$(document).ready(initOwl());

const films = [{
        start: "10.00",
        name: "Человек паук",
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: "12.00",
        name: "Собачья жизнь 2",
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: "12.00",
        name: "История игрушек 4",
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: "10.00",
        name: "Люди в черном Интернэшнел",
        genre: [
            0,
            1,
            2
        ]
    }

];


//console.log(films[0])

const film_start_1 = document.getElementById("film_start_1")

console.log(film_start_1)