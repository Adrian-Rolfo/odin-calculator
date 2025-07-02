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
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
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
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function mult(x, y) {
    return x*y;
}

function div(x, y) {
    return x / y;
}

//check if last place is an operator
//check if first string of operators contains either / or *
function hasHangingOperators(arr) {
    const firstNumIndex = arr.findIndex(num => nums.includes(num));
    const firstOperatorString = arr.slice(0, firstNumIndex);
    const last = arr.at(-1);

    const isValidStart = !firstOperatorString.includes('*', '/');
    const isValidEnd = !operators.includes(last)
    
    //true if NOT  a valid start
    return !isValidStart || !isValidEnd;
}

/*check if decimal appears twice :
    before first operator 
    between any subsequent operators
    from last operator to end
*/
function hasDoubleDecimal(arr) {
    //creates slicedArr
    //adds groups of nums as an array to an element in slicedArr
    // num      = [1, +, 2, ., -, *, ., 3]
    //slicedArr = [[1], [2, .], [., 3]]
    let lastNumArr = []
    let slicedArr = [];
    arr.forEach(e => {
        if(operators.includes(e)) {
            if(lastNumArr.length !== 0) {
                slicedArr.push([...lastNumArr]);
                lastNumArr.length = 0;
            }
        }
        if(nums.includes(e)) {
            lastNumArr.push(e);
        }
    });
    slicedArr.push([...lastNumArr]);

    console.log('SLICED ARRAY ');
    console.table(slicedArr);

    //returns result if any sub array contains double decimals
    return hasDblDec = slicedArr.some(e => {
        const numDec = e.reduce((acc, cur) => {
                return cur === '.' ? acc + 1 : acc;
            }
            , 0
        );
        return numDec > 1;
    });
}

//check if * and / appear more than once in any consecutive operator string
function hasDoubleOperators(arr) {
    let lastOprArr = [];
    let slicedArr = [];
    arr.forEach(e => {
        if(nums.includes(e)) {
            if(lastOprArr.length !== 0) {
                slicedArr.push([...lastOprArr]);
                lastOprArr.length = 0;
            }
        }
        if(operators.includes(e)) {
            lastOprArr.push(e);
        }
    });
    slicedArr.push([...lastOprArr]);
    
    console.log('SLICED ARRAY ');
    console.table(slicedArr);
    
    const sOpr = ['*', '/'];
    return hasDblOpr = slicedArr.some(e => {
        const numSOpr = e.reduce((acc, cur) => {
                return sOpr.includes(cur) ? acc + 1 : acc;
            }
            , 0
        );
        return numSOpr > 1;
    });
}


//reduce consecutive + - string to minimum signage before first num appearance
function trimStart(arr) {
    
}

//after first num appearance condense + - in operator strings to min signage
function condensePlusMinus(arr) {
    //keys are [index in arr, initial length], value is arr of operators
    let slicedOprObj = {};
    let lastOprArr = [];

    arr.forEach((e, i) => {
        if(nums.includes(e)) {
            if(lastOprArr.length !== 0) {
                const firstNumIndex = i - lastOprArr.length;
                slicedOprObj[[firstNumIndex, lastOprArr.length]] = [...lastOprArr];
                lastOprArr.length = 0;
            }
        }
        if(operators.includes(e)) {
            lastOprArr.push(e);
        }
    });
    
    console.log('SLICED ARRAY ');
    console.table(slicedOprObj);
    
    for(const [key, oprArr] of Object.entries(slicedOprObj)) {
        if(key[1] === '1') continue;

        const search = ['+', '-'];
        let numMinus = 0;
        //iterate through value array. 
        //pop every +/- i see and evaluate how many - i have
        //if number of minus is odd push '-'
        //if number of minus is even push '+'
        
        for(let i = oprArr.length; i >= 0; i--) {
            const opr = oprArr[i];
            if(search.includes(opr)) {
                if(opr === '-') numMinus++;
                oprArr.splice(i, 1);
            }
        }

        if(numMinus%2 === 1) {
            oprArr.push('-');
        }
    }

    console.log('SLICED OBJ AFTER MULTIPLE MINUS REMOVING');
    console.table(slicedOprObj);
    
}

//combine nums between operators and decimals into single arr element
function combineNum(arr) {

}

//combine num adjacent to decimals to single element (if they exist)
//if not exist, adj = 0. 
//lone decimal '.' with no adjacent num replace with 0
/*  eg 
    [1, . , 2]  = [1.2] 
    [. , 2]     = [0.2]
    [2, . ,]    = [2.0]
    [2, +, .]   = [2, +, 0]
*/
function combineDecimal(arr) {

}

function evaluate() {
    if(calc.length === 0) return;
    //check for 'hanging' operators 
    //check if decimal appears twice before an operator appears once
    //check if operator '/' or '*' appears twice in a row
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

    try {
        //hanging operators
        if(hasHangingOperators(calc)) {
            throw new CalcSyntaxError('Hanging Operator');
        }
        //double decimal
        if(hasDoubleDecimal(calc)) {
            throw new CalcSyntaxError('Decimal appears twice');
        }
        //adjacent multiplicaiton or division
        if(hasDoubleOperators(calc)) {
            throw new CalcSyntaxError('÷ or × appear twice in a row');
        }

        const calcCondensed = condensePlusMinus(calc);
        const calcComb = combineNum(calcCondensed);
        const calcDec = combineDecimal(calcCondensed);

        //evaluate
        const calcResult = 0;

    } catch (e) {
        if(e instanceof CalcMathError) {
            console.error(e.message);
        }
        else if (e instanceof CalcSyntaxError) {
            console.error(e.message);
        }
        else {
            console.error(e.message);
        }
    }


    calc.length = 0;
    calc.push(result);
    updateCurInpTxt();
    updatePastInpTxt();
}

class CalcSyntaxError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalcSyntaxError";
    }
}

class CalcMathError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CalcMathError';
    }
}

function init() {
    // let result = ['+','-', '*', '2', '3', '4', '5', '+', '2'];
    // console.log(hasHangingOperators(result));
    // console.log(result);

    // let dbDec = ['.', '.', '*', '3', '4', '.', '+', '4', '.', '3', '2', '+', '2'];
    // console.log(dbDec);
    // console.log(hasDoubleDecimal(dbDec));
    
    // let dbOpr = ['1', '+', '*', '3', '4', '.', '+', '/', '.', '3', '2', '+', '2'];
    // console.log(dbOpr);
    // console.log(hasDoubleOperators(dbOpr));

    let cdnPM = ['1', '+', '-', '-', '+', '-', '*', '+', '4', '.', '+', '-', '*', '3', '2', '+', '2'];
    console.log(cdnPM);
    condensePlusMinus(cdnPM);

}

init()