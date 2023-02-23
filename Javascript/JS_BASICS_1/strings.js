// let first='XYZ';
// let message=`Hello ${first}
// Thanks for the Opportunity

// Regards,
// Pankaj`;
// console.log(message);

// let courses=[
//     {no:1,name:"Pankaj",department:"CSE"},
//     {no:2,name:"Beluga",department:"CSE"},
//     {no:3,name:"Wolverine",department:"CSE"}
// ];

// console.log(courses.find(function(course){
//     return course.name==='Pankaj';
// }));
// console.log(courses.find(course=> course.name==='Pankaj'));
// let numbers=[1,2,3,4,5,6];
// numbers.push(7);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// numbers.splice(2,0,10,11,12,13,14);
// console.log(numbers);
// // numbers.length=0;
// let temp=[14,15,16,17,18,19];
// numbers=numbers.concat(temp);
// console.log(numbers);
// let sliced=numbers.slice(0,4);
// console.log(numbers);
// console.log(sliced);
// let first=[1,2,3,4];
// let second=[5,6,7,8];
// let numbers=[...second,...first];
// let joined=numbers.join('');
// numbers.sort((a,b)=> a<b);
// console.log(numbers);
// joined=joined.split('');
// joined.sort();
// console.log(joined);
// numbers=numbers.filter((value)=> value>=2);
// console.log(numbers);
let numbers = [1,2,-6,-9];
let i=0;
let items = numbers.map(num => {i: num});

console.log(items);
