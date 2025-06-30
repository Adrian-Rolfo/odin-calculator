const btnContainer =document.querySelector('.btn-container');

const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const btnMult = document.querySelector('#btnMult');
const btnDivide = document.querySelector('#btnDivide');
const btnDec = document.querySelector('#btnDec');
const btnEql = document.querySelector('#btnEql');

const btnClr = document.querySelector('#btnClr');
const btnDel = document.querySelector('#btnDel');

btnContainer.addEventListener('click', 
    event => {
        const target = event.target;

        switch (target) {
            case btn0:
                console.log('Pressed 0');
                break;
            case btn1:
                console.log('Pressed 1');
                break;
            case btn2:
                console.log('Pressed 2');
                break;
            case btn3:
                console.log('Pressed 3');
                break;
            case btn4:
                console.log('Pressed 4');
                break;
            case btn5:
                console.log('Pressed 5');
                break;
            case btn6:
                console.log('Pressed 6');
                break;
            case btn7:
                console.log('Pressed 7');
                break;
            case btn8:
                console.log('Pressed 8');
                break;
            case btn9:
                console.log('Pressed 9');
                break;

            case btnPlus:
                console.log('Pressed +');
                break;
            case btnMinus:
                console.log('Pressed -');
                break;
            case btnMult:
                console.log('Pressed ×');
                break;
            case btnDivide:
                console.log('Pressed ÷');
                break;
            case btnDec:
                console.log('Pressed .');
                break;
            case btnEql:
                console.log('Pressed =');
                break;

            case btnClr:
                console.log('Pressed CLEAR');
                break;
            case btnDel:
                console.log('Pressed DEL');
                break;

            default:
                break;
        }
    }
);
