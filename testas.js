//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log(mas1.length);

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];

for(let i = 0; i < mas2.length; i++) {
    console.log(i, mas2[i]);
}

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
for(let i = 0; i< mas3.length; i++) {
   if(mas3[i] % 2 == 0) {
       console.log(i, mas3[i]);
   }
}
//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };

console.log(obj1.labas);
console.log(obj1.laba);
console.log(obj1.labs);
 
//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class Grybas {
    constructor(tipas) {
        this.tipas = "Baravykas";
        this.tipas = "Ūmedė";
        this.tipas = "Lepšis";
    }
}
console.log(Grybas);
