const user_1 = {
    name: 'John',
    surname: 'Brown',
    adress: 'London',
};
const user_2 = {
    name: 'Ann',
    surname: 'Little',
    adress: 'Berlin',
};
class User {
    constructor(object) {
        this.name = object.name;
        this.surname = object.surname;
        this.adress  = object.adress;
    }
    seyHello() {
        console.log(`${this.name}, What's Up?`);
    }
}
const seyUser_1 = new User(user_1);
seyUser_1.seyHello();
const seyUser_2 = new User(user_2);
seyUser_2.seyHello();

const userOptions_1 = {
    skill_1: 'HTML',
    skill_2: 'CSS',
    slill_3: 'JavaScript',
};
const userOptions_2 = {
    skill_1: 'HTML',
    skill_2: 'CSS',
    slill_3: 'PHP',
};
const allDate_1 = Object.assign(user_1, userOptions_1);
const allDate_2 = Object.assign(user_2, userOptions_2);
class UserOptions extends User {
    constructor (object) {
        super(object);
        this.name = object.name;
        this.surname = object.surname;
        this.adress = object.adress;
        this.skill_1 = object.skill_1;
        this.skill_2 = object.skill_2;
        this.skill_3 = object.slill_3;
    }
    skills() {
        super.seyHello(); //? get parent method!!!
        console.log(`${this.name} had skills: ${this.skill_1}, ${this.skill_2}, ${this.skill_3}`);
    }
}

const skillsUser_1 = new UserOptions(allDate_1);
const skillsUser_2 = new UserOptions(allDate_2);
console.log(skillsUser_1);
console.log(skillsUser_2);
skillsUser_1.skills();
skillsUser_2.skills();