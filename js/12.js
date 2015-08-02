/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var paragraph = document.getElementsByTagName("p")[0],
        first =  document.querySelector("[tabindex='1']"),
        button =  document.querySelector("[type=button]"),
        res = [0,1],
        i;

    // Using recursion.
    function fib(n){
        for( i = 2; i <= n; i += 1){
            res.push(res[i-1] + res[i-2]);
        }
        console.log(res);
        return res[n];
    };
    button.onclick =  function(){
        paragraph.innerText ="Fibonaccii number " + first.value + " = " + fib(+first.value);
        res = [0,1];
    };
}());