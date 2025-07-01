const btnContainer =document.querySelector('.btn-container');
//number buttons
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
const numBtns = [btn0, btn1, btn2, btn3, btn4, btn5, 
                btn6, btn7, btn8, btn9, btn0];
//operator buttons
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const btnMult = document.querySelector('#btnMult');
const btnDivide = document.querySelector('#btnDivide');
const btnEql = document.querySelector('#btnEql');
const operatorBtns = [btnPlus, btnMinus, btnMult, btnDivide, btnEql];
//other buttons
const btnClr = document.querySelector('#btnClr');
const btnDel = document.querySelector('#btnDel');
const btnDec = document.querySelector('#btnDec');
//screen 
const inputPast = document.querySelector('#inputPast');
const inputCurrent = document.querySelector('#inputCurrent');

//logic variables
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['/', '*', '-', '+'];
let calc = [];
let result = '';

btnContainer.addEventListener('click', 
    event => {
        const target = event.target;

        switch (target) {
            case btn0:
                console.log('Pressed 0');
                addCalc('0');
                break;
            case btn1:
                console.log('Pressed 1');
                addCalc('1');
                break;
            case btn2:
                console.log('Pressed 2');
                addCalc('2');
                break;
            case btn3:
                console.log('Pressed 3');
                addCalc('3');
                break;
            case btn4:
                console.log('Pressed 4');
                addCalc('4');
                break;
            case btn5:
                console.log('Pressed 5');
                addCalc('5');
                break;
            case btn6:
                console.log('Pressed 6');
                addCalc('6');
                break;
            case btn7:
                console.log('Pressed 7');
                addCalc('7');
                break;
            case btn8:
                console.log('Pressed 8');
                addCalc('8');
                break;
            case btn9:
                console.log('Pressed 9');
                addCalc('9');
                break;

            case btnPlus:
                console.log('Pressed +');
                addCalc('+');
                break;
            case btnMinus:
                console.log('Pressed -');
                addCalc('-');
                break;
            case btnMult:
                console.log('Pressed ×');
                addCalc('*');
                break;
            case btnDivide:
                console.log('Pressed ÷');
                addCalc('/');
                break;

            case btnDec:
                console.log('Pressed .');
                addCalc('.');
                break;
            case btnEql:
                console.log('Pressed =');
                evaluate();
                break;

            case btnClr:
                console.log('Pressed CLEAR');
                clr();
                break;
            case btnDel:
                console.log('Pressed DEL');
                del();
                break;

            default:
                break;
        }
    }
);

function updateCurInpTxt() {
    inputCurrent.textContent = calc
            .map(e => {
                if(e === '/') return ' ÷ ';
                if(e === '*') return ' × ';
                if(e === "+") return ' + ';
                if(e === '-') return ' - ';
                return e;
            })
            .join('');
}

function updatePastInpTxt() {
    inputPast.textContent = result;
}

function addCalc(input) {
    calc.push(input);
    updateCurInpTxt();
    console.log(calc);
}

function del() {
    calc.pop();
    updateCurInpTxt();
    console.log(calc);
}

function clr() {
    calc.length = 0;
    result = '';
    updateCurInpTxt();
    updatePastInpTxt();
    console.log(calc);
}

function add(x, y) {

}

function subtract(x, y) {

}

function mult(x, y) {

}

function div(x, y) {

}

function evaluate() {
    if(calc.length === 0) return;
    //check if decimal appears twice before an operator appears once
    //check if operator '/' or '*' appears twice in a row
    //check for 'hanging' operators 
    //BE ABLE TO PARSE FOR NEGATIVE NUMBERS
        //converting +- chains to condensed + or -
    //push valid nums (dec and negative) and operators into string
    //evaluate string
    //DONT use eval function instead eval like this
    /*
    parse through input and look for high precendence operators. / or *
    depending on operator, pass adjacent numbers to relevant function.
    remove 3 entries from original list. Replace with returned value.

    continue iterating through list until only 1 entry remains
    this 1 entry is the result.

    if at any point there is a math rule being broken, ie /0. return Math ERROR
    if syntax is wrong. return Syntax ERROR
    */

    result = eval(calc.join(''));
    calc.length = 0;
    calc.push(result);
    updateCurInpTxt();
    updatePastInpTxt();
}

function operate(calc) {
    
}

function init() {
    let result = parseInt('1 + - + - + - - - - - - - - 2');
    let result1 = 1 + - + - + - - - - - - - - 2;
    console.log(result);
}

init();