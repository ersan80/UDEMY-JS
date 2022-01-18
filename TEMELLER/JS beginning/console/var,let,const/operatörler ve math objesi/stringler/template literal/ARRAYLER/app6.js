let value
const numbers = [43,53,58,96,456,1252]

const lang = ["pyhton","java","c++","js"]

const a = ["merhaba", 22, null,3.14,undefined ]


//insdeksleme
value = numbers.length

value = numbers[0]

value = numbers[numbers.length-1]

// herhangi indek değiştirme

//numbers[0] = 1256

numbers.push(2000)
value = numbers

numbers.unshift(3000)
// pop metodu sondan silme

numbers.pop()

//shift metodu baştan silme

numbers.shift()

///splice metodu belli kısımları atma

numbers.splice(0,3)

// reverse terse çevir

numbers.reverse()

//sort metodu

numbers.sort(function (x,y) {//küçükten büyüğe
    return x-y
    
})

numbers.sort(function (x,y) {//büyükten küçüğe
    return y-x
    
})





console.log(value)