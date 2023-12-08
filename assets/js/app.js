console.log("Ton année de naissance ? ");


const annee = 2023;
const name = "Matt"
const annee2 = 2003;
let annee4 = 2026;
var annee3 = 2025; //ne plus utiliser ce type 


const isAdmin = false;
const tab = [2,4];
const apprenants = ["Matt" , "Max" , "Fifi"];
const sac = { livre : 'BD Tintin', trousse : 'stylo', skills:["bagarre", "Jeux vidéos"]}
const disque = document.getElementById("disque")

console.log(sac.skills[0]);
console.log(sac.skills);
console.log(apprenants);
console.log(sac);

apprenants.forEach(
    prenom =>{
        console.log(`Bonjour${prenom}`)
    }
)



console.log(`Bonjour ${name}`);
const calculAge2 = ()=>{
    console.log(`Résulat : ${annee - annee2}`);
}
calculAge2();

function calculAge()
{
    console.log(`Résulat : ${annee - annee2}`);
}

//if(annee - annee2 < 18)
//{
//     console.log("Tu rentres pas");
//}
//else
//{
  //  console.log("Tu rentres")
//}

annee - annee2 > 18 ? console.log("Tu rentres") : console.log("Tu rentres pas");


