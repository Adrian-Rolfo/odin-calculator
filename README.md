# odin-calculator
calculator that supports + - / * and clear and del

UNFINISHED UI BECAUSE I WAS NOT BOTHERED
did not integrate keyboard functionality because i was not bothered
i do not like making UI at all
and this alg i feel was really scuffed 
i could have combined the parsing steps
also i don't know how expandable it is to accomodate other operations such as 
brackets and exponents. it works for this SPECIFIC use case so whatever
i also did not take floating point errors into account.


the calculator algorithm to calculate results was made entirely by me

1.  each key press stores the value pressed into an array as a string
- eg. ['9', '*', '6', '3', '.', '0', '+', '-', '-', '*', '3', '-', '+', '*', 
        '-', '+', '.', '0', '0', '0', '8', '/', '6', '*', '2', '-', '+', '+', 
        '3', '.', '+', '.', '9', '/', '2', '*', '3', '-', '-', '-', '3']
2.  checks for valid syntax
- 'Hanging operators' operators at start or end that shouldn't be there
- 'Double Decimal' decimals appearing twice in a single number
- 'Double Operator' * or / appears twice in an operator string

3.  condenses plus and minus chains to minimum needed signage

4.  combines number strings into a single element in the array (including decimals)

5.  padds decimals with 0's if needed. This is so parseFloat is always valid
- ['.']     = ['0.0'];
- ['.0']    = ['0.0'];
- ['0.']    = ['0.0'];

6.  makes negative numbers and removes excess positives. 
    This ensures final string is always [num, operator, num, operator, num ...];

7. Calculates final result from fully parsed String. does * and / first
    1. iterates array once for necessary information
    2. finds operator (looks for * or / if array has it)
    3. calls operate() with operator plus adjacent numbers as input 
    4. returns result, throws CalcMathError if illegal.
    5. replaces operator and adjacent numbers in arr with result
    6. process repeats until no more operators are left and arr.length === 1

8. Result is displayed on the screen

