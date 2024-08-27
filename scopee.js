
function a(){
    var d = 20;
    c();
    function c(){
        console.log(d);
    }
}
var b = 10;
a();
// console.log(d);