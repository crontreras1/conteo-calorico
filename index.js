// const mb = Number((10 * weigth) + (6.25 * height) - (5 * age) + 5); 

const femaleBtn = document.querySelector ('#female-button');
// femaleBtn.addEventListener ('click', femaleKcal); 

const maleBtn = document.getElementById ('male-button'); 
maleBtn.addEventListener ('click', maleKcal);

// function femaleKcal (weigth, height, age) {
//     const femaleMb = `${mb} - 161`; 
// }

function maleValues (weigth, height, age) {
    const maleMb = Number((10 * weigth) + (6.25 * height) - (5 * age) + 5);
    return maleMb; 
}

function maleKcal () {
    const maleResult = maleValues(value);
    alert(`Tu consumo de calorias diarias son de ${maleResult} calorias`);   
}

