const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  console.log('잘 됩니까?')
})


function onClick(){
  console.log("클릭버튼을 누름")
}
