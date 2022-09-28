/* 1 accessing a variable defined in global scope inside a function

function a()
{
    console.log(b);
}

var b = 10 ;
a();*/ 


/* 2 Accesiing a variable with global scope in function inside a function
function a()
{
    c();
    function c()
    {
        console.log(b);
    }
    
}

var b = 10 ;
a();


*/

/* 3 Accessing a variable with local scope in global context 

function a()
{
    var b = 10 ;
}


console.log(b); //o/ p -> b is not defined*/


function a()
{
    var b = 10 ;
    c();
    function c()
    {
        console.log(b);
    }
    
}

a();
console.log(b);
