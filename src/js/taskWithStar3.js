// const personalPlanPeter = {
    // name: "Peter",
    // age: "29",
    // skills: {
        // languages: ['ru', 'eng'],
        // programmingLangs: {
            // js: '20%',
            // php: '10%'
        // },
        // exp: '1 month'
    // },
    // showAgeAndLangs: function(plan) {
        // let str = `Мне ${plan.age} и я владею языками: `;
        // for(let i of plan.skills.languages) {
            // str += `${i.toUpperCase()} `;
        // }
        // return str;
    // }
// };
// function showExperience(plan) {
// return plan.skills.exp;
// }
// console.log(showExperience(personalPlanPeter));
// 
// function showProgrammingLangs(plan) {
    // let str = '';
    // for(let i in plan.skills.programmingLangs) {
        // if((plan.skills.programmingLangs)) {
            // str += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]}\n`;
        // }
    // }
    // return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

'use strict';
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//'Семья состоит из: Peter Ann Alex Linda'
function showFamily(arr) {
    let str = 'Семья пуста';
    if(arr[0]) {
        str = 'Семья состоит из: '; 
        for(let i of arr) {
        str += `${i} `;
    }
    }
    return str;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let i of arr)console.log(i.toLowerCase());
}
standardizeStrings(favoriteCities);

