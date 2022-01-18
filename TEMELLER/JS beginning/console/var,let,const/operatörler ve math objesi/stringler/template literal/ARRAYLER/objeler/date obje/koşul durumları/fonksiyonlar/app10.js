/* //Fonksiyon Tanımlama

function merhaba(name = "Bilgi yok", age = "bilgi yok") {

   /*  if(typeof name === "undefined") name = "Bilgi yok";
    if(typeof age === "undefined") age = "Bilgi yok" */
    //console.log("isim: ",name," ,","yaş :",age)
//}

//Function call
//merhaba("cihan",40);
//merhaba("mahmut")
 
/* function square (x){
    console.log("bla")
    return x**2 
}
function cube(y){
    console.log(y**3)
}
let a =   square(12)
a = cube(a) */

/* function merhaba(){
    return "james"
}
console.log(merhaba()) */

/* let nerhaba = function(name){
    console.log("ccihan " , name)
}
nerhaba("halit") */

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ** TANIMLANDIĞI YERDE ÇALIŞAN FONKSİYONLAR

/* (function(name){
    console.log("merhaba", name);
})("cihan"); */


const database = {
    host: "local",
    add: function(){
        console.log("eklendi")
    },
    get: function(){
        console.log("tamamalandı")
    },
    update: function(id = "bilgi yok"){
        console.log("id : ",id," güncellendi" )
    },
    delete:function(id){
        console.log("id :",id ," silindi" )
    }
}

console.log(database.host);
database.add()
database.delete(10)
database.update()