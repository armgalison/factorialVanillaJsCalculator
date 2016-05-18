var display = document.getElementById('calc-input');
var calc = document.getElementsByClassName('calc-button');
var btnCalculate = document.getElementById('button-calculate');
var btnClear = document.getElementById('button-clear');

for(i=0; i<calc.length; i++){
    calc[i].onclick = setCalcInput;
}
btnCalculate.onclick = calculate;
btnClear.onclick = function(){display.value = null}

function setCalcInput(event) {
    display.value += event.target.value;
}

function calculate() {
    tmp = display.value;
    while(display.value-- > 2){
        tmp *= display.value;
        console.log(display.value);
    }
    display.value = tmp;
}