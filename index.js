const  mainContainer = document.querySelector(".card-container");
const  thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const allStar = document.getElementsByClassName('star');
const rating = document.getElementById('rating');
submitButton.addEventListener("click", () => 
{
    mainContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
    setTimeout(()=>{
        mainContainer.classList.remove("hidden");
        thanksContainer.classList.add("hidden");
        allToDefaultState();
    }, 5000);
});

function allToDefaultState(){
    for (const star of allStar) {
        star.classList.remove("bg-orangeCustom");
        star.classList.add("hover:bg-gray-500");
        star.children[0].classList.remove("text-white");
    }    
}

for (const star of allStar) {
    star.addEventListener("click", () =>{
        allToDefaultState();
        star.classList.add("bg-orangeCustom");
        star.classList.remove("hover:bg-gray-500");
        star.children[0].classList.add("text-white");
        rating.innerHTML = star.children[0].innerHTML;
    });
  }