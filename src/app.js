console.log("Merhaba Kodlama.io")

//Yorum Satırı

// var dolarDun = 9.20
// dolarDun = "Ankara"
// var dolarBugun = 9.30
// console.log(dolarDun)

/////////////////////////////////////////////////////
let dolarBugun = 9.30 
let dolarDun = 9.20

{
    let dolarDun = 9.10
    //bu şekilde 9.10 u algılamaz
    //let yerine var olarak tanımlasak iki dolarDun üde
    //9.10 u algılardı
}

console.log(dolarDun)
/////////////////////////////////////////////////////

const euroDun = 11.2
console.log(euroDun)

/////////////////////////////////////////////////////

// let konutKredileri = [12,"Konut kredisi", ["Emlak kredisi", "Kamu konut kredisi"]]
let konutKredileri = ["Konut kredisi", "Emlak kredisi", "Kamu konut kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; ++i){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")




