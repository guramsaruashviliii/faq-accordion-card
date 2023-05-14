const questions = document.querySelectorAll(".question");
console.log(questions);

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const arrow = question.children[1];
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains("question__active");
    if (isActive) {
      question.classList.remove("question__active");
      answer.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    } else {
      question.classList.add("question__active");
      answer.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
    }
  });
});
