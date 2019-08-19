
const user = {
    name: 'alex'
};

const User1 = {
    age: 26
};

const User01 =  {
    bornDate: 1993
};

user.__proto__ = User1;
sameUser.__proto__ = User01;

console.log(user.name);
console.log(user.age);
console.log(user.bornDate);