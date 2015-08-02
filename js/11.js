/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var paragraph = document.getElementsByTagName("p")[0],
        first =  document.querySelector("[tabindex='1']"),
        button =  document.querySelector("[type=button]");

    // Using recursion.
    function factorial(n){
        if (n === 1) return 1;
        return n*factorial(n-1);
    };
    button.onclick =  function(){
        paragraph.innerText ="Factorial of " + first.value + " = " + factorial(+first.value);
    };
}());