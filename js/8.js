/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var paragraph = document.getElementsByTagName("p")[0],
        first =  document.querySelector("[tabindex='1']"),
        second =  document.querySelector("[tabindex='2']");
        button =  document.querySelector("[type=button]");
    function min(a,b){
        if (a < b) {
            return a;
        } else {
            return b;
        }
    };
    button.onclick =  function(){
        paragraph.innerText = "Minimum value: " + min(+first.value,+second.value);
    };
}());