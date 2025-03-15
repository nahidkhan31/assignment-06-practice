document.getElementById("faqBtn").addEventListener("click", function () {
  document.getElementById("frequent").scrollIntoView({
    behavior: "smooth",
  });
});

// vocabulary
document.getElementById("learn").addEventListener("click", function () {
  document.getElementById("vocabulary").scrollIntoView({
    behavior: "smooth",
  });
});

// login...
document.getElementById("startBtn").addEventListener("click", function () {
  let password = document.getElementById("pass").value;
  let hide1 = document.getElementById("nav");
  let hide2 = document.getElementById("vocabulary");
  let hide3 = document.getElementById("lesson");
  let hide4 = document.getElementById("card2");
  let hide5 = document.getElementById("frequent");
  // let hide6 = document.getElementById("footer");
  let hide7 = document.getElementById("vocabulary2");

  if (password === "123456") {
    alert("Congratulations successfully login");
    hide1.classList.remove("hidden");
    hide2.classList.remove("hidden");
    hide3.classList.remove("hidden");
    hide4.classList.remove("hidden");
    hide5.classList.remove("hidden");
    // hide6.classList.remove("hidden");
    hide7.classList.remove("hidden");
    document.getElementById("banner").style.display = "none";
  } else {
    alert("please inter pass:123456");
  }
});
