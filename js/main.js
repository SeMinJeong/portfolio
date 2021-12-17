function openNav() {
  if (window.matchMedia("(min-width:480px)").matches) {
    document.getElementById("sideBar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("toggleBtn").style.opacity = "0";
    document.body.style.overflowX = "hidden"
  } else {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("toggleBtn").style.opacity = "0";
    document.body.style.overflowX = "hidden"
  }
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("toggleBtn").style.opacity = "1";
}
