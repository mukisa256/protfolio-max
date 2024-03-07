function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}


 const seeResumeButton = document.getElementById("seeResumeButton");
 const cv = document.querySelector(".cv")

  seeResumeButton.addEventListener("click",() =>{
    cv.style.display = cv.style.display ==="none" ? "block" : "none";
  })


  function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }