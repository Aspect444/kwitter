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
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
      //content has been sent to the database
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['msg'];
                        like = message_data['like'];
                        row = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>" + message + "</h4><button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index_1.html";
}

function back() {
      window.location("kwitter_room_2.html");
}

function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number);
      firebase.database().ref(room_name).child(message_id).update({
            like: likes_in_number
      });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
      keypress = e.keyCode;
      if(keypress == "13"){
            send();
      }
}