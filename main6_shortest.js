//understanding global space
var a = 100;

function b()
{
    var x = 100;
}

console.log(window.a);
console.log(a);
console.log(this.a);