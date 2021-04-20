var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

// Það sem gerist þegar það er komið fyrst á síðuna:
header.innerHTML = templates.header;
main.innerHTML = templates.frontpage;
footer.innerHTML = templates.footer;
// ---

function showComingSoon() {
    main.innerHTML = templates.comingSoon
    // **** Tengjast scriptunum í stað að hafa á index.html ****
    var script = document.createElement("script");
    script.src = "./js/comingSoon.js"
    document.body.appendChild(script);
    window.scrollTo(0,0)
}

function showAmovie() {
    main.innerHTML = templates.selectedMovie
    var script = document.createElement("script");
    script.src = "./js/aMovie.js"
    document.body.appendChild(script);

    var script2 = document.createElement("script");
    script2.src = "./js/main.js"
    document.body.appendChild(script2);
    window.scrollTo(0,0)
}

function showSelectPay() {
    main.innerHTML = templates.selectPayment
    var script = document.createElement("script");
    script.src = "./js/payment.js"
    document.body.appendChild(script);
    window.scrollTo(0,0)
}

