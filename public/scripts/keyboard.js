// var textarea = document.getElementById("input-text");
// textarea.addEventListener("click", openKeyboard);


// function openKeyboard() {
//     $('input-text').keyboard();
//   }
  
var textarea = document.getElementById("#input-text");

textarea.addEventListener("click", function() {
  openKeyboard();
});

function openKeyboard() {
   // Create an instance of the Google IME API
   var ime = new google.ime.InputMethodEditor();

   // Call the activate() method to activate the On-Screen Keyboard
   ime.activate(["transliteration"], function() {
     ime.setLanguage("en");
     ime.setOnStateChangeHandler(function(isOn) {
       if (isOn) {
         // The On-Screen Keyboard is now active
       } else {
         // The On-Screen Keyboard is no longer active
       }
     });
   });
 }