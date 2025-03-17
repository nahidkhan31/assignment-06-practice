const showModalForDaisy = (id) => {
  //   console.log(id);

  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFetchedModal(data.data, id));
};

const showFetchedModal = (receivedData, id) => {
  console.log(receivedData);

  const { word, pronunciation, level, sentence, meaning, synonyms } =
    receivedData;
  console.log(word);

  const lessonContainer = document.getElementById("modal-container");

  const div = document.createElement("div");
  div.innerHTML = `
  
   <dialog id="${id}" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
         <div class="flex flex-col ">
      
        <div>
        <h3 class="text-xl font-bold">${word} (${pronunciation})</h3>
        </div>
  
        <div>
        <p class="text-xl font-bold"">Meaning</p>
         <p class="text-lg">${meaning}</p>
        </div>
  
        <div>
       <h4 class="text-xl font-bold"">Example</h4>
         <p class="text-lg">${sentence}</p>
        </div>
  
        <div>
       ${
         synonyms ? (
           <h4 class="text-xl font-bold">synonyms</h4>
         ) : (
           "no synonyms for this one"
         )
       }
      ${
        synonyms ? (
          <button class="btn ">${synonyms}</button>
        ) : (
          "sorry no synonyms found"
        )
      }
         <p class="py-4 text-lg"></p>
        </div>
  
        </div>
         <div class="modal-action">
           <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
             <button class="btn btn-primary">complete learning</button>
          </form>
         </div>
     </div>
    </dialog>
  
    `;
  lessonContainer.appendChild(div);
  document.getElementById(id).showModal();
};
// {word: 'Eager', meaning: 'আগ্রহী', pronunciation: 'ইগার', level: 1, sentence: 'The kids were eager to open their gifts.', …}
