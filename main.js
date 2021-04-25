var inputs = [];

function print() {
    inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("input" + i).value);
        inputs.join(". ");
    }
    document.getElementById("line").style.display = "inline-block";
    document.getElementById("line2").style.display = "inline-block";
    document.getElementById("display").innerHTML = inputs.join(". ");
}
function print2() {
    inputs = [];
    for (var o = 7; o <= 12; o++) {
        inputs.push(document.getElementById("input" + o).value);
        inputs.join(". ");
    }
    document.getElementById("line").style.display = "inline-block";
    document.getElementById("line2").style.display = "inline-block";
    document.getElementById("display2").innerHTML = inputs.join(". ");
}