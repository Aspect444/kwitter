function adduser(){
    pass = document.getElementById("password").value;
    if(pass == "H@mza4321"){
        user_name = document.getElementById("user_name").value;
        localStorage.setItem("user_name", user_name); 
        window.location = "kwitter_room_2.html";
    }
    else{
        document.getElementById("password").value = "error-enter valid password"
    }
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
      keypress = e.keyCode;
      if(keypress == "13"){
            adduser();
      }
}