// button section....
function loadButton() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => showButton(data.data));
}

function showButton(data) {
  //   console.log(data);
  const category = document.getElementById("category");
  for (let cat of data) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="lesson-${cat.level_no}" onclick="loadData('${cat.level_no}')" class="btn border-blue-700 text-[#422AD5] font-bold hover:bg-blue-300 mt-3"><img src="assets/fa-book-open.png"/>Lesson-${cat.level_no} </button>
    `;
    category.appendChild(div);

    // add event listener
    const btn = document.getElementById(`lesson-${cat.level_no}`);
    btn.addEventListener("click", function (event) {
      event.preventDefault;
      document.getElementById("bbc").style.display = "none";
      // if (btn === 0) {
      //   makeHide("lesson");
      // }
    });
  }
}

// banner section.....
const loadData = async (id) => {
  //   console.log(id);
  document.getElementById("lesson").style.display = "none";
  document.getElementById("card2").style.display = "block";
  makeShow("spinner");

  const response = await fetch(
    `https://openapi.programming-hero.com/api/level/${id}`
  );

  removeActiveClass();
  const clickedButton = document.getElementById(`lesson-${id}`);
  clickedButton.classList.add("active");
  // console.log(clickedButton);

  const data = await response.json();
  if (data.data) {
    displayShow(data.data);
    makeHide("spinner");
  }
};

const displayShow = (cards) => {
  //   console.log(cards);

  if (cards.length == 0) {
    document.getElementById("card2").style.display = "none";
    document.getElementById("lesson").style.display = "block";
  }

  cards.forEach((card) => {
    // console.log(card);
    const cardContainer = document.getElementById("card");
    cardContainer.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="bg-white shadow-sm p-3 rounded-md">
            <div class="text-center">
              <h1 class="text-xl text-black font-bold">${card.word}</h1>
              <p class="text-gray-500 mt-3">Meaning / Pronounciation</p>
              <h1 class="text-xl text-black font-bold mt-3">"${card.meaning} / ${card.pronunciation}"</h1>
            </div>
            <div class="flex justify-between">
              <button id="worldBtn" class="btn">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button id="btn" class="btn">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>
    `;
    cardContainer.appendChild(div);

    const clickedButton2 = document.getElementById("btn");
    clickedButton2.addEventListener("click", function (event) {
      event.preventDefault;
      let pronounce = new SpeechSynthesisUtterance(`${card.word}`);
      pronounce.lang = "en-US";
      speechSynthesis.speak(pronounce);
    });
  });
};

const makeHide = (id) => {
  document.getElementById(id).style.display = "none";
};

const makeShow = (id) => {
  document.getElementById(id).style.display = "block";
};
function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}

loadButton();
loadData();
