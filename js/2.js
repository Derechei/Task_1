/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var digit = parseInt(prompt("Input positive or negative digit")),
        section = document.getElementsByTagName("section")[0];
    if(digit > 0){
        alert(1);
    } else {
        if( digit < 0){
            alert(-1);
        } else {
            alert(0);
        }
    }
}());