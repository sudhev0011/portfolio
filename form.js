// function validateForm() {
//   let valid = true;

//   // Get form field values
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const subject = document.getElementById("subject").value.trim();
//   const message = document.getElementById("message").value.trim();

//   // Error elements
//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   const subjectError = document.getElementById("subjectError");
//   const messageError = document.getElementById("messageError");

//   // Reset errors
//   nameError.innerText = "";
//   emailError.innerText = "";
//   subjectError.innerText = "";
//   messageError.innerText = "";

//   // Validate Name
//   if (name.length < 3 || /\d/.test(name)) {
//     nameError.innerText = "Name must be at least 3 characters and contain no numbers.";
//     valid = false;
//   }

//   // Validate Email
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     emailError.innerText = "Please enter a valid email address.";
//     valid = false;
//   }

//   // Validate Subject
//   if (subject === "") {
//     subjectError.innerText = "Please enter a subject.";
//     valid = false;
//   }

//   // Validate Message
//   if (message === "") {
//     messageError.innerText = "Please enter a message.";
//     valid = false;
//   }

//   // Return the validity of the form
//   return valid;
// }

// var nameError = document.getElementById('nameError');
// var phoneError = document.getElementById('phoneError');
// var emailError = document.getElementById('emailError');
// var messageError = document.getElementById('subjectError');
// var submitError = document.getElementById('submiterror');

// function validateName() {
//     var name = document.getElementById('name').value;
//     if (name.length === 0) {
//         nameError.innerHTML = 'Name is required';
//         return false;
//     }
//     if (/\d+/.test(nameField)) {
//         nameError.innerHTMl= "Name cannot include numbers!";
//       }
//     if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
//         nameError.innerHTML = 'Write full name';
//         return false;
//     }
//     nameError.innerHTML = '<i id="tick-error" class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validateEmail() {
//     var email = document.getElementById('email').value;
//     if (email.length === 0) {
//         emailError.innerHTML = 'Email is required';
//         return false;
//     }
//     if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
//         emailError.innerHTML = 'Email invalid';
//         return false;
//     }
//     emailError.innerHTML = '<i id="tick-error" class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validateNumber(){
//     var phone = document.getElementById('contact-phone').value;

//     if(phone.length === 0){
//         phoneError.innerHTML = 'Phone no is required';
//         return false;
//     }
//     if(phone.length !== 10){
//         phoneError.innerHTML = 'Phone no should be 10 digits';
//         return false;
//     }
//     if(!phone.match(/^[0-9]{10}$/)){
//         phoneError.innerHTML = '10 Digits only';
//         return false;
//     }

//     phoneError.innerHTML = '<i id="tick-error" class="fas fa-check-circle"></i>';
//     return true;
// }

// function validateMessage() {
//     var message = document.getElementById('subject').value;
//     var required = 15;
//     var left = required - message.length;
//     if (left > 0) {
//         messageError.innerHTML = left + ' more characters required';
//         return false;
//     }
//     messageError.innerHTML = '<i id="tick-error" style="color:green;" class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validateForm() {
//     if (!validateName() || !validateEmail() || !validateMessage()) {
//         submitError.innerHTML = 'Please fill all fields correctly and submit';
//        alert("Enter the field correctly!")
//         setTimeout(function() { submitError.innerHTML = ''; }, 3000);
//         return false;
//     }
//     submitError.innerHTML = '<i id="tick-error" class="fa-solid style="color:green;" fa-circle-check"></i> Form submitted successfully';
//     return true;
// }

// Add event listeners to input fields for real-time validation
document.getElementById("name").addEventListener("keyup", validateName);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("message").addEventListener("keyup", validateMessage);
document.getElementById("subject").addEventListener("keyup", validateSubject);

function validateName() {
  var name = document.getElementById("name").value;
  var nameError = document.getElementById("nameError");

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (/\d/.test(name)) {
    // Fixed number checking
    nameError.innerHTML = "Name cannot include numbers!";
    return false;
  }

  if (!name.match(/^[A-Za-z]+([\s][A-Za-z]+)*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i>';
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
