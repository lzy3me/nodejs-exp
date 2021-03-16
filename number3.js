const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const regex = /\b(i|of|the|on|at|for|with|a|an|and|in)\b/
const whitespace = /[ ,.]+/

readline.question('What\'s your sentence ?\n', aws => {
    let result = '';
    const data = aws.split(whitespace)
    console.log(data)

    data.forEach((val, idx) => {
        if (idx == 0) {
            result += val[0]
            return
        }

        if (!regex.test(val))
            result += val[0]
    })

    console.log(result.toUpperCase())

    readline.close()
})