/**
 * Created by aleksandr on 8/2/15.
 */
;(function(){
    var login = prompt("Type your login: "),
        password,
        section = document.getElementsByTagName("section")[0];
    //if login not null
    if (login){
        login = login.toLocaleLowerCase();
    }
    if (login === "admin") {
        password =  prompt("Type your password: ");
        if (password === "World director") {
            section.innerText = "Well come";
        } else {
            if (password === null) {
                section.innerText = "Request cancelled.";
            } else {
                section.innerText = "Incorrect password";
            }
        }
    } else {
        if (login === null) {
            section.innerText = "Request cancelled.";
        } else {
            section.innerText = "I dont know you.";
        }
    }
}());