user_name = localStorage.getItem("User_name");
room_name = localStorage.getItem("Room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}