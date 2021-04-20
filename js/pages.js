var templates = {
    header: `
        <nav>
            <div class="navOrder">
                <div class="navLogo">
                    <a href="index.html"><img src="images/sambio-logo.png" alt="Sambíó logo"></a>
                </div>
                <div class="navTab">
                    <ul>
                        <li><a onclick=showComingSoon() href="#Væntanlegt">Væntanlegt</li></a>
                        <li><a href="index.html">Gjafabréf</li></a>
                        <li><a href="index.html">Samklúbbur</li></a>
                        <li><a href="index.html">Síðan mín</li></a>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="mobileNav">
            <div class="mobileFlex">
                <img class="mobileLogo" src="images/sambio-logo.png" alt="Sambíó logo">
                <div class="mBurger"></div>
            </div>
        </nav>
    `,

    footer: `
        <div class="footerContainer">
            <div class="footerOrder">
                <div class="footflex">
                    <div class="footPic">
                        <img src="images/footerPic.png" alt="Hetju mynd">
                    </div>
                    <div class="firstColumn">
                        <div class="footCTitle">
                            <h6>Heyrðu í okkur</h6>
                        </div>
                        <div class="footContact">
                            <ul>
                                <li class="footSamTitle">SAMbíó</li>
                                <li>575 8900</li>
                                <li>samfilm@samfilm.is</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footInfo footContent">
                        <ul>
                            <li><a href="index.html">Verðskrá</li></a>
                            <li><a href="index.html">Samklúbbur</li></a>
                            <li><a href="index.html">Um okkur</li></a>
                        </ul>
                    </div>
                    <div class="footSHolder">
                        <ul>
                            <div class="footSocial">
                                <li><a href="https://www.facebook.com/biomyndir/" target="_blank"><img src="images/facebook.png"
                                    alt="Sambíó Facebook"></a></li>
                                <li><a href="https://www.instagram.com/sambioin/" target="_blank"><img src="images/instagram.png"
                                    alt="Sambíó Instagram"></a></li>
                                <li><a onclick="btnSnap()" target="_blank"><img src="images/snapchat.png" alt="Sambíó SnapChat"></a></li>
                                <li><a href="https://twitter.com/hashtag/samb%C3%AD%C3%B3?src=hash" target="_blank"><img
                                    src="images/twitter.png" alt="Sambíó Twitter"></a></li>
                            </div>
                            <div class="footSTitle">
                                <h6>Fylgstu með okkur</h6>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section class="snapChatModal">
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>Addaðu okkur á SnapChat!</h2>
                </div>
                <div class="modal-body">
                    <img src="images/sambio-snapchat.jpg" alt="Sambíó Snapchat kóði">
                </div>
            </div>
        </div>
        </section class="snapChatModal">
    `,

    // ========================================================
    //                           CONTENT
    // ========================================================
    frontpage: `
        <div class="container">
            <section class="filterShowTop">
                <div class="flexDropdown">
                    <div class="selectHouse dropdown">
                    </div>
                    <div class="selectDate dropdown">
                    </div>
                </div>
                <div class="top1movie">
                    <div class="flexRight">
                        <h2>Vinsælasta myndin!</h2>
                    </div>
                    <a onclick="showAmovie()" href="#ValinMynd"><img src="images/topMovie.svg" alt="Vinsælasta myndin Fantastic Beasts: The Crimes of Grindelwald"></a>
                    <div class="flexRight">
                        <h3>Fantastic Beasts: <br> The Crimes of Grindelwald</h3>
                    </div>
                </div>
            </section>
            <section class="movieCards">
            </section>
            <div class="sambioAds">
                <section class="samClubAd">
                    <div class="ad">
                        <div class="flexText">
                            <p>2 miðar á 1.000 kr. á mánuði?</p>
                            <p>Já takk!</p>
                        </div>
                    </div>
                    <div class="flexSamBtn">
                        <div class="adBtn">
                            <h5>Kynntu þér fríðindi Samklúbbsins</h5>
                        </div>
                    </div>
                </section>
                <section class="samPoppAd">
                    <div class="textPlace">
                        <p>Gómsæt tilboð úr sjoppunni!</p>
                    </div>
                    <div class="samBtnPlace">
                        <h5>Skoða tilboð</h5>
                    </div>
                </section>
            </div>
        </div>
    `,

    selectedMovie: `
        <section class="heroBanner">
            <div class="heroMovie"></div>
            <div class="titleHolder">
                <h1>The Nutcracker and the Four Realms</h1>
            </div>
        </section>
        <div class="container">
            <section class="movieBasicInfo">
                <div class="posterArea">
                    <img class="moviePoster" src="images/nutcracker-poster.jpg" alt="Kvikmynda plakat">
                    <img class="movieAgelimit" src="images/L.png" alt="Aldurstakmark">
                </div>
                <div class="basicTop">
                    <div class="flexBasicInfo">
                        <div class="basicFlex">
                            <h2>Lengd</h2>
                            <h3>2 klst 39 mín</h3>
                        </div>
                        <div class="basicFlex">
                            <h2>Leikstjóri</h2>
                            <h3>Joe Johnston</h3>
                        </div>
                        <div class="basicFlex">
                            <h2>Frumsýnd</h2>
                            <h3>2. nóvember 2018</h3>
                        </div>
                    </div>
                    <div class="basicAbout">
                        <p>Það eina sem Clara vill er lykill - einstakur lykill sem mun opna kassa með ómetanlegri
                            gjöf frá móður hennar heitinni. Hún hittir hermann að nafni Philip, músaher, og verði
                            hinna þriggja heima, Snjókornalands, Blómalands og Sælgætislands. Clara og Philp þurfa
                            að sigrast á fjórða heiminum, þar sem hin illgjarna Mother Ginger býr.</p>
                    </div>
                </div>
            </section>
            <section class="movieCast">
                <h2>Leikarar</h2>
                <div class="castRow">
                    <div class="castCard">
                        <img src="images/MackenzieFoy.jpg" alt="Leikari">
                        <h3>Mackenzie Foy</h3>
                        <h4>Clara</h4>
                    </div>
                    <div class="castCard">
                        <img src="images/KeiraKnightley.jpg" alt="Leikari">
                        <h3>Keira Knightley</h3>
                        <h4>Sugar Plum Fairy</h4>
                    </div>
                    <div class="castCard">
                        <img src="images/MorganFreeman.jpg" alt="Leikari">
                        <h3>Morgan Freeman</h3>
                        <h4>Drosselmeyer</h4>
                    </div>
                    <div class="castCard">
                        <img src="images/HelenMirren.jpg" alt="Leikari">
                        <h3>Helen Mirren</h3>
                        <h4>Mother Ginger</h4>
                    </div>
                </div>
            </section>
            <section class="movieTrailer">
            </section>
            <section class="selectMovieShow">
                <div class="filterMovie">
                    <div class="filterIcon">
                        <img src="images/VIP-icon-SVG.svg" alt="VIP filter">
                        <img src="images/3D-icon-SVG.svg" alt="3D filter">
                        <img src="images/2D-icon-SVG.svg" alt="2D filter">
                    </div>
                    <div class="flexDropdown">
                        <div class="selectHouse dropdown">
                        </div>
                        <div class="selectDate dropdown">
                        </div>
                    </div>
                </div>
                <div class="showTimeBtn">
                    <div class="showTimeTable">
                        <div class="timePlace">
                            <h2>17:50</h2>
                            <h3>Álfabakki - Salur B</h3>
                        </div>
                        <div class="clickBtn">
                            <a onclick=showSelectPay() href="#VelduGreiðslu">Áfram</a>
                        </div>
                    </div>
                    <div class="showTimeTable">
                        <div class="timePlace">
                            <h2>21:00</h2>
                            <h3>Kringlan - Salur 3</h3>
                        </div>
                        <div class="clickBtn">
                            <a onclick=showSelectPay() href="#VelduGreiðslu">Áfram</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,

    selectPayment: `
        <div class="container">
            <section class="chosenMovie">
                <div class="chosenPoster">
                    <img class="poster" src="images/nutcracker-poster.jpg" alt="Kvikmynda plakat">
                    <img class="ageLimit" src="images/L.png" alt="Aldurstakmark">
                </div>
                <div class="flexChosenInfo">
                    <div class="chosenText">
                        <h1>The Nutcracker and the Four Realms</h1>
                        <h2>Lengd</h2>
                        <h3>2 klst 39 mín</h3>
                        <h2>Valin sýning:</h2>
                    </div>
                    <div class="showTimeBtn">
                        <h2>17:50</h2>
                        <h3>Álfabakki - Salur B</h3>
                    </div>
                </div>
            </section>
            <div class="samClubPaySpace">
                <section class="samClubAd">
                    <div class="ad">
                        <div class="flexText">
                            <p>2 miðar á 1.000 kr. á mánuði?</p>
                            <p>Já takk!</p>
                        </div>
                    </div>
                    <div class="flexSamBtn">
                        <div class="adBtn">
                            <h5>Kynntu þér fríðindi Samklúbbsins</h5>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section class="select-2Dticket">
            <div class="selectTicketContainer">
                <div class="flexTickets">
                    <div class="payCard">
                        <div class="ticketType">
                            <h2>Almennt verð 13-66 ára</h2>
                            <img class="typeIcon" src="images/2D-icon-SVG.svg" alt="2D">
                        </div>

                        <div class="ticketType">
                            <h3>1.490 kr.</h3>
                            <div class="selectQuantity dropdown">
                            </div>
                        </div>

                    </div>
                    <div class="payCard">
                        <div class="ticketType">
                            <h2>Barn 0-8 ára</h2>
                            <img class="typeIcon" src="images/2D-icon-SVG.svg" alt="2D">
                        </div>
                        <div class="ticketType">
                            <h3>950 kr.</h3>
                            <div class="selectQuantity dropdown">
                                <h4 class="selectedTicketTotal">0</h4>
                                <img class="dropdownDart" src="images/dropdown-píla.png" alt="Píla">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexTickets">
                    <div class="payCard">
                        <div class="ticketType">
                            <h2>Barn 9-12 ára</h2>
                            <img class="typeIcon" src="images/2D-icon-SVG.svg" alt="2D">
                        </div>
                        <div class="ticketType">
                            <h3>1.250 kr.</h3>
                            <div class="selectQuantity dropdown">
                            <h4 class="selectedTicketTotal">0</h4>
                                <img class="dropdownDart" src="images/dropdown-píla.png" alt="Píla">
                            </div>
                        </div>
                    </div>
                    <div class="payCard">
                        <div class="ticketType">
                            <h2>Eldri borgarar og öryrkjar</h2>
                            <img class="typeIcon" src="images/2D-icon-SVG.svg" alt="2D">
                        </div>
                        <div class="ticketType">
                            <h3>1.150 kr.</h3>
                            <div class="selectQuantity dropdown">
                            <h4 class="selectedTicketTotal">0</h4>
                                <img class="dropdownDart" src="images/dropdown-píla.png" alt="Píla">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="finishPay">
            <div class="paySum">
                <div class="voucher">
                    <h4>Gjafabréf</h4>
                    <div class="voucherBar">
                        <input type="text" placeholder="Strikamerkjanúmer">
                        <h3>Nota</h3>
                    </div>
                </div>
                <div class="totalSum">
                    <h2>Heildar verð:</h2>
                    <div class="totalTicketPrice"></div>
                </div>
            </div>
            <div class="flexTicket">
                <div class="eTicketEmail">
                    <h2>Sláðu inn netfang til að fá sent bíómiðana*</h2>
                    <div class="flexInput">
                        <input id="validateEmail" type="email" placeholder="Netfang">
                    </div>
                </div>
            </div>
            <div class="payWay">
                <h2>Veldu greiðsluleið</h2>
                <div class="flexPayCard">
                    <div class="clickNetgiroBtn" onclick="checkPayBtn()">
                        <h3>Netgíró</h3>
                    </div>
                    <div class="clickCardBtn" onclick="checkPayBtn()">
                        <h3>Debet og Kredit</h3>
                    </div>
                </div>
            </div>
            <div class="clickCancellBtn">
                <a onclick=showAmovie() href="#ValinMynd">Hætta við miða</a>
            </div>
        </section>
    `,

    comingSoon: `
        <div class="container">
            <section class="sorteringComingSoon">
                <h1>Raða eftir:</h1>
                <h2>A-Ö</h2>
                <div class="dropSortGenre">
                    <h2>Tegund</h2>
                    <img class="dropdownDart" src="images/dropdown-píla.png" alt="Píla">
                    </div>
                <h2>Frumsýningardegi</h2>
            </section>
        </div>
        <section class="comingSoonCard">
        </section>
    `,
}