/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var age;
    // With for loop.
    /*for(;;){
        age =  prompt("Type digit bigger than 100");
        if (+age > 100 || age == null) {
            break;
        }
    }*/

    // With do loop.
    do {
        age =  prompt("Type digit bigger than 100");
    } while (age <= 100 && age !== null);

    // With while loop.
    /*age =  prompt("Type digit bigger than 100");
    while(age <= 100 && age !== null) {
        age =  prompt("Type digit bigger than 100");
    }*/
}());