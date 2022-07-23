const input = "((hello world)"

let leftParenthesisCnt = 0
let rightParenthesisCnt = 0

for(const i of input) {
    if(i === '(') {
        leftParenthesisCnt++
    } else if(i === ')') {
        rightParenthesisCnt++
    }
}

if(leftParenthesisCnt === rightParenthesisCnt) {
    console.log('Parentheis are balanced in the given input string')
} else {
    console.log('Parentheis are not balanced in the given input string')
}