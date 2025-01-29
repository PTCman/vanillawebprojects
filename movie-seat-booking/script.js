const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

updateUI();

let ticketPrice = parseInt(movieSelect.value);


function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function setData(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const indexSeat = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  
  localStorage.setItem('selectedSeats', JSON.stringify(indexSeat));

  const selectedSeatsCount = indexSeat.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

function updateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index)=>{
      console.log(selectedSeats.indexOf(index))
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

movieSelect.addEventListener('change', ()=>{
  ticketPrice = parseInt(movieSelect.value);
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
  setData();
});

container.addEventListener('click', (e)=>{
  if(e.target.classList.contains('seat') 
    && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
      setData();
  }
});
setData();