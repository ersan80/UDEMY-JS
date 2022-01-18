let value


const now = new Date() // şimdiki zaman
/* console.log(now) */

const date1 = new Date("05-17-2013 23:45:15")

value = date1.getMonth()
value = date1.getSeconds()
value = date1.getTime()

date1.setDate(15)
date1.setFullYear(1985)
date1.setHours(15)
value = date1

console.log(value)