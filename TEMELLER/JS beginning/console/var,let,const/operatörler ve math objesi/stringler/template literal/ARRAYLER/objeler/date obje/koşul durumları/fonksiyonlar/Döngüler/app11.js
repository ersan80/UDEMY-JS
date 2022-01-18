//While Döngüler
/* let i = 0
while(i<10){
    console.log(i);
    i += 2;
} */

/* let i = 10;

while(i>0){
    console.log(i);
    i -= 2;
} */

//BREAK VE CONTINUE

/* let i = 0;
while(i<10) {
    console.log(i);
    if(i ==5){
        break;
    };
    i++;
} */

/* let i = 0;
while(i<10) {
    if (i==3 || i==5){
        i++;
        continue;
    }
    console.log(i)

    i++;
}  */


// Do While

/* let i = 0;
do {
    console.log(i);
    i++
}while(i<10); */


let langs = ["pyhton", "JS","Java"]

//let index = 0;

/* while(index<langs.length){
    console.log(langs[index]);
    index++;

} */

/* for(let index = 0; index<langs.length; index++){
    console.log(langs[index])
} */

/* langs.forEach(function(langs,index){
    console.log(langs,index)
}) */


////MAP FONKSİYONU


const user = [
    {name: "cihan", age: 45},
    {name:"kemal", age: 35},
    {name:"Kedi", age: 65},
];

const name = user.map(function(user){
    return user.name;
});

console.log(name)