/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var paragraph = document.getElementsByTagName("p")[0],
        first =  document.querySelector("[tabindex='1']"),
        button =  document.querySelector("[type=button]"),
        i,
        sum = 0;
    // Using loop.
    function sumTo(n){
        for(i = 0; i <= +first.value; i += 1){
            sum += i;
        }
        return sum;
    };

    // Using recursion.
/*    function sumTo(n){
        var sum;
        if (n === 1) return sum;
        sum = sumTo(n-1);
    }*/

    // Using formula.
/*    function sumTo(n){
        return (1+n)/2*n;
    }*/
    button.onclick =  function(){
        paragraph.innerText =
            first.value + " = " + sumTo(+first.value);
    };
}());