document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name").addEventListener("keyup", validateName);
  document.getElementById("email").addEventListener("keyup", validateEmail);
  document.getElementById("message").addEventListener("keyup", validateMessage);
  document.getElementById("subject").addEventListener("keyup", validateSubject);

  function validateName() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");

    if (name.length === 0 || name.length < 3) {
      nameError.innerHTML = "Name is required";
      return false;
    }

    if (/\d/.test(name)) {
      nameError.innerHTML = "Name cannot include numbers!";
      return false;
    }

    if (!name.match(/^[A-Za-z]+([\s][A-Za-z]+)*$/)) {
      nameError.innerHTML = "Write full name";
      return false;
    }

    nameError.innerHTML =
      '<i class="fa-solid fa-circle-check text-success"></i>';
    return true;
  }

  function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    if (email.length === 0) {
      emailError.innerHTML = "Email is required";
      return false;
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      emailError.innerHTML = "Email invalid";
      return false;
    }

    emailError.innerHTML =
      '<i class="fa-solid fa-circle-check text-success"></i>';
    return true;
  }

  function validateSubject() {
    var subject = document.getElementById("subject").value;
    var subjectError = document.getElementById("subjectError");
    var required = 15;

    if (subject.length === 0) {
      subjectError.innerHTML = "Message is required";
      return false;
    }

    if (subject.length < required) {
      subjectError.innerHTML =
        required - subject.length + " more characters required";
      return false;
    }

    subjectError.innerHTML =
      '<i class="fa-solid fa-circle-check text-success"></i>';
    return true;
  }

  function validateMessage() {
    var message = document.getElementById("message").value;
    var messageError = document.getElementById("messageError");
    var required = 30;

    if (message.length === 0) {
      messageError.innerHTML = "Message is required";
      return false;
    }

    if (message.length < required) {
      messageError.innerHTML =
        required - message.length + " more characters required";
      return false;
    }

    messageError.innerHTML =
      '<i class="fa-solid fa-circle-check text-success"></i>';
    return true;
  }


  $("#contact-form").submit((e) => {
    e.preventDefault(); // Prevent default form submission

    // Call validation functions
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    // Check if all validations pass
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Proceed with AJAX request
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbws2ANZBeoYxKbUk7SpvfxBCMbXoKm3Y00bCM550x1Yfde5b2agwQyt9QYWRcUY2mjqXg/exec",
            data: $("#contact-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                window.location.reload();
                // window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something went wrong");
            },
        });
    } else {
        alert("Please fill out all fields correctly before submitting.");
    }
});

});
