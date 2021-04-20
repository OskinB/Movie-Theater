// *** SnapChat modal popup ****
var modal = document.querySelector('#myModal');
var btn = document.querySelector("#myBtn");
var span = document.getElementsByClassName("close")[0];

// **** Opna modal gluggann með því að clicka á SnapChat iconið í footer ****
function btnSnap(){
    modal.style.display = "block";
}

// **** Loka modelinu með að clicka á X ****
span.onclick = function() {
    modal.style.display = "none";
}
