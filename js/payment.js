// **** Dropdown virkni ****
var selectQ = document.querySelector(".selectQuantity");
var totalPrice = document.querySelector(".totalTicketPrice");

// **** Sýna heildar miðaverð, byrjar sem 0kr. ****
totalPrice.innerHTML = "<h3>0 kr.</h3>"

// **** Opna fjöldi miða dropdownið ****
function quantityDropdown(e) {
    document.getElementById("ticketTotalDropdown").classList.toggle("show");
}
selectQ.innerHTML = `
    <div onclick="quantityDropdown()" class="dropdownTitle">
        <h4 class="selectedTicketTotal">0</h4>
        <img class="dropdownDart" src="images/dropdown-píla.png" alt="Píla">
    </div>
    <div id="ticketTotalDropdown" class="dropdownText">
        <a onclick=getSelectedQuantity("0")>0</a>
        <a onclick=getSelectedQuantity("1")>1</a>
        <a onclick=getSelectedQuantity("2")>2</a>
        <a onclick=getSelectedQuantity("3")>3</a>
        <a onclick=getSelectedQuantity("4")>4</a>
        <a onclick=getSelectedQuantity("5")>5</a>
        <a onclick=getSelectedQuantity("6")>6</a>
        <a onclick=getSelectedQuantity("7")>7</a>
        <a onclick=getSelectedQuantity("8")>8</a>
        <a onclick=getSelectedQuantity("9")>9</a>
        <a onclick=getSelectedQuantity("10")>10</a>
    </div>
`

// **** Svo hægt sé að clicka líka á textann til að opna dropdownið (var að búbbla sig)
var dropdownTicket = document.querySelector(".dropdownTitle");
dropdownTicket.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    quantityDropdown()
}

// **** Það sem er valið úr dropdown ****
// **** Sýna heildar miðaverð ****
function getSelectedQuantity(selectedQuantity) {
    document.querySelector(".selectedTicketTotal").innerHTML = selectedQuantity;

    var totalPay = selectedQuantity * 1490;
    totalPrice.innerHTML = `
    <h3>${totalPay} kr.</h3>
    `
}

// **** Email validation tékk ****
var validate = document.querySelector("#validateEmail");

function checkPayBtn() {
    if (validate.value === "") {
        alert('Ekki gleyma netfanginu fyrir bíómiðanum!')
    }
    else {
        confirm("Viltu halda áfram á örugga síðu til að ganga frá greiðslu?")
    }
}