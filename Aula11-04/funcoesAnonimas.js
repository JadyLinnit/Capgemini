// função anonimas
var x = function (n1, n2){
    return n1 + n2
}

// invocar função
let z = x(50, '20')
console.log(z);

//função auto invocável
(
    function(n1, n2) {
        console.log(n1 + n2)
    }
) (20, 30);