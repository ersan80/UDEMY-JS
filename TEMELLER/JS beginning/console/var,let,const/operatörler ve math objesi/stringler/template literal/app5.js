const name = "cihan"
const departman = "bilişim"
const salary = 4000

//const a = "isim : " + name +"\n" + "departman : "+ departman+"\n"+ "maaş : "+salary

//const a = `isim:${name}\ndepartman:${departman}\nmaaş:${salary} `

//const html = "<ul>"+

//"<li>"+name+"</li>"+
//"<li>"+departman+"</li>"+
//"<li>"+salary+"</li>"


//"<ul/>"

function a(){
    x =4
    y =5
    return x+y
    
}

const html = `

<ul>

<li>${name}</li>
<li>${departman}</li>
<li>${salary}</li>
<li>${10/4}</li>
<li>${a()}</li>
</ul>



`

document.body.innerHTML = html

console.log(html)

