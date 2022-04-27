/* Opening Form */
document.querySelector(".mess").addEventListener("click", openForm);

function openForm() {
  document.querySelector(".hideform").style.display = "block"; //querySelector() makes changes in the object while getElement.... only gets the elements.
  //alert("Form opened");
}

/* Closing Form */
document.querySelector(".close").addEventListener("click", closeForm);

function closeForm() {
  document.querySelector(".hideform").style.display = "none";
  //alert("Form closed");
}

/* jQuery */
// These javascript files are to be converted into jQuery.
