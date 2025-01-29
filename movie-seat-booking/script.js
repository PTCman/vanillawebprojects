/**
 * 1. 클릭하면 색깔이 바뀐다.
 * 2. selected 된 걸 계산한다.
 */
const movieSelected = document.getElementById('movie');
const countSpan = document.getElementById('count');
const totalSpan = document.getElementById('total');
let seatCount = 0;
let moviePrice = parseInt(movieSelected.value);
let totalPrice = 0;



function updateUI(){
  totalPrice = seatCount * moviePrice;
  countSpan.innerText = seatCount;
  totalSpan.innerText = totalPrice;
}


document.querySelector('#movie').addEventListener('change', (e)=>{
  moviePrice = parseInt(e.target.value);

  updateUI()
});

document.querySelector('.container').addEventListener('click', (e)=>{
  if(e.target.className === 'seat'){
    e.target.className = 'seat selected';
    seatCount += 1;
    updateUI();

  } else if(e.target.className === 'seat selected'){
    e.target.className = 'seat';
    seatCount -= 1;
    updateUI();
  }
});
