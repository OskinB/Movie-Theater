
var cScard = document.querySelector(".comingSoonCard");
// **** Array af bíómyndacards  ****
var comingSoonCard = [
    {
    title: "Ralph Breaks the Internet",
    poster: "images/Wreckitralph2.jpg",
    ageLimit: "images/L.png",
    premiere: "30.nóvember 2018",
    genreArray: [{
        genre: "Gamanmynd"
    },
    {
        genre: "Ævintýri"
    },
    {
        genre: "Teiknimynd"
    }],
    director: [{
        name: "Rich Moore"
    },
    { name: "Phil Johnston" }
    ],
    cast: [{
        name: "John C. Reilly"
    },
    {
        name: "Sarah Silverman"
    },
    {
        name: "Kristen Bell"
    },
    {
        name: "Auli'i Cravalho"
    },
    {
        name: "Mandy Moore"
    }],
    about: "Myndin gerist sex árum eftir atburði fyrri myndarinnar. Sugar Ruch spilasalurinn er nú í rúst, og Ralph og Vanellope þurfa að bregða sér á internetið í gegnum þráðlausa netið í Litwak spilasalnum, til að endurheimta hlut sem nauðsynlegur er til að bjarga leiknum."
},
{
    title: "Mortal Engines",
    poster: "images/MortalEngines-poster.jpg",
    ageLimit: "images/12.png",
    premiere: "14.desember 2018",
    genreArray: [{
        genre: "Hasar"
    },
    {
        genre: "Ævintýri"
    },
    {
        genre: "Fantasía"
    }],
    director: [{
        name: "Christian Rivers"
    }],
    cast: [{
        name: "Hera Hilmarsdóttir"
    },
    {
        name: "Hugo Weaving"
    },
    {
        name: "Stephen Lang"
    },
    {
        name: "Jihae Kim"
    }],
    about: "Mörgum árum eftir Sextíu mínútna stríðið, þá lifir borgarbúar á eyðilegri Jörðinni, með því að færa sig á mili staða á risastórum farartækjum, og ráðast á smærri þorp."
},
{
    title: "Aquaman",
    poster: "images/Aquaman-poster.jpg",
    ageLimit: "images/12.png",
    premiere: "19.desember 2018",
    genreArray: [{
        genre: "Hasar"
    },
    {
        genre: "Vísindaskáldskapur"
    },
    {
        genre: "Ævintýri"
    }],
    director: [{
        name: "James Wan"
    }],
    cast: [{
        name: "Jason Momoa"
    },
    {
        name: "Amber Heard"
    },
    {
        name: "Nicole Kidman"
    },
    {
        name: "Willem Dafoe"
    }],
    about: "Arthur Curry kemst að því að hann er erfingi neðansjávarríkisins Atlantis, og þarf að stíga fram og verða leiðtogi þjóðar sinnar, og drýgja hetjundáðir fyrir allan heiminn."
},
{
    title: "Mary Poppins Returns",
    poster: "images/maryPoppins-poster.jpg",
    ageLimit: "images/L.png",
    premiere: "26.desember 2018",
    genreArray: [{
        genre: "Fjölskyldumynd"
    },
    {
        genre: "Tónlistarmynd"
    },
    {
        genre: "Fantasía"
    }],
    director: [{
        name: "Rob Marshall"
    }],
    cast: [{
        name: "Emily Blunt"
    },
    {
        name: "Lin-Manuel Miranda"
    },
    {
        name: "Meryl Streep"
    },
    {
        name: "Ben Whishaw"
    },
    {
        name: "Colin Firth"
    }],
    about: "Mary snýr aftur til Banks fjölskyldunnar í London á tímum kreppunnar miklu. Börnin sem hún passaði í fyrstu myndinni, þau Jane og Michael, eru nú vaxin úr grasi. Michael á nú sjálfur þrjú börn, en þau þurfa öll aðstoð við að finna gleðina í lífinu á nýjan leik, eftir að hafa orðið fyrir persónulegum missi."
},
{
    title: "Robin Hood",
    poster: "images/robinHood-poster.jpg",
    ageLimit: "images/12.png",
    premiere: "4.janúar 2019",
    genreArray: [{
        genre: "Ævintýri"
    }],
    director: [{
        name: "Otto Bathurst"
    }],
    cast: [{
        name: "Taron Egerton"
    },
    {
        name: "Jamie Foxx"
    },
    {
        name: "Eve Hewson"
    },
    {
        name: "Ben Mendelsohn"
    },
    {
        name: "Jamie Dornan"
    }],
    about: "Robin af Loxley, sem hefur marga fjöruna sopið í krossferðum, og Márinn félagi hans, gera uppreisn gegn spilltum enskum yfirvöldum."
},
{
    title: "Captain Marvel",
    poster: "images/captainMarvel-poster.jpg",
    ageLimit: "images/12.png",
    premiere: "8.mars 2019",
    genreArray: [{
        genre: "Hasar"
    },
    {
        genre: "Vísindaskáldskapur"
    },
    {
        genre: "Ævintýri"
    }],
    director: [{
        name: "Anna Boden"
    },
    {
        name: "Ryan Fleck"
    }
    ],
    cast: [{
        name: "Brie Larson"
    },
    {
        name: "Lee Pace"
    },
    {
        name: "Samuel L. Jackson"
    },
    {
        name: "Ben Mendelsohn"
    },
    {
        name: "Jude Law"
    }],
    about: "Carol Danvers verður ein kraftmesta ofurhetja alheimsins, þegar Jörðin lendir í miðju stjörnustríði á milli tveggja geimveru -ættbálka."
},
{
    title: "Aladdin",
    poster: "images/Aladdin-poster.jpg",
    ageLimit: "images/L.png",
    premiere: "22.maí 2019",
    genreArray: [{
        genre: "Ævintýri"
    },
    {
        genre: "Fantasía"
    },
    {
        genre: "Fjölskyldumynd"
    }],
    director: [{
        name: "Guy Ritchie"
    }
    ],
    cast: [{
        name: "Mena Massoud"
    },
    {
        name: "Naomi Scott"
    },
    {
        name: "Will Smith"
    },
    {
        name: "Marwan Kenzari"
    }],
    about: "Aladdin er götustrákur sem hittir hina heillandi og ákveðnu Jasmine prinsessu og andann í lampanum, sem gæti verið lykillinn að framtíð þeirra."
},
{
    title: "Rocketman",
    poster: "images/rocketman-poster.jpg",
    ageLimit: "images/12.png",
    premiere: "5.júní 2019",
    genreArray: [{
        genre: "Drama"
    },
    {
        genre: "Ævisaga"
    }],
    director: [{
        name: "Dexter Fletcher"
    }
    ],
    cast: [{
        name: "Taron Egerton"
    },
    {
        name: "Bryce Dallas Howard"
    },
    {
        name: "Richard Madden"
    },
    {
        name: "Jamie Bell"
    }],
    about: "Saga breska tónlistarmannsins Elton John, allt frá því þegar hann var við nám í the Royal Academy of Music, og í gegnum ferillinn og samstarf hans við textasmiðinn Bernie Taupin."
}]

// **** Búa til og birta væntanlegt card ****
for (var m = 0; m < comingSoonCard.length; m++) {

    var genreS = "<div class='genreFlex'>"
    for (var y = 0; y < comingSoonCard[m].genreArray.length; y++) {
        var genreDiv = "<div>";
        var genreType = "<h3>" + comingSoonCard[m].genreArray[y].genre + ", </h3>";
        genreDiv += genreType;
        genreDiv += "</div>";
        genreS += genreDiv;
    }
    genreS += "</div>";

    var directors = "<div>"
    for (var j = 0; j < comingSoonCard[m].director.length; j++) {
        var directorDiv = "<div>";
        var directorName = "<h3>" + comingSoonCard[m].director[j].name + ", </h3>";
        directorDiv += directorName;
        directorDiv += "</div>";
        directors += directorDiv;
    }
    directors += "</div>";

    var actors = "<div>"
    for (var i = 0; i < comingSoonCard[m].cast.length; i++) {
        var actorDiv = "<div>";
        var actorName = "<h3>" + comingSoonCard[m].cast[i].name + ", </h3>";
        actorDiv += actorName;
        actorDiv += "</div>";
        actors += actorDiv;
    }
    actors += "</div>";

    cScard.innerHTML += `
        <div class="ultraFlex">
            <div class="flexHolder">
                <div class="soonPoster">
                    <img class="soonThePoster" src="${comingSoonCard[m].poster}" alt="${comingSoonCard[m].title}">
                    <img class="soonAgeLimit" src="${comingSoonCard[m].ageLimit}" alt="Aldurstakmark">
                </div>
            </div>
            <div class="megaFlex">
                <div class="soonTitle">
                    <h1>${comingSoonCard[m].title}</h1>
                </div>
                <div class="flexInfoHolder">
                    <div class="soonInfo">
                        <div class="soonPremiere">
                            <h2>Frumsýnd</h2>
                            <h3>${comingSoonCard[m].premiere}</h3>
                        </div>
                        <div class="soonGenre">
                            <h2>Tegund</h2>
                            ${genreS}
                        </div>
                        <p>
                        ${comingSoonCard[m].about}
                        </p>
                    </div>
                    <div class="soonCrew">
                        <div class="soonDirector">
                            <h2>Leikstjóri</h2>
                            ${directors}
                        </div>
                        <div class="soonActors">
                            <h2>Leikarar</h2>
                            ${actors}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
