let value
const firstname = "nail"

const lastname = "armstrong"

value = firstname+ " " + lastname

value = "Cihan çetinkaya"

value += " çetinkaya"

value = firstname.length

value = firstname.concat(" ", lastname," ","caz"  )

value = firstname.toLowerCase()

value = firstname.toUpperCase()
value  = firstname[0]
value = firstname[3]
value  = firstname[firstname.length-1].toUpperCase()



// ındex of index bulma

value = firstname.indexOf("l")
value = firstname.indexOf("x") // eğer indeks yoksa -1 döndürür


// charat 

value = firstname.charAt(0) // 0. indeksteki harfi döndürür

//split

langs = "pyhton,java,c++"

value = langs.split(",")

// replace

value = langs.replace("pyhton","cihan")


//Includes içinde olup olmadığı true yada false döner

value = langs.includes("cihan")

console.log(value)