function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorDiv = document.getElementById("form-error");
    var sentDiv = document.getElementById("message-sent");

    errorDiv.style.display = "none";
    sentDiv.style.display = "none"; 

    if (name === "" || message === "") {
        errorDiv.innerText = "Make sure you filled the form!";
        errorDiv.style.display = "block";
        return false;
    }

    if (!isValidEmail(email)) {
        errorDiv.innerText = "Email not recognized.";
        errorDiv.style.display = "block";
        return false;
    }

    console.log("Send an email to: quan@gmail.com");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    sentDiv.style.display = "block";
    document.getElementById("contactForm").reset();

    return true;
}

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}