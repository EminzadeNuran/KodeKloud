document.querySelectorAll(".path_tags__opner").forEach((openBtn, index) => {
    const closeBtn = document.querySelectorAll(".path_tags__closer")[index];
    const tagsWrapper = document.querySelectorAll(".tags__wrapper")[index];
  
    openBtn.addEventListener("click", function () {
      tagsWrapper.classList.add("active");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
    });
  
    closeBtn.addEventListener("click", function () {
      tagsWrapper.classList.remove("active");
      openBtn.style.display = "inline-block";
      closeBtn.style.display = "none";
    });
  });
  