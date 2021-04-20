// **** Dropdown virkni ****
var selectHouse = document.querySelector(".selectHouse");
var selectDate = document.querySelector(".selectDate");

// **** Opna Staðsetningar dropdownið ****
function houseDropdown(e) {
    document.getElementById("HouseDropdown").classList.toggle("show");
}
selectHouse.innerHTML = `
    <div class="dropdownTitleHouse">
        <h4 class="selectedCinema">Staðsetning</h4>
        <img src="images/dropdown-píla.png" alt="Píla">
    </div>
    <div id="HouseDropdown" class="dropdownText">
        <a onclick="getSelectedHouse('Reykjavík')">Reykjavík</a>
        <a onclick="getSelectedHouse('Egilshöll')">Egilshöll</a>
        <a onclick="getSelectedHouse('Álfabakki')">Álfabakki</a>
        <a onclick="getSelectedHouse('Kringlan')">Kringlan</a>
        <a onclick="getSelectedHouse('Keflavík')">Keflavík</a>
        <a onclick="getSelectedHouse('Akureyri')">Akureyri</a>
    </div>
`

// **** Svo hægt sé að clicka líka á textann til að opna dropdownið (var að búbbla sig)
var dropdownHouse = document.querySelector(".dropdownTitleHouse");
dropdownHouse.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    houseDropdown()
}

// **** Opna Dagsetningar dropdownið ****
function dateDropdown(e) {
    document.getElementById("DateDropdown").classList.toggle("show");
}
selectDate.innerHTML = `
    <div class="dropdownTitleDate">
        <h4 class="selectedTime">Dagsetning</h4>
        <img src="images/dropdown-píla.png" alt="Píla">
    </div>
    <div id="DateDropdown" class="dropdownText">
        <a onclick="getSelectedDate('Mánudagur 10. desember')">Mánudagur 10. desember</a>
        <a onclick="getSelectedDate('Þriðjudagur 11. desember')">Þriðjudagur 11. desember</a>
        <a onclick="getSelectedDate('Miðvikudagur 12. desember')">Miðvikudagur 12. desember</a>
        <a onclick="getSelectedDate('Fimmtudagur 13. desember')">Fimmtudagur 13. desember</a>
        <a onclick="getSelectedDate('Föstudagur 14. desember')">Föstudagur 14. desember</a>
        <a onclick="getSelectedDate('Laugardagur 15. desember')">Laugardagur 15. desember</a>
    </div>
`
// **** Svo hægt sé að clicka líka á textann til að opna dropdownið (var að búbbla sig)
var dropdownDate = document.querySelector(".dropdownTitleDate");
dropdownDate.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    dateDropdown()
}

// **** Loka ef clickað út fyrir opnan glugga **** 
window.onclick = function (event) {
    if (!event.target.matches('.dropdownTitle')) {

        var dropdowns = document.getElementsByClassName("dropdownText");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var mCards = document.querySelector(".movieCards");
// **** Array af bíómyndacards  ****
var movieCards = [
    {
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        poster: "images/Fantasticbeasts-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "20:30",
                vip: false,
                threeD: false,
            },
            {
                time: "22:20",
                vip: false,
                threeD: false,
            },
            {
                time: "18:45",
                vip: true,
                threeD: false,
            },
            {
                time: "21:30",
                vip: true,
                threeD: false,
            }]
        },
        {
            house: "Egilshöll",
            timeArray: [{
                time: "19:00",
                vip: false,
                threeD: true,
            },
            {
                time: "20:00",
                vip: false,
                threeD: false,
            },
            {
                time: "22:00",
                vip: false,
                threeD: false,
            }]
        },
        {
            house: "Kringlan",
            timeArray: [{
                time: "19:30",
                vip: false,
                threeD: true,
            },
            {
                time: "22:15",
                vip: false,
                threeD: true,
            }]
        }]
    },
    {
        title: "A Star is Born",
        poster: "images/starBorn-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "18:00",
                vip: false,
                threeD: false,
            },
            {
                time: "20:00",
                vip: false,
                threeD: false,
            },
            {
                time: "21:00",
                vip: false,
                threeD: false,
            }],
        },
        {
            house: "Keflavík",
            timeArray: [{
                time: "20:00",
                vip: false,
                threeD: false,
            }]
        },
        {
            house: "Kringlan",
            timeArray: [{
                time: "19:30",
                vip: false,
                threeD: false,
            },
            {
                time: "22:15",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "The Grinch",
        poster: "images/theGrinch-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "17:50 (íslensku)",
                vip: false,
                threeD: false,
            },
            {
                time: "20:00",
                vip: false,
                threeD: false,
            }]
        },
        {
            house: "Akureyri",
            timeArray: [{
                time: "17:50",
                vip: false,
                threeD: false,
            },
            {
                time: "18:00",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "Overlord",
        poster: "images/Overlord-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "20:00",
                vip: false,
                threeD: false,
            },
            {
                time: "22:45",
                vip: false,
                threeD: false,
            }]
        }, {
            house: "Egilshöll",
            timeArray: [{
                time: "20:00",
                vip: false,
                threeD: false,
            },
            {
                time: "22:20",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "Widows",
        poster: "images/Widows-poster.jpg",
        movieTheatre: [{
            house: "Kringlan",
            timeArray: [{
                time: "19:30",
                vip: false,
                threeD: false,
            },
            {
                time: "22:10",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "The Nutcracker and the Four Realms",
        poster: "images/nutcracker-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "17:50",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "Halloween",
        poster: "images/Halloween-poster.jpg",
        movieTheatre: [{
            house: "Álfabakki",
            timeArray: [{
                time: "18:00",
                vip: false,
                threeD: false,
            }]
        }]
    },
    {
        title: "Hunter Killer",
        poster: "images/Hunterkiller-poster.jpg",
        movieTheatre: [{
            house: "Egilshöll",
            timeArray: [{
                time: "22:40",
                vip: false,
                threeD: false,
            }]
        }]
    }]

// **** Það sem er valið úr dropdown, notað til að filtera cardsin ****
function getSelectedHouse(selectedHouse) {
    document.querySelector('.selectedCinema').innerHTML = selectedHouse;
    mCards.innerHTML = "";

    for (var i = 0; i < movieCards.length; i++) {

        for (var u = 0; u < movieCards[i].movieTheatre.length; u++) {

            if (selectedHouse === movieCards[i].movieTheatre[u].house) {
                makeCard(movieCards[i]);
            }
        }
        if (selectedHouse === "Reykjavík") {
            makeCard(movieCards[i]);
        }
    }
}

// **** Það sem er valið úr dropdown ****
function getSelectedDate(selectedDate) {
    document.querySelector(".selectedTime").innerHTML = selectedDate;
}

// **** Búa til card ****
function makeCard(movieCard) {

    var movieTheaters = "<div>"
    for (var y = 0; y < movieCard.movieTheatre.length; y++) {
        var movieTheater = "<div>";
        var movieTheaterTitle = "<h4>" + movieCard.movieTheatre[y].house + "</h4>";
        movieTheater += movieTheaterTitle;

        for (var z = 0; z < movieCard.movieTheatre[y].timeArray.length; z++) {
            var movieTheaterTime = "<p>" + movieCard.movieTheatre[y].timeArray[z].time + "</p>";
            movieTheater += movieTheaterTime;
        }

        movieTheater += "</div>";
        movieTheaters += movieTheater;
    }
    movieTheaters += "</div>";

    mCards.innerHTML += `
        <div class="card">
            <div class="cardBanner" onclick="showAmovie()" href="#ValinMynd">
                <h2>${movieCard.title}</h2>
                <a><img class="cardPoster" src="${movieCard.poster}" alt="${movieCard.title}"></a>
            </div>
            <div class="cardShowTime" >
                ${movieTheaters}
            </div>
        </div>
    `
}

// **** Birting á cards ****
for (var m = 0; m < movieCards.length; m++) {

    makeCard(movieCards[m]);
}
