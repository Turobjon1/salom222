// 1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring


let  son1 = 10 

let son2 = 5

console.log(   son1 + son2   );


// 2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring 
// bering. Yani bu hozir string typeda siz number tyga o'zgartiring

let son99 = '12';

let num = Number(son99);

console.log(num);




// 3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering

for (let i = 1; i <= 20 ; i++) {
    if(i % 2 == 0){
        console.log( i + ' juft son ');
    }else{
        console.log( i + ' toq son');
    }
    
}

// 4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zning
//  o'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin

let  soz = prompt(" so'z kiriting:");


if (soz === "Mars") {
    console.log(soz);
} else {
    console.log("Mars It school");
}


// 5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi 
// so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring
var array = ["kitob", "ruchka", "qalam", "phone", "monitor"];


var Soz = [];

for (var i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
        Soz.push(array[i]);
    }
}


console.log("Uzun so'zlar:", Soz);

// 6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring

for (let i = 1; i <= 100 ; i++) {
    if(i % 2 == 0){
        console.log( i + ' juft son ');
    }else{
        console.log( i + ' toq son');
    }
    
}











