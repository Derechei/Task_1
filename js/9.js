/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var paragraph = document.getElementsByTagName("p")[0],
        first =  document.querySelector("[tabindex='1']"),
        second =  document.querySelector("[tabindex='2']");
    button =  document.querySelector("[type=button]");
    function pow(x,n){
        if(n === 1) return x;
        return x*pow(x, n-1);
    };
    button.onclick =  function(){
        paragraph.innerText =
            first.value + "^" +second.value +
            " = "+ pow(+first.value,+second.value);
    };
}());
