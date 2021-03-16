const data1 = [3, 3, 4, 5, 6, 1, 2]
const data2 = [1, 2, 5, 5, 5, 7, 9]

const sumaryJoin = (arr1, arr2, isReverse) => {
    const sum = parseInt(arr1.join('')) + parseInt(arr2.join(''))
    console.log(sum)
    if (isReverse)
        return sum.toString().split('').reverse()
    else
        return sum.toString().split('')

}

console.log('Arr 1', data1)
console.log('Arr 2', data2)
console.log('Sum', sumaryJoin(data1, data2, true))