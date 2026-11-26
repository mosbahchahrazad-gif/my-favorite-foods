function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {

        alert("Please enter your username and password!");

    } else {

        sessionStorage.setItem("username", username);

        window.location.href = "home.html?name=" + encodeURIComponent(username);

    }

}