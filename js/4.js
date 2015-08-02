/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var section = document.getElementsByTagName("section")[0],
        age = prompt("Type your age");
    if (age>=18 && age<=65){
        section.innerText = "INSIDE";
    } else {
        section.innerText = "OUTSIDE";
    }
}());