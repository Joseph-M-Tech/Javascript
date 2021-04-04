// +  =


var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');

var resultfield = document.getElementById('resultfield');
var form = document.getElementById('xIsWhatPercentOfY');
// resultfield.innerHTML = 40;

form.addEventListener('submit', function(event) {
    if (!numfield1 || !numfield2) {
        alert("Please Enter values in the field!");
    }else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);
        // resultfield = resultfield.append(result);

        var result = x / y;
        var percent =result * 100;

        resultfield = resultfield.append(percent);
        event.preventDefault();

    }
});