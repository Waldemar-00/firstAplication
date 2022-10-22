// function pow(base, degree) {
    // if(degree === 1)return base;
    // else return base * pow(base, degree - 1);
// }
// console.log(pow(2, 7));

const students = {
    js: [
        {
            name: 'John',
            progress: 100,
        },
        {
            name: 'Ivan',
            progress: 60,
        },
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20,
            },
            {
                name: 'Ann',
                progress: 18,
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10,
            }
        ]
    },
    next : {
        js: [
    {
        name: 'John',
        progress: 100,
    },
    {
        name: 'Ivan',
        progress: 60,
    },
],
html: {
    basic: [
        {
            name: 'Peter',
            progress: 20,
        },
        {
            name: 'Ann',
            progress: 18,
        }
    ],
    pro: [
        {
            name: 'Sam',
            progress: 10,
        }
    ]
},
    }
};
function getStudentsProgress(students) {
    let amountStudents = 0;
    let lastArray = [0, 0];
    if(Array.isArray(students)) {
        for (let obj of students) {
            amountStudents += obj.progress; 
        }
        return [amountStudents, students.length];
    }else {
        for (let innerStudents of Object.values(students)) {
            let firstArray = getStudentsProgress(innerStudents);
            lastArray[0] += firstArray[0];
            lastArray[1] += firstArray[1];
        }
    }
    return  (lastArray);
}
const rez = getStudentsProgress(students);

console.log(rez);
console.log(rez[0] / rez[1]);

function getFactorial(n) {
    if(n === 0)return 1;
    if(n % 1 !== 0 || isNaN(n))return 'Write number from zero and more, and not fractional number';
    if(n <= 0)return 1;
    return n * getFactorial(n - 1);
}
console.log(getFactorial(5.5));