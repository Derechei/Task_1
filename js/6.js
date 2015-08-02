/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var age;
    // with for
    /*for(;;){
        age =  prompt("Type digit bigger than 100");
        if (+age > 100 || age == null) {
            break;
        }
    }*/

    // with do
    do {
        age =  prompt("Type digit bigger than 100");
    } while (age <= 100 && age !== null);

    // with while
    /*age =  prompt("Type digit bigger than 100");
    while(age <= 100 && age !== null) {
        age =  prompt("Type digit bigger than 100");
    }*/
}());