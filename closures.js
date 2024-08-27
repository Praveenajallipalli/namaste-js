
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
//     a=100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

function z(){
    var b =900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
        c();
    }
    function c(){
        var d =10;
        console.log(b,d);
    }
    x();
    c();
}
z();
















// function outerFunction(outerVar) {
//     return function innerFunction(innerVar) {
//         console.log('Outer variable:', outerVar);
//         console.log('Inner variable:', innerVar);
//     };
// }

// const closure = outerFunction('I am outer!');
// closure('I am inner!');

// function createCounter() {
//     let count = 0;
    
//     return function() {
//         count += 1;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
