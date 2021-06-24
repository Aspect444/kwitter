//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAxG5_aFo0Fn0RyJaEZzS7PfvMC4MPPRxI",
      authDomain: "kwitter-536d5.firebaseapp.com",
      databaseURL: "https://kwitter-536d5.firebaseio.com",
      projectId: "kwitter-536d5",
      storageBucket: "kwitter-536d5.appspot.com",
      messagingSenderId: "377478977529",
      appId: "1:377478977529:web:231735edb1182307c54f28",
      measurementId: "G-L58CCM1PJM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "creating room name"
      });
      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page_3.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#&nbsp;" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page_3.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index_1.html";
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
      keypress = e.keyCode;
      if(keypress == "13"){
            addroom();
      }
}