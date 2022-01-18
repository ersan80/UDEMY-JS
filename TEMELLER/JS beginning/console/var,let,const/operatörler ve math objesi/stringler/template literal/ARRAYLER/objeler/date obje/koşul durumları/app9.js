/* // karşılaştırma operatörleri
// == eşit eşit
// ===  
// != 
// !==
// >
// <
// >=
// <

console.log(2 == "2")
console.log(2 ==="2") 
console.log (2>="2")
// mantıksal bağlaçlar

//not operatötü //! işareti ile gösterilir

console.log(!(2 == 2))

//AND opertaörü //&& işaretidir

console.log((2==2) && (3==3))

// OR opertaörü //  || işareti ile gösterilir

console.log((2==2) || ("ali" =="veli")) 

const error = false

if (error == true) {

    console.log("hata")

}
else {
    console.log("if çalışmadı")
}

const user = "cihan"

if (user === "cihan"){
    console.log("kullanıcı bulundu")

}
else {
    console.log("kullanıcı bulunamadı")
}

const count = 3

if (count == 1) {
    console.log("işlem başarılı")

}
else if (count == 2){
    console.log ("işlem devam etmeli 2")
}
else if (count == 3){
    console.log ("işlem devam etmeli 3")
}
else if (count == 4){
    console.log ("işlem devam etmeli 4")
}
else if (count == 5){
    console.log ("işlem devam etmeli 5")
}
else {
    console.log("işlem başarısız")


// ternary operatorü

const number = 0

console.log(number === 1000 ? "sayı 1000'eşit" : "sayı 1000 eşit değil")*/

// switch case

const process = 3
switch(process){
    case 1:
    console.log("işlem 1")

    case 2: 
    console.log("işlem 2")
  
    case 3:
    console.log("işlem 3")
 
    default:
        console.log("geçersiz işlem")


}

