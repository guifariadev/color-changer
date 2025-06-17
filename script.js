const colors = document.querySelectorAll(".color-box");
colors.forEach(eachColor => {
  eachColor.addEventListener('click', ()=>{
    document.body.style.backgroundColor =
    getComputedStyle(eachColor).backgroundColor;
  })
});

