const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let data = []

rl.question('Insert your number \n', (answer) => {
    let point = answer.lastIndexOf('.')
    let numb = ''
    if (point != -1)
        numb = answer.slice(0, point)
    else
        numb = answer


    for (let i = 0; i < numb.length; i++) {
        let tempo = numb[i]
        if (tempo != 0) {
            for (let o = numb.length - 1; o > i; o--)
                tempo += '0'
            data.push(tempo)
        }
    }

    console.log(data)
    rl.close()
})