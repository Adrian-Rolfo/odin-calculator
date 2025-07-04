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
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function mult(x, y) {
    return parseFloat(x)*parseFloat(y);
}

function div(x, y) {
    return parseFloat(x) / parseFloat(y);
}

function operate(operator, x, y) {
    switch (operator) {
        case '*':
            return mult(x, y);
            break;
        case '/':
            return div(x, y);
            break;
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        default:
            console.error('Not a valid operator');
            return undefined;
            break;
    }
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
    let slicedOprMap = new Map();
    let lastOprArr = [];

    arr.forEach((e, i) => {
        if(nums.includes(e)) {
            if(lastOprArr.length !== 0) {
                const firstNumIndex = i - lastOprArr.length;
                slicedOprMap.set([firstNumIndex, lastOprArr.length], [...lastOprArr]);
                // console.log('ADDING:', [firstNumIndex, lastOprArr.length], [...lastOprArr]);
                // console.log('Map size:', slicedOprMap.size);
                lastOprArr.length = 0;
            }
        }
        if(operators.includes(e)) {
            lastOprArr.push(e);
        }
    });    
    
    //
    slicedOprMap.forEach(
        (oprArr, key) => {
            if(key[1] === 1) return; //dont want to condense length of one

            const search = ['+', '-'];
            let numMinus = 0;
            //iterate through value array. 
            //pop every +/- i see and evaluate how many - i have
            //if number of minus is odd push '-'
            //if number of minus is even push '+'
            
            for(let i = oprArr.length - 1; i >= 0; i--) {
                const opr = oprArr[i];
                if(search.includes(opr)) {
                    if(opr === '-') numMinus++;
                    oprArr.splice(i, 1);
                }
            }

            if(numMinus%2 === 1) {
                oprArr.push('-');
            }
            else {
                oprArr.push('+');
            }
        }
    );
    
    //
    let copyArr = [...arr];
    const reverseMapEntries = Array.from(slicedOprMap.entries()).reverse();
    for(const [key, oprArr] of reverseMapEntries) {
        [index, length] = [key[0], key[1]];
        copyArr.splice(index, length, ...oprArr.flat());
    }
    // console.log(copyArr);
    console.log('CONDENSE PLUS MINUS ' + copyArr);
    return copyArr;
}

//combine nums between operators and decimals into single arr element
function combineNum(arr) {
     //keys are [index in arr, initial length], value is arr of nums
    let slicedNumMap = new Map();
    let lastNumArr = [];

    arr.forEach((e, i) => {
        if(operators.includes(e)) {
            if(lastNumArr.length !== 0) {
                const firstNumIndex = i - lastNumArr.length;
                slicedNumMap.set([firstNumIndex, lastNumArr.length], [...lastNumArr]);
                lastNumArr.length = 0;
            }
        }
        if(nums.includes(e)) {
            lastNumArr.push(e);
        }
    });    

    const lastNumIndex = arr.length - lastNumArr.length;
    slicedNumMap.set([lastNumIndex, lastNumArr.length], [...lastNumArr]);

    // console.log('SLICED ARRAY ');
    // console.table(slicedNumMap);

        slicedNumMap.forEach(
        (numArr, key) => {
            if(key[1] === 1) return; //cant condense length 1
            
            slicedNumMap.set(key, numArr.join(''));
        }
    );

    // console.table(slicedNumMap);

    let copyArr = [...arr];
    const reverseMapEntries = Array.from(slicedNumMap.entries()).reverse();
    for(const [key, numStr] of reverseMapEntries) {
        [index, length] = [key[0], key[1]];
        copyArr.splice(index, length, numStr);
    }
    
    console.log('COMBINE NUM ' + copyArr.flat());
    return copyArr.flat();
    
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
    arr.forEach((e, i) => {
        const strArr = e.split('');

        //has no decimal
        if(!strArr.includes('.')) return;

        let decIndex = strArr.findIndex(e => e === '.');

        //decimal doesn't appear at start or end
        if(decIndex !== 0 && decIndex !== strArr.length - 1) return;

        //if dec is at start of array add 0 infront of it
        if(decIndex - 1 < 0) {
            strArr.unshift('0')
            decIndex++;
        };
        //if dec is at end of array add 0 after it
        if(decIndex + 1 === strArr.length) strArr.push('0');

        arr[i] = strArr.join('');
    })

    console.log('COMBINE DECIMAL ' + arr);

    return arr;
}

function makeNegatives(arr) {
    if(arr[0] === '+') {
        arr.shift();
    }
    if(arr[0] === '-') {
        arr.shift();
        arr[0] = '-' + arr[0];
    }
    // const isFirstNum = nums.includes(arr[0]);
    // if(!isFirstNum) {
    //     arr.shift();
    //     arr[0] = '-' + arr[0];
    // }

    for(let i = 0; i < arr.length - 2; i++) {
        const first = arr[i];
        const second = arr[i + 1];
        const third = arr[i + 2];

        if(operators.includes(first) && second === '-' && !isNaN(third)) {
            arr.splice(i + 1, 2, second + third);
            i--;
        }
    }
    
    console.log('MAKE NEGATIVES ' + arr);
    return arr;
}

        //form:
        /*
        [-, 2, +, 3.02, *-, 0.0]
        or
        [2, +, 3.02, *, -0.0]

        all nums exist as one element

        */
function calculate(arr) {
    //iterate through array check for all operators
    //create 2 arrays
    //count num of * or /
    //operator order array
    //index of operator array
    //search though operator order array, priority high precedence operator
    //  keep track of this through count of * or /
    //

    let countMultDiv = 0;
    let oprOrderArr = [];
    let oprIndexArr = [];

    arr.forEach((e, i) => {
        if(operators.includes(e)) {
            if(e === '*' || e === '/') countMultDiv++;
            oprOrderArr.push(e);
            oprIndexArr.push(i);
        }
    })
    
    // console.log('COUNT MULT DIV ' + countMultDiv);
    
    // console.log('OPR ORDER ARRAY ' + oprOrderArr);
    // console.log('OPR INDEX ARRAY ' + oprIndexArr);
    
    
    let loop = 0;
    while(oprOrderArr.length !== 0) {
        // console.log('LOOP' + loop++);
        // console.log(countMultDiv);
        let oprInd;
        if(countMultDiv > 0) {
            oprInd = oprOrderArr.findIndex(e => e === '/' || e === '*');
            countMultDiv--;
        }
        else {
            oprInd = oprOrderArr.findIndex(e => operators.includes(e));
        }

        const indexInArr = oprIndexArr[oprInd];
        const result = operate(
            arr[indexInArr], arr[indexInArr - 1], arr[indexInArr + 1]
        );
        
        arr.splice(indexInArr - 1, 3, `${result}`);
        console.log(arr);
        
        oprOrderArr.splice(oprInd, 1);
        // console.log(`OPR ORDER ARR LOOP ${loop} ` + oprOrderArr);
        oprIndexArr.splice(oprInd, 1);
        oprIndexArr.forEach((e, i) => {
            if(i < oprInd) return;
            oprIndexArr[i] = e - 2;
        });
        // console.log(`OPR INDEX ARR LOOP ${loop} ` + oprIndexArr);
    }

    return arr;

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
        const calcCombDec = combineDecimal(calcComb);
        const calcFINAL = makeNegatives(calcCombDec);


        //JUST HAVE TO EVALUATE THE ARRAY NOW
        const calcResult = calculate(calcFINAL);


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

    // let cdnPM = ['+', '-', '.', '-', '1', '+', '-', '-', '+', '-', '*', '+', '4', '.', '+', '-', '*', '3', '2', '+', '2'];
    // console.log(cdnPM);
    // console.log(condensePlusMinus(cdnPM));

    // let cmbNum = ['1', '+', '*', '3', '4', '.', '7', '4', '3', '+', '/', '.', '3', '2', '+', '2'];
    // console.log(cmbNum);
    // combineNum(cmbNum);

    // let cmbNumCdnPM = ['+', '-', '.', '-', '1', '+', '-', '-', '+', '-', '*', '+', '4', '.', '+', '-', '.', '*', '3', '2', '+', '.', '2'];
    // console.log(cmbNumCdnPM);
    
    // console.log(combineNum(condensePlusMinus(cmbNumCdnPM)));
    // console.log(combineDecimal(combineNum(condensePlusMinus(cmbNumCdnPM))));
    // let val = makeNegatives(combineDecimal(combineNum(condensePlusMinus(cmbNumCdnPM))));
    // console.log(val);
    // console.log(calculate(val));

    const arr1 = ['+', '-', '+', '-', '.', '-', '3', '.', '2', '+', '-', '5', '*', '-', '.', '4', '+', '-', '.', '6']; //-1.8
    const arr2 = ['-', '.', '6', '4', '+', '+', '-', '2', '.', '0', '*', '3', '.', '-', '1', '+', '-', '.', '7','+', '+', '5']; //3.61
    const arr3 = ['+', '-', '9', '.', '+', '.', '1', '-', '4', '0', '*', '-', '.', '5', '+', '-', '.', '3', '+', '2']; //14.8
    const arr4 = ['-', '-', '.', '3', '+', '7', '.', '-', '2', '*', '8', '.', '-', '.', '6', '-', '+', '.', '4', '1']; //-9.71
    const arr5 = ['+', '1', '.', '-', '.', '9', '+', '-', '+', '4', '*', '.', '2', '-', '.', '1', '+', '.', '5', '8']; //-0.22
    
    // console.log('RESULT ' + calculate(makeNegatives(combineDecimal(combineNum(condensePlusMinus(arr1))))));
    console.log(arr2);
    
    console.log('RESULT ' + calculate(makeNegatives(combineDecimal(combineNum(condensePlusMinus(arr2))))));
    // console.log('RESULT ' + calculate(makeNegatives(combineDecimal(combineNum(condensePlusMinus(arr3))))));
    // console.log('RESULT ' + calculate(makeNegatives(combineDecimal(combineNum(condensePlusMinus(arr4))))));
    // console.log('RESULT ' + calculate(makeNegatives(combineDecimal(combineNum(condensePlusMinus(arr5))))));

    
    
    
    
    
    // let cmbDec = ['.', '1', '*', '3', '4', '.', '+', '4', '.', '3', '2', '+', '.'];
    // console.log(cmbDec);
    // combineDecimal(cmbDec);
}

init()