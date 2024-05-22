let currentValue = "";
document.querySelector("#display").value = currentValue;

function one(){
    document.getElementById('one');
    currentValue += '1';
    document.querySelector("#display").value = currentValue;
}

function two(){
    document.getElementById('two');
    currentValue += '2';
    document.querySelector("#display").value = currentValue;
}

function three(){
    document.getElementById('three');
    currentValue += '3';
    document.querySelector("#display").value = currentValue;
}

function four(){
    document.getElementById('four');
    currentValue += '4'; 
    document.querySelector("#display").value = currentValue;
}

function five(){
    document.getElementById('five');
    currentValue += '5';
    document.querySelector("#display").value = currentValue;
}

function six(){
    document.getElementById('six');
    currentValue += '6';
    document.querySelector("#display").value = currentValue;
}

function seven(){
    document.getElementById('seven');
    currentValue += '7';
    document.querySelector("#display").value = currentValue;
}

function eight(){
    document.getElementById('eight');
    currentValue += '8';
    document.querySelector("#display").value = currentValue;
}

function nine(){
    document.getElementById('nine');
    currentValue += '9';
    document.querySelector("#display").value = currentValue;
}

function zero(){
    document.getElementById('zero');
    currentValue += '0';
    document.querySelector("#display").value = currentValue;
}

function dot(){
    document.getElementById('dot');
    currentValue += '.';
    document.querySelector("#display").value = currentValue;
}

function clear() {
    currentValue = '';
    document.querySelector("#display").value = currentValue;
}

// Added Event Listener
document.getElementById('clear').addEventListener('click', clear);

// Method eval()
// This method converts "string" expression into 'JS code'
function eqal(){
        document.getElementById('eqal');
        //to avoid 'Undefined' when no currentValue but clivked on "="
        if(currentValue){
            currentValue = eval(currentValue);
        }
        document.querySelector("#display").value = currentValue;
}

function plus(){
    document.getElementById('plus');
    currentValue = currentValue + '+';
    document.querySelector("#display").value = currentValue;
}

function minus(){
    document.getElementById('minus');
    currentValue = currentValue + '-';
    document.querySelector("#display").value = currentValue;
}

function multiply(){
    document.getElementById('multiply');
    currentValue = currentValue + '*';
    document.querySelector("#display").value = currentValue;
}

function divide(){
    document.getElementById('divide');
    currentValue = currentValue + '/';
    document.querySelector("#display").value = currentValue;
}

function per(){
    document.getElementById('per');
    currentValue = currentValue + '%';
    document.querySelector("#display").value = currentValue;
}
function root(){
    document.getElementById('root');
    currentValue = Math.sqrt(currentValue);
    document.querySelector("#display").value = currentValue;
}

function brackets(){
    document.getElementById('brackets');
    currentValue = "(" + currentValue + ")";
    document.querySelector("#display").value = currentValue;
}