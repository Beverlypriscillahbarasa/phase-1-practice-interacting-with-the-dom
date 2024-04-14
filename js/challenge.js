const timerId = document.getElementById( " counter");
const likedlist = document.getElementsByClassName("likes")[1];
const increasesCounterByoneEverySecond = ( ) => {
    var timer = timerId;
    timer.innerText = Math.round(Math.random(2));
    console.log(timer.innerText);
  };
const substractOnefromtheCounter = ()=> {
  timerId.innerText = parseInt( timerId.innerText)-1;
};

const addOnefromtheCounter = ()=> {
  timerId.innerText = parseInt( timerId.innerText)+1;
};
const runinterval = setInterval(addoneToTheCounter,1000);
const pauseIncremant = ()=> {
  clearInterval(runinterval);
};
const addlike = ()=> {
  let activeNumber =parseInt (timerid.innerText);
  const newLikedNumber = document.createElement("li");
  newLikedNumber.classList.add("list-group-item");
  newLikedNumber.textContent = activeNumber + "❤️";
  likedlist.appendChild(newLikedNumber);
};
function submitComment(event){
  event.preventDefault();
    const commentform =document.getElementById("comment-form");
    const commentinput =document.getElementById("comment-Input");
    const commentValue = commentInput.value.trim();
    if (!commentValue) {
      alert( "Please enter a comment before submitting.");
      return ;
    }
    const listElement = document.getElementById("list");
    const newListItem = document.createElement("li");
    newListItem.textContent = commentValue;
    listElement.appendChild(newListItem);
    commentInput.value = "";
}
const submitButtom = document.getElementById( "submit");
submitButtom.addEventListener( "click, submitComment");