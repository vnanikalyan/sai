const input = "d)(('')b + ((a :-) - b :-( =)) "
const stack = []

for(const i of input) {
    if(i === '(') {
        stack.push('1')
    } else if(i === ')') {
        stack.pop()
    }
}

if(stack.length === 0) {
    console.log('Parentheis are balanced in the given input string')
} else {
    console.log('Parentheis are not balanced in the given input string')
}
