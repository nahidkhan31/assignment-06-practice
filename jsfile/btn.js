// question section..........
makeHide("spinner");
makeHide("card2");
document.getElementById("faqBtn").addEventListener("click", function () {
  document.getElementById("frequent").scrollIntoView({
    behavior: "smooth",
  });
});

// vocabulary............
document.getElementById("learn").addEventListener("click", function () {
  document.getElementById("vocabulary").scrollIntoView({
    behavior: "smooth",
  });
});

// login.........
document.getElementById("startBtn").addEventListener("click", function () {
  let password = document.getElementById("pass").value;
  let hide1 = document.getElementById("nav");
  let hide2 = document.getElementById("vocabulary");
  let hide3 = document.getElementById("lesson");
  let hide4 = document.getElementById("card2");
  let hide5 = document.getElementById("frequent");
  let hide6 = document.getElementById("lesson2");
  let hide7 = document.getElementById("vocabulary2");
  makeHide("lesson");
  makeHide("spinner");

  if (password === "123456") {
    my_modal_5.showModal();
    hide1.classList.remove("hidden");
    hide2.classList.remove("hidden");
    hide3.classList.remove("hidden");
    hide4.classList.remove("hidden");
    hide5.classList.remove("hidden");
    hide6.classList.remove("hidden");
    hide7.classList.remove("hidden");
    // document.getElementById("banner").style.display = "none";
    makeHide("banner");
  } else {
    alert("please inter pass:123456");
  }
});

// logout section......
document.getElementById("logout").addEventListener("click", function () {
  makeHide("vocabulary");
  makeHide("lesson");
  makeHide("card2");
  makeHide("vocabulary2");
  makeHide("frequent");
  makeHide("nav");
  makeShow("banner");
  alert("successfully logout");
});
