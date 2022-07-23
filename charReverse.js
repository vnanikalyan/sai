//Parser function - splits the sentence based on space, comma, dot.
function parser(sentence) {
    let tempWord = ''
    let tempArr = []
    for(const i of sentence) {
        //console.log(i)
        if(i === ' ' || i === ',' || i === '.') {
            tempArr.push(tempWord)
            tempArr.push(i)
            tempWord = ''
        } else {
            tempWord += i
        }
    }
    tempArr.push(tempWord)
    return tempArr
}

//Reverse functon
function reverse(word) {
    let reversedWord = ''
    for(let i=word.length-1; i>=0; i--) {
        reversedWord += word[i]
    }    
    return reversedWord
}



function main() {
    const sentence = "The,quick brown.fox"
    const parsedSentence = parser(sentence)
    console.log('SENTENCE - ', sentence)
    console.log('PARSED SENTENCE - ', parsedSentence)

    let finalSentence = ''
    for(const i of parsedSentence) {
        finalSentence += reverse(i)
    }

    console.log('REVERSED SENTENCE - ', finalSentence)
}

main()