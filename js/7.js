/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var min= 2,
        max= 100,
        i,
        j,
        temp = [],
        result = [],
        section = document.getElementsByTagName("section")[0];

    for(i = min; i <= max; i+=1){
        for(j = min; j <= max; j+=1){
            // Pushing all values that's devide's without remainder.
            if(i % j === 0){
                temp.push(j);
            }
        }
        // If There is only one element in array that is "natural digit"
        if(temp.length === 1){
            // Pushing to result.
            result.push(temp[0]);
        };
        temp = [];
    }
    section.innerHTML = result.join(", ");
}());
