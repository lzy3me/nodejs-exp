const rl = require('readline').createInterface(process.stdin)

const resultset = []
const dataset = []
let data = []
let result = []
let count = 0
let temp = 0
let total = 0

console.log('Insert total number. After with the number you want to sum')
rl.on('line', line => {
    data.push(parseInt(line))
    count++

    if (count >= data[0] + 1) {
        total = data[0]
        data = data.slice(1)
        rl.close()
    }
}).on('close', () => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] !== data[j])
                dataset.push([data[i], data[j]])
        }
    }

    if (dataset.length > 0)
        datares(dataset)
    else
        console.log(`This method choose have more than 1 dataset.`)
})

const datares = (dataset) => {
    dataset.forEach(val => {
        resultset.push(val[0] + val[1])
    })

    resultset.forEach((val, idx) => {
        if (val > temp) {
            temp = val
            result = [idx, val]
        }
    })
    console.log(`${dataset[result[0]][0]} + ${dataset[result[0]][1]} = ${result[1]} is Max.`)
}