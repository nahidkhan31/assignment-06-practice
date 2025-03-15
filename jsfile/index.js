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
    <button onclick="loadData('${cat.level_no}')" class="btn border-blue-700 text-[#422AD5] font-bold hover:bg-blue-300 mt-3"><img src="assets/fa-book-open.png"/>Lesson-${cat.level_no} </button>
    `;
    category.appendChild(div);
  }
}

// banner section.....
const loadData = async (id) => {
  //   console.log(id);
  document.getElementById("lesson").style.display = "none";
  document.getElementById("card2").style.display = "block";

  const response = await fetch(
    `https://openapi.programming-hero.com/api/level/${id}`
  );
  const data = await response.json();
  displayShow(data.data);
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
    // cardContainer.innerHTML = ``;
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="bg-white shadow-sm p-3 rounded-md">
            <div class="text-center">
              <h1 class="text-xl text-black font-bold">${card.word}</h1>
              <p class="text-gray-500 mt-3">Meaning / Pronounciation</p>
              <h1 class="text-xl text-black font-bold mt-3">"${card.meaning} / ${card.pronunciation}"</h1>
            </div>
            <div class="flex justify-between">
              <button class="btn">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button class="btn">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>
    `;
    cardContainer.appendChild(div);
  });
};

loadButton();
loadData();
