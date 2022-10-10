// const shoppingMallData = {
    // shops: [
        // {
            // width: 10,
            // length: 5
        // },
        // {
            // width: 15,
            // length: 7
        // },
        // {
            // width: 20,
            // length: 5
        // },
        // {
            // width: 8,
            // length: 10
        // }
    // ],
    // height: 5,
    // moneyPer1m3: 30,
    // budget: 50000
// }
// 
// function isBudgetEnough(data) {
    // const arrPrice = [];
    // let   volumPrice = 0;
    // let   sumPrice = 0;
    // for(let i = 0; i < data.shops.length; i++) {
        // volumPrice = data.shops[i].width *  data.shops[i].length * data.height * data.moneyPer1m3;
        // arrPrice[i] = volumPrice;
        // sumPrice += volumPrice;
    // }
    // if(sumPrice < data.budget)return 'Бюджета достаточно';
    // else return 'Бюджета недостаточно';
// }
// console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', ];

function sortStudentsByGroups(arr) {
    arr.sort();
    let comandsArr = [];
    let finalComandsArr = [];
    const len = arr.length/3;
    for(let i = 0; i < len ; i++) {
        comandsArr = [];
        for(let j = 0; j < 3; j++) {
        if(arr[j] === undefined)break;
        comandsArr.push(arr[j]);
    }
    finalComandsArr.push(comandsArr);
    for(let k = 0; k < 3; k++) {
        arr.shift();
    }
    }
    const lastArr = [];
    lastArr.push(...(finalComandsArr[finalComandsArr.length - 1]));
    if(lastArr.length < 3) {
        finalComandsArr.pop();
        let remainder = 'Оставшиеся студенты: ';
        lastArr.map((i, index) => {
            if(index === lastArr.length - 1)remainder += `${i}`;
            else remainder += `${i}, `;
        });
        finalComandsArr.push(remainder);
    }else {
        finalComandsArr.push('Оставшиеся студенты: -');
    }
    return finalComandsArr;
}
console.log(sortStudentsByGroups(students));