// adding 100para
// const t1=performance.now();
// for(let i=0;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para'+i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("This took "+(t2-t1)+" ms");
// optimising a bit
// const t3=performance.now();
// console.log("This took")
// for(let i=0;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para'+i;
//     document.body.appendChild(newElement);
// }
// const t4=performance.now();
// console.log("This took "+(t4-t3)+" ms");

//super optimized code
// const t5=performance.now();
// let fragment = document.createDocumentFragment();
// for(let i=0;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para '+i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log("This took "+(t6-t5)+" ms");//1 Reflow and 1 repaint

//setTimeout Function
// setTimeout(function(){
//     console.log("Hello world");
// },5000);

// let meraPromise=new Promise(function(resolve,reject){
//     console.log('I am inside Promise');
//     resolve(1998);
// });
// console.log('First');

// let meraPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise');
//     },3000);
//     // resolve(1234);
//     reject(new Error('Error!!'));
// });

// meraPromise.then((value) => {console.log(value)},(error) => {console.log("Received an Error")});
// console.log('First');

// let wadaa1= new Promise(function(resolve,reject){
//     setTimeout(() => console.log('setTimeout1'))
// })

// let wadaa1= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('set timeout1 started');
//     },2000);
//     resolve(true);
// })

// let output=wadaa1.then(()=>{
//     let wadaa2= new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('set timeout2 started');
//         },2000);
//         resolve("wadaa 2 resolved");
//     })
//     return wadaa2;
// })
// output.then((value) => console.log(value));

// console.log(async function abcd(){
//     return "kya hua tera";
// });

// async function utility(){

//     let delhiMausam = new Promise((resolve,reject) => {
//         setTimeout(
//             ()=>{resolve("Delhi me bhot garmi hai");},5000
//         );
//     })

//     let hydMausum= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },6000);
//     })

//     let dM =await delhiMausam;
//     let hM =await hydMausum;

//     return [dM,hM];
// }

// utility();
