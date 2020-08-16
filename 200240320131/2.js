function validation() {
    var user = document.querySelector("#user").value;
    var pas = document.querySelector("#pass").value;
    var con = document.querySelector("#conpass").value;

    /**validation */
    if (user == "") {
        document.querySelector("#u1").innerHTML = "** please dont leave blank";
        return false;
    }
    if (pas == "") {
        document.querySelector("#p1").innerHTML = "** please dont leave blank";
        return false;
    }
    if (pas != con) {
        document.querySelector("#c1").innerHTML = "** password dont match";
        return false;
    }


    let neweleuser = document.createElement("div");
    neweleuser.innerHTML = user;

    neweleuser.style.color = " black";
    neweleuser.style.background = "yellow";

    let commentbox = document.querySelector("#commentbox");
    //commentbox.insertBefore(neweleuser, commentbox.firstChild);
    commentbox.appendChild(neweleuser);



    /**clearig value */
    document.querySelector("#user").value = "";
    document.querySelector("#pass").value = "";
    document.querySelector("#conpass").value = "";


}