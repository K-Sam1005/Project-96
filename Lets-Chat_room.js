const firebaseConfig = {
    apiKey: "AIzaSyDkvmplWK5N86TR9qpAWZeLT4Ge0a1GHCc",
    authDomain: "lets-chat-web-app-49190.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-49190-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-49190",
    storageBucket: "lets-chat-web-app-49190.appspot.com",
    messagingSenderId: "568473159221",
    appId: "1:568473159221:web:312803237f8ad15988937c"
  };
  

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

  localStorage.setItem("Room_name", room_name);
  window.location = "Lets-chat_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room name = "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "Lets-Chat_page.html";
}



function logout(){
    localStorage.removeItem("Room_name");
    localStorage.removeItem("User_name");
    window.localStorage = "index.html";
}