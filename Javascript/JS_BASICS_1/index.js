// console.log('Namaste Dunia version2');
// let a='Pankaj Bhosale';
// console.log(a);
// console.log('Rule the world');
// const num=12;
// let names=['Pankaj','Beluga','Wolverine'];
// for(var i=0;i<3;i++){
//     console.log(names[i]);
// }
// let age=18;
// let message=(age===18)?'YES VOTE':'NO VOTE';
// const n=89;//it's value cannot be changed
// console.log(message);
// console.log((false||'Pankaj'));
// let a='12';


//Factory Function
function createRectangle(length,breadth){
    return rectangle={
        length:length,
        breadth:breadth,
        draw(){
            console.log('drawing rectangle');
        }
    }
}

//Constructor function
function Rectangle(length,breadth){
    this.length=length;
    this.breadth=breadth;
    this.draw=function(){
        console.log('drawing');
    }
}

//let rectangle1=createRectangle(2,3);->Using Factory Function

// let rectangle1= new Rectangle(4,5);
// let rectangle2=rectangle1;
// rectangle1.length++;
// rectangle1.color='yellow';
// console.log(rectangle1);
// console.log(rectangle2);
// delete rectangle1;
// console.log(rectangle1);

// let Rectangle2= new Function(
//     'length','breadth',
//     `this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drawing');
//     }`
// );
// let rectangle={
//     length:2,
//     breadth:1
// };

// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


// Object Cloning
let src={
    a:1,
    b:2,
    c:3
};
let rectangle={
    length:2,
    breadth:1
};
let dest={};
// Method-1
// for(let key in src){
//     dest[key]=src[key];
// }
// Method-2
// dest=Object.assign({},src,rectangle);
// console.log(dest);

//Method-3
dest={...src};
console.log(dest);