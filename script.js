var questions = document.getElementsByClassName("question");

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answers = this.nextElementSibling;
    if (answers.style.maxHeight) {
      answers.style.maxHeight = null;
    } else {
      answers.style.maxHeight = answers.scrollHeight + "px";
    } 
  });
}