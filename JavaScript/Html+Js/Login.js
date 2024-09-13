function handleSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerHTML = "Both fields are required.";
    } else {
        console.log("Username: " + username);
        console.log("Password: " + password);
    }
}
