// run();
//function declaration
// function run(){
//     console.log('running')
// }
//function assignment
//1.named function assignment
// let stand=function walk(){
//     console.log('walking')
// }
// 2.anonomys function assignment
// let stand2=function(){
//     console.log('walking')
// }
// stand();

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }
// console.log(sum(1,2,3,4,5,6))

// function sum(num,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6)

// function interest(p,r=6,y=9){
//     return p*r*y/100;
// }

// console.log(interest(10000,undefined,undefined));

// let person={
//     fname: 'Pankaj',
//     lname: 'Bhosale',
//     get fullName(){
//         return `${person.fname} ${person.lname}`;
//     },
//     set fullName(value){
//         if(typeof value !==String){
//             throw new Error("You have not sent a string");
//         }
//         let parts=value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// };

// function fullName(){
//     return `${person.fname} ${person.lname}`
// }

// console.log(fullName());

// try{
//     person.fullName=true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// let arr=[1,2,3,4];

// let total=0;
// for(value of arr){
//     total+=value;
// }
// let totalSum=arr.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
// console.log(totalSum);

//Prevents Default action
// let thirdLink=document.getElementById('thirdLink');
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya,accha laga');
// });

let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName=='SPAN')
    {
        console.log('span par click kia hai'+event.target.textContent);
    }
});
