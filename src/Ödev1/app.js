// 1- JavaScript ile istediğiniz kadar sayı parametre
// gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak
// asal olup olmadığını yazınız.
// (Araştırma konusu : şart blokları : if )

// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

function findPrime(...params) {
    for (let i = 0; i < params.length; ++i) {
        let asalMi = true
        for (let j = 2; j < params[i]/2; ++j) {
            if (params[i] % j == 0) {
                asalMi = false 
                break
            }            
        }
        if (asalMi) {
            console.log(params[i], " Asaldır")
        }
        else {
            console.log(params[i], "Asal değildir")
        } 
    }
}

findPrime(2,5,8,21,13)
findPrime(3,5)

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup
//  olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function arkadasSayi(sayi1, sayi2) {
    let sayi1_bolenler = 0
    let sayi2_bolenler = 0

    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            sayi1_bolenler += i 
        }
    }

    for (let i = 1; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            sayi2_bolenler += i 
        }
    }

    if (sayi2 == sayi1_bolenler && sayi1 == sayi2_bolenler) {
        console.log(sayi1, " ve ", sayi2, " arkadaş sayılardır")
    }
    else {
        console.log(sayi1, " ve ", sayi2, " arkadaş sayı değildir")
    }
}

arkadasSayi(220,284)
arkadasSayi(100,10)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function mukemmelSayilar() {
    
    for (let i = 1; i < 1000; i++) {
        let toplam = 0

        for (let j = 1; j < i; j++) {
            if (i % j == 0){
                toplam += j
            }   
        }
        if (i == toplam){
            console.log(i)
        }
    }
}

mukemmelSayilar()

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function asallar() {
    for (let i = 1; i < 1000; i++) {
        let asalMi = true

        for (let j = 2; j < i; j++) {
            if (i % j == 0){
                asalMi = false
                break
            }   
        }

        if (asalMi && i != 1){
            console.log(i)
        }  
    }
}

asallar()