function addUser(){
    var user_name = document.getElementById("user_name_input").value;

    localStorage.setItem("User_name", user_name);

    window.location = "Lets-Chat_room.html";
}