let contadorTotal = 0;
let contador = "0";
let operacionPrevia;


const screen = document.querySelector('.screen')

function buttonClick(value){
    if(isNaN(value))handleSymbol(value);

    else handleNumber(value);

    screen.value = contador;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            contador = '0';
            contadorTotal = 0;
            break;
            case '=':
                if (operacionPrevia === null) {
                    return;
                }
                flushOperation(parseInt(contador));
                operacionPrevia = null;
                contador = contadorTotal;
                contadorTotal = 0;
                break;
            case '←':
                if (contador.length === 1) {
                    contador = '0'
                }else{
                    contador = contador.substring(0, contador.length - 1);
                }
                break;
            case '+':
            case '-':
            case '×':
            case '÷':
            case '%':
            // case '.':
                handleMath(symbol);
                break;

    }
}

function handleMath(symbol){
    if(contador === '0'){
        return;
    }
    const intcontador = parseInt(contador);

    if(contadorTotal === 0){
        contadorTotal = intcontador;
    }else{
        flushOperation(intcontador);
    }
    operacionPrevia = symbol;
    contador = '0';        
}
// operadores. ↑
function flushOperation(intcontador){
    if (operacionPrevia === '+') contadorTotal += intcontador;

    else if (operacionPrevia === '-') contadorTotal -= intcontador;

    else if (operacionPrevia === '×' ) contadorTotal *= intcontador;

    else if (operacionPrevia === '÷') contadorTotal /= intcontador;

    else if (operacionPrevia === '%') contadorTotal %= intcontador;

    // else if (operacionPrevia === '.') contadorTotal = "." + intcontador;
    
}

function handleNumber(numberString){
    if (contador === "0") contador = numberString;

    else contador += numberString;
    
}
// addEventListener.
function init(params) {
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();


if (document.getElementById('#?')) {
    alert(error);
}




