
// Fire base scrip

  // Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
    apiKey: "AIzaSyDfocdjCn2ofVTfO5BGgOYfXYI3NPl3ZWA",
    authDomain: "mental-health-f61d9.firebaseapp.com",
    databaseURL: "https://mental-health-f61d9-default-rtdb.firebaseio.com",
    projectId: "mental-health-f61d9",
    storageBucket: "mental-health-f61d9.firebasestorage.app",
    messagingSenderId: "371324196937",
    appId: "1:371324196937:web:e7f3b3aac46946b42e0798",
    measurementId: "G-FFMZ0CV4N5"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref("UserData");

  // Listen for form submit
  document
    .getElementById("contactForm")
    .addEventListener("submit", submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var age = getInputVal("age");
    var email = getInputVal("email");
    var country = getInputVal("country");

    // Save message
    saveMessage(name, email, age, country);

    // Show alert


    // Hide alert after 3 seconds
    /*setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, Infinity);*/

    // Clear form
    document.getElementById("contactForm").reset();
  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email, age, country) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      age: age,
      country: country,
    });
  }

  