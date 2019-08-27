let fruits = [
 {
    name: 'Lemon',
    color: 'Yellow'
 },
  {
    name: 'apple',
    color: 'red'
 },
   {
    name: 'pineapple',
    color: 'brown'
 }
];

function printInfo() {
 document.write(`Fruits is ${this.name} with color ${this.color} `);
 document.write('<hr>');
}

for (let i = 0; i < fruits.length; i++) {
 //printInfo.call(fruits[i], [fruits[i].name], [fruits[i].color]);
 printInfo.apply(fruits[i], [fruits[i].name, fruits[i].color])
 
 printInfo.apply(fruits[i], [fruits[0], fruits[1]])

}